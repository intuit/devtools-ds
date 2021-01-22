import React from "react";
import { render } from "@testing-library/react";
import { DOMInspector } from ".";

const div = document.createElement("div");
const html = `
      <!--This is a comment-->
      <span>A span</span>
      <span>A span that is filled with longer text that should probably be truncated because it is so long.</span>
`;
div.insertAdjacentHTML("beforeend", html);

describe("DOMInspector", () => {
  test("It renders a div", () => {
    const { getAllByText } = render(<DOMInspector data={div} />);
    expect(getAllByText("div")).toHaveLength(2);
  });

  test("It expands to a level", () => {
    const { getByText } = render(<DOMInspector data={div} expandLevel={2} />);
    expect(
      getByText(
        "A span that is filled with longer text that should probably be truncated because it is so long."
      )
    ).toBeDefined();
  });
});
