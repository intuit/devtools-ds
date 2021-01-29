# {{projectNameCapital}}

> A browser devtools extension scaffolded using the [devtools-ds](https://github.com/intuit/devtools-ds) `{{template}}` template.

## Getting Started

### Installing dependencies

```bash
yarn
```

### Chrome Development

If you want to develop with Chrome, first you'll need to build the project in watch mode:

```bash
yarn watch:chrome
```

2. Open Chrome and navigate to `chrome://extensions`.

3. Click `Load Unpacked Extension`, and select the `dist` folder of this project.

4. Navigate to a new tab and you should see the extension icon in the extensions bar, and a tab in the "devtools" inspector.

### Firefox Development

Firefox supports extension development, so running the following command should open a new Firefox window.

```bash
yarn watch:firefox
```

## Basic Structure

This project contains a variety of folders for developing different aspects of the extension.

- Panel: the main "devtools" tab inside of the browsers normal developer tools window.
- Popup: the page that appears when you click the extension icon next to the URL bar.
- Options: the page that appears when a user selects "settings" or "options" on your extension.
- Background: the extension [background script](https://developer.chrome.com/docs/extensions/mv2/background_pages/); basically a single process that is always running for your extension. We primarily use it to pass messages between the extensions pages and the current tab.
- Content: the extension [content script](https://developer.chrome.com/docs/extensions/mv2/content_scripts/); a sand-boxed script which has limited access to the current page. We use it to add our "runtime" script to the page and pass messages back to the background script.
- Runtime: the script that actually runs in the page. It can send and receive messages from the content script.

If you want to remove any of these pages, you'll need to:

1. Remove the folder from `src/`.
2. Update `manifest.json` to not include it in the extension.
3. Modify `webpack.config.js` to not build it.
