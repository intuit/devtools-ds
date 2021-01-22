import React from "react";
import { select, text } from "@storybook/addon-knobs";
import { Diagnostic, DiagnosticLine } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Diagnostic",
  parameters: {
    notes,
    fontSize: {
      fontSize: "14px",
    },
  },
};

const lines: DiagnosticLine[] = [
  {
    number: "60",
    content: "const config = loadConfig();",
  },
  {
    number: "61",
    content: `const cli = await getApplicationDefinition(config);`,
  },
  {
    number: "62",
    content: "const args = app(cli);",
    highlight: true,
  },
  {
    number: "63",
    content: "",
  },
  {
    number: "64",
    content: "if (!args) {",
  },
  {
    number: "65",
    content: "  return;",
  },
  {
    number: "66",
    content: "}",
  },
];

export const Playground = () => {
  const severity = select("severity", ["error", "warning"], "warning");
  const message = text("message", "invalid data");
  return <Diagnostic message={message} lines={lines} severity={severity} />;
};
