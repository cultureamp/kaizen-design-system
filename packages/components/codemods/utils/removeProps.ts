import ts from "typescript"
import { updateJsxElementWithNewProps } from "./updateJsxElementWithNewProps"

export const removeProps =
  (propsToRemove: string[]) =>
  (context: ts.TransformationContext, tagName: string) =>
  (rootNode: ts.SourceFile): ts.SourceFile => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === tagName) {
          const newAttributes = node.attributes.properties.reduce<
            ts.JsxAttributeLike[]
          >((acc, attr) => {
            if (
              ts.isJsxAttribute(attr) &&
              propsToRemove.includes(attr.name.getText())
            ) {
              return acc
            }

            return [...acc, attr]
          }, [])

          return updateJsxElementWithNewProps(node, newAttributes)
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit) as ts.SourceFile
  }
