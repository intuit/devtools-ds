# @devtools-ds/console

The `Console` component emulates the familiar JavaScript REPL experience seen in many browsers. You can customize the function that executes the code, as well as how results are displayed.

## Installation

```sh
npm i @devtools-ds/console
# or with yarn
yarn add @devtools-ds/console
```

Then to use the component in your code just import it!

```js
import { Console } from "@devtools-ds/console";
```

## Usage

Render the console, and pass a function to execute an expression.
The result of the execution will display using the `ObjectInspector`.

```jsx
<Console execute={() => {}} />
```

### Custom Rendering

You can also customize how the results are displayed.
Provide a component with a `result` property and it will be used instead.

In browsers, the console displays results using an `ObjectInspector`.
This package exports a `ConsoleResultInspector` component which mirrors that behavior using `@devtools-ds/object-inspector`.
We don't set it as the default `resultComponent` for performance reasons; that would cause `@devtools-ds/object-inspector` to always be imported even if you don't use it.

```tsx
import {
  Console,
  ConsoleExpression,
  ConsoleResultInspector,
  ConsoleResultProps,
} from "@devtools-ds/console";

/** A custom result component */
export const ConsoleResultCustom = ({ result }: ConsoleResultProps) => {
  return <div>{result}</div>;
};

// Use the custom result component
<Console resultComponent={ConsoleResultCustom} />

// Use @devtools-ds/object-inspector
<Console resultComponent={ConsoleResultInspector} />
```

### Controlled History

By default, the `Console` component will automatically maintain state for you. If you'd like to control it yourself, you can provide your own `history`.

```jsx
  const [history, setHistory] = React.useState<ConsoleExpression[]>([]);

  return (
    <Console
      history={history}
      execute={callback((expression: string) => {
        const run: ConsoleExpression = {
          id: history.length.toString(),
          expression,
          result: expression,
        };
        setHistory((oldHistory) => [...oldHistory, run]);
      })}
    />
  );
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/adierkens"><img src="https://avatars.githubusercontent.com/u/13004162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Dierkens</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Documentation">📖</a> <a href="#design-adierkens" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/tylerkurpicka"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Documentation">📖</a> <a href="#design-tylerkurpicka" title="Design">🎨</a> <a href="#infra-tylerkurpicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tylerkurpicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Tests">⚠️</a></td>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
