# @devtools-ds/storybook-theme-addon

The theme add-on adds a global theme selection button to Storybook.
It uses a decorator to add a browser theme provider to each story.

## Installation

```sh
npm i @devtools-ds/storybook-theme-addon
# or with yarn
yarn add @devtools-ds/storybook-theme-addon
```

```js
import ThemeSelectTool from "@devtools-ds/storybook-theme-addon";
```

## Usage

**`main.js`:**

```js
module.exports = {
  addons: ["@devtools-ds/storybook-theme-addon"],
};
```

**`main.js`:**

```js
import { ThemeDecorator } from "@devtools-ds/storybook-theme-addon";
```
