const fs = require("fs");
const path = require("path");
const HtmlWebpackInsertTextPlugin = require("html-webpack-insert-text-plugin")
  .default;

module.exports = {
  managerWebpack: async (config, options) => {
    config.plugins.push(
      new HtmlWebpackInsertTextPlugin([
        {
          target: "index.html",
          parent: "head",
          text: fs.readFileSync(
            path.resolve(__dirname, "./style.html"),
            "utf8"
          ),
        },
      ])
    );

    return config;
  },
};
