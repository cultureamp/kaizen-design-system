module.exports = {
  addons: ["@storybook/addon-docs"],
  stories: [
    "../packages/component-library/stories/*.stories.tsx",
    "../packages/draft/**/*.stories.tsx",
  ],
}
