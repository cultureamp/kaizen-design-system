import yargs from "yargs"
import { execNodeBin } from "../util/exec"
import { getPath } from "../util/paths"

export const runGatsby = (args?: string[]) =>
  execNodeBin("gatsby", { args, cwd: getPath("site") })

const commandModule: yargs.CommandModule = {
  command: "gatsby",
  handler: () => runGatsby(process.argv.slice(3)),
}

const { command, handler } = commandModule
export { command, handler }
