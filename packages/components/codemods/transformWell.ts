import fs from "fs"
import path from "path"
import ts from "typescript"

const wellTransformer =
  <T extends ts.Node>(context: ts.TransformationContext) =>
  (rootNode: T) => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node)) {
        if (node.tagName.getText() === "Well") {
          let hasVariant = false
          let newAttributes = node.attributes.properties.map(attr => {
            if (ts.isJsxAttribute(attr) && attr.name.getText() === "variant") {
              hasVariant = true
              if (attr.initializer && ts.isStringLiteral(attr.initializer)) {
                let colorValue: string = "gray"
                switch (attr.initializer.text) {
                  case "default":
                    colorValue = "gray"
                    break
                  case "informative":
                    colorValue = "blue"
                    break
                  case "cautionary":
                    colorValue = "yellow"
                    break
                  case "assertive":
                    colorValue = "orange"
                    break
                  case "negative":
                    colorValue = "red"
                    break
                  case "positive":
                    colorValue = "green"
                    break
                  case "prominent":
                    colorValue = "purple"
                    break
                  default:
                    colorValue = "gray"
                }
                return ts.factory.createJsxAttribute(
                  ts.factory.createIdentifier("color"),
                  ts.factory.createStringLiteral(colorValue)
                )
              }
            }
            return attr
          })

          if (!hasVariant) {
            newAttributes = [
              ...newAttributes,
              ts.factory.createJsxAttribute(
                ts.factory.createIdentifier("color"),
                ts.factory.createStringLiteral("gray")
              ),
            ]
          }

          return ts.factory.updateJsxOpeningElement(
            node,
            node.tagName,
            node.typeArguments,
            ts.factory.createJsxAttributes(newAttributes)
          )
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

export const transformAst = (sourceFile: ts.SourceFile): string => {
  const result = ts.transform(sourceFile, [wellTransformer])
  const printer = ts.createPrinter()
  const transformedSource = printer.printFile(
    result.transformed[0] as ts.SourceFile
  )

  return transformedSource
}

export const updateAstSource = (fileName: string): string => {
  const source = fs.readFileSync(fileName, "utf8")
  const sourceFile = ts.createSourceFile(
    fileName,
    source,
    ts.ScriptTarget.Latest,
    true
  )

  return transformAst(sourceFile)
}

export const processDirectory = (dir: string): void => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath)
    } else if (fullPath.endsWith(".tsx")) {
      updateAstSource(fullPath)
    }
  })
}
