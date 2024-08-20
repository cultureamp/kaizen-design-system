// ts-check
/** @type {import('tailwindcss').Config} */

import { Preset } from "@kaizen/tailwind"

module.exports = {
  // mode: "jit",
  // purge: ["../packages/**/*.stories.{ts,tsx,mdx}"],
  content: ["../packages/**/*.stories.{ts,tsx,mdx}", "!node_modules"],
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
