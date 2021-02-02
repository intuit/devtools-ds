import { ComponentTheme, firefox, chrome } from "@devtools-ds/themes";

const TreeTheme = (): ComponentTheme => ({
  firefox: {
    light: {
      focusColor: firefox.light.blue03,
      hoverColor: firefox.light.blue01,
      arrowColor: firefox.light.gray03,
      hoverRadius: "0px",
    },
    dark: {
      focusColor: firefox.dark.blue05,
      hoverColor: firefox.dark.gray04,
      arrowColor: firefox.dark.gray01,
    },
  },
  chrome: {
    light: {
      focusColor: chrome.light.blue02,
      hoverColor: chrome.light.blue01,
      arrowColor: chrome.light.gray05,
      hoverRadius: "6px",
    },
    dark: {
      focusColor: chrome.dark.blue04,
      hoverColor: chrome.dark.blue05,
      arrowColor: chrome.dark.gray02,
    },
  },
});

export default TreeTheme;
