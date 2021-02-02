# @devtools-ds/navigation

A navigation bar with tabs and icons, based on the tab navigation in browser inspectors.

## Installation

```sh
npm i @devtools-ds/nav
# or with yarn
yarn add @devtools-ds/nav
```

## Accessibility Approach

This component is a combination of a few user interaction patterns. At it's core, the `Navigation` is a top-level navigation for the current page. Inside of that, it contains `Tabs` that follow the [WAI-ARIA TabPanel Specification](https://www.w3.org/TR/wai-aria-practices-1.2/#tabpanel). For the tabs we use [@reach/tabs](https://reach.tech/tabs/#tabs-keyboardactivation) to set up the correct attributes and keyboard interaction.

## Usage

```js
import { Navigation } from "@devtools-ds/navigation";

export const BasicUsage = () => {
  return (
    <Navigation>
      <Navigation.Controls>
        <Navigation.Left>
          <Navigation.Button
            icon={<SelectIcon inline />}
            aria-label="Inspect page"
          />
          <Navigation.Divider />
        </Navigation.Left>
        <Navigation.TabList>
          <Navigation.Tab id="elements" icon={<InspectorIcon inline />}>
            Elements
          </Navigation.Tab>
          <Navigation.Tab id="console" icon={<ConsoleIcon inline />}>
            Console
          </Navigation.Tab>
          <Navigation.Tab id="debugger" icon={<DebuggerIcon inline />}>
            Debugger
          </Navigation.Tab>
          <Navigation.Tab id="styles" icon={<StylesIcon inline />}>
            Style Editor
          </Navigation.Tab>
          <Navigation.Tab id="performance" icon={<OdometerIcon inline />}>
            Performance
          </Navigation.Tab>
          <Navigation.Tab id="memory" icon={<MemoryIcon inline />}>
            Memory
          </Navigation.Tab>
        </Navigation.TabList>

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
      </Navigation.Controls>
      <Navigation.Panels>
        <Navigation.Panel>Elements</Navigation.Panel>
        <Navigation.Panel>Console</Navigation.Panel>
        <Navigation.Panel>Debugger</Navigation.Panel>
        <Navigation.Panel>Styles</Navigation.Panel>
        <Navigation.Panel>Performance</Navigation.Panel>
        <Navigation.Panel>Memory</Navigation.Panel>
      </Navigation.Panels>
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
    <td align="center"><a href="https://github.com/adierkens"><img src="https://avatars.githubusercontent.com/u/13004162?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam Dierkens</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Code">💻</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=adierkens" title="Documentation">📖</a> <a href="#design-adierkens" title="Design">🎨</a></td>
    <td align="center"><a href="http://tylerkrupicka.com/"><img src="https://avatars.githubusercontent.com/u/5761061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Tyler Krupicka</b></sub></a><br /><a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Documentation">📖</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Code">💻</a> <a href="#example-tylerkrupicka" title="Examples">💡</a> <a href="https://github.com/design-systems/devtools-ds/commits?author=tylerkrupicka" title="Tests">⚠️</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
