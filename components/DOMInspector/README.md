# @devtools-ds/dom-inspector

An emulation of the Chrome and Firefox DOM inspector, built on the `@devtools-ds/tree` component.

## Installation

```sh
npm i @devtools-ds/dom-inspector
# or with yarn
yarn add @devtools-ds/dom-inspector
```

## Usage

```js
import { DOMInspector } from "@devtools-ds/dom-inspector";
```

```js
const div = document.createElement("div");
const html = `
      <!--This is a comment-->
      <span>A span</span>
      <button type="submit" class="btn">Submit</button>
`;
div.insertAdjacentHTML("beforeend", html);

export const Custom = () => <DOMInspector data={div} expandLevel={2} />;
```

## Useful References

- [MDN Empty Elements](https://developer.mozilla.org/en-US/docs/Glossary/Empty_element)
- [MDN HTML Node Types](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType)
- [W3Schools DocType Reference](https://www.w3schools.com/tags/tag_doctype.asp)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/tylerkurpicka"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Documentation">📖</a> <a href="#design-tylerkurpicka" title="Design">🎨</a> <a href="#infra-tylerkurpicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tylerkurpicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
