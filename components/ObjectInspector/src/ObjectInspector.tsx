import React, { useEffect, useState } from "react";
import makeClass from "clsx";
import {
  parse,
  SupportedTypes,
  ASTNode,
  ResolvedASTNode,
} from "@devtools-ds/object-parser";
import { ThemeableElement, useTheme, ThemeProvider } from "@devtools-ds/themes";
import ObjectInspectorItem from "./ObjectInspectorItem";

import styles from "./ObjectInspector.css";

interface ObjectInspectorProps
  extends Omit<ThemeableElement<"div">, "onSelect"> {
  /** JSON data to render in the tree. */
  data: SupportedTypes;
  /** Depth of the tree that is open at first render. */
  expandLevel: number;
  /** Whether to sort keys like the browsers do. */
  sortKeys: boolean;
  /** Whether to include object Prototypes */
  includePrototypes: boolean;
  /** Callback when a particular node in the tree is actively selected */
  onSelect?: (node?: ASTNode | ResolvedASTNode) => void;
}

/** An emulation of browsers JSON object inspector. */
export const ObjectInspector = (props: ObjectInspectorProps) => {
  const {
    data,
    expandLevel,
    sortKeys,
    includePrototypes,
    className,
    theme,
    colorScheme,
    onSelect,
    ...html
  } = props;
  const [ast, setAST] = useState<ASTNode | undefined>(undefined);
  const { themeClass, currentTheme, currentColorScheme } = useTheme(
    { theme, colorScheme },
    styles
  );

  /** Handle async types */
  useEffect(() => {
    /** Async function run the parser */
    const runParser = async () => {
      setAST(await parse(data, sortKeys, includePrototypes));
    };

    runParser();
  }, [data, sortKeys, includePrototypes]);

  return (
    <div
      className={makeClass(styles.objectInspector, className, themeClass)}
      {...html}
    >
      {ast && (
        <ThemeProvider theme={currentTheme} colorScheme={currentColorScheme}>
          <ObjectInspectorItem
            ast={ast}
            expandLevel={expandLevel}
            onSelect={onSelect}
          />
        </ThemeProvider>
      )}
    </div>
  );
};

ObjectInspector.defaultProps = {
  expandLevel: 0,
  sortKeys: true,
  includePrototypes: true,
};

export default ObjectInspector;
