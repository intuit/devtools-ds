import React from "react";
import { text, boolean } from "@storybook/addon-knobs";

import { Node } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Node",
  parameters: { notes },
};

export const Playground = () => {
  const name = text("Tag Name", "div");
  const isSelfClosing = boolean("Self Closing", false);
  const isClosingTag = boolean("Closing", false);
  const key = text("Property Key", "class");
  const value = text("Property Value", "nodeClass");

  const property = {
    [key]: value,
  };

  return (
    <Node
      closing={isClosingTag}
      selfClosing={isSelfClosing}
      name={name}
      properties={property}
    />
  );
};
