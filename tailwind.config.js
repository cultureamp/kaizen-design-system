// ts-check
/** @type {import('tailwindcss').Config} */

const kzPresets = require("@kaizen/tailwind").TailwindPreset

module.exports = {
  content: ["./**/*.{ts,tsx}"],
  presets: [kzPresets],
  // important to add to the #root and #docs-root (for storybook) to ensure that tailwind classes supersede component styles
  important: ["#root", "#docs-root"],
  theme: {
    extend: {},
  },
  plugins: [],
}
