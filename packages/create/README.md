# @devtools-ds/create

This is a package of browser extension templates, which removes a majority of the usual boilerplate needed to get started. We're still working on adding more templates, and simplifying the developer experience. If you see an area to improve, feel free to contribute!

Goals for templates:

- Easy cross-browser extension development for Chrome and Firefox.
- Hot reloading of extensions during development.
- TypeScript support by default.
- Simplify communication between extension pages and the current tab. (This is an area that gives many people trouble).
- Provide scripts that help with extension packaging and publishing.

## Install a Template

```sh
npm init @devtools-ds
```

Instructions for development will be included in the `README.md` for your chosen template.

## Extension Development Basics

MDN has a great [guide](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#Web_accessible_resources) outlining the major components of a browser extension. We recommend taking some time to understand the pieces, but ideally the templates will allow you to focus on your extension code instead of browser APIs.

Many of the high-level pieces are provided for you in our template:

- [Panel](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels): the main "devtools" tab inside of the browsers normal developer tools window.
- [Popup](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Popups): the page that appears when you click the extension icon next to the URL bar.
- [Options](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/user_interface/Options_pages): the page that appears when a user selects "settings" or "options" for your extension.
- [Background Script](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_scripts): a single process that is always running for your extension. We primarily use it to pass messages between the extensions pages and the current tab.
- [Content Script](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#content_scripts): a sand-boxed script which has limited access to the current page. We use it to add our "runtime" script to the page and pass messages back to the background script.
- Runtime: the script that actually runs in the page. It can send and receive messages from the content script.

To learn more about Firefox extensions, web-ext, and the webextension-polyfill library that enables cross-browser extension development check out the [Firefox extension workshop site](https://extensionworkshop.com/documentation/develop/).

To learn more about Chrome-specific development, visit the [chrome developers](https://developer.chrome.com/docs/extensions/mv2/getstarted/) site!
