const path = require("path")
const { recurse, removeRootSVGElement } = require("./svgoUtils")

module.exports = {
  plugins: [
    "preset-default",
    {
      name: "Remove root SVG element",
      params: {},
      type: "SVG",
      fn: (ast, _params, _info) => removeRootSVGElement(ast),
    },
    {
      name: "Recurse",
      params: {},
      fn: (ast, _params, source) => recurse(ast, path.basename(source.path)),
    },
  ],
}
