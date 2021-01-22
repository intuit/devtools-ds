import { ComponentTheme, chrome, firefox } from "@devtools-ds/themes";
import color from "color";

const DiagnosticTheme = (): ComponentTheme => ({
  firefox: {
    light: {
      textColor: color(firefox.light.textColor).darken(0.4).string(),
      messageColor: firefox.light.textColor,
      errorIconColor: firefox.light.error,
      errorBackgroundColor: firefox.light.errorBackground,
      errorBackgroundLineColor: color(firefox.light.errorBackground)
        .darken(0.1)
        .string(),
      warningBackgroundColor: firefox.light.warningBackground,
      warningBackgroundLineColor: color(firefox.light.warningBackground)
        .darken(0.1)
        .string(),
      warningIconColor: firefox.light.warning,
    },
    dark: {
      textColor: color(firefox.dark.textColor).lighten(0.4).string(),
      messageColor: firefox.dark.textColor,
      errorIconColor: firefox.dark.error,
      errorBackgroundColor: firefox.dark.errorBackground,
      errorBackgroundLineColor: color(firefox.dark.errorBackground)
        .lighten(0.3)
        .string(),
      warningBackgroundColor: firefox.dark.warningBackground,
      warningBackgroundLineColor: color(firefox.dark.warningBackground)
        .lighten(0.3)
        .string(),
      warningIconColor: firefox.dark.warning,
    },
  },
  chrome: {
    light: {
      textColor: color(chrome.light.textColor).darken(0.4).string(),
      messageColor: chrome.light.textColor,
      errorIconColor: chrome.light.error,
      errorBackgroundColor: chrome.light.errorBackground,
      errorBackgroundLineColor: color(chrome.light.errorBackground)
        .darken(0.1)
        .string(),
      warningBackgroundColor: chrome.light.warningBackground,
      warningBackgroundLineColor: color(chrome.light.warningBackground)
        .darken(0.1)
        .string(),
      warningIconColor: chrome.light.warning,
    },
    dark: {
      textColor: color(chrome.dark.textColor).lighten(0.4).string(),
      messageColor: chrome.dark.textColor,
      errorIconColor: chrome.dark.error,
      errorBackgroundColor: color(chrome.dark.errorBackground)
        .lighten(0.3)
        .string(),
      errorBackgroundLineColor: color(chrome.dark.errorBackground)
        .lighten(0.7)
        .string(),
      warningBackgroundColor: chrome.dark.warningBackground,
      warningBackgroundLineColor: color(chrome.dark.warningBackground)
        .lighten(0.3)
        .string(),
      warningIconColor: chrome.dark.warning,
    },
  },
});

export default DiagnosticTheme;
