import { ComponentTheme } from "@devtools-ds/themes";
import { firefox, chrome } from "@devtools-ds/themes";

const NavTheme = (): ComponentTheme => ({
  firefox: {
    light: {
      backgroundColor: firefox.light.backgroundColor,
      textColor: firefox.light.textColor,
      selectedTextColor: firefox.light.blue04,
      selectedIconColor: firefox.light.blue04,
      selectedBarColor: firefox.light.blue04,
      hoverBarColor: firefox.light.gray03,
      hoverBackgroundColor: firefox.light.gray02,
      dividerColor: firefox.light.gray03,
    },
    dark: {
      backgroundColor: firefox.dark.gray06,
      textColor: firefox.dark.textColor,
      selectedTextColor: "white",
      selectedIconColor: "white",
      selectedBarColor: firefox.dark.blue04,
      hoverBarColor: firefox.dark.gray02,
      hoverBackgroundColor: firefox.dark.gray04,
      dividerColor: firefox.dark.gray02,
    },
  },
  chrome: {
    light: {
      backgroundColor: chrome.light.gray01,
      textColor: chrome.light.textColor,
      selectedTextColor: chrome.light.textColor,
      selectedIconColor: chrome.light.textColor,
      selectedBarColor: chrome.light.blue03,
      hoverBarColor: chrome.light.gray02,
      hoverBackgroundColor: chrome.light.gray02,
      dividerColor: chrome.light.gray03,
    },
    dark: {
      backgroundColor: chrome.dark.gray05,
      textColor: chrome.dark.textColor,
      selectedTextColor: chrome.dark.textColor,
      selectedIconColor: chrome.dark.textColor,
      selectedBarColor: chrome.dark.blue03,
      hoverBarColor: chrome.dark.gray06,
      hoverBackgroundColor: chrome.dark.gray06,
      dividerColor: chrome.dark.gray04,
    },
  },
});

export default NavTheme;
