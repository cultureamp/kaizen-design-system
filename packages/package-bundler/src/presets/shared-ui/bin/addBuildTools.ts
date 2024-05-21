import fs from "fs"
import path from "path"
import { getArgs } from "./getArgs.js"

const args = getArgs()

const source = path.resolve("./dist/presets/shared-ui/utils/styleInject.js")
const destination = `${args.packagePath}/src/__build-tools`

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true })
}

fs.copyFileSync(source, `${destination}/styleInject.js`)
