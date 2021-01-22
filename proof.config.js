const baseConfig = require('@design-systems/proof/proof.config.base.js');
const AddAllPlugin = require('@proof-ui/add-all-plugin').default;
const A11YPlugin = require('@proof-ui/a11y-plugin').default;

const plugins = baseConfig.plugins.map(plugin => {
  if (plugin instanceof AddAllPlugin) {
    return new AddAllPlugin();
  }

  if (plugin instanceof A11YPlugin) {
    return new A11YPlugin({
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false
          },
          {
            id: 'label',
            none: ['help-same-as-label', 'multiple-label']
          }
        ]
      }
    });
  }

  return plugin;
});

const newConfig = {
  ...baseConfig,
  waitForRoot: 30000,
  plugins: [...plugins]
};

module.exports = newConfig;
