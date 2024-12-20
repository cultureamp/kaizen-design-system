import ts from 'typescript'
import { updateJsxElementWithNewProps, type TagImportAttributesMap } from '../utils'
import { getPropValueText } from '../utils/getPropValueText'

export const transformWellVariantToColor =
  (tagsMap: TagImportAttributesMap): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    function visit(node: ts.Node): ts.Node {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap.get(tagName)

        if (!tagImportAttributes) return node

        if (node.tagName.getText() === tagImportAttributes.tagName) {
          let hasVariant = false
          let hasColor = false
          let newAttributes = node.attributes.properties.map((attr) => {
            if (ts.isJsxAttribute(attr) && attr.name.getText() === 'variant') {
              hasVariant = true
              const valueName = attr.initializer && getPropValueText(attr.initializer)

              if (valueName) {
                let colorValue: string = 'gray'
                switch (valueName) {
                  case 'default':
                    colorValue = 'gray'
                    break
                  case 'informative':
                    colorValue = 'blue'
                    break
                  case 'cautionary':
                    colorValue = 'yellow'
                    break
                  case 'assertive':
                    colorValue = 'orange'
                    break
                  case 'negative':
                    colorValue = 'red'
                    break
                  case 'positive':
                    colorValue = 'green'
                    break
                  case 'prominent':
                    colorValue = 'purple'
                    break
                  default:
                    colorValue = 'gray'
                }
                return ts.factory.createJsxAttribute(
                  ts.factory.createIdentifier('color'),
                  ts.factory.createStringLiteral(colorValue),
                )
              }
            }
            if (ts.isJsxAttribute(attr) && attr.name.getText() === 'color') {
              hasColor = true
            }
            return attr
          })

          if (!hasColor && !hasVariant) {
            newAttributes = [
              ...newAttributes,
              ts.factory.createJsxAttribute(
                ts.factory.createIdentifier('color'),
                ts.factory.createStringLiteral('gray'),
              ),
            ]
          }

          return updateJsxElementWithNewProps(node, newAttributes)
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit) as ts.SourceFile
  }
