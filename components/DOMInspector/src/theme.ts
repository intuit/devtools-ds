import { ComponentTheme, chrome, firefox } from "@devtools-ds/themes";

const DOMInspectorTheme = (): ComponentTheme => ({
  firefox: {
    light: {
      textColor: firefox.light.textColor,
    },
    dark: {
      textColor: firefox.dark.textColor,
    },
  },
  chrome: {
    light: {
      textColor: chrome.light.textColor,
    },
    dark: {
      textColor: chrome.dark.textColor,
    },
  },
});

export default DOMInspectorTheme;
