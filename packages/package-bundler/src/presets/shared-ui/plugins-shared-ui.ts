import resolve from "@rollup/plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
import { pluginsDefault } from "../default/index.js"

export const pluginsSharedUi = [
  // This is needed to ensure that css is compiled correctly.
  // Without this there is an alphabetised order in the dist CSS for subcomponents.
  // This can cause styles being overwritten by primitives, ie: BaseButton overwriting DropdownButton
  // https://cultureamp.slack.com/archives/C02NUQ27G56/p1713157055178419
  resolve({
    preferBuiltins: true,
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  }),
  postcss({
    modules: true,
    extract: "styles.css",
    extensions: [".scss", ".css"],
  }),
  ...pluginsDefault,
]
