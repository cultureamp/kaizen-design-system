import ts from 'typescript'
import { type ButtonProps as V1ButtonProps } from '~components/Button'
import { type ButtonProps as RCButtonProps } from '~components/__rc__/Button'
import {
  createJsxElementWithChildren,
  createProp,
  createStringProp,
  getPropValueText,
} from '../utils'

const getNewSizeValue = (
  oldValue: Exclude<V1ButtonProps['size'], undefined>,
): Exclude<RCButtonProps['size'], undefined> => {
  switch (oldValue) {
    case 'small':
      return 'medium'
    case 'regular':
      return 'large'
  }
}

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
    case 'size': {
      if (!propValue) return createStringProp('size', 'large')

      const sizeValue = getPropValueText(propValue) as Exclude<V1ButtonProps['size'], undefined>
      return sizeValue
        ? createStringProp('size', getNewSizeValue(sizeValue))
        : createProp('size', propValue)
    }
    case 'primary':
      return createStringProp('variant', 'primary')
    case 'secondary':
      return createStringProp('variant', 'tertiary')
    case 'destructive':
      return null
    default:
      return undefined
  }
}

export const transformV1Buttons = (
  node: ts.JsxSelfClosingElement,
  kaioComponentName: string,
  tagName: string = 'Button',
): ts.Node => {
  let childrenValue: ts.JsxAttributeValue | undefined
  let hasSizeProp = false
  let hasVariant = false

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

      if (propName === 'size') {
        hasSizeProp = true
      }

      if (propName === 'primary' || propName === 'secondary') {
        hasVariant = true
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

  if (!hasVariant) {
    newAttributes.push(
      createStringProp('variant', kaioComponentName === 'IconButton' ? 'tertiary' : 'secondary'),
    )
  }

  if (!hasSizeProp) {
    newAttributes.push(createStringProp('size', 'large'))
  }

  if (kaioComponentName === 'IconButton') {
    newAttributes.push(createProp('hasHiddenLabel'))
  }

  return createJsxElementWithChildren(tagName, newAttributes, childrenValue)
}
