import fs from "fs"
import path from "path"
// eslint-disable-next-line import/no-extraneous-dependencies
import ts from "typescript"
import { transformSource, getImportAlias } from "../utils"

/** a  helper function to get the initializer text from   */
const getInitializerText = (
  initializer: ts.JsxAttributeValue
): string | undefined => {
  if (ts.isStringLiteral(initializer)) {
    return initializer.text
  }

  const expression = ts.isJsxExpression(initializer) && initializer.expression

  if (expression) {
    const expressionText = expression.getText()

    if (expressionText.match(/^['"`]/)) {
      return expressionText.replace(/^['"`]|['"`]$/g, "")
    }
  }
  return undefined
}

/** Recurses through AST to find and update any jsx element that matched the importAlias */
export const wellTransformer =
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
              const valueName =
                attr.initializer && getInitializerText(attr.initializer)

              if (valueName) {
                let colorValue: string = "gray"
                switch (valueName) {
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

/** Walks the directory given and runs the runs the AST updater */
export const processDirectory = (dir: string): void => {
  if (dir.includes("node_modules")) {
    return
  }

  const files = fs.readdirSync(dir)
  files.forEach(file => {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath)
    } else if (fullPath.endsWith(".tsx")) {
      const source = fs.readFileSync(fullPath, "utf8")
      const sourceFile = ts.createSourceFile(
        fullPath,
        source,
        ts.ScriptTarget.Latest,
        true
      )
      const importAlias = getImportAlias(sourceFile, "Well")

      if (importAlias) {
        const updatedSourceFile = transformSource(
          sourceFile,
          wellTransformer,
          importAlias
        )

        fs.writeFileSync(fullPath, updatedSourceFile, "utf8")
      }
    }
  })
}
