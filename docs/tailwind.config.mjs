// ts-check
/** @type {import('tailwindcss').Config} */

import { Preset } from "@kaizen/tailwind"

module.exports = {
  content: [
    "../packages/**/*.stories.{ts,tsx,mdx}",
    "../packages/tailwind/src/_docs/**/*.{ts,tsx,mdx}",
    "!node_modules",
  ],
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
