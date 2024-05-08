// ts-check
/** @type {import('tailwindcss').Config} */

const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: {
    relative: true,
    files: ["./src/**/*.tsx"],
  },
  presets: [Preset],
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  prefix: "kz-",
}
