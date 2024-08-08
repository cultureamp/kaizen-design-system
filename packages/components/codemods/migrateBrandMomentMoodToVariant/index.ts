import { transformComponentsInDir } from "../utils"
import { transformBrandMomentMoodToVariant } from "./transformBrandMomentMoodToVariant"
/** This is here as a script runner that migrates Well variant to their color equivalent */
const migrateBrandMomentMoodToVariant = (): void => {
  // eslint-disable-next-line no-console
  console.log(
    " ~(-_- ~) Running BrandMoment mood to variant transformer (~ -_-)~"
  )
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformBrandMomentMoodToVariant,
    "BrandMoment"
  )
}

migrateBrandMomentMoodToVariant()
