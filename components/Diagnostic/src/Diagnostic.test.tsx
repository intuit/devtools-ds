import React from "react";
import { render } from "@testing-library/react";
import { DiagnosticSeverity } from "vscode-languageserver-types";
import {
  Diagnostic,
  DiagnosticLine,
  transformLanguageServer,
  generateDescription,
} from ".";

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

// 'Implement' innerText in JSDOM: https://github.com/jsdom/jsdom/issues/1245
global.Element = window.Element;
Object.defineProperty(global.Element.prototype, "innerText", {
  get() {
    return this.textContent;
  },
});

describe("Diagnostic", () => {
  test("It renders multiple lines", () => {
    const { getByText } = render(<Diagnostic lines={lines} severity="error" />);
    expect(getByText("60| const config = loadConfig();")).toBeInTheDocument();
    expect(getByText("66| }")).toBeInTheDocument();
  });

  test("Adds a screen-reader friendly description", () => {
    const { container } = render(<Diagnostic lines={lines} severity="error" />);
    const caption = container.getElementsByTagName("figcaption")[0];
    expect(caption?.innerText).toBe(generateDescription(lines, "error"));
  });

  test("transform language server", () => {
    expect(transformLanguageServer(DiagnosticSeverity.Error)).toBe("error");
    expect(transformLanguageServer(DiagnosticSeverity.Warning)).toBe("warning");
    expect(transformLanguageServer(DiagnosticSeverity.Hint)).toBe("warning");
    expect(transformLanguageServer(DiagnosticSeverity.Information)).toBe(
      "warning"
    );
  });
});
