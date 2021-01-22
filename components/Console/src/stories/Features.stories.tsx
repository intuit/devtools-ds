import React from "react";
import { callback } from "@devtools-ds/storybook-utils";

import { Console, ConsoleExpression, ConsoleResultInspector } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Console/Features",
  parameters: { notes },
};

export const BasicUsage = () => <Console />;

export const CustomFunction = () => (
  <Console execute={(exp: string) => exp.replace(" ", "")} />
);

export const CustomResult = () => {
  return <Console resultComponent={ConsoleResultInspector} />;
};

export const Controlled = () => {
  const h: ConsoleExpression[] = [
    { id: "1", expression: "some long expression", result: { foo: "bar" } },
    {
      id: "2",
      expression: "some error expression",
      result: new Error("This is broken"),
    },
    {
      id: "3",
      expression: "some long expression",
      result: ["item 1", "item 2"],
    },
    {
      id: "4",
      expression: "another error",
      result: "Invalid input",
      severity: "error",
    },
    {
      id: "5",
      expression: "a warning",
      result: { foo: "bar" },
      severity: "warning",
    },
  ];

  const [history, setHistory] = React.useState<ConsoleExpression[]>(h);

  return (
    <Console
      history={history}
      resultComponent={ConsoleResultInspector}
      execute={callback((expression: string) => {
        const run: ConsoleExpression = {
          id: history.length.toString(),
          expression,
          result: expression,
        };
        setHistory((oldArray) => [...oldArray, run]);
      })}
    />
  );
};

export const Overflowing = () => (
  <div>
    <p>
      The following console is wrapped in a fixed size container to test
      overflow and scrolling.
    </p>
    <div
      style={{
        border: "1px solid #EFEFEF",
        padding: "5px",
        borderRadius: "4px",
        height: "100px",
      }}
    >
      <BasicUsage />
    </div>
  </div>
);
