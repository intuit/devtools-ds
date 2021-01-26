# @devtools-ds/diagnostic

The `Diagnostic` component displays errors and warnings from code, similar to errors produced by tools like webpack. It can also be used to display errors produced by a [Language Server](https://code.visualstudio.com/api/language-extensions/language-server-extension-guide).

## Installation

```sh
npm i @devtools-ds/diagnostic
# or with yarn
yarn add @devtools-ds/diagnostic
```

## Accessibility Approach

The `Diagnostic` is a block of preformatted text that can be difficult for screen readers to read. Based on this, we followed the [MDN suggestion](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre#accessibility_concerns) to treat the component as a `figure`.
There is an auto-generated caption describing the error in a screen-reader friendly way.

## Usage

```jsx
import { Diagnostic } from "@devtools-ds/diagnostic";
```

### Basic Diagnostic

```jsx
<Diagnostic message={message} lines={lines} severity={severity} />
```

### Diagnostic Using Language Server

```jsx
import { DiagnosticSeverity } from "vscode-languageserver-types";

<Diagnostic
  message={message}
  lines={lines}
  severity={transformLanguageServer(DiagnosticSeverity.Error)}
/>;
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ShelbyCohen"><img src="https://avatars.githubusercontent.com/u/7768053?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shelby Cohen</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=ShelbyCohen" title="Code">💻</a> <a href="#design-ShelbyCohen" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/tylerkurpicka"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Documentation">📖</a> <a href="#design-tylerkurpicka" title="Design">🎨</a> <a href="#infra-tylerkurpicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tylerkurpicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkurpicka" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/adierkens"><img src="https://avatars.githubusercontent.com/u/13004162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Dierkens</b></sub></a><br /><a href="#design-adierkens" title="Design">🎨</a> <a href="#ideas-adierkens" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a> <a href="#example-tylerkrupicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
