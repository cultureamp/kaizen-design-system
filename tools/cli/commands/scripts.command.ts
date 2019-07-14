import execa from "execa"
import { readdirSync } from "fs"
import { resolve } from "path"
import { CommandModule } from "yargs"

/** List of package script names to skip when generating aliases. */
const ignore = ["cli"]

const rootDir = resolve(__dirname, "../../..")
const binDir = resolve(rootDir, "bin")

const getScriptNames = () =>
  readdirSync(binDir, { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !ignore.includes(name))

const commandModule: CommandModule = {
  command: "<script>",
  describe: "Aliases for package scripts.",
  aliases: getScriptNames(),
  handler: async ({ _ }) => {
    const [scriptName, ...args] = _
    await execa(resolve(binDir, scriptName), args, {
      cwd: rootDir,
      stdio: "inherit",
    }).catch(() => process.exit(1))
  },
}

const { command, describe, aliases, handler } = commandModule
export { command, describe, aliases, handler }
