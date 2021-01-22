import React from "react";
import { text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { Tree } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Tree",
  parameters: { notes },
};

export const Playground = () => {
  const onSelect = action("onSelect");
  const onUpdate = action("onUpdate");
  const hover = boolean("Hover", false);
  const first = text("Root Label", "First Level");

  return (
    <Tree hover={hover} label={first} onSelect={onSelect} onUpdate={onUpdate}>
      <Tree label="Second Level" onSelect={onSelect} onUpdate={onUpdate}>
        <Tree label="Third Level" onSelect={onSelect} onUpdate={onUpdate} />
      </Tree>
    </Tree>
  );
};
