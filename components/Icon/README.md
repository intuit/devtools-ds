# @devtools-ds/icon

A set of React-packaged SVG icons commonly used in developer tools.

## Installation

```sh
npm i @devtools-ds/icon
# or with yarn
yarn add @devtools-ds/icon
```

### Accessibility Approach

By default, all icons are set to `aria-hidden` and `focusable="false"` in order to hide them from screen readers and stop focus on Microsoft browsers. Most of the time, these icons will be accompanied by text which should properly label them. If your icon is being used as a button, wrap it in a button component with the proper labeling instead of labeling the icon.

## Usage

Icons are packaged as individual React components.

```jsx
import { AlertIcon } from "@devtools-ds/icon";

// individual icon
<AlertIcon />;
```

### Sizing

There are three ways to size the icons: a size prop, inline, or with width and height. I've included an example of each below.

```jsx
import { AlertIcon } from '@devtools-ds/icon';

// This will resize based on the four preset icon sizes used in the design system.
<AlertIcon size="large"/>
// This will inherit the fontSize attribute in order to work inline with text.
<AlertIcon inline />
// This will resize using normal SVG resize controls
<AlertIcon width="30px" />
```

### Inline Icons and currentColor

The inline prop makes the icon inherit the fontSize css attribute, and position itself inline with text around it. By default, the icon has `fill="currentColor"` set based on the [currentColor](https://css-tricks.com/currentcolor/) css attribute. This will inherit the surrounding font color, but can be overwritten as needed.

### References

- [Accessible SVG Icons](https://www.24a11y.com/2018/accessible-svg-icons-with-inline-sprites/)
- [How to Scale SVG](https://css-tricks.com/scale-svg/)
- [xmlns SVG reference](https://www.w3.org/TR/SVG2/struct.html#Namespace)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/tylerkurpicka"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Documentation">📖</a> <a href="#design-tylerkurpicka" title="Design">🎨</a> <a href="#infra-tylerkurpicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tylerkurpicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/adierkens"><img src="https://avatars.githubusercontent.com/u/13004162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Dierkens</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/kharrop"><img src="https://github.com/avatars/u/16794??s=100" width="100px;" alt=""/><br /><sub><b>kharrop</b></sub></a><br /><a href="#design-kharrop" title="Design">🎨</a></td>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a> <a href="#example-tylerkrupicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
