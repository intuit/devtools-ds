import React from "react";

import styles from "./ThemeGrid.css";

export interface BrowserTheme {
  /** Light mode variables */
  light: { [key: string]: string };
  /** Dark mode variables */
  dark: { [key: string]: string };
}

export interface ThemeGridProps {
  /** Name of the theme */
  name: string;
  /** The current theme object */
  theme: BrowserTheme;
}

/** Determine whether the string ends with a number */
const endsWithNumber = (s: string) => {
  return !isNaN(Number(s.slice(-1)));
};

/** Compare two theme keys for sorting */
const compareKeys = (a: string, b: string) => {
  const aEndsNumber = endsWithNumber(a);
  const bEndsNumber = endsWithNumber(b);

  if (aEndsNumber && !bEndsNumber) {
    return 1;
  }

  if (bEndsNumber && !aEndsNumber) {
    return -1;
  }

  return a.localeCompare(b);
};

export interface ThemeItemProps {
  /** Name of the key */
  name: string;
  /** Color of variable */
  color: string;
}

/** List item */
const ThemeItem = (props: ThemeItemProps) => {
  const { name, color } = props;
  return (
    <li className={styles.item}>
      <div className={styles.box} style={{ backgroundColor: color }} />
      <div className={styles.label}>
        <h2>{name}</h2>
        <h4>{color}</h4>
      </div>
    </li>
  );
};

/** A component for displaying a theme configuration object */
export const ThemeGrid = (props: ThemeGridProps) => {
  const { name, theme } = props;
  const lightKeys = Object.keys(theme.light).sort(compareKeys);
  const darkKeys = Object.keys(theme.dark).sort(compareKeys);

  return (
    <div className={styles.theme}>
      <div>
        <h1>{name} - Light</h1>
        <ul className={styles.list}>
          {lightKeys.map((key) => {
            return <ThemeItem key={key} name={key} color={theme.light[key]} />;
          })}
        </ul>
      </div>

      <div>
        <h1>{name} - Dark</h1>
        <ul className={styles.list}>
          {darkKeys.map((key) => {
            return <ThemeItem key={key} name={key} color={theme.dark[key]} />;
          })}
        </ul>
      </div>
    </div>
  );
};
