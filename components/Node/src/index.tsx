import React from "react";
import { ThemeableElement, useTheme } from "@devtools-ds/themes";
import makeClass from "clsx";
import styles from "./Node.css";

interface NodeProps extends ThemeableElement<"ul"> {
  /** The type of the node */
  name: string;
  /** The properties to display */
  properties?: { [key: string]: string };
  /** Toggle special node type styles */
  variant?: "comment" | "doctype";
  /** Whether the tag is a closing tag */
  closing: boolean;
  /** Whether this node is self-closing */
  selfClosing: boolean;
}

/** An emulation of the browser inspector DOM node. */
export const Node = (props: NodeProps) => {
  const {
    name,
    closing,
    properties,
    selfClosing,
    theme,
    colorScheme,
    className,
    variant,
    ...html
  } = props;
  const { themeClass, currentTheme } = useTheme({ theme, colorScheme }, styles);
  const docString = currentTheme === "chrome" ? "!doctype " : "!DOCTYPE ";

  return (
    <span
      className={makeClass(styles.node, themeClass, className, {
        [styles.comment]: variant === "comment",
        [styles.docType]: variant === "doctype",
      })}
      {...html}
    >
      <span className={styles.tag}>
        {"<"}
        {closing ? "/" : ""}
        {variant === "comment" ? "!--" : ""}
        {variant === "doctype" ? docString : ""}
        <span className={styles.name}>{name}</span>
      </span>
      {properties &&
        Object.keys(properties).map((key) => {
          return (
            <span key={key}>
              &nbsp;
              <span className={styles.key}>{key}</span>
              {properties[key] && (
                <>
                  =&quot;
                  <span className={styles.value}>
                    {String(properties[key])}
                  </span>
                  &quot;
                </>
              )}
            </span>
          );
        })}
      <span className={styles.tag}>
        {variant === "comment" ? "--" : ""}
        {selfClosing ? "/" : ""}
        {">"}
      </span>
    </span>
  );
};

Node.defaultProps = {
  closing: false,
  selfClosing: false,
};
