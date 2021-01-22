import React from "react";
import { DiagnosticSeverity } from "vscode-languageserver-types";
import { Diagnostic, DiagnosticLine, transformLanguageServer } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Diagnostic/Features",
  parameters: {
    notes,
    fontSize: {
      fontSize: "14px",
    },
  },
};

export const BasicUsage = () => {
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

  return <Diagnostic message="invalid data" lines={lines} />;
};

export const Error = () => {
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

  return <Diagnostic message="invalid data" lines={lines} severity="error" />;
};

export const LanguageServer = () => {
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
  return (
    <Diagnostic
      message="invalid data"
      lines={lines}
      severity={transformLanguageServer(DiagnosticSeverity.Error)}
    />
  );
};
