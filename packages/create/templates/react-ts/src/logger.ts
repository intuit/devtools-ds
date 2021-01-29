import { MESSAGE_SOURCE } from "./constants";

interface Logger {
  /** Log a message */
  log: (...args: any[]) => void;
}

/** Create a logger that tracks the script source */
export function createLogger(source: MESSAGE_SOURCE): Logger {
  return {
    log: (...args: any[]) => {
      console.log(source, ...args);
    },
  };
}
