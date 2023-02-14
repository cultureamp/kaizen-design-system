/** @type {import('tailwindcss').Config} */
// @ts-ignore
const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: ["./src/**/*.tsx"],
  prefix: "kz-",
  corePlugins: {
    preflight: false,
  },
  presets: [Preset],
  // important to add to the #root and #docs-root (for storybook) to ensure that Tailwind classes supersede component styles
  important: ["#root", "#docs-root"],
}
