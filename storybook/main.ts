module.exports = {
  addons: ["@storybook/addon-docs"],
  stories: [
    "../packages/component-library/stories/*.stories.tsx",
    /**
     *
     */
    "../draft-packages/stories/*.stories.tsx",
    "../legacy-packages/**/*.stories.tsx",
  ],
}
