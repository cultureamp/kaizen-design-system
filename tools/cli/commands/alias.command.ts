import execa from "execa"
import { readdirSync } from "fs"
import { resolve } from "path"
import { CommandModule } from "yargs"
import { getPath } from "../util/paths"

/** List of package script names to skip when generating aliases. */
const ignore = ["cli"]

const scriptNames = () =>
  readdirSync(getPath("scripts"), { withFileTypes: true })
    .filter(dirent => !dirent.isDirectory())
    .map(dirent => dirent.name)
    .filter(name => !ignore.includes(name))

const commandModule: CommandModule = {
  command: "<script>",
  describe: "Aliases for package scripts...",
  aliases: scriptNames(),
  handler: async ({ _ }) => {
    const [scriptName, ...args] = _
    await execa(resolve(getPath("scripts"), scriptName), args, {
      cwd: getPath("root"),
      stdio: "inherit",
    }).catch(() => process.exit(1))
  },
}

const { command, describe, aliases, handler } = commandModule
export { command, describe, aliases, handler }
