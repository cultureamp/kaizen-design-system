import replace from "replace-in-file"
import { getArgs } from "./getArgs.js"

const args = getArgs()

const options = {
  files: [
    `${args.packagePath}/dist/esm/**/*.scss.mjs`,
    `${args.packagePath}/dist/esm/**/*.css.mjs`,
  ],
  from: new RegExp(/(?<!function\s)styleInject\(/),
  to: "/*#__PURE__*/styleInject(",
}

replace.sync(options)
