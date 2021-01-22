import React from "react";
import { ThemeableElement, useTheme } from "@devtools-ds/themes";
import makeClass from "clsx";
import { useId } from "@reach/auto-id";
import { VisuallyHidden } from "@reach/visually-hidden";
import { ConsoleErrorIcon, WarningIcon } from "@devtools-ds/icon";
import { DiagnosticSeverity } from "vscode-languageserver-types";

import styles from "./Diagnostic.css";

/** A function to automatically convert Language Server severity */
export const transformLanguageServer = (severity: DiagnosticSeverity) => {
  return severity === DiagnosticSeverity.Error ? "error" : "warning";
};

export interface DiagnosticLine {
  /** The content of the line */
  content: string;
  /** The number of the line in source */
  number: string;
  /** Whether the line is highlighted */
  highlight?: boolean;
}

export type Severity = "error" | "warning";

interface DiagnosticProps extends ThemeableElement<"figure"> {
  /** The lines of code to display */
  lines: DiagnosticLine[];
  /** Whether this is an error or a warning */
  severity: Severity;
  /** Message */
  message?: string;
}

interface LineProps {
  /** The lines of code to display */
  lines: DiagnosticLine[];

  /** Whether this is an error or a warning */
  severity: Severity;
}

/** Create the list of lines */
export const Lines = (props: LineProps) => {
  const l = props.lines.map((line) => {
    const s = makeClass(styles.line, {
      [styles.lineError]: line.highlight && props.severity === "error",
      [styles.lineWarning]: line.highlight && props.severity === "warning",
    });
    const caret = line.highlight ? "> " : "  ";
    return (
      <code
        key={line.number}
        className={s}
      >{`${caret}${line.number}| ${line.content}\n`}</code>
    );
  });

  // https://github.com/yannickcr/eslint-plugin-react/issues/2512
  // eslint-disable-next-line
  return <>{l}</>;
};

/**
 * Generate a screen-reader friendly description of the error.
 */
export const generateDescription = (
  lines: DiagnosticLine[],
  severity: Severity,
  message?: string
) => {
  const a = severity === "error" ? "An" : "A";
  let description = `${a} ${severity} was found in a block of ${lines.length} lines of code. `;
  if (message) description += `The ${severity} message is "${message}". `;
  if (lines.length > 1) {
    description += `Lines ${lines[0].number} through ${
      lines[lines.length - 1].number
    } are shown. `;

    const highlighted = lines.filter((line) => line.highlight === true);
    if (highlighted.length === 1) {
      description += `Line ${highlighted[0].number} (${highlighted[0].content}) is highlighted.`;
    }

    if (highlighted.length > 1) {
      const numbers = highlighted.map((line) => line.number.toString());
      description += `Lines ${numbers.join(", ")} are highlighted.`;
    }
  }

  return description;
};

/** A component for displaying diagnostic stack traces. */
export const Diagnostic = (props: DiagnosticProps) => {
  const {
    severity,
    lines,
    theme,
    colorScheme,
    className,
    message,
    ...html
  } = props;
  const { themeClass } = useTheme({ theme, colorScheme }, styles);
  const captionId = `diagnostic-caption-${useId()}`;

  const isError = severity === "error";
  const isWarning = severity === "warning";

  const iconStyles = makeClass(styles.icon, {
    [styles.iconError]: isError,
    [styles.iconWarning]: isWarning,
  });

  const lineStyles = makeClass(styles.wrapper, {
    [styles.wrapperError]: isError,
    [styles.wrapperWarning]: isWarning,
  });

  const Icon = isError ? ConsoleErrorIcon : WarningIcon;
  return (
    <figure
      role="img"
      aria-labelledby={captionId}
      className={makeClass(styles.diagnostic, themeClass, className)}
      {...html}
    >
      {message && (
        <>
          <Icon inline className={iconStyles} />
          <span className={styles.message}>{message}</span>
        </>
      )}
      <pre className={lineStyles}>
        <Lines lines={lines} severity={severity} />
      </pre>
      <VisuallyHidden>
        <figcaption id={captionId}>
          {generateDescription(lines, severity, message)}
        </figcaption>
      </VisuallyHidden>
    </figure>
  );
};

Diagnostic.defaultProps = {
  severity: "warning",
};
