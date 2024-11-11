import fs from "fs"
import path from "path"
import { createEncodedSourceFile } from "./createEncodedSourceFile"
import { getKaioTagName } from "./getKaioTagName"
import {
  transformSourceForTagName,
  type TransformSourceForTagNameArgs,
} from "./transformSource"

export const traverseDir = (
  dir: string,
  transformFile: (componentFilePath: string, sourceCode: string) => void
): void => {
  if (dir.includes("node_modules")) {
    return
  }

  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const fullPath = path.join(dir, file)

    if (fs.statSync(fullPath).isDirectory()) {
      traverseDir(fullPath, transformFile)
    } else if (fullPath.endsWith(".tsx")) {
      const sourceCode = fs.readFileSync(fullPath, "utf8")
      transformFile(fullPath, sourceCode)
    }
  })
}

/** Walks the directory and runs the AST transformer on the given component name */
export const transformComponentsInDir = (
  dir: string,
  transformer: TransformSourceForTagNameArgs["astTransformer"],
  componentName: string
): void => {
  const transformFile = (
    componentFilePath: string,
    sourceCode: string
  ): void => {
    const sourceFile = createEncodedSourceFile(componentFilePath, sourceCode)

    const tagName = getKaioTagName(sourceFile, componentName)
    if (tagName) {
      const updatedSourceFile = transformSourceForTagName({
        sourceFile,
        astTransformer: transformer,
        tagName,
      })

      fs.writeFileSync(componentFilePath, updatedSourceFile, "utf8")
    }
  }

  traverseDir(dir, transformFile)
}
