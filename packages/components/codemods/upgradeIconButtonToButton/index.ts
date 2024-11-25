import { transformComponentInDir } from "../utils"
import { upgradeIconButtonToButton } from "./upgradeIconButtonToButton"

const run = (): void => {
  console.log("~(-_- ~) Running IconButton to Button upgrade (~ -_-)~")

  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentInDir(targetDir, "IconButton", tagName => [
    upgradeIconButtonToButton(tagName),
  ])
}

run()
