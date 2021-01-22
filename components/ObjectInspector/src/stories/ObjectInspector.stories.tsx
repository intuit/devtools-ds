import React from "react";
import { boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import { ObjectInspector } from "../ObjectInspector";
import notes from "../../README.md";

export default {
  title: "Components/Object Inspector",
  parameters: { notes },
};

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
    function: testFunction,
  },
};

export const BasicUsage = () => (
  <ObjectInspector
    data={data}
    includePrototypes={boolean("Include Prototypes", true)}
  />
);

export const DefaultOpen = () => (
  <ObjectInspector expandLevel={2} data={data} />
);

export const DisableSorting = () => (
  <ObjectInspector sortKeys={false} data={data} />
);

export const FontInheritance = () => (
  <div style={{ fontSize: `16px` }}>
    <ObjectInspector sortKeys={false} data={data} />
  </div>
);

export const OnSelectCallback = () => {
  const onSelectAction = action("onSelect");

  return <ObjectInspector data={data} onSelect={onSelectAction} />;
};
