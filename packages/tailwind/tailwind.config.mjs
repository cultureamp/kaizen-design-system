// ts-check
/** @type {import('tailwindcss').Config} */

import { Preset } from "./src"

export default {
  content: ["./src/_docs/**/*.{tsx,mdx}"],
  presets: [Preset],
  important: "body",
  corePlugins: {
    preflight: false,
  },
  safelist: [
    {
      pattern:
        /(bg|border|rounded|shadow|h|w|m|p|font-family|font-weight|text|leading|list)-.*/,
    },
  ],
}
