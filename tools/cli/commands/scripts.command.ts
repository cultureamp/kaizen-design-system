import execa from "execa"
import { readdirSync } from "fs"
import { resolve } from "path"
import { Arguments } from "yargs"

const rootDir = resolve(__dirname, "../../..")
const binDir = resolve(rootDir, "bin")

const getScriptNames = () =>
  readdirSync(binDir, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => name !== "cli")

export const command = "<script>"
export const description = "Aliases for package scripts."
export const aliases = getScriptNames()

export const handler = async ({ _ }: Arguments) => {
  const [scriptName, ...args] = _
  await execa(resolve(binDir, scriptName), args, {
    cwd: resolve(rootDir),
    stdio: "inherit",
  }).catch(error => {
    process.exit(1)
  })
}
