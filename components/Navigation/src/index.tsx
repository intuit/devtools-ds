import React from "react";
import makeClass from "clsx";
import { useTheme, ThemeableElement } from "@devtools-ds/themes";
import { styled, Element } from "@design-systems/utils";
import styles from "./Navigation.css";

export interface NavigationContextType {
  /** the id of the tab that's selected */
  selectedTabId?: string;
}

export const NavigationContext = React.createContext<NavigationContextType>({});

export interface NavigationProps extends ThemeableElement<"nav"> {
  /** the id of the tab that's selected */
  selectedTabId?: string;
}

/** The top-nav in devtools */
export const Navigation = (props: NavigationProps) => {
  const {
    children,
    className,
    theme,
    colorScheme,
    selectedTabId,
    ...html
  } = props;

  const { themeClass, currentTheme } = useTheme({ theme, colorScheme }, styles);

  return (
    <NavigationContext.Provider value={{ selectedTabId }}>
      <nav
        {...html}
        className={makeClass(
          styles.nav,
          className,
          themeClass,
          styles[currentTheme]
        )}
      >
        {children}
      </nav>
    </NavigationContext.Provider>
  );
};

export interface ButtonProps extends Element<"button"> {
  /** An icon to show in the label */
  icon?: JSX.Element;

  /** The text label */
  children?: React.ReactChild;
}

/** A tab in the nav-bar (memory panel, console) */
export const Tab = (props: ButtonProps) => {
  const { className, ...html } = props;
  const { selectedTabId } = React.useContext(NavigationContext);

  return (
    <Button
      {...html}
      className={makeClass(className, styles.tab, {
        [styles.selected]: selectedTabId && props.id === selectedTabId,
      })}
    />
  );
};

/**
 * A non-tab but clickable thing in the nav bar
 * (element selector, close button)
 */
export const Button = (props: ButtonProps) => {
  const { className, icon, children, ...html } = props;
  return (
    <button
      type="button"
      {...html}
      className={makeClass(styles.button, className)}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {children && <div>{children}</div>}
    </button>
  );
};

export const Divider = styled("div", {
  class: styles.divider,
  name: "Navigation.Divider",
});

export const Left = styled("div", {
  class: styles.left,
  name: "Navigation.Left",
});

export const Right = styled("div", {
  class: styles.right,
  name: "Navigation.Right",
});

export const Overflow = styled("div", {
  class: styles.overflow,
  name: "Navigation.Overflow",
});

Navigation.Left = Left;
Navigation.Right = Right;
Navigation.Overflow = Overflow;
Navigation.Divider = Divider;
Navigation.Tab = Tab;
Navigation.Button = Button;
