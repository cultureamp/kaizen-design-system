import { transformComponentsInDir } from "../utils"
import { transformEmptyStateIllustrationTypeToVariant } from "./transformEmptyStateIllustrationTypeToVariant"

const migrateEmptyStateIllustrationTypeToVariant = (): void => {
  // eslint-disable-next-line no-console
  console.log(
    " ~(-_- ~) Running EmptyState illustrationType to variant transformer (~ -_-)~"
  )
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformEmptyStateIllustrationTypeToVariant,
    "EmptyState"
  )
}

migrateEmptyStateIllustrationTypeToVariant()
