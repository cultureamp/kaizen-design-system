import { transformComponentsInDir } from "../utils"
import { transformGuidanceBlockVariantProp } from "./transformGuidanceBlockVariantProp"
/** This is here as a script runner that updates GuidanceBlock variants to v2 variants */
const updateGuidanceBlockVariantProp = (): void => {
  // eslint-disable-next-line no-console
  console.log(" ~(-_- ~) Running GuidanceBlock transformer (~ -_-)~")
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  transformComponentsInDir(
    targetDir,
    transformGuidanceBlockVariantProp,
    "GuidanceBlock"
  )
}

updateGuidanceBlockVariantProp()
