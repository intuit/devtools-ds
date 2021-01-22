import React from "react";
import addons, { types } from "@storybook/addons";
import { ThemeTool } from "./theme/theme";
import { ADDON_ID, THEME_SELECT_TOOL_ID, PARAMETER_NAME } from "./constants";

/** Register addons with storybook */
export function register() {
  addons.register(ADDON_ID, () => {
    // Tools show up in the top panel

    addons.add(THEME_SELECT_TOOL_ID, {
      title: "Theme Selection",
      type: types.TOOL,
      paramKey: PARAMETER_NAME,
      render: () => <ThemeTool />,
    });
  });
}

export { ThemeDecorator } from "./theme/theme";
