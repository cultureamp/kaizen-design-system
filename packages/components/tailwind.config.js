/** @type {import('tailwindcss').Config} */

const { Preset } = require("@kaizen/tailwind")

module.exports = {
  content: ["./src/**/*.{stories.tsx,mdx}"],
  corePlugins: {
    preflight: false,
  },
  presets: [Preset],
}
