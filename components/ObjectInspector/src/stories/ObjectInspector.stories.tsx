import React from "react";
import { boolean, number } from "@storybook/addon-knobs";
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

export const Playground = () => {
  const onSelect = action("onSelect");
  return (
    <ObjectInspector
      data={data}
      expandLevel={number("Expand Level", 1)}
      sortKeys={boolean("Sort Keys", true)}
      includePrototypes={boolean("Include Prototypes", true)}
      onSelect={onSelect}
    />
  );
};
