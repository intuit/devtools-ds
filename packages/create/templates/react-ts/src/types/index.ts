import { MESSAGE_SOURCE } from "../constants";

export interface BaseMessage {
  /** Source of the event */
  source: MESSAGE_SOURCE;
  /** Type of event */
  type: string;
  /** The data being sent */
  value?: any;
  /** ID of the Tab being messaged */
  tabId: number;
}

export interface ConnectMessage extends BaseMessage {
  /** Message to connect to the page */
  type: "connect";
  /** No value */
  value?: undefined;
}

export interface AlertMessage extends BaseMessage {
  /** Some text to alert on the screen */
  type: "alert";
  /** No value */
  value: string;
}

export interface DisconnectMessage extends BaseMessage {
  /** Message that the tab is disconnecting */
  type: "disconnect";
  /** No value */
  value?: undefined;
}

export type Message = ConnectMessage | DisconnectMessage | AlertMessage;
