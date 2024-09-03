import { transformComponentsInDir } from "../utils"
import { transformFieldMessageStatusToVariant } from "./transformFieldMessageStatusToVariant"

const migrateFieldMessageStatusToVariant = (): void => {
  // eslint-disable-next-line no-console
  console.log(
    " ~(-_- ~) Running FieldMessage status to variant transformer (~ -_-)~"
  )
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformFieldMessageStatusToVariant,
    "FieldMessage"
  )
}

migrateFieldMessageStatusToVariant()
