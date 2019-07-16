import yargs from "yargs"
import { execNodeBin } from "../util/exec"
import { getPath } from "../util/paths"

const commandModule: yargs.CommandModule = {
  command: "gatsby",
  describe: "Run gatsby in the site package.",
  handler: ({ _ }) => {
    execNodeBin("gatsby", {
      args: _.slice(1),
      cwd: getPath("site"),
    })
  },
}

const { command, describe, handler } = commandModule
export { command, describe, handler }
