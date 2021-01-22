import { ComponentTheme, chrome, firefox } from "@devtools-ds/themes";

const NodeTheme = (): ComponentTheme => ({
  firefox: {
    light: {
      textColor: firefox.light.textColor,
      tagColor: firefox.light.textColor,
      nameColor: firefox.light.blue03,
      keyColor: firefox.light.pink01,
      valueColor: firefox.light.blue05,
      commentColor: firefox.light.green01,
      docTypeColor: firefox.light.textColor,
    },
    dark: {
      textColor: firefox.dark.textColor,
      tagColor: firefox.dark.textColor,
      nameColor: firefox.dark.blue01,
      keyColor: firefox.dark.pink01,
      valueColor: firefox.dark.purple01,
      commentColor: firefox.dark.green01,
      docTypeColor: firefox.dark.textColor,
    },
  },
  chrome: {
    light: {
      textColor: chrome.light.textColor,
      tagColor: chrome.light.purple01,
      nameColor: chrome.light.purple03,
      keyColor: chrome.light.brown01,
      valueColor: chrome.light.blue04,
      commentColor: chrome.light.green01,
      docTypeColor: chrome.light.gray04,
    },
    dark: {
      textColor: chrome.dark.textColor,
      tagColor: chrome.dark.blue02,
      nameColor: chrome.dark.blue02,
      keyColor: chrome.dark.blue01,
      valueColor: chrome.dark.orange01,
      commentColor: chrome.dark.gray03,
      docTypeColor: chrome.dark.gray02,
    },
  },
});

export default NodeTheme;
