# @devtools-ds/node

A component for rendering DOM Node style opening and closing HTML tags.

## Installation

```sh
npm i @devtools-ds/node
# or with yarn
yarn add @devtools-ds/node
```

Then to use the component in your code just import it!

```js
import { Node } from "@devtools-ds/node";
```

## Usage

The label can be a string or a React component.

```jsx

const properties = {
  class: 'test',
  style: 'font-weight: bold;'
};

<Node name="div" properties={properties} />
  Content
<Node closing name="div" />

```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/tylerkurpicka"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Documentation">📖</a> <a href="#design-tylerkurpicka" title="Design">🎨</a> <a href="#infra-tylerkurpicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tylerkurpicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
