# @devtools-ds/themes

Each of the UI components in this project contains themes for multiple browsers. These themes are built using the [postcss-themed](https://github.com/intuit/postcss-themed) package, which allows us to specify themes for multiple browsers in light and dark mode.

This package contains colors, types, and React utilities for using browser themes.

## Installation

```sh
npm i @devtools-ds/themes
# or with yarn
yarn add @devtools-ds/themes
```

## Examples

### ThemeProvider

You can use the `ThemeProvider` component to set the theme for all `@devtools-ds` components underneath it.

```js
import { ThemeProvider } from "@devtools-ds/themes";

<ThemeProvider theme={"chrome"} colorScheme={"light"}>
  <YourApp />
</ThemeProvider>;
```

### AutoThemeProvider

We also provide an `AutoThemeProvider`, which will automatically set the theme and color scheme of `@devtools-ds` components based on the users browser and preferred color scheme.

```jsx
<AutoThemeProvider>
  <div id="my-app">
    <ObjectInspector />
  </div>
</AutoThemeProvider>
```

You can always override the `AutoThemeProvider` like a normal `ThemeProvider`.

```jsx
<AutoThemeProvider theme="firefox">
  <div id="my-app">
    <ObjectInspector />
  </div>
</AutoThemeProvider>
```

You can also have the `AutoThemeProvider` automatically change the background color and text color to match the current browser and color scheme. In dark mode, this means the background color will be the browser's dark background and light text.

```jsx
<AutoThemeProvider autoStyle>
  <div id="my-app">
    <ObjectInspector />
  </div>
</AutoThemeProvider>
```

### useTheme

If you want to build your own component that leverages the `ThemeProvider`, we have a hook that allows you to get the current theme.

```js
import { useTheme } from "@devtools-ds/themes";

const { currentTheme, currentColorScheme } = useTheme(
  { theme, colorScheme },
  styles
);
```

### Variables

We have created a number of theme variables that have the common colors for different browsers. These are stored as JS objects. You can view the available variables in the `Browser Themes` story in Storybook.

```js
import { chrome, firefox } from "@devtools-ds/themes";

chrome.light.gray01;
firefox.dark.blue02;
```
