import React from "react";
import {
  ChevronRightIcon,
  ConsoleResultIcon,
  WarningIcon,
  ConsoleErrorIcon,
} from "@devtools-ds/icon";
import { useTheme, ThemeableElement } from "@devtools-ds/themes";
import makeClass from "clsx";
import { ObjectInspector } from "@devtools-ds/object-inspector";

import styles from "./Console.css";

export interface ConsoleResultProps {
  /** The result to display */
  result: any;
}

/** The default rending of the console result */
export const ConsoleResultDefault = ({ result }: ConsoleResultProps) => {
  return <div>{JSON.stringify(result)}</div>;
};

/** The default rending of the console result */
export const ConsoleResultInspector = ({ result }: ConsoleResultProps) => {
  return <ObjectInspector includePrototypes={false} data={result} />;
};

/** A container for an expression and a result */
export interface ConsoleExpression {
  /** A unique key for this expression */
  id: string;
  /** The expression itself */
  expression: string;
  /** The result for a given expression */
  result?: any;
  /** Whether there were any errors with the result */
  severity?: "error" | "warning";
}

export interface ResultComponent {
  /** An optional component to override the rendering of a result in the list */
  resultComponent: React.ComponentType<ConsoleResultProps>;
}

export type ExecuteFunction = (expression: string) => void;

/** A Component that renders an expression and it's result in a list */
const ConsoleResult = (props: ConsoleExpression & ResultComponent) => {
  const ResultComponentProp = props.resultComponent;
  const isError = props.result instanceof Error || props.severity === "error";
  const isWarning = !isError && props.severity === "warning";
  let Icon = ConsoleResultIcon;
  if (isError) Icon = ConsoleErrorIcon;
  if (isWarning) Icon = WarningIcon;

  return (
    <li className={styles.resultWrapper}>
      <div className={styles.resultLine}>
        <ConsoleChevron />
        <div className={styles.expressionText}>{props.expression}</div>
      </div>
      <div
        className={makeClass(styles.resultLine, {
          [styles.error]: isError,
          [styles.warning]: isWarning,
        })}
      >
        <Icon inline className={styles.icon} />
        <div className={styles.resultText}>
          <ResultComponentProp result={props.result} />
        </div>
      </div>
    </li>
  );
};

interface ConsoleChevronProps {
  /** The chevron changes colors if it's representing a focused input */
  focused: boolean;
}

/** The chevron for the console to use */
const ConsoleChevron = (props: ConsoleChevronProps) => {
  const { focused } = props;
  return (
    <ChevronRightIcon
      inline
      className={makeClass(styles.icon, {
        [styles.iconFocus]: focused,
      })}
    />
  );
};

ConsoleChevron.defaultProps = {
  focused: false,
};

interface ConsoleInputProps {
  /** The history of each executed expression */
  history: Array<ConsoleExpression>;
  /** The callback to submit an expression to be evaluated */
  onSubmit: (exp: string) => void;
}

/**
 * The input for the Console.
 * On enter, it'll submit the current expression to be evaluated.
 * It handles the arrow up/down keys to scroll through history.
 */
export const ConsoleInput = (props: ConsoleInputProps) => {
  const { history, onSubmit } = props;
  const [historyCount, setHistoryCount] = React.useState(0);
  const [focused, setFocus] = React.useState(false);
  const [value, setValue] = React.useState("");

  /** Manage looping through history, and submitting on enter */
  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      e.preventDefault();

      const index =
        e.key === "ArrowUp" ? historyCount + 1 : Math.max(0, historyCount - 1);

      if (index === 0) {
        setHistoryCount(index);
        setValue("");
        return;
      }

      const nextExp =
        index > history.length
          ? undefined
          : history[history.length - index]?.expression;

      if (!nextExp) {
        return;
      }

      setValue(nextExp);
      setHistoryCount(index);
      return;
    }

    if (e.key === "Enter" && value) {
      onSubmit(value);
      setValue("");
    }
  };

  /** Track the current value of the input */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.inputWrapper}>
      <ConsoleChevron focused={focused} />
      <input
        value={value}
        className={styles.input}
        aria-label="Enter an expression"
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
        onKeyDown={keyDownHandler}
        onChange={onChange}
      />
    </div>
  );
};

export interface ConsoleProps extends ThemeableElement<"div"> {
  /** The history of each executed expression */
  history?: Array<ConsoleExpression>;
  /** A function used to execute an expression from the console. */
  execute: (expression: string) => any;
}

type ConsoleHistoryState = [
  Array<ConsoleExpression>,
  React.Dispatch<React.SetStateAction<ConsoleExpression[]>> | (() => void)
];

/** A hook that fetches the ConsoleContext and inserts defaults */
const useConsoleHistory = (
  history?: Array<ConsoleExpression>
): ConsoleHistoryState => {
  const [stateHistory, setStateHistory] = React.useState<
    Array<ConsoleExpression>
  >([]);

  if (history) {
    return [history, () => {}];
  }

  return [stateHistory, setStateHistory];
};

/** The Console component emulates a REPL environment that you see in browsers */
export const Console = (props: ConsoleProps & ResultComponent) => {
  const {
    execute,
    history: propsHistory,
    resultComponent: Result,
    theme,
    colorScheme,
    className,
    ...html
  } = props;
  const [history, setHistory] = useConsoleHistory(propsHistory);

  const { themeClass } = useTheme({ theme, colorScheme }, styles);
  const resultsScrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!resultsScrollRef.current) {
      // Can't scroll if there's no container
      return;
    }

    // Set the scroll position of the results pane to the content's height.
    // This will scroll it all the way to the bottom as soon as new results are added to the history
    resultsScrollRef.current.scrollTop = resultsScrollRef.current.scrollHeight;
  }, [history.length]);

  return (
    <div {...html} className={makeClass(styles.console, themeClass, className)}>
      <div ref={resultsScrollRef} className={styles.resultsScrollWrapper}>
        <ul className={styles.results}>
          {history.map((item) => (
            <ConsoleResult key={item.id} resultComponent={Result} {...item} />
          ))}
        </ul>
      </div>
      <ConsoleInput
        history={history}
        onSubmit={(exp: string) => {
          const result = execute(exp);
          setHistory([
            ...history,
            {
              id: `item-${history.length}`,
              expression: exp,
              result,
            },
          ]);
        }}
      />
    </div>
  );
};

Console.defaultProps = {
  execute: (exp: string) => exp,
  resultComponent: ConsoleResultDefault,
};
