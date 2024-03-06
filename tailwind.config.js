// ts-check
/** @type {import('tailwindcss').Config} */

const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: [
    "./docs/**/*.{tsx,mdx}",
    "./packages/components/**/_docs/**/*.{tsx,mdx}",
    "./packages/design-tokens/docs/**/*.{tsx,mdx}",
    "./storybook/components/**/*.tsx",
  ],
  presets: [Preset],
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|border|rounded|shadow|h|w|m|p|font-family|font-weight|text|leading)-.*/,
    },
  ],
}
