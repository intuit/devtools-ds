import { ComponentTheme, firefox, chrome } from "@devtools-ds/themes";
import color from "color";

const TableTheme = (): ComponentTheme => ({
  firefox: {
    light: {
      textColor: firefox.light.textColor,
      stripeColor: firefox.light.gray01,
      borderColor: firefox.light.gray02,
      headBackgroundColor: firefox.light.gray01,
      rowHoverColor: firefox.light.blue02,
      rowSelectedColor: firefox.light.blue03,
    },
    dark: {
      textColor: firefox.dark.textColor,
      stripeColor: firefox.dark.gray03,
      borderColor: firefox.dark.gray02,
      headBackgroundColor: firefox.dark.gray05,
      rowHoverColor: color(firefox.dark.gray03)
        .mix(color(firefox.dark.blue05), 0.1)
        .string(),
      rowSelectedColor: firefox.dark.blue05,
    },
  },
  chrome: {
    light: {
      textColor: chrome.light.textColor,
      stripeColor: chrome.light.gray01,
      borderColor: chrome.light.gray03,
      headBackgroundColor: chrome.light.gray01,
      rowHoverColor: chrome.light.blue01,
      rowSelectedColor: chrome.light.blue03,
    },
    dark: {
      textColor: chrome.dark.textColor,
      stripeColor: chrome.dark.gray05,
      borderColor: chrome.dark.gray04,
      headBackgroundColor: color(chrome.dark.gray05)
        .mix(color(chrome.dark.blue05), 0.1)
        .string(),
      rowHoverColor: chrome.dark.blue05,
      rowSelectedColor: chrome.dark.blue03,
    },
  },
});

export default TableTheme;
