// ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  presets: [require("@kaizen/design-tokens").TailwindPreset],
  important: "#root",
  theme: {
    extend: {},
  },
  plugins: [],
}
