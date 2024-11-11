import fs from "fs"
import path from "path"
import ts from "typescript"
import { getKaioTagName } from "./getKaioTagName"
import {
  transformSourceForTagName,
  type TransformSourceForTagNameArgs,
} from "./transformSource"

export const traverseDir = (
  dir: string,
  transformFile: (componentFilePath: string, sourceFile: ts.SourceFile) => void
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
      const source = fs.readFileSync(fullPath, "utf8")
      const sourceFile = ts.createSourceFile(
        fullPath,
        source,
        ts.ScriptTarget.Latest,
        true
      )

      transformFile(fullPath, sourceFile)
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
    sourceFile: ts.SourceFile
  ): void => {
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
