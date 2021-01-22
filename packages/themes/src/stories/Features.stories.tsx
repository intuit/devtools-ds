import React from "react";
import { ThemeGrid } from "./ThemeGrid";

import { chrome, firefox, AutoThemeProvider } from "..";
import notes from "../../README.md";

export default {
  title: "Utilities/Themes/Features",
  parameters: { notes },
};

export const BrowserThemes = () => (
  <div>
    <ThemeGrid name="Chrome" theme={chrome} />
    <ThemeGrid name="Firefox" theme={firefox} />
  </div>
);

export const AutomaticTheming = () => (
  <AutoThemeProvider>
    <div>
      This story changes themes automatically based on your browser and color
      scheme.
    </div>
  </AutoThemeProvider>
);
