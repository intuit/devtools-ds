import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Console } from ".";

const INPUT_LABEL = "Enter an expression";

function enterText(input: HTMLElement, value: string) {
  act(() => {
    fireEvent.change(input, { target: { value } });
  });

  act(() => {
    fireEvent.keyDown(input, { key: "Enter" });
  });
}

function enterKeyAndAssertValue(
  input: HTMLInputElement,
  key: string,
  value: string
) {
  act(() => {
    fireEvent.keyDown(input, { key });
  });

  expect(input.value).toBe(value);
}

describe("Console", () => {
  test("It matches the snapshot", () => {
    const { container } = render(<Console />);
    expect(container).toMatchSnapshot();
  });

  test("updates console history by default", () => {
    const { getByLabelText, container } = render(<Console />);
    const input = getByLabelText(INPUT_LABEL);
    enterText(input, "Some expression");
    expect(container.querySelectorAll("li")).toHaveLength(1);

    enterText(input, "Some other expression");
    expect(container.querySelectorAll("li")).toHaveLength(2);
  });

  test("calls custom execute function", () => {
    const onExec = jest.fn();

    const { getByLabelText } = render(<Console execute={onExec} />);

    const input = getByLabelText(INPUT_LABEL);
    enterText(input, "Some expression");

    expect(onExec).toHaveBeenCalledTimes(1);
    expect(onExec).toHaveBeenCalledWith("Some expression");
  });

  test("Uses arrow keys to go through history", () => {
    const { getByLabelText } = render(<Console />);

    const input = getByLabelText(INPUT_LABEL) as HTMLInputElement;

    enterText(input, "Exp 1");
    enterText(input, "Exp 2");
    enterText(input, "Exp 3");
    expect(input.value).toBe("");

    enterKeyAndAssertValue(input, "ArrowUp", "Exp 3");
    enterKeyAndAssertValue(input, "ArrowUp", "Exp 2");
    enterKeyAndAssertValue(input, "ArrowUp", "Exp 1");
    enterKeyAndAssertValue(input, "ArrowUp", "Exp 1");
    enterKeyAndAssertValue(input, "ArrowDown", "Exp 2");
    enterKeyAndAssertValue(input, "ArrowDown", "Exp 3");
    enterKeyAndAssertValue(input, "ArrowDown", "");
    enterKeyAndAssertValue(input, "ArrowDown", "");
  });
});
