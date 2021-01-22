import React from "react";
import { select, color } from "@storybook/addon-knobs";
import { IconSizes, AlertIcon } from "..";
import { names, mappings } from "../icons/mappings";

import notes from "../../README.md";

export default {
  title: "Components/Icon/Features",
  parameters: { notes },
};

const sizes = Object.keys(IconSizes) as (keyof typeof IconSizes)[];

interface IconStoryProps {
  children: React.ReactNode;
}

const IconTable = (props: IconStoryProps) => {
  return (
    <ul
      style={{
        maxWidth: `300px`,
        border: `1px solid rgba(0, 0, 0, 0.1)`,
        fontSize: "18px",
        fontFamily: "sans-serif",
        borderRadius: "2px",
        padding: `20px`,
        margin: "100px auto 0 auto",
        listStyleType: "none",
      }}
    >
      {props.children}
    </ul>
  );
};

const IconRow = (props: IconStoryProps) => {
  return (
    <li style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
      {props.children}
    </li>
  );
};

const IconText = (props: IconStoryProps) => {
  return <div style={{ margin: "5px 0 0 20px" }}>{props.children}</div>;
};

export const BasicUsage = () => {
  return <AlertIcon size="large" fill="black" />;
};

export const Inline = () => {
  const fill = color("Color", "rgba(0,0,0,.8)");
  return (
    <div style={{ color: fill, fontFamily: "sans-serif" }}>
      This <AlertIcon inline /> inherits text styles.
    </div>
  );
};

export const AllIcons = () => {
  const size = select("Size", sizes, "x-large");
  const fill = color("Color", "rgba(0,0,0,.8)");
  return (
    <IconTable>
      {names.map((iconName) => {
        const Icon = mappings[iconName];

        if (typeof Icon !== "function") {
          return null;
        }

        return (
          <IconRow key={iconName}>
            <Icon size={size} fill={fill} />
            <IconText>{iconName}</IconText>
          </IconRow>
        );
      })}
    </IconTable>
  );
};
