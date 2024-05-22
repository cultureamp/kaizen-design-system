import fs from "fs"
import { dirname } from "path"
import { fileURLToPath } from "url"
import postcss from "rollup-plugin-postcss"
import { pluginsDefault } from "../default/index.js"

const dir = dirname(fileURLToPath(import.meta.url))
const styleInjectFn = fs.readFileSync(`${dir}/utils/styleInject.js`, "utf8")

export const pluginsSharedUi = [
  ...pluginsDefault,
  postcss({
    modules: true,
    extract: false,
    inject: cssVariableName =>
      `${styleInjectFn}\nstyleInject(${cssVariableName});`,
    extensions: [".scss", ".css"],
  }),
]
