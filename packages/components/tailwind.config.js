/** @type {import('tailwindcss').Config} */

const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: ["./src/**/*.tsx"],
  corePlugins: {
    preflight: false,
  },
  presets: [Preset],
}
