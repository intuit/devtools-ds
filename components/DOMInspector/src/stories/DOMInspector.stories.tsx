import React from "react";

import { select, number } from "@storybook/addon-knobs";

import { DOMInspector } from "..";
import notes from "../../README.md";

export default {
  title: "Components/DOM Inspector",
  parameters: { notes },
};

const div = document.createElement("div");
const html = `
      <!--This is a comment-->
      <span>A span</span>
      <span>A span that is filled with longer text that should probably be truncated because it is so long.</span>
      <button type="submit" class="btn">Submit</button>
      <img src="https://testsite.com" />
      <input type="text" placeholder="Hello" required>
`;
div.insertAdjacentHTML("beforeend", html);

const elements: { [key: string]: Node } = {
  "Simple DIV": div,
  "Document Body": document.body,
};

export const Playground = () => {
  const element = select("DOM Element", Object.keys(elements), "Simple DIV");
  const expandLevel = number("Expand Level", 0);

  return <DOMInspector data={elements[element]} expandLevel={expandLevel} />;
};
