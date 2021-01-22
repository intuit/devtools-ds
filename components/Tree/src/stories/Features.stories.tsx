import React from "react";
import { action } from "@storybook/addon-actions";

import { Tree } from "..";
import notes from "../../README.md";

export default {
  title: "Components/Tree/Features",
  parameters: { notes },
};

export const BasicUsage = () => (
  <Tree label="School Activities">
    <Tree label="Performance">
      <Tree label="Band">
        <Tree label="Trumpet" />
        <Tree label="Trombone" />
      </Tree>
      <Tree label="Choir" />
      <Tree label="Theater" />
    </Tree>
    <Tree label="Sports">
      <Tree label="Fall">
        <Tree label="Tennis" />
        <Tree label="Badminton" />
      </Tree>
    </Tree>
  </Tree>
);

export const WithoutHover = () => (
  <Tree label="School Activities" hover={false}>
    <Tree label="Performance">
      <Tree label="Band">
        <Tree label="Trumpet" />
        <Tree label="Trombone" />
      </Tree>
      <Tree label="Choir" />
      <Tree label="Theater" />
    </Tree>
    <Tree label="Sports">
      <Tree label="Fall">
        <Tree label="Tennis" />
        <Tree label="Badminton" />
      </Tree>
    </Tree>
  </Tree>
);

export const KeyboardControl = () => (
  <>
    <button>Before</button>
    <Tree label="School Activities">
      <Tree label="Performance">
        <Tree label="Band">
          <Tree label="Trumpet" />
          <Tree label="Trombone" />
        </Tree>
        <Tree label="Choir" />
        <Tree label="Theater" />
      </Tree>
      <Tree label="Sports">
        <Tree label="Fall">
          <Tree label="Tennis" />
          <Tree label="Badminton" />
        </Tree>
      </Tree>
    </Tree>
    <button>After</button>
  </>
);

export const InsideContainer = () => (
  <div style={{ width: "400px", marginLeft: "auto", marginRight: "auto" }}>
    <Tree label="School Activities">
      <Tree label="Performance">
        <Tree label="Band">
          <Tree label="Trumpet" />
          <Tree label="Trombone" />
        </Tree>
        <Tree label="Choir" />
        <Tree label="Theater" />
      </Tree>
      <Tree label="Sports">
        <Tree label="Fall">
          <Tree label="Tennis" />
          <Tree label="Badminton" />
        </Tree>
      </Tree>
    </Tree>
  </div>
);

export const DefaultOpen = () => (
  <Tree open label="School Activities">
    <Tree label="Performance">
      <Tree label="Band">
        <Tree label="Trumpet" />
        <Tree label="Trombone" />
      </Tree>
      <Tree label="Choir" />
      <Tree label="Theater" />
    </Tree>
    <Tree label="Sports">
      <Tree label="Fall">
        <Tree label="Tennis" />
        <Tree label="Badminton" />
      </Tree>
    </Tree>
  </Tree>
);

export const OnSelect = () => {
  const onSelect = action("onSelect");
  return (
    <Tree label="School Activities" onSelect={onSelect}>
      <Tree label="Performance" onSelect={onSelect}>
        <Tree label="Band" onSelect={onSelect}>
          <Tree label="Trumpet" onSelect={onSelect} />
          <Tree label="Trombone" onSelect={onSelect} />
        </Tree>
        <Tree label="Choir" />
        <Tree label="Theater" />
      </Tree>
      <Tree label="Sports">
        <Tree label="Fall">
          <Tree label="Tennis" />
          <Tree label="Badminton" />
        </Tree>
      </Tree>
    </Tree>
  );
};

export const OnUpdate = () => {
  const onUpdate = action("onUpdate");
  return (
    <Tree label="School Activities" onUpdate={onUpdate}>
      <Tree label="Performance">
        <Tree label="Band">
          <Tree label="Trumpet" />
          <Tree label="Trombone" />
        </Tree>
      </Tree>
    </Tree>
  );
};
