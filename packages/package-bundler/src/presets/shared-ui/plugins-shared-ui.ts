import path from "path"
import postcss from "rollup-plugin-postcss"
import { pluginsDefault } from "../default/index.js"

// This file is added by bin/addBuildTools
const styleInjectPath = path.resolve("src/__build-tools/styleInject.js")

export const pluginsSharedUi = [
  postcss({
    modules: true,
    extract: false,
    inject: cssVariableName =>
      `import { styleInject } from "${styleInjectPath}";\nstyleInject(${cssVariableName});`,
    extensions: [".scss", ".css"],
  }),
  ...pluginsDefault,
]
