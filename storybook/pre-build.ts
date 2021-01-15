// Called from the webpack config (in node) -- use for validation, setup, etc.

import { readdirSync } from "fs"
import { dirname } from "path"
import chalk from "chalk"

/** Print a conspicuous red error message and exit non-zero. */
const exitWithError = (...message: string[]) => {
  // eslint-disable-next-line no-console
  console.error(chalk.red(`\n${message.join("\n")}\n`))
  process.exit(1)
}
