import React from "react";
import makeClass from "clsx";
import { Element } from "@design-systems/utils";

export const colorSchemes = ["light", "dark"] as const;
export type ColorScheme = typeof colorSchemes[number];

export const themes = ["chrome", "firefox"] as const;
export type Theme = typeof themes[number];

const isWindowDefined = typeof window !== "undefined";

/**
 * Get all of the props for an HTML element + add the theme props.
 * Used to easily type the rest props of a component and add theming.
 *
 * @example
 * export interface ButtonProps extends ThemeableElement<'button'> {
 *   size?: Sizes;
 * }
 */
export interface Themeable {
  /** Light or Dark mode. */
  colorScheme?: ColorScheme;
  /** Supported browser themes.  */
  theme?: Theme;
}

export type ThemeableElement<T extends keyof JSX.IntrinsicElements> = Element<
  T
> &
  Themeable;

export const ThemeContext = React.createContext<Themeable>({
  theme: "chrome",
  colorScheme: "light",
});

/**
 * Determine if the user has a "prefers-color-scheme" mode enabled in their browser.
 * This is helpful for detecting if a user prefers dark mode.
 */
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = React.useState(
    isWindowDefined && window
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : false
  );

  React.useEffect(() => {
    if (!isWindowDefined) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    /** Run when the user changes this setting. */
    const changeDarkMode = () => setDarkMode(!darkMode);

    mediaQuery.addListener(changeDarkMode);

    return () => {
      mediaQuery.removeListener(changeDarkMode);
    };
  }, [darkMode]);

  return darkMode;
};

/** A React Context provider for devtools-ds themes */
export const ThemeProvider = ({
  children,
  ...value
}: React.PropsWithChildren<Themeable>) => {
  const wrappedTheme = React.useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={{ ...wrappedTheme, ...value }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * A hook to use the closest theme context.
 *
 * @param props - Current component props
 * @param styles - The css modules for the component
 *
 * @example
 * const { themeClass } = useTheme({ colorScheme, theme }, styles);
 */
export const useTheme = (
  props: Themeable,
  styles: Record<string, string> = {}
) => {
  const themeContext = React.useContext(ThemeContext);

  const currentTheme = props.theme || themeContext.theme || "chrome";
  const currentColorScheme =
    props.colorScheme || themeContext.colorScheme || "light";
  const themeClass = makeClass(
    styles[currentTheme],
    styles[currentColorScheme]
  );

  return {
    currentColorScheme,
    currentTheme,
    themeClass,
  };
};

interface BasicTheme {
  [key: string]: string;
}

interface LightDarkTheme {
  /** The light version of the theme */
  light: BasicTheme;
  /** The dark version of the theme */
  dark: BasicTheme;
}

type CustomTheme = BasicTheme | LightDarkTheme;

export type ComponentTheme = Required<Record<"chrome", CustomTheme>> &
  Partial<Record<Theme, CustomTheme>>;
