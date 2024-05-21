import fs from "fs"
import { getArgs } from "./getArgs.js"

const args = getArgs()

const destination = `${args.packagePath}/src/__build-tools`

if (fs.existsSync(destination)) {
  fs.rmdirSync(destination, { recursive: true })
}
