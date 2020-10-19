const path = require("path")

module.exports = {
  stories: [
    "../packages/component-library/stories/*.stories.tsx",
    /**
     * These stories are separated from their corresponding packages as
     * the packages contained compiled js in their node_modules and that
     * made storybook unhappy
     */
    // @TODO - restore
    // "../draft-packages/stories/*.stories.tsx",
    // "../legacy-packages/stories/*.stories.tsx",
  ],
  addons: ["./storybook/gtm-addon/register.js"],
  presets: [path.resolve("./storybook/header-preset/preset")],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    })

    // Return the altered config
    return config
  },
}
