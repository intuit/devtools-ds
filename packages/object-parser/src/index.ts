export interface AST {
  /** Current object key */
  key: string;
  /** Current depth */
  depth: number;

  /** The parent node of the current one */
  parent: AST | undefined;
}

interface ASTChildren {
  /** Children */
  children: DeferredNode[];
  /** Whether it's an Object prototype */
  isPrototype?: true;
}

/** A type to describe objects with all deferred children loaded */
interface ASTResolvedChildren {
  /** Children */
  children: ASTNode[];
  /** Whether it's an Object prototype */
  isPrototype?: true;
}

export type DeferredNode = () => Promise<ASTNode>;

// Object
export interface ASTObject extends AST, ASTChildren {
  /** Type */
  type: "object";
  /** Value */
  value: object;
}

export interface ResolvedASTObject extends AST, ASTResolvedChildren {
  /** Type */
  type: "object";
  /** Value */
  value: object;
}

// Array
export interface ASTArray extends AST, ASTChildren {
  /** Type */
  type: "array";
  /** Value */
  value: any[];
}

export interface ResolvedASTArray extends AST, ASTResolvedChildren {
  /** Type */
  type: "array";
  /** Value */
  value: any[];
}

// Function
export interface ASTFunction extends AST, ASTChildren {
  /** Type */
  type: "function";
  /** Value */
  value: Function;
}

export interface ResolvedASTFunction extends AST, ASTResolvedChildren {
  /** Type */
  type: "function";
  /** Value */
  value: Function;
}

// Promise
export type PromiseState = "pending" | "fulfilled" | "rejected";

export interface ASTPromise extends AST, ASTChildren {
  /** Type */
  type: "promise";
  /** Value */
  value: Promise<any>;
}

export interface ResolvedASTPromise extends AST, ASTResolvedChildren {
  /** Type */
  type: "promise";
  /** Value */
  value: Promise<any>;
}

// Map
export interface ASTMap extends AST, ASTChildren {
  /** Type */
  type: "map";
  /** Value */
  value: Map<any, any>;
}

export interface ResolvedASTMap extends AST, ASTResolvedChildren {
  /** Type */
  type: "map";
  /** Value */
  value: Map<any, any>;
}

// Set
export interface ASTSet extends AST, ASTChildren {
  /** Type */
  type: "set";
  /** Value */
  value: Set<any>;
}

//
export interface ResolvedASTSet extends AST, ASTResolvedChildren {
  /** Type */
  type: "set";
  /** Value */
  value: Set<any>;
}

// Leaf Values
export interface ASTValue extends AST {
  /** Type */
  type: "value";
  /** Value */
  value:
    | boolean
    | null
    | number
    | BigInt
    | string
    | symbol
    | undefined
    | Date
    | RegExp
    | Error
    | WeakMap<any, any>
    | WeakSet<any>
    | Promise<any>;
  /** It's not a prototype */
  isPrototype?: false;
}

export type SupportedTypes =
  | boolean
  | null
  | number
  | string
  | Error
  | symbol
  | undefined
  | Date
  | RegExp
  | object
  | Map<any, any>
  | WeakMap<any, any>
  | Set<any>
  | WeakSet<any>
  | Promise<any>
  | any[]
  | Function;

export type ObjectTypes =
  | "object"
  | "function"
  | "array"
  | "promise"
  | "map"
  | "set";

export type ASTNode =
  | ASTObject
  | ASTArray
  | ASTFunction
  | ASTPromise
  | ASTMap
  | ASTSet
  | ASTValue;

export type ResolvedASTNode =
  | ResolvedASTObject
  | ResolvedASTArray
  | ResolvedASTFunction
  | ResolvedASTPromise
  | ResolvedASTMap
  | ResolvedASTSet;

/**
 * Determine if the current object is an array.
 */
const isArray = (val: object): boolean => {
  return (
    Array.isArray(val) ||
    // Detect https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays
    (ArrayBuffer.isView(val) && !(val instanceof DataView))
  );
};

/**
 * Determine if a given value is a true javascript object.
 * Ignore Objects that we know how to display as values.
 *
 * @param val - The current object
 */
export const isObject = (val: object): boolean => {
  return (
    val !== null &&
    typeof val === "object" &&
    !isArray(val) &&
    !(val instanceof Date) &&
    !(val instanceof RegExp) &&
    !(val instanceof Error) &&
    !(val instanceof WeakMap) &&
    !(val instanceof WeakSet)
  );
};

/** Check for objects we know how to enumerate */
export const isKnownObject = (val: object): boolean => {
  return (
    isObject(val) ||
    isArray(val) ||
    typeof val === "function" ||
    val instanceof Promise
  );
};

