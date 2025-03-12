import ts from 'typescript'
import { type ButtonProps as V1ButtonProps } from '~components/Button'
import { type ButtonProps as NextButtonProps } from '~components/__next__/Button'

import {
  createJsxElementWithChildren,
  createProp,
  createStringProp,
  getPropValueText,
} from '../utils'

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
 * A function that transforms button v1 prop values into a Button/next JSX component
 * @returns
 * - `ts.JsxAttribute` if the prop should be transformed
 * - `null` if the prop should be removed
 * - `undefined` if the prop should be kept as is
 */

export const transformButtonProp = (
  propName: string,
  propValue: ts.JsxAttributeValue | undefined,
): ts.JsxAttribute | null | undefined => {
  switch (propName) {
    case 'onClick':
      if (propValue && ts.isArrowFunction(propValue)) {
        return createProp('onPress', ts.factory.createJsxExpression(undefined, propValue))
      }
      return createProp('onPress', propValue)

    case 'reversed':
      console.log('reversed---')
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
      return null
    case 'newTabAndIUnderstandTheAccessibilityImplications':
      return null
    case 'disabled':
      return createProp('isDisabled', propValue)
    case 'secondaryDismiss':
      return null
    case 'actions': {
      return null
    }
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

export type TransformedButtonAttributes = {
  targetComponentName: string
  newAttributes: ts.JsxAttributeLike[]
  childrenValue: ts.JsxAttributeValue | undefined
}

/**
 * A function that transforms a v1 button object literal into an new actionsSlot prop as JSX elements
 * expects that the node passed in will be an ObjectLiteralExpression, ie:
 * `{primary: {...buttonV1Props}, secondary: {...buttonV1Props}}`
 */
export const transformActionsToButtonNext = (
  node: ts.ObjectLiteralExpression,
): ts.JsxAttributeLike[] => {
  if (ts.isObjectLiteralExpression(node)) {
    const newActionsSlotAttr: ts.JsxAttributeLike[] = []

    const primaryAction = node.properties.find((prop) => prop?.name?.getText() === 'primary') as
      | ts.PropertyAssignment
      | undefined

    const secondaryAction = node.properties.find(
      (prop) => prop?.name?.getText() === 'secondary',
    ) as ts.PropertyAssignment | undefined

    let primaryButton: ts.JsxSelfClosingElement | ts.JsxElement | undefined = undefined
    let secondaryButton: ts.JsxSelfClosingElement | ts.JsxElement | undefined = undefined

    if (primaryAction) {
      primaryButton = primaryAction
        ? createButtonElementFromV1ButtonAction(primaryAction, 'secondary')
        : undefined
    }

    if (secondaryAction) {
      secondaryButton = secondaryAction
        ? createButtonElementFromV1ButtonAction(secondaryAction, 'tertiary')
        : undefined
    }

    if (primaryButton || secondaryButton) {
      newActionsSlotAttr.push(
        ts.factory.createJsxAttribute(
          ts.factory.createIdentifier('actionsSlot'),
          ts.factory.createJsxExpression(
            undefined,
            ts.factory.createJsxFragment(
              ts.factory.createJsxOpeningFragment(),
              [primaryButton, secondaryButton].filter(Boolean) as ts.JsxChild[],
              ts.factory.createJsxJsxClosingFragment(),
            ),
          ),
        ),
      )
    }

    return newActionsSlotAttr
  }
  return []
}

const createButtonElementFromV1ButtonAction = (
  action: ts.PropertyAssignment,
  variantOverride?: string,
): ts.JsxSelfClosingElement | ts.JsxElement => {
  let childrenValue: ts.JsxAttributeValue | undefined
  let hasSizeProp = false
  let hasVariant = false
  let hasLinkAttr = false
  const props = action.initializer as ts.ObjectLiteralExpression

  const newProps = props.properties.reduce<ts.JsxAttributeLike[]>((acc, currentProp) => {
    const propName = currentProp?.name?.getText()
    const propValue = ts.isPropertyAssignment(currentProp) ? currentProp.initializer : undefined

    if (propName) {
      if (propName === 'label') {
        childrenValue = propValue as ts.JsxAttributeValue
        return acc
      }

      if (propName === 'newTabAndIUnderstandTheAccessibilityImplications') {
        acc.push(createStringProp('target', '_blank'))
        acc.push(createStringProp('rel', 'noopener noreferrer'))
        return acc
      }

      if (propName === 'primary' || propName === 'secondary' || variantOverride) {
        hasVariant = true
      }

      if (propName === 'size') {
        hasSizeProp = true
      }

      if (propName === 'href' || propName === 'component') {
        hasLinkAttr = true
        acc.push(createProp('href', propValue as ts.StringLiteral))
      }

      const newProp = transformButtonProp(propName, propValue as ts.JsxAttributeValue)

      if (newProp === null) return acc

      if (newProp) {
        acc.push(newProp)
        return acc
      }
    }

    return acc
  }, [])

  if (!hasVariant) {
    newProps.push(createStringProp('variant', 'secondary'))
  }

  if (variantOverride) {
    newProps.push(createStringProp('variant', variantOverride))
  }

  if (!hasSizeProp) {
    newProps.push(createStringProp('size', 'large'))
  }

  return createJsxElementWithChildren(
    hasLinkAttr ? 'LinkButton' : 'Button',
    newProps,
    childrenValue,
  )
}
