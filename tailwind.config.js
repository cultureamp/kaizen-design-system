// ts-check
/** @type {import('tailwindcss').Config} */

const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: ["./**/*.{ts,tsx,mdx}"],
  presets: [Preset],
  // important to add to the #root and #docs-root (for storybook) to ensure that tailwind classes supersede component styles
  important: ["#root", "#docs-root"],
  theme: {
    extend: {},
  },
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
