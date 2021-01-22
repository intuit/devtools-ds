import React from "react";
import makeClass from "clsx";
import useResizeObserver from "use-resize-observer";
import { useTheme, ThemeableElement } from "@devtools-ds/themes";
import { styled, Element } from "@design-systems/utils";
import styles from "./Table.css";

export interface TableSelectedProps {
  /** ID of currently selected row */
  selected?: string;
  /** Event when a child element is selected */
  onSelected?: (
    newSelection: string,
    event:
      | React.MouseEvent<HTMLTableRowElement>
      | React.KeyboardEvent<HTMLTableRowElement>
  ) => void;
}

export type TableProps = ThemeableElement<"table"> & TableSelectedProps;

export interface TableContextType extends TableSelectedProps {
  /** Height of the parent table */
  height?: number;
  /** Width of the parent table */
  width?: number;
  /** Whether the current element is inside the table body */
  inBody: boolean;
}

/** Context that gives children information about the parent table */
export const TableContext = React.createContext<TableContextType | null>(null);

/** A HTML Table styled like browser network information. */
export const Table = (props: TableProps) => {
  const {
    selected,
    onSelected,
    children,
    className,
    theme,
    colorScheme,
    ...html
  } = props;
  const { themeClass } = useTheme({ theme, colorScheme }, styles);
  const tableRef = React.useRef<HTMLTableElement>(null);
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);

  const sizes = useResizeObserver({ ref: tableRef });

  // Perform any side effect with those sizes!
  React.useEffect(() => {
    if (sizes.height) setHeight(sizes.height);
    if (sizes.width) setWidth(sizes.width);
  }, [sizes.height, sizes.width]);

  return (
    <table
      ref={tableRef}
      className={makeClass(className, themeClass, styles.table)}
      cellSpacing="0"
      role="grid"
      {...html}
    >
      <TableContext.Provider
        value={{ height, width, selected, onSelected, inBody: false }}
      >
        {children}
      </TableContext.Provider>
    </table>
  );
};

/** The body of the table */
export const Body = (props: Element<"tbody">) => {
  const { children, ...html } = props;
  const context = React.useContext(TableContext) || {};

  return (
    <tbody {...html}>
      <TableContext.Provider value={{ ...context, inBody: true }}>
        {children}
      </TableContext.Provider>
    </tbody>
  );
};

/** A resizable table header cell */
export const HeadCell = (props: Element<"th">) => {
  const { className, children, ...html } = props;
  const context = React.useContext(TableContext);
  const headRef = React.useRef<HTMLTableHeaderCellElement>(null);
  const [resizing, setResizing] = React.useState<boolean>(false);
  const [startingX, setStartingX] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const tableWidth = context?.width || 0;

  /** Detect mouse moves and adjust the width when resizing */
  const mouseMoveHandler = (e: MouseEvent) => {
    if (resizing && headRef.current) {
      const change = e.clientX - startingX;
      const percent = ((width + change) / tableWidth) * 100;
      if (percent < 50 && width + change > 20) {
        headRef.current.style.width = `${percent}%`;
      }
    }
  };

  /** Disable resizing when click ends */
  const mouseUpHandler = () => {
    if (resizing) setResizing(false);
  };

  /** Enable resizing and set defaults when click starts */
  const mouseDownHandler = (e: React.MouseEvent) => {
    if (!window || !headRef.current) return;
    const s = window.getComputedStyle(headRef.current);
    setWidth(parseInt(s.width, 10));
    setStartingX(e.clientX);
    setResizing(true);
  };

  // Resizing is a mouse only operation, and won't impact screen readers
  React.useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
  });

  return (
    <th
      ref={headRef}
      className={makeClass(className, styles.cellHead)}
      {...html}
    >
      <div className={styles.content}>{children}</div>
      <div
        aria-hidden
        className={makeClass(styles.resize, resizing && styles.active)}
        style={{ height: `${context?.height ?? 0}px` }}
        onMouseDown={mouseDownHandler}
      />
    </th>
  );
};

/** A row in the table */
export const Row = (props: Element<"tr">) => {
  const context = React.useContext(TableContext);
  const { onClick, onKeyDown, className, ...html } = props;
  const isInteractive = Boolean(context?.onSelected && context?.inBody);
  const isSelected = Boolean(props.id && context?.selected === props.id);
  const tabIndex = isInteractive ? 0 : undefined;

  return (
    <tr
      aria-selected={isInteractive ? isSelected : undefined}
      tabIndex={tabIndex}
      className={makeClass(
        className,
        styles.row,
        isInteractive && styles.interactive
      )}
      onClick={(e: React.MouseEvent<HTMLTableRowElement>) => {
        if (context?.onSelected && isInteractive) {
          e.persist();
          context.onSelected(props.id || "", e);
        }

        if (onClick) onClick(e);
      }}
      onKeyDown={(e: React.KeyboardEvent<HTMLTableRowElement>) => {
        const { key, currentTarget } = e;

        if (key === "Enter" || key === " ") {
          if (context?.onSelected && isInteractive) {
            e.persist();
            context.onSelected(props.id || "", e);
          }
        } else if (key === "ArrowDown") {
          const next = currentTarget.nextElementSibling as HTMLTableRowElement;
          if (next && next.nodeName === "TR") next.focus();
        } else if (key === "ArrowUp") {
          const previous = currentTarget.previousElementSibling as HTMLTableRowElement;
          if (previous && previous.nodeName === "TR") previous.focus();
        } else if (key === "PageUp" || key === "Home") {
          let current = currentTarget;
          while (current.previousElementSibling) {
            current = current.previousElementSibling as HTMLTableRowElement;
          }

          current.focus();
        } else if (key === "PageDown" || key === "End") {
          let current = currentTarget;
          while (current.nextElementSibling) {
            current = current.nextElementSibling as HTMLTableRowElement;
          }

          current.focus();
        }

        if (onKeyDown) onKeyDown(e);
      }}
      {...html}
    >
      {props.children}
    </tr>
  );
};

/** The head of the table */
export const Head = styled("thead", {
  class: styles.tableHead,
  description: "The table head",
  name: "Table.Head",
});

/** A cell in the table */
export const Cell = styled("td", {
  class: styles.cell,
  description: "A cell in the table",
  name: "Table.Cell",
});

Table.Body = Body;
Table.HeadCell = HeadCell;
Table.Row = Row;
Table.Head = Head;
Table.Cell = Cell;
