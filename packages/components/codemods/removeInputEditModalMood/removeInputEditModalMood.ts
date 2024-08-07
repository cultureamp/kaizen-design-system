import ts from "typescript"

/** Recurses through AST to find and update any jsx element that matched the tagName */
export const removeInputEditModalMood =
  (context: ts.TransformationContext, tagName: string) =>
  (rootNode: ts.Node): ts.Node => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === tagName) {
          const newAttributes = node.attributes.properties.map(attr => {
            if (ts.isJsxAttribute(attr) && attr.name.getText() === "mood") {
              return undefined
            }

            return attr
          })

          if (ts.isJsxOpeningElement(node)) {
            return ts.factory.updateJsxOpeningElement(
              node,
              node.tagName,
              node.typeArguments,
              ts.factory.createJsxAttributes(
                newAttributes.filter(
                  attr => attr !== undefined
                ) as ts.JsxAttributeLike[]
              )
            )
          } else if (ts.isJsxSelfClosingElement(node)) {
            return ts.factory.updateJsxSelfClosingElement(
              node,
              node.tagName,
              node.typeArguments,
              ts.factory.createJsxAttributes(
                newAttributes.filter(
                  attr => attr !== undefined
                ) as ts.JsxAttributeLike[]
              )
            )
          }
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit)
  }
