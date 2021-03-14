import React, { useState, useEffect } from "react";
import makeClass from "clsx";
import { ThemeableElement, useTheme } from "@devtools-ds/themes";
import { ASTNode, isObject, getPromiseState } from "@devtools-ds/object-parser";
import styles from "./ObjectInspector.css";
import { ObjectInspectorContext } from "./Context";

interface ObjectValueProps extends ThemeableElement<"span"> {
  /** Type of object. */
  ast: ASTNode;
  /** Whether or not to show the key */
  showKey: boolean;
}

/**
 * Build the key and value spans
 *
 * @param key - The key string
 * @param value - The value string
 * @param valueClass - The class to apply to the value
 * @param showKey - Whether or not to show the key with the value
 * @param name - The name if the value is the root
 * @param depth - Current depth (so we don't put a key on root)
 */
const buildValue = (
  key: string,
  value: React.ReactNode,
  valueClass: string,
  showKey: boolean,
  name: string,
  depth: number
) => {
  let computedKey = key.includes("-") ? `"${key}"` : key;
  const isRoot = depth <= 0;
  if (isRoot && name) computedKey = name;
  return (
    <span className={styles.text}>
      {(!isRoot || name) && showKey && (
        <>
          <span className={styles.key}>{computedKey}</span>
          <span>:&nbsp;</span>
        </>
      )}

      <span className={valueClass}>{value}</span>
    </span>
  );
};

/** Display a leaf key-value pair with appropriate styles. */
export const ObjectValue = (props: ObjectValueProps) => {
  const context = React.useContext(ObjectInspectorContext);
  const name = context?.name || "";
  const { ast, theme, showKey, colorScheme, className, ...html } = props;
  const { themeClass } = useTheme({ theme, colorScheme }, styles);
  const [asyncValue, setAsyncValue] = useState(<span />);
  let value = <span />;

  /** Handle async types once */
  useEffect(() => {
    if (ast.value instanceof Promise) {
      /** Async function to wait for Promise.race */
      const waitForPromiseResult = async (promise: Promise<any>) => {
        setAsyncValue(
          buildValue(
            ast.key,
            `Promise { "${await getPromiseState(promise)}" }`,
            styles.key,
            showKey,
            name,
            ast.depth
          )
        );
      };

      waitForPromiseResult(ast.value);
    }
  }, [ast, showKey]);

  if (typeof ast.value === "number" || typeof ast.value === "bigint") {
    // Number
    value = buildValue(
      ast.key,
      String(ast.value),
      styles.number,
      showKey,
      name,
      ast.depth
    );
  } else if (typeof ast.value === "boolean") {
    // Boolean
    value = buildValue(
      ast.key,
      String(ast.value),
      styles.boolean,
      showKey,
      name,
      ast.depth
    );
  } else if (typeof ast.value === "string") {
    // String
    value = buildValue(
      ast.key,
      `"${ast.value}"`,
      styles.string,
      showKey,
      name,
      ast.depth
    );
  } else if (typeof ast.value === "undefined") {
    // Undefined
    value = buildValue(
      ast.key,
      "undefined",
      styles.undefined,
      showKey,
      name,
      ast.depth
    );
  } else if (typeof ast.value === "symbol") {
    // Symbol
    value = buildValue(
      ast.key,
      ast.value.toString(),
      styles.string,
      showKey,
      name,
      ast.depth
    );
  } else if (typeof ast.value === "function") {
    // Function
    value = buildValue(
      ast.key,
      `${ast.value.name}()`,
      styles.key,
      showKey,
      name,
      ast.depth
    );
  } else if (typeof ast.value === "object") {
    if (ast.value === null) {
      // Null
      value = buildValue(
        ast.key,
        "null",
        styles.null,
        showKey,
        name,
        ast.depth
      );
    } else if (Array.isArray(ast.value)) {
      // Array
      value = buildValue(
        ast.key,
        `Array(${ast.value.length})`,
        styles.key,
        showKey,
        name,
        ast.depth
      );
    } else if (ast.value instanceof Date) {
      // Date
      value = buildValue(
        ast.key,
        `Date ${ast.value.toString()}`,
        styles.value,
        showKey,
        name,
        ast.depth
      );
    } else if (ast.value instanceof RegExp) {
      // RegExp
      value = buildValue(
        ast.key,
        ast.value.toString(),
        styles.regex,
        showKey,
        name,
        ast.depth
      );
    } else if (ast.value instanceof Error) {
      // Error
      value = buildValue(
        ast.key,
        ast.value.toString(),
        styles.error,
        showKey,
        name,
        ast.depth
      );
    } else if (isObject(ast.value)) {
      // Object
      value = buildValue(ast.key, "{…}", styles.key, showKey, name, ast.depth);
    } else {
      // WeakMap, WeakSet, Custom Classes, etc
      value = buildValue(
        ast.key,
        ast.value.constructor.name,
        styles.key,
        showKey,
        name,
        ast.depth
      );
    }
  }

  return (
    <span className={makeClass(themeClass, className)} {...html}>
      {asyncValue}
      {value}
    </span>
  );
};

ObjectValue.defaultProps = {
  showKey: true,
};

export default ObjectValue;
