# @devtools-ds/tree

A versatile expanding `Tree` component, with full keyboard navigation following the [Tree View Design Pattern](https://www.w3.org/TR/wai-aria-practices/examples/treeview/treeview-2/treeview-2a.html).

## Installation

```sh
npm i @devtools-ds/tree
# or with yarn
yarn add @devtools-ds/tree
```

Then to use the component in your code just import it!

```js
import { Tree } from "@devtools-ds/tree";
```

## Accessibility Approach

This component follows the DOM structure and interaction guidelines outlined in the [Tree View Design Pattern](https://www.w3.org/TR/wai-aria-practices/examples/treeview/treeview-2/treeview-2a.html).

Some of these resources were helpful for following the `tree` view interaction best practices.

- [W3 Tree View](https://www.w3.org/TR/wai-aria-practices/examples/treeview/treeview-2/treeview-2a.html)
- [Deque Tree View Reference](https://dequeuniversity.com/library/aria/tabpanels-accordions/sf-tree-view)
- [MDN Keyboard Widgets](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Keyboard-navigable_JavaScript_widgets)
- [MDN TabIndex Usage](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex#Tabindex_Accessibility)

## Usage

The label can be a string or a React component.

```jsx
<Tree label="Root">
  <Tree label="Branch One">
    <Tree label="Leaf One" />
    <Tree label="Leaf Two" />
  </Tree>
  <Tree label="Branch Two" />
  <Tree label="Branch Three" />
</Tree>
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="#design-tylerkrupicka" title="Design">🎨</a> <a href="#infra-tylerkrupicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tylerkrupicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/adierkens"><img src="https://avatars.githubusercontent.com/u/13004162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Dierkens</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Documentation">📖</a> <a href="#example-adierkens" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Tests">⚠️</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Code">💻</a></td>
    <td align="center"><a href="http://hipstersmoothie.com/"><img src="https://avatars.githubusercontent.com/u/1192452?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Lisowski</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=hipstersmoothie" title="Documentation">📖</a> <a href="#example-hipstersmoothie" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=hipstersmoothie" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
