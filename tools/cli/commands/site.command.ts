import yargs from "yargs"
import { runGatsby } from "./gatsby.command"

const commandModule: yargs.CommandModule = {
  command: "site",
  describe: "Develop the site locally.",
  handler: argv => runGatsby(["develop", ...argv._.slice(1)]),
}

const { command, describe, handler } = commandModule
export { command, describe, handler }
