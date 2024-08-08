import ts from "typescript"
import { updateJsxElementWithNewProps } from "../utils"
import { getPropValueText } from "../utils/getPropValueText"

const OLD_PROP_NAME = "mood"
const NEW_PROP_NAME = "variant"

const getNewVariantValue = (oldValue: string | undefined): string => {
  switch (oldValue) {
    case "informative":
      return "informative"
    case "positive":
      return "success"
    case "negative":
      return "warning"
    default:
      return "informative"
  }
}

/** Recurses through AST to find and update any jsx element that matched the tagName */
export const transformBrandMomentMoodToVariant =
  (context: ts.TransformationContext, tagName: string) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === tagName) {
          const newAttributes = node.attributes.properties.map(attr => {
            if (
              ts.isJsxAttribute(attr) &&
              attr.name.getText() === OLD_PROP_NAME
            ) {
              const oldValue =
                attr.initializer && getPropValueText(attr.initializer)

              if (oldValue) {
                const newValue = getNewVariantValue(oldValue)
                return ts.factory.createJsxAttribute(
                  ts.factory.createIdentifier(NEW_PROP_NAME),
                  ts.factory.createStringLiteral(newValue)
                )
              }
            }

            return attr
          })

          return updateJsxElementWithNewProps(node, newAttributes)
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }
