const { Preset } = require("@kaizen/tailwind")

module.exports = {
  prefix: "kz-",
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.tsx"],
  presets: [Preset],
}
