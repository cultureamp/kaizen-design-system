import fs from "fs"
import path from "path"
import ts from "typescript"

/** Recurses through AST to find the target import. If found will return the import name or alias if one exists, else `undefined` */
const getImportAlias = (node: ts.Node, target: string): string | undefined => {
  let alias: string | undefined

  const visitNode = (visitedNode: ts.Node): string | undefined => {
    if (ts.isImportDeclaration(visitedNode)) {
      const moduleSpecifier = visitedNode.moduleSpecifier.getText()
      if (moduleSpecifier.includes("@kaizen/components")) {
        const namedBindings = visitedNode.importClause?.namedBindings
        if (namedBindings && ts.isNamedImports(namedBindings)) {
          namedBindings.elements.forEach(importSpecifier => {
            const importName = importSpecifier.name.getText()
            const importAlias = importSpecifier.propertyName
              ? importSpecifier.propertyName.getText()
              : importName
            if (importAlias === target) {
              alias = importName
            }
          })
        }
      }
    }
    return alias || ts.forEachChild(visitedNode, visitNode) || undefined
  }

  return visitNode(node)
}

/** Recurses through AST to find and update any jsx element that matched the importAlias */
const wellTransformer =
  (context: ts.TransformationContext, importAlias: string) =>
  (rootNode: ts.Node): ts.Node => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === importAlias) {
          let hasVariant = false
          let hasColor = false
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
            if (ts.isJsxAttribute(attr) && attr.name.getText() === "color") {
              hasColor = true
            }
            return attr
          })

          if (!hasColor && !hasVariant) {
            newAttributes = [
              ...newAttributes,
              ts.factory.createJsxAttribute(
                ts.factory.createIdentifier("color"),
                ts.factory.createStringLiteral("gray")
              ),
            ]
          }

          if (ts.isJsxOpeningElement(node)) {
            return ts.factory.updateJsxOpeningElement(
              node,
              node.tagName,
              node.typeArguments,
              ts.factory.createJsxAttributes(newAttributes)
            )
          } else if (ts.isJsxSelfClosingElement(node)) {
            return ts.factory.updateJsxSelfClosingElement(
              node,
              node.tagName,
              node.typeArguments,
              ts.factory.createJsxAttributes(newAttributes)
            )
          }
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }

export const transformWellSource = (
  sourceFile: ts.SourceFile
): ts.SourceFile => {
  const importAlias = getImportAlias(sourceFile, "Well")

  if (!importAlias) {
    return sourceFile
  }

  const result = ts.transform(sourceFile, [
    context => wellTransformer(context, importAlias),
  ])
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
      const updatedSourceFile = updateFileContents(fullPath)

      fs.writeFileSync(fullPath, updatedSourceFile, "utf8")
    }
  })
}
