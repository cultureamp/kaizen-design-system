// Called from the webpack config (in node) -- use for validation, setup, etc.

import { readdirSync } from "fs"
import { dirname } from "path"

/** Print a conspicuous red error message and exit non-zero. */
const exitWithError = (...message: string[]): void => {
  // eslint-disable-next-line no-console
  console.error(`\n${message.join("\n")}\n`)
  process.exit(1)
}

// Check for compiler output in the @kaizen/component-library
// package. This state is required for linking with murmur, but it causes
// storybook to fail in ways that are difficult to diagnose.
if (
  readdirSync(dirname(require.resolve("@kaizen/component-library"))).includes(
    "index.js"
  )
) {
  exitWithError(
    "The component-library package contains compiled javascript!",
    "Please run `yarn clean` before running storybook again."
  )
}
