import React, { ReactNode, useState, useEffect } from "react";
import { ThemeableElement, useTheme } from "@devtools-ds/themes";
import makeClass from "clsx";
import TreeContext from "./TreeContext";
import styles from "./Tree.css";

export interface TreeProps extends ThemeableElement<"ul"> {
  /** The label for this node */
  label: string | ReactNode;
  /** Whether this node is open */
  open: boolean;
  /** Whether to add hover styles to children */
  hover: boolean;
  /** Send state updates so parent can track them */
  onUpdate?: (value: boolean) => void;
  /**
   * Called when the given node is selected/focused
   * For nodes w/ children, this is equivalent to them updating their state
   */
  onSelect?: () => void;
}

/** A keyboard accessible expanding tree view. */
export const Tree = (props: TreeProps) => {
  const {
    theme,
    hover,
    colorScheme,
    children,
    label,
    className,
    onUpdate,
    onSelect,
    open,
    ...html
  } = props;

  const { themeClass, currentTheme } = useTheme({ theme, colorScheme }, styles);

  const [isOpen, setOpen] = useState(open);
  // For some reason the useState above default doesn't work, so useEffect is needed
  useEffect(() => {
    setOpen(open);
  }, [open]);

  /** Update state and call callback */
  const updateState = (value: boolean) => {
    setOpen(value);
    if (onUpdate) onUpdate(value);
  };

  const hasChildren = React.Children.count(children) > 0;

  /** Set focus and aria-selected onto a new <li>, unselect old if provided */
  const updateFocus = (
    newNode: HTMLLIElement,
    previousNode?: HTMLLIElement
  ) => {
    if (newNode.isSameNode(previousNode || null)) return;
    const focusableNode = newNode.querySelector<HTMLLIElement>(
      '[tabindex="-1"]'
    );
    focusableNode?.focus();
    newNode.setAttribute("aria-selected", "true");
    previousNode?.removeAttribute("aria-selected");
  };

  /**
   * Find a parent DOM node with a given role.
   *
   * @param node - Current HTMLElement
   */
  const getParent = (
    node: HTMLElement,
    role: "tree" | "group" | "treeitem"
  ) => {
    let parent = node;
    while (parent && parent.parentElement) {
      // Find the top of the tree
      if (parent.getAttribute("role") === role) {
        return parent;
      }

      // Move up the tree after, in case the node provided is the tree
      parent = parent.parentElement;
    }

    return null;
  };

  /** Get all list elements for the current tree. */
  const getListElements = (node: HTMLElement) => {
    const tree = getParent(node, "tree");
    if (!tree) return [];
    return Array.from(tree.querySelectorAll<HTMLLIElement>("li"));
  };

  /** Move focus up to the tree node above */
  const moveBack = (node: HTMLElement) => {
    const group = getParent(node, "group");
    const toggle = group?.previousElementSibling;

    if (toggle && toggle.getAttribute("tabindex") === "-1") {
      const toggleParent = toggle.parentElement as HTMLLIElement;
      const nodeParent = node.parentElement as HTMLLIElement;
      updateFocus(toggleParent, nodeParent);
    }
  };

  /** Move the focus to the start or end of the tree */
  const moveHome = (node: HTMLElement, direction: "start" | "end") => {
    const elements = getListElements(node);
    elements.forEach((element) => {
      element.removeAttribute("aria-selected");
    });
    if (direction === "start" && elements[0]) {
      updateFocus(elements[0]);
    }

    if (direction === "end" && elements[elements.length - 1]) {
      updateFocus(elements[elements.length - 1]);
    }
  };

  /** Move focus up or down a level from the provided Element */
  const moveFocusAdjacent = (node: HTMLElement, direction: "up" | "down") => {
    const elements = getListElements(node) || [];
    for (let i = 0; i < elements.length; i++) {
      // Go through each <li> and look for the currently selected node
      const currentNode = elements[i];
      if (currentNode.getAttribute("aria-selected") === "true") {
        if (direction === "up" && elements[i - 1]) {
          // Move focus to the <li> above
          updateFocus(elements[i - 1], currentNode);
        } else if (direction === "down" && elements[i + 1]) {
          // Move focus to the <li> below
          updateFocus(elements[i + 1], currentNode);
        }

        return;
      }
    }

    // Select first node if one isn't currently selected
    updateFocus(elements[0]);
  };

  /** Handle all keyboard events from tree nodes */
  const handleKeypress = (event: React.KeyboardEvent, isChild?: boolean) => {
    const node = event.target as HTMLElement;
    // Handle open/close toggle
    if (event.key === "Enter" || event.key === " ") {
      updateState(!isOpen);
    }

    if (event.key === "ArrowRight" && isOpen && !isChild) {
      moveFocusAdjacent(node, "down");
    } else if (event.key === "ArrowRight") {
      updateState(true);
    }

    if (event.key === "ArrowLeft" && (!isOpen || isChild)) {
      moveBack(node);
    } else if (event.key === "ArrowLeft") {
      updateState(false);
    }

    if (event.key === "ArrowDown") {
      moveFocusAdjacent(node, "down");
    }

    if (event.key === "ArrowUp") {
      moveFocusAdjacent(node, "up");
    }

    if (event.key === "Home") {
      moveHome(node, "start");
    }

    if (event.key === "End") {
      moveHome(node, "end");
    }
  };

  /** Set selected and focus states on click events */
  const handleClick = (event: React.MouseEvent, isChild?: boolean) => {
    const node = event.target as HTMLElement;
    const parent = getParent(node, "treeitem") as HTMLLIElement;

    // We need to check if another node was selected and move it
    const elements = getListElements(node) || [];
    let found = false;
    for (let i = 0; i < elements.length; i++) {
      // Go through each <li> and look for the currently selected node
      const currentNode = elements[i];
      if (currentNode.getAttribute("aria-selected") === "true") {
        // Move selected to clicked LI
        if (parent) {
          found = true;
          updateFocus(parent, currentNode);
        }

        break;
      }
    }

    // If we didn't find an existing one select the new one
    if (!found && parent) {
      updateFocus(parent);
    }

    // Toggle open state if needed
    if (!isChild) {
      updateState(!isOpen);
    }
  };

  /** When the tree is blurred make it focusable again */
  const handleBlur = (event: React.FocusEvent) => {
    const node = event.currentTarget;
    if (
      !node.contains(document.activeElement) &&
      node.getAttribute("role") === "tree"
    ) {
      node.setAttribute("tabindex", "0");
    }
  };

  /** Move focus back to the selected tree node, or focus the first one */
  const handleFocus = (event: React.FocusEvent) => {
    const node = event.target;
    if (node.getAttribute("role") === "tree") {
      const selected = node.querySelector<HTMLLIElement>(
        '[aria-selected="true"]'
      );

      if (selected) {
        // Move to previously selected node
        updateFocus(selected);
      } else {
        // Focus the first node
        moveFocusAdjacent(node as HTMLElement, "down");
      }

      //
      node.setAttribute("tabindex", "-1");
    }
  };

  /** Detect when a button has been focused */
  const handleButtonFocus = () => {
    onSelect?.();
  };

  /** Get the styles for padding based on depth */
  const getPaddingStyles = (depth: number) => {
    const space = depth * 0.9 + 0.3;
    return {
      paddingLeft: `${space}em`,
      width: `calc(100% - ${space}em)`,
    };
  };

  // The first node needs role "tree", while sub-trees need role "group"
  // This is tracked through context to be flexible to elements in the subtree.
  const { isChild, depth, hasHover } = React.useContext(TreeContext);
  const showHover = hasHover ? hover : false;

  // Tree root node
  // Needs to have role tree and one top level UL
  // https://dequeuniversity.com/library/aria/tabpanels-accordions/sf-tree-view
  if (!isChild) {
    return (
      <ul
        role="tree"
        tabIndex={0}
        className={makeClass(styles.tree, styles.group, themeClass, className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...html}
      >
        <TreeContext.Provider
          value={{ isChild: true, depth: 0, hasHover: showHover }}
        >
          <Tree {...props} />
        </TreeContext.Provider>
      </ul>
    );
  }

  // Leaf nodes that don't expand, but still highlight and focus.
  if (!hasChildren) {
    return (
      <li role="treeitem" className={styles.item} {...(html as any)}>
        <div
          role="button"
          className={makeClass(styles.label, {
            [styles.hover]: showHover,
            [styles.focusWhite]: currentTheme === "firefox",
          })}
          tabIndex={-1}
          style={getPaddingStyles(depth)}
          onKeyDown={(e) => {
            handleKeypress(e, isChild);
          }}
          onClick={(e) => handleClick(e, true)}
          onFocus={handleButtonFocus}
        >
          <span>{label}</span>
        </div>
      </li>
    );
  }

  // Child tree node with children
  const arrowClass = makeClass(styles.arrow, { [styles.open]: isOpen });
  return (
    <li role="treeitem" aria-expanded={isOpen} className={styles.item}>
      <div
        role="button"
        tabIndex={-1}
        className={makeClass(styles.label, {
          [styles.hover]: showHover,
          [styles.focusWhite]: currentTheme === "firefox",
        })}
        style={getPaddingStyles(depth)}
        onClick={(e) => handleClick(e)}
        onKeyDown={(e) => handleKeypress(e)}
        onFocus={handleButtonFocus}
      >
        <span>
          <span aria-hidden className={arrowClass} />
          <span>{label}</span>
        </span>
      </div>
      <ul role="group" className={makeClass(className, styles.group)} {...html}>
        {isOpen &&
          React.Children.map(children, (child) => {
            return (
              <TreeContext.Provider
                value={{ isChild: true, depth: depth + 1, hasHover: showHover }}
              >
                {child}
              </TreeContext.Provider>
            );
          })}
      </ul>
    </li>
  );
};

Tree.defaultProps = {
  open: false,
  hover: true,
};
