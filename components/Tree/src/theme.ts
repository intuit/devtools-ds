import { ComponentTheme, firefox, chrome } from "@devtools-ds/themes";

const TreeTheme = (): ComponentTheme => ({
  firefox: {
    light: {
      focusColor: firefox.light.blue03,
      hoverColor: firefox.light.blue01,
      hoverRadius: "0px",
    },
    dark: {
      focusColor: firefox.dark.blue05,
      hoverColor: firefox.dark.gray04,
    },
  },
  chrome: {
    light: {
      focusColor: chrome.light.blue02,
      hoverColor: chrome.light.blue01,
      hoverRadius: "6px",
    },
    dark: {
      focusColor: chrome.dark.blue04,
      hoverColor: chrome.dark.blue05,
    },
  },
});

export default TreeTheme;
