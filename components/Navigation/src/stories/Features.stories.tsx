import React from "react";
import {
  CloseIcon,
  ConsoleIcon,
  InspectorIcon,
  DebuggerIcon,
  MemoryIcon,
  MoreInfoIcon,
  NewWindowIcon,
  SelectIcon,
  StylesIcon,
  OdometerIcon,
} from "@devtools-ds/icon";
import { Navigation } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Navigation/Features",
  parameters: { notes },
};

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

export const WithoutIcons = () => {
  return (
    <Navigation>
      <Navigation.Controls>
        {" "}
        <Navigation.Left>
          <Navigation.Button
            icon={<SelectIcon inline />}
            aria-label="Inspect page"
          />
          <Navigation.Divider />
        </Navigation.Left>
        <Navigation.TabList>
          <Navigation.Tab id="elements">Elements</Navigation.Tab>
          <Navigation.Tab id="console">Console</Navigation.Tab>
          <Navigation.Tab id="debugger">Debugger</Navigation.Tab>
          <Navigation.Tab id="styles">Style Editor</Navigation.Tab>
          <Navigation.Tab id="performance">Performance</Navigation.Tab>
          <Navigation.Tab id="memory">Memory</Navigation.Tab>
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

export const SelectedIndex = () => {
  return (
    <Navigation defaultIndex={1}>
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
