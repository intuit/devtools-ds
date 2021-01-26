import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
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
import { Navigation } from ".";

/*
I had trouble getting fired keyboard events to work on this component.
Feel free to add tests if you can get it to work!
*/

const Example = () => {
  return (
    <Navigation data-testid="root">
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
        <Navigation.Panel>Console Test</Navigation.Panel>
        <Navigation.Panel>Debugger</Navigation.Panel>
        <Navigation.Panel>Styles</Navigation.Panel>
        <Navigation.Panel>Performance</Navigation.Panel>
        <Navigation.Panel>Memory</Navigation.Panel>
      </Navigation.Panels>
    </Navigation>
  );
};

describe("Navigation", () => {
  test("Renders tabs and panels", () => {
    const { getAllByText } = render(<Example />);

    expect(getAllByText("Elements")).toHaveLength(2);
    expect(getAllByText("Debugger")).toHaveLength(2);
    expect(getAllByText("Memory")).toHaveLength(2);
  });

  test("Shows panels when selected", () => {
    const { getAllByText } = render(<Example />);

    const elements = getAllByText("Elements")[0];
    elements?.focus();

    expect(getAllByText("Console Test")[0]).not.toBeVisible();

    // Open root
    act(() => {
      fireEvent.click(getAllByText("Console")[0]);
    });

    expect(getAllByText("Console Test")[0]).toBeVisible();
  });
});
