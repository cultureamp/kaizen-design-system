import ts from "typescript"
import { getPropValueText } from "../utils/getPropValueText"

/** Recurses through AST to find and update any jsx element that matched the tagName */
export const transformGuidanceBlockVariantProp =
  (context: ts.TransformationContext, tagName: string) =>
  (rootNode: ts.Node): ts.Node => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === tagName) {
          const newAttributes = node.attributes.properties.reduce<
            ts.JsxAttributeLike[]
          >((acc, attr) => {
            if (ts.isJsxAttribute(attr) && attr.name.getText() === "variant") {
              const valueName =
                attr.initializer && getPropValueText(attr.initializer)

              const oldValues = [
                "positive",
                "negative",
                "informative",
                "cautionary",
                "assertive",
              ]

              if (valueName) {
                if (oldValues.includes(valueName)) {
                  // Remove the attribute for old values
                  return acc
                }

                if (valueName === "expert-advice") {
                  // Replace the attribute value for expert-advice
                  return [
                    ...acc,
                    ts.factory.createJsxAttribute(
                      attr.name,
                      ts.factory.createStringLiteral("prominent")
                    ),
                  ]
                }

                // Keep the attribute for other values
                return [...acc, attr]
              }
            }

            return [...acc, attr]
          }, [])

          if (ts.isJsxSelfClosingElement(node)) {
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
