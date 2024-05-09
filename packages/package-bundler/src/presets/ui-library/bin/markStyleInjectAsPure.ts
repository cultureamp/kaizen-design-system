import replace from "replace-in-file"
import { getArgs } from "./getArgs.js"

const args = getArgs()

const options = {
  files: `${args.packagePath}/dist/esm/**/*.module.scss.mjs`,
  from: "styleInject(",
  to: "/*#__PURE__*/styleInject(",
}

replace(options)