/**
 * Get the current state of a promise, and return a result if fulfilled
 *
 * @param promise - A promise to inspect
 */
export const getPromiseState = (
  promise: Promise<any>
): Promise<["pending"] | ["rejected", any] | ["fulfilled", any]> => {
  // Symbols and RegExps are never content-equal
  const unique = /unique/;

  return Promise.race([promise, unique]).then(
    (result) => (result === unique ? ["pending"] : ["fulfilled", result]),
    (e) => ["rejected", e]
  );
};

/**
 * Build the AST recursively
 *
 * @param key - Current node key
 * @param value - Current node value
 * @param depth - Current tree depth
 * @param sortKeys - Whether to sort the keys
 */
const buildAST = async (
  key: string,
  value: any,
  depth: number,
  sortKeys: boolean,
  isPrototype?: true,
  showPrototype?: boolean
): Promise<ASTNode> => {
  const astNode = {
    key,
    depth,
    value,
    type: "value",
    parent: undefined,
  };

  if (value && isKnownObject(value) && depth < 100) {
    const children = [];
    let t: ObjectTypes = "object";

    // Build Array
    if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        children.push(async () => {
          const child = await buildAST(
            i.toString(),
            value[i],
            depth + 1,
            sortKeys
          );
          child.parent = astNode;
          return child;
        });
      }

      t = "array";
    } else {
      // Get Object Properties
      const keys = Object.getOwnPropertyNames(value);
      if (sortKeys) keys.sort();
      for (let i = 0; i < keys.length; i++) {
        let safeValue: any;
        try {
          safeValue = value[keys[i]];
        } catch (e) {}

        children.push(async () => {
          const child = await buildAST(keys[i], safeValue, depth + 1, sortKeys);
          child.parent = astNode;
          return child;
        });
      }

      // Change Type for Function
      if (typeof value === "function") {
        t = "function";
      }

      // Handle Promises
      if (value instanceof Promise) {
        const [status, result] = await getPromiseState(value);
        children.push(async () => {
          const child = await buildAST("<state>", status, depth + 1, sortKeys);
          child.parent = astNode;
          return child;
        });
        if (status !== "pending") {
          children.push(async () => {
            const child = await buildAST(
              "<value>",
              result,
              depth + 1,
              sortKeys
            );
            child.parent = astNode;
            return child;
          });
        }

        t = "promise";
      }

      // Handle Maps
      if (value instanceof Map) {
        const entries = Array.from(value.entries());
        const parsedEntries = entries.map((entry) => {
          const [entryKey, entryValue] = entry;
          return {
            "<key>": entryKey,
            "<value>": entryValue,
          };
        });
        children.push(async () => {
          const child = await buildAST(
            "<entries>",
            parsedEntries,
            depth + 1,
            sortKeys
          );
          child.parent = astNode;
          return child;
        });
        children.push(async () => {
          const child = await buildAST("size", value.size, depth + 1, sortKeys);
          child.parent = astNode;
          return child;
        });
        t = "map";
      }

      // Handle Sets
      if (value instanceof Set) {
        const entries = Array.from(value.entries());
        const parsedEntries = entries.map((entry) => {
          return entry[1];
        });
        children.push(async () => {
          const child = await buildAST(
            "<entries>",
            parsedEntries,
            depth + 1,
            sortKeys
          );
          child.parent = astNode;
          return child;
        });
        children.push(async () => {
          const child = await buildAST("size", value.size, depth + 1, sortKeys);
          child.parent = astNode;
          return child;
        });
        t = "set";
      }
    }

    // Handle Object Prototypes
    if (value !== Object.prototype && showPrototype) {
      children.push(async () => {
        const child = await buildAST(
          "<prototype>",
          Object.getPrototypeOf(value),
          depth + 1,
          sortKeys,
          true
        );
        child.parent = astNode;
        return child;
      });
    }

    astNode.type = t;
    ((astNode as any) as ASTChildren).children = children;
    ((astNode as any) as ASTChildren).isPrototype = isPrototype;
  }

  return astNode as ASTNode;
};

/**
 * Parse an object in to an AST.
 *
 * @param data - Object to parse.
 */
export const parse = (
  data: SupportedTypes,
  sortKeys?: boolean,
  includePrototypes?: boolean
) => {
  const keys = sortKeys === false ? sortKeys : true;
  const prototypes = includePrototypes === false ? includePrototypes : true;
  return buildAST("root", data, 0, keys, undefined, prototypes);
};

export default parse;
