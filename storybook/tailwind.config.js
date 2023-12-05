// ts-check
/** @type {import('tailwindcss').Config} */

const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: ["../**/*.{ts,tsx,mdx}"],
  presets: [Preset],
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
