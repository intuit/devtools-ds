# @devtools-ds/navigation

A navigation bar with tabs and icons, based on the tab navigation in browser inspectors.

## Installation

```sh
npm i @devtools-ds/nav
# or with yarn
yarn add @devtools-ds/nav
```

## Usage

```js
import { Nav } from "@devtools-ds/navigation";

export const BasicUsage = () => {
  const [selected, setSelected] = React.useState("inspector");

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setSelected(e.currentTarget.id);
  };

  return (
    <Navigation selectedTabId={selected}>
      <Navigation.Left>
        <Navigation.Button
          icon={<SelectIcon inline />}
          aria-label="Inspect page"
        />
        <Navigation.Divider />
      </Navigation.Left>
      <Navigation.Overflow>
        <Navigation.Tab
          id="elements"
          icon={<InspectorIcon inline />}
          onClick={onClick}
        >
          Elements
        </Navigation.Tab>
        <Navigation.Tab
          id="console"
          icon={<ConsoleIcon inline />}
          onClick={onClick}
        >
          Console
        </Navigation.Tab>
        <Navigation.Tab
          id="debugger"
          icon={<DebuggerIcon inline />}
          onClick={onClick}
        >
          Debugger
        </Navigation.Tab>
        <Navigation.Tab
          id="styles"
          icon={<StylesIcon inline />}
          onClick={onClick}
        >
          Style Editor
        </Navigation.Tab>
        <Navigation.Tab
          id="performance"
          icon={<OdometerIcon inline />}
          onClick={onClick}
        >
          Performance
        </Navigation.Tab>
        <Navigation.Tab
          id="memory"
          icon={<MemoryIcon inline />}
          onClick={onClick}
        >
          Memory
        </Navigation.Tab>
      </Navigation.Overflow>
      <Navigation.Right>
        <Navigation.Button
          icon={<NewWindowIcon inline />}
          aria-label="New Window"
        />

        <Navigation.Divider />
        <Navigation.Button
          icon={<MoreInfoIcon inline />}
          aria-label="More settings"
        />
        <Navigation.Button
          icon={<CloseIcon inline />}
          aria-label="Close panel"
        />
      </Navigation.Right>
    </Navigation>
  );
};
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/adierkens"><img src="https://github.com/avatars/u/3981??s=100" width="100px;" alt=""/><br /><sub><b>Adam Dierkens</b></sub></a><br /><a href="https://github.com/intuit/devtools-ds/commits?author=adierkens" title="Code">💻</a> <a href="https://github.com/intuit/devtools-ds/commits?author=adierkens" title="Documentation">📖</a> <a href="#design-adierkens" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/tkrupicka"><img src="https://github.com/avatars/u/3976??s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/intuit/devtools-ds/commits?author=tkrupicka" title="Code">💻</a> <a href="https://github.com/intuit/devtools-ds/commits?author=tkrupicka" title="Documentation">📖</a> <a href="#infra-tkrupicka" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#example-tkrupicka" title="Examples">💡</a> <a href="https://github.com/intuit/devtools-ds/commits?author=tkrupicka" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
