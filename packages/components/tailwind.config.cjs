/** @type {import('tailwindcss').Config} */
// @ts-ignore
const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: ["./src/**/*.tsx"],
  corePlugins: {
    preflight: false,
  },
  presets: [Preset],
}
