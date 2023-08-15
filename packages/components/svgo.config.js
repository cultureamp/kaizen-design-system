const { recurse } = require("./svgoUtils")

module.exports = {
  plugins: [
    "preset-default",
    {
      name: "Recurse",
      params: {},
      type: "perItem",
      fn: recurse,
    },
  ],
}
