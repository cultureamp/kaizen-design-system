import fs from "fs"
import path from "path"
import ts from "typescript"

/** Recurses through AST to determine if a valid import statement for Well has been provided */
const checkForValidImports = (node: ts.Node): boolean => {
  let shouldTransform = false

  const visitNode = (visitedNode: ts.Node): boolean => {
    if (ts.isImportDeclaration(visitedNode)) {
      const moduleSpecifier = visitedNode.moduleSpecifier.getText()
      if (moduleSpecifier.includes("@kaizen/components")) {
        const namedBindings = visitedNode.importClause?.namedBindings
        if (namedBindings && ts.isNamedImports(namedBindings)) {
          namedBindings.elements.forEach(importSpecifier => {
            if (importSpecifier.name.getText() === "Well") {
              shouldTransform = true
            }
          })
        }
      }
    }
    return shouldTransform || ts.forEachChild(visitedNode, visitNode) || false
  }

  return visitNode(node)
}

/** Transformer function to update the inputs of Well to the new colors */
const wellTransformer =
  <T extends ts.Node>(context: ts.TransformationContext) =>
  (rootNode: T) => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node)) {
        // TODO: check alias names for Well
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

/** Returns original the source file if invalid, otherwise runs the well transformer  */
export const transformWellSource = (
  sourceFile: ts.SourceFile
): ts.SourceFile => {
  const shouldTransform = checkForValidImports(sourceFile)

  if (!shouldTransform) {
    return sourceFile
  }
  const result = ts.transform(sourceFile, [wellTransformer])
  const transformedSource = result.transformed[0] as ts.SourceFile

  return transformedSource
}

/** runs the transformer and writes the updated source back to the path provided */
export const updateFileContents = (filePath: string): string => {
  const source = fs.readFileSync(filePath, "utf8")
  const sourceFile = ts.createSourceFile(
    filePath,
    source,
    ts.ScriptTarget.Latest,
    true
  )
  const updatedSourceFile = transformWellSource(sourceFile)

  const printer = ts.createPrinter()
  const updatedSource = printer.printFile(updatedSourceFile)

  return updatedSource
}

/** Walks the directory given and runs the runs the AST updater */
export const processDirectory = (dir: string): void => {
  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath)
    } else if (fullPath.endsWith(".tsx")) {
      fs.writeFileSync(fullPath, updateFileContents(fullPath), "utf8")
    }
  })
}
