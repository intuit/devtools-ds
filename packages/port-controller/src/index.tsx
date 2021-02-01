import { browser, Runtime } from "webextension-polyfill-ts";

/** Manage port connections between the panel and page */
export class PortController<T> {
  ports: { [key: number]: Array<Runtime.Port> };

  constructor() {
    this.ports = {};
  }

  /* Connect a port to a tab (web page) */
  connect(tabId: number, port: Runtime.Port) {
    if (!this.ports[tabId]) {
      this.ports[tabId] = [];
    }

    this.ports[tabId].push(port);
  }

  // Disconnect a port, given only a port
  // Also notify the page to disconnect
  disconnect(port: Runtime.Port, message?: T) {
    for (const t of Object.keys(this.ports)) {
      const tab = Number(t);
      this.ports[tab] = this.ports[tab].filter((p) => p !== port);
      if (this.ports[tab].length === 0) {
        if (message) {
          this.toContent(tab, message);
        }

        delete this.ports[tab];
      }
    }
  }

  // Return whether a tab has an active port.
  getPorts(tabId: number) {
    return this.ports[tabId];
  }

  // Send a message to the content script for a given tab
  toContent(tabId: number, message: T) {
    if (message && tabId) {
      browser.tabs.sendMessage(tabId, message);
    }
  }

  // Send a message to the devtools for a given tab
  toPanel(tabId: number, message: T) {
    if (tabId in this.ports) {
      const tab = this.ports[tabId];
      for (let i = 0; i < tab.length; i++) {
        tab[i].postMessage(message);
      }
    }
  }
}

export default PortController;
