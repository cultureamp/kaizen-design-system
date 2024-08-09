import { transformComponentsInDir } from "../utils"
import { transformCardVariantToColor } from "./transformCardVariantToColor"

const migrateCardVariantToColor = (): void => {
  // eslint-disable-next-line no-console
  console.log(
    " ~(-_- ~) Running BrandMoment mood to variant transformer (~ -_-)~"
  )
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(targetDir, transformCardVariantToColor, "Card")
}

migrateCardVariantToColor()
