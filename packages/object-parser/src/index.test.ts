import parse, { ASTObject } from "./index";

const values = {
  number: 42,
  string: "test",
  boolean: true,
  date: new Date(),
  error: new Error("whatever"),
  "test-undefined": undefined,
  null: null,
};

test("Object with no root", async () => {
  const result = await parse(values, false);
  expect(result.key).toBe("root");
  expect(result.type).toBe("object");
});

test("sets parent correctly", async () => {
  const result = await parse(values, false);
  expect(result.type).toBe("object");
  const firstChild = await (result as ASTObject).children[0]();
  expect(firstChild.type).toBe("value");
  expect(firstChild.parent).toBe(result);
});

test("Can resolve children", async () => {
  const result = await parse(values, false, false);
  expect(result.type).toBe("object");
  if (result.type === "object") {
    const promises = result.children.map((f) => f());
    const children = await Promise.all(promises);
    for (const child of children) {
      expect(child.type).toBe("value");
    }
  }
});

test("Adds keys with undefined values", async () => {
  const result = await parse(values, false, false);
  expect(result.type).toBe("object");
  if (result.type === "object") {
    const promises = result.children.map((f) => f());
    const children = await Promise.all(promises);
    for (const child of children) {
      if (child.key === "test-undefined") {
        expect(child.value).toBe(undefined);
      }
    }
  }
});

test("Includes prototype by default", async () => {
  const result = await parse(values, false);
  expect(result.type).toBe("object");

  let protoFound = false;

  if (result.type === "object") {
    const promises = result.children.map((f) => f());
    const children = await Promise.all(promises);
    for (const child of children) {
      if (child.key === "<prototype>") {
        protoFound = true;
      }
    }
  }

  expect(protoFound).toBe(true);
});

test("Sorts keys", async () => {
  // Unsorted
  const resultUnsorted = await parse(values, false, false);
  expect(resultUnsorted.type).toBe("object");
  if (resultUnsorted.type === "object") {
    const promises = resultUnsorted.children.map((f) => f());
    const children = await Promise.all(promises);
    expect(children[0].key).toBe("number");
    expect(children[1].key).toBe("string");
  }

  // Sorted
  const result = await parse(values, true, false);
  expect(result.type).toBe("object");
  if (result.type === "object") {
    const promises = result.children.map((f) => f());
    const children = await Promise.all(promises);
    expect(children[0].key).toBe("boolean");
    expect(children[1].key).toBe("date");
  }
});

test("Identifies arrays", async () => {
  const result = await parse([1, 2, 3], true, false);
  expect(result.type).toBe("array");
});

test("Identifies maps", async () => {
  const m = new Map();
  m.set("foo", "bar");
  const result = await parse(m, true, false);
  expect(result.type).toBe("map");
});

test("Identifies sets", async () => {
  const m = new Set();
  m.add("foo");
  const result = await parse(m, true, false);
  expect(result.type).toBe("set");
});

test("Identifies functions", async () => {
  const m = () => {};
  const result = await parse(m, true, false);
  expect(result.type).toBe("function");
});

test("Identifies promises", async () => {
  const m = new Promise((resolve, reject) => {
    reject();
  });
  const result = await parse(m, true, false);
  expect(result.type).toBe("promise");
});
