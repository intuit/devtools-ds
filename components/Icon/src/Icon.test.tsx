import React from "react";
import { render } from "@testing-library/react";
import AlertIcon from "./icons/AlertIcon";

describe("Atomic Icon", () => {
  test("Passes props.", () => {
    const { container } = render(<AlertIcon size="medium" id="test" />);
    const icon = container.querySelector("svg") as SVGSVGElement;
    expect(icon.id).toBe("test");
  });

  test("Is hidden for screen readers.", () => {
    const { container } = render(<AlertIcon size="medium" id="test" />);
    const icon = container.querySelector("svg") as SVGSVGElement;
    expect(icon.hasAttribute("aria-hidden")).toBe(true);
  });
});
