// @ts-expect-error
/** @type {import('tailwindcss').Config} */

const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: [
    "./pages/**/*.{tsx,mdx}",
    "../../packages/components/**/_docs/**/*.{tsx,mdx}",
    "../../packages/design-tokens/docs/**/*.{tsx,mdx}",
    "./.storybook/components/**/*.tsx",
  ],
  presets: [Preset],
  important: "body",
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
