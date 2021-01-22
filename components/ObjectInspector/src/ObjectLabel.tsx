import React from "react";
import makeClass from "clsx";
import { ThemeableElement, useTheme, Theme } from "@devtools-ds/themes";
import {
  ResolvedASTNode,
  ResolvedASTArray,
  ResolvedASTObject,
  ResolvedASTSet,
  ResolvedASTPromise,
  ResolvedASTMap,
  ASTNode,
} from "@devtools-ds/object-parser";
import ObjectValue from "./ObjectValue";
import styles from "./ObjectInspector.css";

interface ObjectLabelProps extends ThemeableElement<"span"> {
  /** Type of object. */
  ast: ResolvedASTNode;
  /** How many previews to render */
  previewMax: number;
  /** Whether the Object label is open */
  open: boolean;
}

/** Build a list of previews */
const buildPreview = (
  children: ASTNode[],
  previewMax: number,
  showKey: boolean
) => {
  const previews = [];
  for (let i = 0; i < children.length; i++) {
    const child = children[i];

    if (!child.isPrototype) {
      previews.push(
        <ObjectValue key={child.key} ast={child} showKey={showKey} />
      );

      if (i < children.length - 1) {
        previews.push(", ");
      } else {
        previews.push(" ");
      }
    }

    if (child.isPrototype && i === children.length - 1) {
      previews.pop();
      previews.push(" ");
    }

    // Add ellipsis if needed
    if (i === previewMax - 1 && children.length > previewMax) {
      previews.push("… ");
      break;
    }
  }

  return previews;
};

/** Get the label for an array */
const getArrayLabel = (
  ast: ResolvedASTArray,
  open: boolean,
  previewMax: number,
  theme: Theme
) => {
  const l = ast.value.length;

  if (open) {
    return <span>Array({l})</span>;
  }

  return (
    <>
      <span>{`${theme === "firefox" ? "Array" : ""}(${l}) [ `}</span>
      {buildPreview(ast.children, previewMax, false)}
      <span>]</span>
    </>
  );
};

/** Get the label for an object */
const getObjectLabel = (
  ast: ResolvedASTObject,
  open: boolean,
  previewMax: number,
  theme: Theme
) => {
  if (ast.isPrototype) {
    return <span>{`Object ${theme === "firefox" ? "{ … }" : ""}`}</span>;
  }

  if (open) {
    return <span>{"{…}"}</span>;
  }

  return (
    <>
      <span>{`${theme === "firefox" ? "Object " : ""}{ `}</span>
      {buildPreview(ast.children, previewMax, true)}
      <span>{"}"}</span>
    </>
  );
};

/** Get the label for a Promise */
const getPromiseLabel = (
  ast: ResolvedASTPromise,
  open: boolean,
  previewMax: number
) => {
  if (open) {
    return <span>{`Promise { "${String(ast.children[0].value)}" }`}</span>;
  }

  return (
    <>
      <span>{`Promise { `}</span>
      {buildPreview(ast.children, previewMax, true)}
      <span>{"}"}</span>
    </>
  );
};

/** Get the label for a Map */
const getMapLabel = (
  ast: ResolvedASTMap,
  open: boolean,
  previewMax: number,
  theme: Theme
) => {
  const { size } = ast.value;
  if (open) {
    return <span>{`Map(${size})`}</span>;
  }

  return (
    <>
      <span>{`Map${theme === "chrome" ? `(${size})` : ""} { `}</span>
      {buildPreview(ast.children, previewMax, true)}
      <span>{"}"}</span>
    </>
  );
};

/** Get the label for a Set */
const getSetLabel = (
  ast: ResolvedASTSet,
  open: boolean,
  previewMax: number
) => {
  const { size } = ast.value;
  if (open) {
    return <span>Set({size})</span>;
  }

  return (
    <>
      <span>{`Set(${ast.value.size}) {`}</span>
      {buildPreview(ast.children, previewMax, true)}
      <span>{"}"}</span>
    </>
  );
};

/** Create a styled label for an object, with previews of the object contents. */
export const ObjectLabel = (props: ObjectLabelProps) => {
  const {
    ast,
    theme,
    previewMax,
    open,
    colorScheme,
    className,
    ...html
  } = props;
  const { themeClass, currentTheme } = useTheme({ theme, colorScheme }, styles);
  const isPrototype = ast.isPrototype || false;
  const classes = makeClass(styles.objectLabel, themeClass, className, {
    [styles.prototype]: isPrototype,
  });

  const isRoot = ast.depth <= 0;

  /** The key for the node */
  const Key = () => {
    return (
      <span className={isPrototype ? styles.prototype : styles.key}>
        {isRoot ? "" : `${ast.key}: `}
      </span>
    );
  };

  if (ast.type === "array") {
    return (
      <span className={classes} {...html}>
        <Key />
        {getArrayLabel(ast, open, previewMax, currentTheme)}
      </span>
    );
  }

  if (ast.type === "function") {
    return (
      <span className={classes} {...html}>
        <Key />
        {currentTheme === "chrome" && (
          <span className={styles.functionDecorator}>{"ƒ "}</span>
        )}
        <span
          className={makeClass({ [styles.function]: !isPrototype })}
        >{`${ast.value.name}()`}</span>
      </span>
    );
  }

  if (ast.type === "promise") {
    return (
      <span className={classes} {...html}>
        <Key />
        {getPromiseLabel(ast, open, previewMax)}
      </span>
    );
  }

  if (ast.type === "map") {
    return (
      <span className={classes} {...html}>
        <Key />
        {getMapLabel(ast, open, previewMax, currentTheme)}
      </span>
    );
  }

  if (ast.type === "set") {
    return (
      <span className={classes} {...html}>
        <Key />
        {getSetLabel(ast, open, previewMax)}
      </span>
    );
  }

  return (
    <span className={classes} {...html}>
      <Key />
      {getObjectLabel(ast, open, previewMax, currentTheme)}
    </span>
  );
};

ObjectLabel.defaultProps = {
  previewMax: 8,
  open: false,
};

export default ObjectLabel;
