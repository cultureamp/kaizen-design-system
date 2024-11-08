import ts from "typescript"
import { getPropValueText } from "./getPropValueText"
import { updateJsxElementWithNewProps } from "./updateJsxElementWithNewProps"

/** Recurses through AST to find and update any jsx element that matched the tagName */
export const migrateStringProp =
  <OldValue extends string, NewValue extends string>(
    oldPropName: string,
    newPropName: string,
    valueTransformer: (value: OldValue) => NewValue,
  ) =>
  (context: ts.TransformationContext, tagName: string) =>
  (rootNode: ts.Node): ts.Node => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        if (node.tagName.getText() === tagName) {
          const newAttributes = node.attributes.properties.map((attr) => {
            if (ts.isJsxAttribute(attr) && attr.name.getText() === oldPropName) {
              const oldValue = attr.initializer && getPropValueText(attr.initializer)

              if (oldValue) {
                const newValue = valueTransformer(oldValue as OldValue)
                return ts.factory.createJsxAttribute(
                  ts.factory.createIdentifier(newPropName),
                  ts.factory.createStringLiteral(newValue),
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
