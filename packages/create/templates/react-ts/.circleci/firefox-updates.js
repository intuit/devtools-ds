#! /usr/bin/env node
/*
A simple script to automate FireFox update manifests
https://extensionworkshop.com/documentation/manage/updating-your-extension/
Only relevant if your addon is not public and hosted by Mozilla
*/

var fs = require("fs");
var path = require("path");
const version = require("../package.json").version;
let updates = require("./updates/updates.json");

// add new update
const link = `<link to your update>`;
let update = {
  version: version,
  update_link: link,
};
updates.addons["{{uuid}}"].updates.push(update);
fs.writeFileSync(
  path.join(__dirname, "./updates/updates.json"),
  JSON.stringify(updates, null, 4)
);
