import { transformComponentsInDir } from "../utils"
import { transformConfirmationModalMoodsToVariant } from "./transformConfirmationModalMoodsToVariant"
/** This is here as a script runner that migrates Well variant to their color equivalent */
const migrateModalMoodsToVariant = (): void => {
  // eslint-disable-next-line no-console
  console.log(" ~(-_- ~) Running Modal transformer (~ -_-)~")
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

migrateModalMoodsToVariant()
