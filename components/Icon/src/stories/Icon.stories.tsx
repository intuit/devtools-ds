import React from "react";
import { select, color } from "@storybook/addon-knobs";
import { IconSizes } from "..";
import { names, mappings } from "../icons/mappings";

import notes from "../../README.md";

export default {
  title: "Components/Icon",
  parameters: { notes },
};

const sizes = Object.keys(IconSizes) as (keyof typeof IconSizes)[];

export const Playground = () => {
  const fill = color("Color", "rgba(0,0,0,.8)");
  const size = select("Size", sizes, "x-large");
  const Icon = mappings[select("Icon", names, "alert")];
  return <Icon size={size} fill={fill} />;
};
