const mixins = require("postcss-mixins");
const calc = require("postcss-calc");
const mix = require("postcss-color-mix");

const themed = require("postcss-themed").default;
const defaultConfig = require("@design-systems/build/postcss.config");

module.exports = (ctx) => {
  const config = defaultConfig(ctx);
  const [nested, ...rest] = config.plugins;
  const plugins = [
    mixins({}),
    // Nested must come after mixins because mixin might have nesting
    nested,
    // Themed must come after nested so theme classnames are properly generated
    themed({
      config: {
        firefox: {},
        chrome: {},
      },
      defaultTheme: "firefox",
    }),
    calc(),
    mix,
    ...rest,
  ];

  return {
    ...config,
    plugins,
  };
};
