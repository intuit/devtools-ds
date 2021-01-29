import { Message } from "../types";
import { RUNTIME_SOURCE } from "../constants";
import { createLogger } from "../logger";

/** Handle messages from the content script. */
window.addEventListener("message", (event: MessageEvent<Message>) => {
  const { data } = event;
  const logger = createLogger(RUNTIME_SOURCE);
  if (data.source && data.source !== RUNTIME_SOURCE) {
    switch (data.type) {
      case "connect":
        logger.log("Connected to Devtools:", data);
        break;
      case "alert":
        alert(data.value);
        break;
      case "disconnect":
        logger.log("Devtools Disconnected:", data);
        break;
      default:
        logger.log("Unknown message type", event.data.type);
        break;
    }
  }
});
