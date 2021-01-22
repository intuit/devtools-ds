import React from "react";
import { select } from "@storybook/addon-knobs";
import { callback } from "@devtools-ds/storybook-utils";

import {
  Console,
  ExecuteFunction,
  ConsoleResultDefault,
  ConsoleResultInspector,
  ConsoleExpression,
} from "..";
import notes from "../../README.md";

export default {
  title: "Components/Console",
  parameters: { notes },
};

const resultComponents: { [key: string]: any } = {
  ConsoleResultDefault,
  ConsoleResultInspector,
};

export const Playground = () => {
  const [history, setHistory] = React.useState<ConsoleExpression[]>([]);

  const commaEvaluate: ExecuteFunction = (expression: string) => {
    const run: ConsoleExpression = {
      id: history.length.toString(),
      expression,
      result: expression.split(" ").join(", "),
    };
    setHistory((oldArray) => [...oldArray, run]);
  };

  const splitEvaluate: ExecuteFunction = (expression: string) => {
    const run: ConsoleExpression = {
      id: history.length.toString(),
      expression,
      result: expression.split(" "),
    };
    setHistory((oldArray) => [...oldArray, run]);
  };

  const functions = {
    "Comma Separate": commaEvaluate,
    "Split Words": splitEvaluate,
  };

  const choice = select(
    "Evaluation Function",
    ["Comma Separate", "Split Words"],
    "Split Words"
  );

  const result = select(
    "Result Component",
    Object.keys(resultComponents),
    "ConsoleResultDefault"
  );

  return (
    <Console
      history={history}
      execute={callback(functions[choice])}
      resultComponent={callback(resultComponents[result], `<${result} />`)}
    />
  );
};
