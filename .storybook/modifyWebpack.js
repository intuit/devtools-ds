const webpack = require("webpack");
const isCI = require("is-ci");
const fs = require("fs");
const path = require("path");
const {
  createGallerySpecs,
  getOverviewSpecs,
} = require("@doc-blocks/gallery/specs");
const HtmlWebpackInsertPlugin = require("html-webpack-insert-text-plugin")
  .default;

const mode = isCI ? "production" : "development";

module.exports = async (config) => {
  config.devtool = "none";
  config.mode = mode;
  config.plugins.push(
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(mode),
      },
    })
  );

  config.plugins.push(
    new HtmlWebpackInsertPlugin([
      {
        target: "iframe.html",
        parent: "head",
        text: fs.readFileSync(path.join(__dirname, "preview-head.html"), {
          encoding: "utf8",
        }),
      },
    ]),
    createGallerySpecs({
      specs: await getOverviewSpecs({
        componentDirectory: path.join(__dirname, "../components"),
      }),
    })
  );

  return config;
};
