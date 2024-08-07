import ts from "typescript"
import { getPropValueText } from "../utils/getPropValueText"

/** Recurses through AST to find and update any jsx element that matched the tagName */
export const transformConfirmationModalMoodsToVariant =
  (context: ts.TransformationContext, tagName: string) =>
  (rootNode: ts.Node): ts.Node => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === tagName) {
          const newAttributes = node.attributes.properties.map(attr => {
            if (ts.isJsxAttribute(attr) && attr.name.getText() === "mood") {
              const valueName =
                attr.initializer && getPropValueText(attr.initializer)

              if (valueName) {
                let variantValue: string = ""
                switch (valueName) {
                  case "positive":
                    variantValue = "success"
                    break
                  case "negative":
                    variantValue = "warning"
                    break
                  case "assertive":
                    variantValue = "cautionary"
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
