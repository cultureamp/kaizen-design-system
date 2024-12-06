import ts from 'typescript'
import { createJsxElementWithChildren, createProp, createStringProp } from '../utils'

/**
 * @returns
 * - `ts.JsxAttribute` if the prop should be transformed
 * - `null` if the prop should be removed
 * - `undefined` if the prop should be kept as is
 */
const transformProp = (
  propName: string,
  propValue: ts.JsxAttributeValue | undefined,
): ts.JsxAttribute | null | undefined => {
  switch (propName) {
    case 'onClick':
      return createProp('onPress', propValue)
    case 'reversed':
      return createProp('isReversed', propValue)
    case 'classNameOverride':
      return createProp('className', propValue)
    case 'data-automation-id':
      return createProp('data-testid', propValue)
    case 'disabled':
      return createProp('isDisabled', propValue)
    default:
      return undefined
  }
}

export const transformV1ButtonsToV3 = (
  node: ts.JsxSelfClosingElement,
  kaioComponentName: string,
  tagName: string = 'Button',
): ts.Node => {
  let childrenValue: ts.JsxAttributeValue | undefined

  const newAttributes = node.attributes.properties.reduce<ts.JsxAttributeLike[]>((acc, attr) => {
    if (ts.isJsxAttribute(attr)) {
      const propName = attr.name.getText()

      if (propName === 'label') {
        childrenValue = attr.initializer
        return acc
      }

      if (propName === 'newTabAndIUnderstandTheAccessibilityImplications') {
        acc.push(createStringProp('target', '_blank'))
        acc.push(createStringProp('rel', 'noopener noreferrer'))
        return acc
      }

      const newProp = transformProp(propName, attr.initializer)

      if (newProp === null) return acc

      if (newProp) {
        acc.push(newProp)
        return acc
      }
    }

    acc.push(attr)
    return acc
  }, [])

  if (kaioComponentName === 'IconButton') {
    newAttributes.push(createProp('hasHiddenLabel'))
  }

  return createJsxElementWithChildren(tagName, newAttributes, childrenValue)
}
