import fs from "fs"
import path from "path"
import ts from "typescript"
import { transformSource, getKaioTagName, TransformConfig } from "."

const createTsSourceFile = (fullPath: string): ts.SourceFile => {
  const source = fs.readFileSync(fullPath, "utf8")
  return ts.createSourceFile(
    fullPath,
    source,
    ts.ScriptTarget.Latest,
    true
  )
}

/** Walks the directory and runs the AST transformer on the given component name */
export const transformComponentsInDir = (
  dir: string,
  transformer: TransformConfig["astTransformer"],
  componentName: string
): void => {
  if (dir.includes("node_modules")) {
    return
  }

  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const fullPath = path.join(dir, file)

    if (fs.statSync(fullPath).isDirectory()) {
      transformComponentsInDir(fullPath, transformer, componentName)
    } else if (fullPath.endsWith(".tsx")) {
      const sourceFile = createTsSourceFile(fullPath)

      const tagName = getKaioTagName(sourceFile, componentName)
      if (tagName) {
        const updatedSourceFile = transformSource({
          sourceFile,
          astTransformer: transformer,
          tagName,
        })

        fs.writeFileSync(fullPath, updatedSourceFile, "utf8")
      }
    }
  })
}
