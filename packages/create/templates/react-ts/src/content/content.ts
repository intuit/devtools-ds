import { browser } from "webextension-polyfill-ts";
import { INJECTED_SCRIPT_ID, RUNTIME_SOURCE } from "../constants";

/**
 * Create a script element to be injected into the dom
 * Content scripts can access the DOM but not the JS in the page
 * So we'll inject the "runtime" script to run in the page.
 */
function getScript() {
  const injectedScript = document.createElement("script");
  injectedScript.src = browser.extension.getURL("../runtime/runtime.js");
  injectedScript.id = INJECTED_SCRIPT_ID;
  return injectedScript;
}

document.documentElement.append(getScript());

browser.runtime.onMessage.addListener((message) => {
  window.postMessage(message, "*");
});

interface EventData {
  /** The source script that sends the event */
  source?: string;
}

/**
 * Any time a message is received from the window, we check if it comes
 * from the "runtime" and pass it along.
 */
window.addEventListener("message", (event: MessageEvent<EventData>) => {
  if (event.source !== window) {
    return;
  }

  if (event.data.source === RUNTIME_SOURCE) {
    browser.runtime.sendMessage(event.data);
  }
});
