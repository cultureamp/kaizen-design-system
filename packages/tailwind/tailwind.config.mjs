// ts-check
/** @type {import('tailwindcss').Config} */

import { Preset } from "./src"

module.exports = {
  content: ["./src/_docs/**/*.{tsx,mdx}"],
  presets: [Preset],
  important: "body",
  corePlugins: {
    preflight: false,
  },
  safelist: [
    {
      pattern:
        /(bg|border|rounded|shadow|h|w|m|p|font-family|font-weight|text|leading)-.*/,
    },
  ],
}
