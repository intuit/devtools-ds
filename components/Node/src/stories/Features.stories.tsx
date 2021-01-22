import React from "react";

import { Node } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Node/Features",
  parameters: { notes },
};

const properties = {
  class: "test",
  style: "font-weight: bold;",
};

const longer = {
  class: "test multiple classes",
  style: "touch-action: none; left: 210px; width: 1704px; margin-top: -10px;",
  scrolling: "yes",
  role: "button",
};

export const BasicUsage = () => (
  <>
    <Node name="div" properties={properties} />
    <Node closing name="div" />
  </>
);

export const SelfClosing = () => (
  <Node selfClosing name="img" properties={properties} />
);

export const Wrapping = () => (
  <>
    <Node name="div" properties={longer} />
    <Node closing name="div" />
  </>
);

export const Comment = () => <Node name="Comment tag" variant="comment" />;
export const Doctype = () => <Node name="html" variant="doctype" />;
