import { transformComponentsInDir } from "../utils"
import { transformConfirmationModalMoodsToVariant } from "./transformConfirmationModalMoodsToVariant"

const run = (): void => {
  console.log("~(-_- ~) Running ConfirmationModal transformer (~ -_-)~")
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformConfirmationModalMoodsToVariant,
    "ConfirmationModal"
  )
}

run()
