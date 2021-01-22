import React, { useState } from "react";
import makeClass from "clsx";
import { ThemeableElement, useTheme, ThemeProvider } from "@devtools-ds/themes";
import { Tree } from "@devtools-ds/tree";
import { Node as TreeNode } from "@devtools-ds/node";

import styles from "./DOMInspector.css";

interface DOMInspectorProps extends ThemeableElement<"div"> {
  /** The DOM Element to render */
  data: Node;
  /** Depth of the tree that is open at first render. */
  expandLevel: number;
}

interface DOMInspectorItemProps extends DOMInspectorProps {
  /** The depth of the current Node */
  depth: number;
}

/** Get text to inline based on current state */
const getInlineText = (data: Element, open: boolean) => {
  const hasInlineText = Boolean(
    data.childNodes.length === 0 ||
      (data.childNodes.length === 1 &&
        data.childNodes[0].nodeType === Node.TEXT_NODE &&
        data.textContent &&
        data.textContent.length < 80)
  );

  if (hasInlineText && !open) {
    return data.textContent;
  }

  return "…";
};

const emptyElements = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];

/** Type narrowing is Element function */
const isElement = (data: Node): data is Element => {
  return data.nodeType === Node.ELEMENT_NODE;
};

/** Type narrowing is Text function */
const isText = (data: Node): data is Text => {
  return data.nodeType === Node.TEXT_NODE;
};

/** Type narrowing is CDATA function */
const isCDATA = (data: Node): data is CDATASection => {
  return data.nodeType === Node.CDATA_SECTION_NODE;
};

/** Type narrowing is ProcessingInstruction function */
const isProcessingInstruction = (data: Node): data is ProcessingInstruction => {
  return data.nodeType === Node.PROCESSING_INSTRUCTION_NODE;
};

/** Type narrowing is Comment function */
const isComment = (data: Node): data is Comment => {
  return data.nodeType === Node.COMMENT_NODE;
};

/** Type narrowing is Document function */
const isDocument = (data: Node): data is Document => {
  return data.nodeType === Node.DOCUMENT_NODE;
};

/** Type narrowing is DocumentType function */
const isDocumentType = (data: Node): data is DocumentType => {
  return data.nodeType === Node.DOCUMENT_TYPE_NODE;
};

/** Type narrowing is DocumentFragment function */
const isDocumentFragment = (data: Node): data is DocumentFragment => {
  return data.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
};

/** Create the label with attributes for an HTML Element */
export const getElementLabel = (
  data: Element,
  open: boolean,
  tagName: string,
  isEmpty: boolean
) => {
  const properties: { [key: string]: string } = {};

  if (data.attributes) {
    for (let i = 0; i < data.attributes.length; i++) {
      const attr = data.attributes.item(i);
      if (attr) {
        properties[attr.name] = attr.value;
      }
    }
  }

  return (
    <>
      <TreeNode name={tagName} properties={properties} />
      {data.childNodes.length !== 0 && !isEmpty && !open && (
        <>
          {getInlineText(data, open)}
          <TreeNode closing name={tagName} />
        </>
      )}
    </>
  );
};

/** A component for rendering DOM items. */
export const DOMInspectorItem = (props: DOMInspectorItemProps) => {
  const { data, depth, expandLevel } = props;
  const [open, setOpen] = useState(depth < expandLevel);

  const text = data.textContent?.trim();
  const children = [];
  for (let i = 0; i < data.childNodes.length; i++) {
    children.push(data.childNodes[i]);
  }

  // Element Node
  if (isElement(data)) {
    const tagName = data.tagName.toLowerCase();
    const isEmpty = emptyElements.includes(tagName);
    return (
      <Tree
        open={open}
        label={getElementLabel(data, open, tagName, isEmpty)}
        onUpdate={(value: boolean) => {
          setOpen(value);
        }}
      >
        {children.map((child, index) => {
          return (
            <DOMInspectorItem
              // eslint-disable-next-line
              key={index}
              data={child}
              depth={depth + 1}
              expandLevel={expandLevel}
            />
          );
        })}
        {children.length > 0 && !isEmpty && (
          <Tree label={<TreeNode closing name={tagName} />} />
        )}
      </Tree>
    );
  }

  // Text
  if (isText(data)) {
    if (text) {
      return <Tree label={`${data.textContent}`} />;
    }

    return null;
  }

  // CDATA
  if (isCDATA(data)) {
    return <Tree label={`<![CDATA[${text}]]>`} />;
  }

  // Processing Instruction
  if (isProcessingInstruction(data)) {
    return <Tree label={data.nodeName} />;
  }

  // Comment
  if (isComment(data)) {
    return <Tree label={<TreeNode variant="comment" name={text || ""} />} />;
  }

  // Document
  if (isDocument(data) || isDocumentFragment(data)) {
    return (
      <Tree
        open={open}
        label={data.nodeName}
        onUpdate={(value: boolean) => {
          setOpen(value);
        }}
      >
        {children.map((child, index) => {
          return (
            <DOMInspectorItem
              // eslint-disable-next-line
              key={index}
              data={child}
              depth={depth + 1}
              expandLevel={expandLevel}
            />
          );
        })}
      </Tree>
    );
  }

  // Document Type
  if (isDocumentType(data)) {
    const publicId = data.publicId ? ` PUBLIC "${data.publicId}"` : "";
    const systemId = data.systemId ? ` "${data.systemId}"` : "";
    return (
      <Tree
        label={
          <TreeNode
            variant="doctype"
            name={`${data.name}${publicId}${systemId}`}
          />
        }
      />
    );
  }

  return null;
};

/** An Inspector for DOM nodes and HTML Documents. */
export const DOMInspector = (props: DOMInspectorProps) => {
  const { data, theme, colorScheme, expandLevel, className, ...html } = props;
  const { themeClass, currentTheme, currentColorScheme } = useTheme(
    { theme, colorScheme },
    styles
  );

  if (!data) return null;

  return (
    <div className={makeClass(className, themeClass, styles.text)} {...html}>
      <ThemeProvider theme={currentTheme} colorScheme={currentColorScheme}>
        <DOMInspectorItem data={data} depth={0} expandLevel={expandLevel} />
      </ThemeProvider>
    </div>
  );
};

DOMInspector.defaultProps = {
  expandLevel: 0,
};
