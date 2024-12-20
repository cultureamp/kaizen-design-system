import ts from 'typescript'
import { type TagImportAttributesMap } from './getKaioTagName'
import { getPropValueText } from './getPropValueText'
import { updateJsxElementWithNewProps } from './updateJsxElementWithNewProps'

export const migrateStringProp =
  <OldValue extends string, NewValue extends string>(
    oldPropName: string,
    newPropName: string,
    valueTransformer: (value: OldValue) => NewValue,
  ) =>
  (tagsMap: TagImportAttributesMap): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap.get(tagName)

        if (!tagImportAttributes) return node

        if (tagName === tagImportAttributes.tagName) {
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
    return ts.visitNode(rootNode, visit) as ts.SourceFile
  }
