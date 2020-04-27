#!/usr/bin/env node
import main from "./lib/index"
import { log } from "./lib/util"

const argv = require("yargs")
  .usage("Usage: $0 <command> [options]")
  .command(
    "move-drafts",
    "A once-off command to move all existing draft component imports from Kaizen to the new location"
  )
  .command(
    "bless",
    "TODO - Bless a component and move it from a draft to a core component"
  )
  .command(
    "curse",
    "TODO - Curse deprecates a component. All existing references will be moved to the legacy location"
  )
  .count("verbose")
  .alias("v", "verbose")
  .help("h")
  .alias("h", "help").argv

const VERBOSE_LEVEL = argv.verbose

const logger = log(VERBOSE_LEVEL)

if (argv._.includes("bless")) {
  console.log("bless will happen in the future")
} else if (argv._.includes("curse")) {
  console.log("curse this will happen in the future")
} else if (argv._.includes("move-drafts")) {
  let locations = "./"
  if (argv._.length == 2) {
    locations = argv._[1]
  }

  main(locations, logger)
}
