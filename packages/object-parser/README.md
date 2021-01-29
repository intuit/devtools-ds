# @devtools-ds/object-parser

Object parser is a utility used by the the `Object Inspector` package, which creates a JSON tree structure with node types that help simplify the JavaScript type system. It also uses TypeScript to make logic around using the tree strongly typed.

If you plan on using this, I recommend looking at the type definitions for the best description of how it formats.

The current supported types are:

```ts
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
```

## Installation

```sh
npm i @devtools-ds/object-parser
# or with yarn
yarn add @devtools-ds/object-parser
```

## Usage

```js
import parse from "@devtools-ds/object-parser";

const data = { foo: "bar" };
const sortKeys = true;
const result = await parse(data, sortKeys);
```

## FAQ

### Why is it asynchronous?

Unfortunately, the parser has to be asynchronous in order to support Promises. From what I can find, there is [no good way](https://stackoverflow.com/questions/30564053/how-can-i-synchronously-determine-a-javascript-promises-state) to inspect a promise synchronously. In the browser devtools they have access to the full Javascript engine.

### Why do children return a function?

This parser is in service to building a UI, which needs to be responsive. In deeply nested objects, we want to avoid having to parse everything before we can render the top node. To stop this, the parser only evaluates the current node, and then returns functions so that you can get the children on demand. For example, when you are expanding a tree view.
