import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { Tree } from ".";

const TestTree = (
  <Tree label="Root">
    <Tree label="Branch One">
      <Tree label="Leaf One" />
      <Tree label="Leaf Two" />
    </Tree>
    <Tree label="Branch Two" />
    <Tree label="Branch Three" />
  </Tree>
);

const TestTreeOpen = (
  <Tree open label="Root">
    <Tree open label="Branch One">
      <Tree label="Leaf One" />
      <Tree label="Leaf Two" />
    </Tree>
    <Tree open label="Branch Two" />
    <Tree open label="Branch Three" />
  </Tree>
);

describe("Tree", () => {
  test("Has a top level tree", () => {
    const { container } = render(TestTree);
    const root = container.querySelector("ul");
    expect(root?.getAttribute("role")).toStrictEqual("tree");
  });

  test("Focuses first element", () => {
    const { getByRole } = render(TestTree);
    const root = getByRole("tree");
    root?.focus();

    // Test active element
    const active = document.activeElement;
    expect(active?.getAttribute("role")).toStrictEqual("button");
    expect(active?.parentElement?.getAttribute("aria-selected")).toStrictEqual(
      "true"
    );
  });

  test("Works with one child", () => {
    const { getByRole } = render(
      <Tree label="Root">
        <Tree label="Leaf One" />
      </Tree>
    );
    expect(getByRole("tree")).not.toBeNull();
  });

  test("Calls onUpdate", () => {
    let open = false;
    const onUpdate = (value: boolean) => {
      open = value;
    };

    const { getByRole } = render(
      <Tree label="Root" onUpdate={onUpdate}>
        <Tree label="Leaf One" />
        <Tree label="Leaf Two" />
      </Tree>
    );
    const root = getByRole("tree");
    root?.focus();

    // Open root
    fireEvent.keyDown(document.activeElement || document, {
      key: "Enter",
      keyCode: 13,
    });

    // Test active element
    expect(open).toStrictEqual(true);

    // Close root
    fireEvent.keyDown(document.activeElement || document, {
      key: "Enter",
      keyCode: 13,
    });

    // Test active element
    expect(open).toStrictEqual(false);
  });

  test("Calls onSelect", async () => {
    const onSelect = jest.fn();

    const { getByRole } = render(
      <Tree open label="Root" onSelect={onSelect}>
        <Tree label="Leaf One" onSelect={onSelect} />
        <Tree label="Leaf Two" />
      </Tree>
    );
    const root = getByRole("tree");
    root?.focus();

    // Test active element
    expect(onSelect).toHaveBeenCalled();

    act(() => {
      fireEvent.keyDown(document.activeElement || document, {
        key: "ArrowDown",
        keyCode: 40,
      });
    });

    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  test("Navigates using Enter", () => {
    const { getByRole, getByText, queryByText } = render(TestTree);
    const root = getByRole("tree");
    root?.focus();

    // Open root
    fireEvent.keyDown(document.activeElement || document, {
      key: "Enter",
      keyCode: 13,
    });

    expect(getByText("Branch One")).not.toBeNull();

    // Close root
    fireEvent.keyDown(document.activeElement || document, {
      key: "Enter",
      keyCode: 13,
    });

    expect(queryByText("Branch One")).toBeNull();
  });

  test("Can be open by default", () => {
    const { getByText } = render(TestTreeOpen);
    expect(getByText("Branch One")).not.toBeNull();
    expect(getByText("Leaf One")).not.toBeNull();
  });

  test("Navigates using left arrow", () => {
    const { getByText } = render(TestTreeOpen);
    const leaf = getByText("Leaf Two");

    fireEvent.click(leaf);

    expect(document.activeElement?.textContent).toBe("Leaf Two");

    // Go up a level
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowLeft",
      keyCode: 37,
    });

    expect(document.activeElement?.isSameNode(leaf)).not.toBe(true);
    expect(document.activeElement?.textContent).toBe("Branch One");
  });

  test("Navigates using right arrow", () => {
    const { getByRole, getByText } = render(TestTree);
    const root = getByRole("tree");
    root?.focus();

    // Open root
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowRight",
      keyCode: 39,
    });
    // Move focus to branch one
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowRight",
      keyCode: 39,
    });

    expect(getByText("Branch One")).not.toBeNull();

    // Open branch one
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowRight",
      keyCode: 39,
    });
    // Focus to leaf
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowRight",
      keyCode: 39,
    });

    expect(getByText("Leaf One")).not.toBeNull();

    // Doesn't move to second leaf
    const leaf = document.activeElement;
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowRight",
      keyCode: 39,
    });
    expect(document.activeElement?.isSameNode(leaf)).toBe(true);
  });

  test("Navigates using Home", () => {
    const { getByText } = render(TestTreeOpen);
    const leaf = getByText("Leaf Two");

    fireEvent.click(leaf);

    expect(document.activeElement?.textContent).toBe("Leaf Two");

    // Go home
    fireEvent.keyDown(document.activeElement || document, {
      key: "Home",
      keyCode: 36,
    });

    expect(document.activeElement?.textContent).toContain("Root");
  });

  test("Navigates using End", () => {
    const { getByText } = render(TestTreeOpen);
    const leaf = getByText("Leaf Two");

    fireEvent.click(leaf);

    expect(document.activeElement?.textContent).toBe("Leaf Two");

    // Go End
    fireEvent.keyDown(document.activeElement || document, {
      key: "End",
      keyCode: 35,
    });

    expect(document.activeElement?.textContent).toContain("Branch Three");
  });

  test("Moves selection when clicking", () => {
    const { getByText } = render(TestTreeOpen);

    fireEvent.click(getByText("Leaf Two"));
    expect(document.activeElement?.textContent).toBe("Leaf Two");

    fireEvent.click(getByText("Leaf One"));
    expect(document.activeElement?.textContent).toBe("Leaf One");
  });

  test("Navigates using Arrow keys", () => {
    const { getByText } = render(TestTreeOpen);
    const leaf = getByText("Leaf Two");

    fireEvent.click(leaf);

    expect(document.activeElement?.textContent).toBe("Leaf Two");

    // Go down two
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowDown",
      keyCode: 40,
    });
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowDown",
      keyCode: 40,
    });

    expect(document.activeElement?.textContent).toContain("Branch Three");

    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowUp",
      keyCode: 38,
    });

    expect(document.activeElement?.textContent).toContain("Branch Two");
  });
});
