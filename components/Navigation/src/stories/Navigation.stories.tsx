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
  title: "Components/Navigation",
  parameters: { notes },
};

export const Playground = () => {
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
