import { transformComponentsInDir } from "../utils"
import { transformWellVariantToColor } from "./transformWellVariantToColor"
/** This is here as a script runner that  */
const migrateWellVariantToColor = (): void => {
  // eslint-disable-next-line no-console
  console.log(" ~(-_- ~) Running Well transformer (~ -_-)~")
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, transformWellVariantToColor, "Well")
}

migrateWellVariantToColor()
