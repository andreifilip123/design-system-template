module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  "managerHead": (head, { configType }) => {
    if (configType === 'PRODUCTION') {
      return (`
        ${head}
        <base href="https://binogi.github.io/design-system-template/">
      `);
    }
  },

}