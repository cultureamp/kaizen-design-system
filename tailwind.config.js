// ts-check
/** @type {import('tailwindcss').Config} */

const myCoolPresets = require("@kaizen/tailwind")

module.exports = {
  content: ["./**/*.{ts,tsx}"],
  presets: [require("@kaizen/tailwind").TailwindPreset],
  // important to add to the #root and #docs-root (for storybook) to ensure that tailwind classes supersede component styles
  important: ["#root", "#docs-root"],
  theme: {
    extend: {},
  },
  plugins: [],
}
