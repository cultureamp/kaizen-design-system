const { Preset } = require("@kaizen/tailwind")

module.exports = {
  prefix: "kz-",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{ts,tsx}", "./src/__future__/**/*.{ts,tsx}"],
  presets: [Preset],
  // important to add to the #root and #docs-root (for storybook) to ensure that Tailwind classes supersede component styles
  important: ["#root", "#docs-root"],
  theme: {
    extend: {},
  },
  plugins: [],
}
