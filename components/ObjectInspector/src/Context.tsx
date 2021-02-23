import React from "react";

export interface ObjectInspectorContextProps {
  /** The key for the root object */
  name?: string;
}

/** Context that gives sub-components access to top-level props */
export const ObjectInspectorContext = React.createContext<
  ObjectInspectorContextProps
>({ name: "" });
