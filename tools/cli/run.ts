import chalk from "chalk"
import { resolve } from "path"
import * as cli from "yargs"

cli
  .usage(
    "🌱 " +
      chalk.underline("kaizen") +
      " -- A command-line utility for Culture Amp's " +
      chalk.green("Kaizen Design System") +
      "."
  )
  .demandCommand()
  .showHelpOnFail(true)
  .hide("version")
  .scriptName("")

  .commandDir(resolve(__dirname, "commands"), {
    extensions: ["ts"],
    recurse: true,
    exclude: /node_modules/,
    include: /^.+\.command\.ts$/,
  }).argv
