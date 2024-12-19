import ts from 'typescript'
import { type TagImportAttributesMap } from './getKaioTagName'
import { updateJsxElementWithNewProps } from './updateJsxElementWithNewProps'

export const removeProps =
  (propsToRemove: string[]) =>
  (tagsMap: TagImportAttributesMap): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap.get(tagName)

        if (!tagImportAttributes) return node

        if (tagName === tagImportAttributes.tagName) {
          const newAttributes = node.attributes.properties.reduce<ts.JsxAttributeLike[]>(
            (acc, attr) => {
              if (ts.isJsxAttribute(attr) && propsToRemove.includes(attr.name.getText())) {
                return acc
              }

              return [...acc, attr]
            },
            [],
          )

          return updateJsxElementWithNewProps(node, newAttributes)
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit) as ts.SourceFile
  }
