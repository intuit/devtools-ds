import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ObjectInspector } from "./ObjectInspector";

const map = new Map();
map.set("foo", "bar");

const set = new Set();
set.add("test");

describe("ObjectInspector", () => {
  test("It opens to expand level", async () => {
    const nested = {
      one: {
        two: {
          three: "test",
        },
      },
    };
    await act(async () => {
      const { getByText } = render(
        <ObjectInspector
          data={nested}
          expandLevel={3}
          includePrototypes={false}
        />
      );
      await waitFor(() => expect(getByText('"test"')).toBeDefined());
    });
  });

  test("Disables prototypes", async () => {
    const nested = {
      one: {
        two: {
          three: "test",
        },
      },
    };
    await act(async () => {
      const { getByText } = render(
        <ObjectInspector
          data={nested}
          expandLevel={3}
          includePrototypes={false}
        />
      );
      waitFor(() => expect(getByText("<prototype>")).not.toBeDefined());
    });
    act(() => {
      const { getByText } = render(
        <ObjectInspector data={nested} expandLevel={3} />
      );
      waitFor(() => expect(getByText("<prototype>")).toBeDefined());
    });
  });

  test("It calls onSelect correctly", async () => {
    const onSelect = jest.fn();
    const nested = {
      one: {
        two: {
          three: "test",
        },
      },
    };
    await act(async () => {
      const { getByText } = render(
        <ObjectInspector
          data={nested}
          expandLevel={3}
          includePrototypes={false}
          onSelect={onSelect}
        />
      );

      await waitFor(() => expect(getByText('"test"')).toBeDefined());

      const two = getByText("two:");

      fireEvent.click(two);

      expect(onSelect).toHaveBeenCalledTimes(1);
      expect(onSelect.mock.calls[0][0].key).toBe("two");
    });
  });
});
