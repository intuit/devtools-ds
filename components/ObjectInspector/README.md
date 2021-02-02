# @devtools-ds/object-inspector

An emulation of the Chrome and Firefox object inspector, which allows you to view JavaScript objects in the console.

## Installation

```sh
npm i @devtools-ds/object-inspector
# or with yarn
yarn add @devtools-ds/object-inspector
```

## Supported Types

JavaScript has a broad and sometimes complicated [set of available types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects). This component attempts to display most types nicely, and we have styles for the following:

```ts
export type SupportedTypes =
  | boolean
  | null
  | number
  | string
  | Error
  | symbol
  | undefined
  | Date
  | RegExp
  | object
  | Map<any, any>
  | WeakMap<any, any>
  | Set<any>
  | WeakSet<any>
  | Promise<any>
  | any[]
  | Function;
```

For types it doesn't know about, the component should try to find a name or string to display.

## Usage

Then to use the component in your code just import it!

```js
import { ObjectInspector } from "@devtools-ds/object-inspector";

const data = {
  string: "string",
  boolean: true,
  number: 100,
};

<ObjectInspector data={data} expandLevel={1} sortKeys={true} />;
```

## Callbacks

`onSelect`

This function is called with the selected AST node (after parsing the `data` prop with `@devtools-ds/object-parser`). With the selected node, you're able to traverse up/down the tree, and act on the currently selected node (like displaying additional details about that property).

## FAQ

### Why is [insert type] type not supported better?

Some types like `WeakSet`, `WeakMap`, etc. cannot be easily inspected using the JavaScript APIs. Promises are similar, although there is a workaround using `Promise.race` that forces most things in this component to be asynchronous. The reason they work nicely in the browsers is because they have access to the JavaScript engine APIs which gives them a lot more control.

If you see a type that is missing and easy to support, feel free to open an issue or PR to add it.

### Why does [insert property] property not always match my browser?

I had a goal with this project to look at both the Chrome and Firefox inspectors to ideally support theming based on browser. Sometimes things couldn't be themed simply between the two and compromises were made. For example Chrome mixes a double underscore syntax like `__proto__` with a double bracket syntax like `[[Entries]]`. Firefox is much more consistent with a `<prototype>` and `<entries>` syntax so I decided to stick with that. There were some compromises in both directions for consistency.

I'm open to suggestions on ways this can be improved.

### Why is [insert property] color slightly different?

For the most part, the colors should be near identical to the browser implementations.

Sometimes there were complicated colors across browsers, where one might take three colors to do what the other does in one. These were basically evaluated case-by-case looking at the added complexity. Sometimes browsers had colors that were really light and had really bad contrast. In the interest of accessibility I sometimes left these a bolder color.

## Useful References

- [MDN Object Types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [MDN Typed Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="#design-tylerkrupicka" title="Design">🎨</a> <a href="#infra-tylerkrupicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tylerkrupicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/adierkens"><img src="https://avatars.githubusercontent.com/u/13004162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Dierkens</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Documentation">📖</a> <a href="#example-adierkens" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
