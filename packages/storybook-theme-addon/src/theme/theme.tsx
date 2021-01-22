import React from "react";
import { useAddonState, useParameter } from "@storybook/api";
import { useAddonState as useClientAddonState } from "@storybook/client-api";
import { Theme, ColorScheme, ThemeProvider } from "@devtools-ds/themes";
import { chrome, firefox } from "@devtools-ds/themes";
import {
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";
import Chrome from "./icons/chrome";
import FireFox from "./icons/firefox";

import { THEME_SELECT_TOOL_ID, PARAMETER_NAME } from "../constants";

interface TooltipProps {
  /** Called when the tooltip hides */
  onHide: () => void;
}

const themes = {
  firefox: {
    name: "FireFox",
    icon: <FireFox />,
  },
  chrome: {
    name: "Chrome",
    icon: <Chrome />,
  },
} as const;

interface State {
  theme: Theme;
  colorScheme: ColorScheme;
}

const STORAGE_TOKEN = `${THEME_SELECT_TOOL_ID}-storage`;

/** Persist the theme settings in localStorage */
const saveLocalStorage = (data: State) => {
  window.localStorage.setItem(STORAGE_TOKEN, JSON.stringify(data));
};

/** Restore theme settings from localStorage */
const restoreLocalStorage = (defaultTheme?: Partial<State>): State => {
  const data = window.localStorage.getItem(STORAGE_TOKEN);

  if (data) {
    const storedTheme = JSON.parse(data) as State;

    if (themes[storedTheme.theme]) {
      return storedTheme;
    }
  }

  return {
    theme: "firefox",
    colorScheme: "light",
    ...defaultTheme,
  };
};

export const ThemeTool = () => {
  const defaultState = useParameter<Partial<State>>(PARAMETER_NAME, {
    theme: "firefox",
    colorScheme: "light",
  });
  const initial = restoreLocalStorage(defaultState);
  const [state, setState] = useAddonState<State>(THEME_SELECT_TOOL_ID, initial);

  const saveState = (s: State) => {
    setState(s);
    saveLocalStorage(s);
  };

  return (
    <WithTooltip
      closeOnClick
      placement="top"
      trigger="click"
      tooltip={(props: TooltipProps) => {
        const { onHide } = props;

        return (
          <TooltipLinkList
            links={(Object.keys(themes) as Array<Theme>).flatMap((key) => {
              const theme = themes[key];
              return [
                {
                  id: `${theme.name}-light`,
                  title: `${theme.name} - Light`,
                  onClick: () => {
                    saveState({
                      theme: key,
                      colorScheme: "light",
                    });
                    onHide();
                  },
                  value: theme.name,
                  left: <div>{theme.icon}</div>,
                  active: key === state.theme && state.colorScheme === "light",
                },
                {
                  id: `${theme.name}-dark`,
                  title: `${theme.name} - Dark`,
                  onClick: () => {
                    saveState({
                      theme: key,
                      colorScheme: "dark",
                    });
                    onHide();
                  },
                  value: theme.name,
                  left: <div>{theme.icon}</div>,
                  active: key === state.theme && state.colorScheme === "dark",
                },
              ];
            })}
          />
        );
      }}
    >
      <IconButton title="Select a product theme">
        <span style={{ width: "13.5px" }}>{themes[state.theme].icon}</span>
      </IconButton>
    </WithTooltip>
  );
};

export const ThemeDecorator = (
  storyFn: (storyParams: Record<string, any>) => React.ReactNode
) => {
  const [state] = useClientAddonState<State>(THEME_SELECT_TOOL_ID);
  const loadedState = state || restoreLocalStorage();

  const themeObject = loadedState.theme === "chrome" ? chrome : firefox;

  const isLight = loadedState.colorScheme === "light";
  const backgroundColor = isLight
    ? themeObject.light.backgroundColor
    : themeObject.dark.backgroundColor;
  const color = isLight
    ? themeObject.light.textColor
    : themeObject.dark.textColor;

  return (
    <ThemeProvider
      theme={loadedState.theme}
      colorScheme={loadedState.colorScheme}
    >
      <div
        className={`theme-wrapper ${loadedState.colorScheme}`}
        style={{ backgroundColor, color, minHeight: "100%", padding: "20px" }}
      >
        {storyFn({ args: loadedState })}
      </div>
    </ThemeProvider>
  );
};
