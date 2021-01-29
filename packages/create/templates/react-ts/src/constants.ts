export const PORT_NAME = "devtools-port";
export const INJECTED_SCRIPT_ID = "__DEVTOOLS_RUNTIME__";

export const RUNTIME_SOURCE = "__DEVTOOLS_RUNTIME__";
export const CONTENT_SOURCE = "__DEVTOOLS_CONTENT__";
export const PANEL_SOURCE = "__DEVTOOLS_PANEL__";
export const POPUP_SOURCE = "__DEVTOOLS_POPUP__";
export const BACKGROUND_SOURCE = "__DEVTOOLS_BACKGROUND__";

export type MESSAGE_SOURCE =
  | typeof RUNTIME_SOURCE
  | typeof CONTENT_SOURCE
  | typeof PANEL_SOURCE
  | typeof POPUP_SOURCE
  | typeof BACKGROUND_SOURCE;
