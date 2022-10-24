// ts-check
// will pull from dist folder until published to kaizen

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  presets: [require("@kaizen/design-tokens").TailwindPreset],
  theme: {
    extend: {},
  },
  plugins: [],
}
