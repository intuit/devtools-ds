import React from "react";
import ReactDom from "react-dom";
import { browser } from "webextension-polyfill-ts";
import { Message } from "../types";
import { PANEL_SOURCE, PORT_NAME } from "../constants";

import styles from "./panel.css";
import "./global.css";

// Set up message connections
const BackgroundPort = browser.runtime.connect(undefined, { name: PORT_NAME });
const connectMessage: Message = {
  type: "connect",
  tabId: browser.devtools.inspectedWindow.tabId,
  source: PANEL_SOURCE,
};
BackgroundPort.postMessage(connectMessage);

/** Our React Panel Application */
export const App = () => {
  const [value, setValue] = React.useState("Hello, Panel");

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const buttonClick = () => {
    const message: Message = {
      type: "alert",
      tabId: browser.devtools.inspectedWindow.tabId,
      source: PANEL_SOURCE,
      value,
    };
    BackgroundPort.postMessage(message);
  };

  return (
    <div className={styles.content}>
      <a href="https://github.com/intuit/devtools-ds">
        <img
          alt="devtools ds logo"
          width="150"
          src="https://raw.githubusercontent.com/intuit/devtools-ds/master/.storybook/devtools-ds-logo.svg?token=ABL6QJJIJQVDTWRSDUXDLG3ADHLPK"
        />
      </a>
      <p>
        Welcome to your new devtools project! This is the &quot;panel&quot;
        page.
      </p>
      <p>You can send messages to the current tab below.</p>
      <div>
        <input
          type="text"
          aria-label="Message to send"
          value={value}
          onChange={inputChange}
        />
        <button type="button" onClick={buttonClick}>
          Send Message
        </button>
      </div>
    </div>
  );
};

const ele = document.createElement("div");
document.body.appendChild(ele);

ReactDom.render(<App />, ele);
