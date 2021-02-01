# @devtools-ds/port-controller

`PortController` is a simple class for managing browser `Runtime.Port` objects in the `background` script of your extension.

Some background:

If you are developing an extension with a popup dialog or a devtools panel, they'll need to send messages to your `background` script. Only the background script has permissions to communicate with the `content` script (the page). Managing these connections can be a little confusing, because there is only one instance of your background script running but multiple tabs, popups, and panels can exist and try to talk to each other.

## Installation

```sh
npm i @devtools-ds/port-controller
# or with yarn
yarn add @devtools-ds/port-controller
```

## Example

Here is an example `background` script using the port controller.

```ts
import { PortController } from "@devtools-ds/port-controller";

const controller = new PortController<Message>();

browser.runtime.onConnect.addListener((port) => {
  if (port.name === PORT_NAME) {
    // Attach listener to the Panel
    port.onMessage.addListener((message: Message) => {
      if (message.type === "connect" && message.tabId) {
        controller.connect(message.tabId, port);
      }

      // Pass message to content script
      controller.toContent(message.tabId, message);
    });

    // Handle Panel disconnect
    port.onDisconnect.addListener(function (p) {
      const message: DisconnectMessage = {
        type: "disconnect",
        source: PANEL_SOURCE,
        tabId: 0,
      };
      controller.disconnect(p, message);
    });
  }
});

// Attach listener to content
browser.runtime.onMessage.addListener(function (
  message: Message,
  sender: Runtime.MessageSender
) {
  // Messages from content scripts should have sender.tab set
  if (sender.tab) {
    const tabId = sender.tab.id;
    if (tabId) controller.toPanel(tabId, message);
  } else {
    logger.log("Could not pass message, sender.tab not defined.", message);
  }
});
```
