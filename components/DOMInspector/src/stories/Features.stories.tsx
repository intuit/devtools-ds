import React from "react";

import { DOMInspector } from "..";
import notes from "../../README.md";

export default {
  title: "Components/DOM Inspector/Features",
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

export const BasicUsage = () => <DOMInspector data={div} />;
export const Expanded = () => <DOMInspector data={div} expandLevel={2} />;

export const DocumentBody = () => <DOMInspector data={document.body} />;
DocumentBody.story = {
  title: "Components/DOM Inspector/Document",
};

export const Document = () => <DOMInspector data={document} />;
Document.story = {
  title: "Components/DOM Inspector/Document",
};
