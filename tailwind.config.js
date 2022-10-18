const kaizenPresets = require("./packages/design-tokens/tailwind/tailwindPresets")

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [kaizenPresets],
  content: ["./**/*.tsx", "./**/*.ts"],
  important: "#root",
  plugins: [],
  theme: {
    extend: {},
  },
}
