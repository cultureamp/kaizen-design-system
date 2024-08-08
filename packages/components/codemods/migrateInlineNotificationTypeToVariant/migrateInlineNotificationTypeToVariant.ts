import ts from "typescript"
import { getPropValueText } from "../utils/getPropValueText"

/** Recurses through AST to find and update any jsx element that matched the importAlias */
export const transformInlineNotificationTypeToVariant =
  (context: ts.TransformationContext, importAlias: string) =>
  (rootNode: ts.Node): ts.Node => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === importAlias) {
          const newAttributes = node.attributes.properties.map(attr => {
            if (ts.isJsxAttribute(attr) && attr.name.getText() === "type") {
              const valueName =
                attr.initializer && getPropValueText(attr.initializer)

              if (valueName) {
                let variantValue: string = valueName

                // Only change values that are necessary
                switch (valueName) {
                  case "negative":
                    variantValue = "warning"
                    break
                  case "positive":
                    variantValue = "success"
                    break
                }

                return ts.factory.createJsxAttribute(
                  ts.factory.createIdentifier("variant"),
                  ts.factory.createStringLiteral(variantValue)
                )
              }
            }

            return attr
          })

          if (ts.isJsxOpeningElement(node)) {
            return ts.factory.updateJsxOpeningElement(
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
