import React from "react";

import { ObjectInspector } from "../ObjectInspector";
import notes from "../../README.md";

export default {
  title: "Components/Object Inspector/Values",
  parameters: { notes },
};

// Set up variables
const testFunction = () => {
  setTimeout(() => {}, 1000);
};

const array = ["one", "two", "three", "four"];

const object = {
  tyler: "krupicka",
  adam: "dierkens",
};

const int8 = new Int8Array([21, 31]);

const promisePending = new Promise(() => {});

const promise = new Promise((resolve) => {
  resolve(42);
});

const promiseRejected = new Promise((resolve, reject) => {
  reject(new Error("Rejected!"));
});

const myMap = new Map();
// setting the values
myMap.set("string", "string key");
myMap.set({}, "object key");
myMap.set(testFunction, "function key");
myMap.set("object value", { test: "working" });
myMap.set(42, 42);

const myWeakMap = new WeakMap();
myWeakMap.set({}, 42);

const myWeakSet = new WeakSet();
myWeakSet.add({});

const mySet = new Set();
mySet.add(42);
mySet.add({});
mySet.add("testing");

export const String = () => <ObjectInspector data="Hello, world" />;
export const Boolean = () => <ObjectInspector data={false} />;
export const Number = () => <ObjectInspector data={123456789} />;
export const InfinityStory = () => <ObjectInspector data={Infinity} />;
InfinityStory.story = {
  name: "Infinity",
};
export const NaNStory = () => <ObjectInspector data={NaN} />;
NaNStory.story = {
  name: "NaN",
};
export const Null = () => <ObjectInspector data={null} />;
export const DateStory = () => <ObjectInspector data={new Date()} />;
DateStory.story = {
  name: "Date",
};
export const RegExpStory = () => <ObjectInspector data={/[A-Z]/g} />;
RegExpStory.story = {
  name: "RegExp",
};
export const SymbolStory = () => <ObjectInspector data={Symbol("Hello")} />;
SymbolStory.story = {
  name: "Symbol",
};
export const Undefined = () => <ObjectInspector data={undefined} />;
export const Function = () => <ObjectInspector data={testFunction} />;
export const ArrayStory = () => <ObjectInspector data={array} />;
ArrayStory.story = {
  name: "Array",
};

export const Int8ArrayStory = () => <ObjectInspector data={int8} />;
Int8ArrayStory.story = {
  name: "Int8Array",
};

export const ErrorStory = () => (
  <ObjectInspector data={new Error("Normal error")} />
);
ErrorStory.story = {
  name: "Error",
};
export const TypeErrorStory = () => (
  <ObjectInspector data={new TypeError("Range error")} />
);
TypeErrorStory.story = {
  name: "TypeError",
};
export const ObjectStory = () => <ObjectInspector data={object} />;
ObjectStory.story = {
  name: "Object",
};
export const PromiseStory = () => <ObjectInspector data={promise} />;
PromiseStory.story = {
  name: "Promise (Resolved)",
};

export const PromiseRejectedStory = () => (
  <ObjectInspector data={promiseRejected} />
);
PromiseRejectedStory.story = {
  name: "Promise (Rejected)",
};

export const PromisePendingStory = () => (
  <ObjectInspector data={promisePending} />
);
PromisePendingStory.story = {
  name: "Promise (Pending)",
};
export const MapStory = () => <ObjectInspector data={myMap} />;
MapStory.story = {
  name: "Map",
};

export const WeakMapStory = () => <ObjectInspector data={myWeakMap} />;
WeakMapStory.story = {
  name: "WeakMap",
};

export const SetStory = () => <ObjectInspector data={mySet} />;
SetStory.story = {
  name: "Set",
};

export const WeakSetStory = () => <ObjectInspector data={myWeakSet} />;
WeakSetStory.story = {
  name: "WeakSet",
};
