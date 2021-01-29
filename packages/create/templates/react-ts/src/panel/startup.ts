import { browser } from "webextension-polyfill-ts";

browser.devtools.panels.create(
  "Devtools",
  "../assets/icon_48.png",
  "/panel/panel.html"
);
