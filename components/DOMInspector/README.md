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
    <td align="center"><a href="https://github.com/tkrupicka"><img src="https://github.com/avatars/u/3976??s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/intuit/devtools-ds/commits?author=tkrupicka" title="Code">💻</a> <a href="https://github.com/intuit/devtools-ds/commits?author=tkrupicka" title="Documentation">📖</a> <a href="#design-tkrupicka" title="Design">🎨</a> <a href="#infra-tkrupicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tkrupicka" title="Examples">💡</a> <a href="https://github.com/intuit/devtools-ds/commits?author=tkrupicka" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
