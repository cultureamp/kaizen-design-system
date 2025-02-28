import ts from 'typescript'
import { type ButtonProps as V1ButtonProps } from '~components/Button'
import { type ButtonProps as NextButtonProps } from '~components/__next__/Button'
import { createProp, createStringProp, getPropValueText } from '../utils'

const getNewSizeValue = (
  oldValue: Exclude<V1ButtonProps['size'], undefined>,
): Exclude<NextButtonProps['size'], undefined> => {
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
    case 'fullWidth':
      return createProp('isFullWidth', propValue)
    case 'working':
      return createProp('isPending', propValue)
    case 'workingLabel':
      return createProp('pendingLabel', propValue)
    case 'workingLabelHidden':
      return createProp('hasHiddenPendingLabel', propValue)
    case 'onMouseDown':
      return createProp('onPressStart', propValue)
    case 'disableTabFocusAndIUnderstandTheAccessibilityImplications':
      return createProp('onPressEnd', propValue)
    case 'newTabAndIUnderstandTheAccessibilityImplications':
      return null
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

type TransformedButtonAttributes = {
  targetComponentName: string
  newAttributes: ts.JsxAttributeLike[]
  childrenValue: ts.JsxAttributeValue | undefined
}

export const transformV1ButtonAttributes = (
  node: ts.JsxSelfClosingElement,
  kaioComponentName: string,
): TransformedButtonAttributes => {
  let childrenValue: ts.JsxAttributeValue | undefined
  let hasSizeProp = false
  let hasVariant = false
  let hasLinkAttr = false

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

      if (propName === 'primary' || propName === 'secondary') {
        hasVariant = true
      }

      if (propName === 'size') {
        hasSizeProp = true
      }

      if (propName === 'href' || propName === 'component') {
        hasLinkAttr = true
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

  return {
    targetComponentName: hasLinkAttr ? 'LinkButton' : 'Button',
    newAttributes,
    childrenValue,
  }
}
