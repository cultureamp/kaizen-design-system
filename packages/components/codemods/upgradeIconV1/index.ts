import fs from "fs"
import ts from "typescript"
import { getKaioTagNamesByRegex, transformSource, traverseDir } from "../utils"
import { upgradeIconV1 } from "./upgradeIconV1"

const run = (): void => {
  // eslint-disable-next-line no-console
  console.log("~(-_- ~) Running Icon v1 to Future upgrade (~ -_-)~")
  const targetDir = process.argv[2]
  if (!targetDir) {
    process.exit(1)
  }

  const transformFile = (
    componentFilePath: string,
    sourceFile: ts.SourceFile
  ): void => {
    const tagNames = getKaioTagNamesByRegex(sourceFile, "Icon$")
    if (tagNames) {
      const updatedSourceFile = transformSource({
        sourceFile,
        astTransformer: upgradeIconV1,
        tagName: tagNames,
      })

      fs.writeFileSync(componentFilePath, updatedSourceFile, "utf8")
    }
  }

  traverseDir(targetDir, transformFile)
}

run()
