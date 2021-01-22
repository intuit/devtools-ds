import React, { useState } from "react";

import { ObjectInspector } from "../ObjectInspector";
import notes from "../../README.md";

export default {
  title: "Components/Object Inspector/Examples",
  parameters: { notes },
};

export const ClickEvent = () => {
  const [click, setClick] = useState({});

  return (
    <>
      <button
        onClick={(event) => {
          event.preventDefault();
          event.persist();
          setClick(event);
        }}
      >
        Fire Event
      </button>
      {Object.keys(click).length !== 0 && (
        <ObjectInspector sortKeys={false} data={click} />
      )}
    </>
  );
};

export const KeyDownEvent = () => {
  const [keyDown, setKeyDown] = useState({});

  return (
    <>
      <input
        type="text"
        aria-label="Type to trigger events"
        placeholder="Type to trigger events"
        onKeyDown={(event) => {
          event.persist();
          setKeyDown(event);
        }}
      />
      {Object.keys(keyDown).length !== 0 && (
        <ObjectInspector sortKeys={false} data={keyDown} />
      )}
    </>
  );
};
