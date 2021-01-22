import React from "react";
import { render, waitFor, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { ObjectInspector } from "./ObjectInspector";

const testFunction = () => {
  setTimeout(() => {}, 2000);
};

const promise = new Promise((resolve) => {
  resolve(42);
});

const map = new Map();
map.set("foo", "bar");

const set = new Set();
set.add("test");

const data = {
  string: "string",
  boolean: true,
  number: 100,
  promise,
  null: null,
  map,
  set,
  function: testFunction,
  error: new Error("You broke it"),
  date: new Date(),
  symbol: Symbol("foo"),
  regex: /[A-Z]/g,
  "test-undefined": undefined,
  array: [
    "fun",
    {
      object: {
        nesting: true,
      },
    },
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    9,
    10,
  ],
  object: {
    working: "properly",
  },
};

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
    await act(() => {
      const { getByText } = render(
        <ObjectInspector
          data={nested}
          expandLevel={3}
          includePrototypes={false}
        />
      );
      waitFor(() => expect(getByText("<prototype>")).not.toBeDefined());
    });
    await act(() => {
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

      await act(() => {
        fireEvent.click(two);
      });

      expect(onSelect).toHaveBeenCalledTimes(1);
      expect(onSelect.mock.calls[0][0].key).toBe("two");
    });
  });
});
