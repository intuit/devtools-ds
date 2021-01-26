import React from "react";
import makeClass from "clsx";
import {
  Tabs,
  TabList as ReachTabList,
  Tab as ReachTab,
  TabPanels,
  TabPanel,
  TabsKeyboardActivation,
  useTabsContext,
} from "@reach/tabs";
import { useTheme, ThemeableElement } from "@devtools-ds/themes";
import { styled, Element } from "@design-systems/utils";
import styles from "./Navigation.css";

/** The top-nav in devtools */
export const Navigation = (props: ThemeableElement<"nav">) => {
  const { children, className, theme, colorScheme, ...html } = props;

  const { themeClass, currentTheme } = useTheme({ theme, colorScheme }, styles);

  return (
    <nav
      {...html}
      className={makeClass(
        styles.nav,
        className,
        themeClass,
        styles[currentTheme]
      )}
    >
      <Tabs keyboardActivation={TabsKeyboardActivation.Manual}>{children}</Tabs>
    </nav>
  );
};

export interface ButtonProps extends Element<"button"> {
  /** An icon to show in the label */
  icon?: JSX.Element;

  /** The text label */
  children?: React.ReactChild;
}

export interface TabProps extends ButtonProps {
  /** Index of the current tab */
  index?: number;
}

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

/** A tab in the nav-bar (memory panel, console) */
export const Tab = (props: TabProps) => {
  const { className, index, icon, children, ...html } = props;
  const { selectedIndex } = useTabsContext();

  return (
    <ReachTab
      {...html}
      className={makeClass(className, styles.tab, styles.button, {
        [styles.selected]: index !== undefined && selectedIndex === index,
      })}
    >
      {icon && <div className={styles.icon}>{icon}</div>}
      {children && <div>{children}</div>}
    </ReachTab>
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

export const Controls = styled("div", {
  class: styles.controls,
  name: "Navigation.Controls",
});

export interface TabListProps extends Element<"div"> {
  /** Only have Tabs inside a TabList */
  children: React.ReactElement<TabProps> | Array<React.ReactElement<TabProps>>;
}

/** The list of Tabs */
export const TabList = (props: TabListProps) => {
  const { children, className } = props;
  return (
    <ReachTabList className={makeClass(className, styles.overflow)}>
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, { index });
      })}
    </ReachTabList>
  );
};

Navigation.Controls = Controls;
Navigation.Left = Left;
Navigation.Right = Right;
Navigation.TabList = TabList;
Navigation.Divider = Divider;
Navigation.Tab = Tab;
Navigation.Button = Button;
Navigation.Panels = TabPanels;
Navigation.Panel = TabPanel;
