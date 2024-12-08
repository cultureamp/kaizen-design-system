import ts from 'typescript'
import { createStringProp, getPropValueText, updateJsxElementWithNewProps } from '../utils'

export const transformSpinnerIconToLoadingSpinner = (
  node: ts.JsxOpeningElement | ts.JsxSelfClosingElement,
  tagName: string = 'LoadingSpinner',
): ts.Node => {
  let accessibilityLabel = 'Loading'
  const newAttributes = node.attributes.properties.reduce<ts.JsxAttributeLike[]>((acc, attr) => {
    if (ts.isJsxAttribute(attr)) {
      const propName = attr.name.getText()

      if (propName === 'role') return acc
      if (propName === 'viewBox') return acc

      if (propName === 'aria-label') {
        const value = attr.initializer && getPropValueText(attr.initializer)
        if (value) {
          accessibilityLabel = value
        }
        return acc
      }
    }

    acc.push(attr)
    return acc
  }, [])

  newAttributes.unshift(createStringProp('accessibilityLabel', accessibilityLabel))
  newAttributes.unshift(createStringProp('size', 'xs'))

  return updateJsxElementWithNewProps(node, newAttributes, tagName)
}
