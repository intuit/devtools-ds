import React from "react";
import { render } from "@testing-library/react";

import { ThemeGrid } from "./ThemeGrid";
import { chrome } from "../themes";
import styles from "./ThemeGrid.css";

describe("ThemeGrid", () => {
  test("Create Component with chrome theme", () => {
    const name = "Chrome";
    const { container } = render(<ThemeGrid name={name} theme={chrome} />);

    const themeElements = container.getElementsByClassName(styles.theme);
    const themeHeadings = container.getElementsByTagName("h1");

    expect(themeElements).toHaveLength(1);
    expect(themeHeadings[0].textContent).toBe(`${name} - Light`);
    expect(themeHeadings[1].textContent).toBe(`${name} - Dark`);
  });
  test("It matches the snapshot", () => {
    const { container } = render(<ThemeGrid name="Chrome" theme={chrome} />);
    expect(container).toMatchSnapshot();
  });
});
