const fs = require("fs");
const path = require("path");
const modifyWebpack = require("./modifyWebpack");
const { getMonorepoRoot } = require("@design-systems/cli-utils");
const {
  addons,
  stories,
  webpackFinal,
} = require("@design-systems/storybook/preset");

const tsconfigPath = path.resolve(getMonorepoRoot(), "tsconfig.stories.json");

module.exports = {
  stories,
  addons: ["@devtools-ds/storybook-theme-addon", ...addons],
  presets: [
    "@storybook/addon-docs/preset",
    path.join(__dirname, "./theme-preset.js"),
  ],
  webpackFinal: async (config) => modifyWebpack(await webpackFinal(config)),
  typescript: {
    check: true,
    checkOptions: {
      tsconfig: tsconfigPath,
    },
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      exclude: ["**/src/icons/**", "**/*.stories.*"],
      shouldRemoveUndefinedFromOptional: true,
      tsconfigPath,
      propFilter(prop) {
        if (prop.parent) {
          return !prop.parent.fileName.includes("@types/react");
        }

        return true;
      },
    },
  },
};
