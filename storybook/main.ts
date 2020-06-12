module.exports = {
  stories: [
    "../packages/component-library/stories/*.stories.tsx",
    /**
     * These stories are separated from their corresponding packages as
     * the packages contained compiled js in their node_modules and that
     * made storybook unhappy
     */
    "../draft-packages/stories/*.stories.tsx",
    "../legacy-packages/**/*.stories.tsx",
  ],
}
