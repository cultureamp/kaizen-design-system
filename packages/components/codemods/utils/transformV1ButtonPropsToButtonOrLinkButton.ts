import ts from 'typescript'
import { type ButtonProps as V1ButtonProps } from '~components/Button'
import { type ButtonProps as NextButtonProps } from '~components/__next__/Button'

import {
  createJsxElementWithChildren,
  createProp,
  createStringProp,
  getPropValueText,
} from '../utils'

export const migrateV1ButtonSize = (
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
  const sanitizedPropName = propName.replace(/'/g, '')
  const sanitizedPropValue =
    propValue?.kind === ts.SyntaxKind.StringLiteral
      ? propValue
      : ts.factory.createJsxExpression(undefined, propValue)

  switch (sanitizedPropName) {
    case 'onClick':
      return createProp('onPress', sanitizedPropValue)
    case 'reversed':
      return createProp('isReversed', sanitizedPropValue)
    case 'classNameOverride':
      return createProp('className', sanitizedPropValue)
    case 'data-automation-id':
      return createProp('data-testid', sanitizedPropValue)
    case 'fullWidth':
      return createProp('isFullWidth', sanitizedPropValue)
    case 'working':
      return createProp('isPending', sanitizedPropValue)
    case 'workingLabel':
      return createProp('pendingLabel', sanitizedPropValue)
    case 'workingLabelHidden':
      return createProp('hasHiddenPendingLabel', sanitizedPropValue)
    case 'onMouseDown':
      return createProp('onPressStart', sanitizedPropValue)
    case 'disableTabFocusAndIUnderstandTheAccessibilityImplications':
      return null
    case 'newTabAndIUnderstandTheAccessibilityImplications':
      return null
    case 'disabled':
      return createProp('isDisabled', sanitizedPropValue)
    case 'secondaryDismiss':
      return null
    case 'icon': {
      return createProp('icon', sanitizedPropValue)
    }
    case 'size': {
      if (!propValue) return createStringProp('size', 'large')

      const sizeValue = getPropValueText(propValue) as Exclude<V1ButtonProps['size'], undefined>
      return sizeValue
        ? createStringProp('size', migrateV1ButtonSize(sizeValue))
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

type TransformButtonProp = {
  import: string
  component: ts.JsxSelfClosingElement | ts.JsxElement
}

/** A utility to transform V1 Button props into a Button or LinkButton with the import JSX element */
export const transformV1ButtonPropsToButtonOrLinkButton = (
  buttonProps: ts.ObjectLiteralExpression,
  /** optional override for the variant type if needed, ie: primary or secondary actions*/
  variantOverride?: string,
): TransformButtonProp => {
  let childrenValue: ts.JsxAttributeValue | undefined
  let hasSizeProp = false
  let hasVariant = false
  let hasLinkAttr = false

  const newProps = buttonProps.properties.reduce<ts.JsxAttributeLike[]>((acc, currentProp) => {
    const propName = currentProp?.name?.getText()
    const propValue = ts.isPropertyAssignment(currentProp) ? currentProp.initializer : undefined

    if (propName) {
      if (propName === 'label') {
        if (ts.isShorthandPropertyAssignment(currentProp)) {
          childrenValue = ts.factory.createJsxExpression(
            undefined,
            ts.factory.createIdentifier(propName),
          )
          return acc
        }
        if (propValue && propValue?.kind !== ts.SyntaxKind.StringLiteral) {
          childrenValue = ts.factory.createJsxExpression(undefined, propValue)
          return acc
        }
        childrenValue = propValue as ts.JsxAttributeValue
        return acc
      }

      if (propName === 'newTabAndIUnderstandTheAccessibilityImplications') {
        return [
          ...acc,
          createStringProp('target', '_blank'),
          createStringProp('rel', 'noopener noreferrer'),
        ]
      }

      if (propName === 'primary' || propName === 'secondary' || variantOverride) {
        hasVariant = true
      }

      if (propName === 'size') {
        hasSizeProp = true
      }

      if (propName === 'href') {
        hasLinkAttr = true
        if (propValue && propValue?.kind !== ts.SyntaxKind.StringLiteral) {
          return [...acc, createProp('href', ts.factory.createJsxExpression(undefined, propValue))]
        }
        return [...acc, createProp('href', propValue as ts.StringLiteral)]
      }

      if (propName === 'component') {
        hasLinkAttr = true
        return [
          ...acc,
          createProp(
            'component',
            ts.factory.createJsxExpression(undefined, propValue) as ts.JsxExpression,
          ),
        ]
      }

      const newProp = transformButtonProp(propName, propValue as ts.JsxAttributeValue)

      if (newProp === null) return acc

      if (newProp === undefined) {
        const sanitizedPropName = propName.replace(/'|"/g, '')
        const sanitizedPropValue: ts.JsxAttributeValue =
          propValue?.kind === ts.SyntaxKind.StringLiteral
            ? (propValue as ts.StringLiteral)
            : (ts.factory.createJsxExpression(undefined, propValue) as ts.JsxExpression)
        const otherAttr = ts.factory.createJsxAttribute(
          ts.factory.createIdentifier(sanitizedPropName),
          sanitizedPropValue,
        )
        acc.push(otherAttr)
        return acc
      }

      if (newProp) {
        return [...acc, newProp]
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

  return {
    import: hasLinkAttr ? 'LinkButton' : 'Button',
    component: createJsxElementWithChildren(
      hasLinkAttr ? 'LinkButton' : 'Button',
      newProps,
      childrenValue,
    ),
  }
}
