import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Table } from ".";

class ResizeObserver {
  observe() {}
  unobserve() {}
}

describe("Table", () => {
  // @ts-ignore
  window.ResizeObserver = ResizeObserver;
  test("Handles mouse and keyboard selection", () => {
    let selected = "";

    const { getByText } = render(
      <Table
        onSelected={(value) => {
          selected = value;
        }}
      >
        <Table.Body>
          <Table.Row id="one">
            <Table.Cell>200</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>Testing</Table.Cell>
            <Table.Cell>4.6 KB</Table.Cell>
          </Table.Row>
          <Table.Row id="two">
            <Table.Cell>301</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>localhost:6006</Table.Cell>
            <Table.Cell>0.2 KB</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    const first = getByText("Testing");
    first?.focus();

    // Open root
    fireEvent.keyDown(first, {
      key: "Enter",
      keyCode: 13,
    });

    // Test selected element
    expect(selected).toStrictEqual("one");

    // Close root
    fireEvent.click(getByText("localhost:6006"));
    // Test active element
    expect(selected).toStrictEqual("two");
  });

  test("Displays Data", () => {
    const { getByText } = render(
      <Table>
        <Table.Head>
          <Table.Row>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Method</Table.HeadCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row id="one">
            <Table.Cell>200</Table.Cell>
            <Table.Cell>GET</Table.Cell>
          </Table.Row>
          <Table.Row id="two">
            <Table.Cell>301</Table.Cell>
            <Table.Cell>GET</Table.Cell>
          </Table.Row>
          <Table.Row id="three">
            <Table.Cell>400</Table.Cell>
            <Table.Cell>POST</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    expect(getByText("Status")).toBeVisible();
    expect(getByText("200")).toBeVisible();
    expect(getByText("301")).toBeVisible();
    expect(getByText("POST")).toBeVisible();
  });

  test("Handles arrow keys", () => {
    let selected = "";

    const { getByText } = render(
      <Table
        onSelected={(value) => {
          selected = value;
        }}
      >
        <Table.Body>
          <Table.Row id="one">
            <Table.Cell>200</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>Testing</Table.Cell>
            <Table.Cell>4.6 KB</Table.Cell>
          </Table.Row>
          <Table.Row id="two">
            <Table.Cell>301</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>localhost:6006</Table.Cell>
            <Table.Cell>0.2 KB</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    const first = getByText("Testing");
    first?.focus();

    // focus second
    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowDown",
      keyCode: 40,
    });

    expect(document.activeElement?.textContent).toContain("localhost:6006");

    fireEvent.keyDown(document.activeElement || document, {
      key: "ArrowUp",
      keyCode: 38,
    });

    expect(document.activeElement?.textContent).toContain("Testing");

    // Open root
    fireEvent.keyDown(first, {
      key: "Enter",
      keyCode: 13,
    });

    // Test selected element
    expect(selected).toStrictEqual("one");
  });

  test("Handles page and home keys", () => {
    const { getByText } = render(
      <Table onSelected={() => {}}>
        <Table.Body>
          <Table.Row id="one">
            <Table.Cell>200</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>Testing</Table.Cell>
            <Table.Cell>4.6 KB</Table.Cell>
          </Table.Row>
          <Table.Row id="two">
            <Table.Cell>301</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>Middling</Table.Cell>
            <Table.Cell>0.2 KB</Table.Cell>
          </Table.Row>
          <Table.Row id="three">
            <Table.Cell>301</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>Ending</Table.Cell>
            <Table.Cell>0.2 KB</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
    const first = getByText("Testing");
    first?.focus();

    fireEvent.keyDown(document.activeElement || document, {
      key: "PageDown",
    });

    expect(document.activeElement?.textContent).toContain("Ending");

    fireEvent.keyDown(document.activeElement || document, {
      key: "PageUp",
    });

    expect(document.activeElement?.textContent).toContain("Testing");

    fireEvent.keyDown(document.activeElement || document, {
      key: "End",
    });

    expect(document.activeElement?.textContent).toContain("Ending");

    fireEvent.keyDown(document.activeElement || document, {
      key: "Home",
    });

    expect(document.activeElement?.textContent).toContain("Testing");
  });

  test("Is not interactive without onSelected", () => {
    const { getByText } = render(
      <Table>
        <Table.Body>
          <Table.Row id="one">
            <Table.Cell>200</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>Testing</Table.Cell>
            <Table.Cell>4.6 KB</Table.Cell>
          </Table.Row>
          <Table.Row id="two">
            <Table.Cell>301</Table.Cell>
            <Table.Cell>GET</Table.Cell>
            <Table.Cell>localhost:6006</Table.Cell>
            <Table.Cell>0.2 KB</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );

    // Close root
    fireEvent.click(getByText("localhost:6006"));
    // Test active element
    expect(document.activeElement?.nodeName).toStrictEqual("BODY");
  });
});
