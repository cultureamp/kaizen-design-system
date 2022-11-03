// ts-check
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  presets: [require("@kaizen/design-tokens").TailwindPreset],
  // important to add to the root to ensure that tailwind classes supersede component styles
  important: "#root",
  theme: {
    extend: {},
  },
  plugins: [],
}
