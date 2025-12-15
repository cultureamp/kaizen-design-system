import ts from 'typescript'
import { transformV1ButtonPropsToButtonOrLinkButton } from '../utils'

type GuidanceBlockTransformedActions = {
  importsToAdd: string[]
  actionsSlotAttr: ts.JsxAttributeLike
}

/**
 * A function that transforms a GuidanceBlock v1 button object literal into an new actionsSlot prop as JSX elements
 * expects that the node passed in will be an ObjectLiteralExpression, ie:
 * `{primary: {...buttonV1Props}, secondary: {...buttonV1Props}}`
 */
export const transformActionsToActionsSlot = (
  node: ts.ObjectLiteralExpression,
  hasActionButtonArrow: boolean,
): GuidanceBlockTransformedActions | undefined => {
  if (ts.isObjectLiteralExpression(node)) {
    const newImports: (string | undefined)[] = []
    let arrowIconWasAdded = false

    const primaryAction = node.properties.find((prop) => prop?.name?.getText() === 'primary') as
      | ts.PropertyAssignment
      | undefined

    const secondaryAction = node.properties.find(
      (prop) => prop?.name?.getText() === 'secondary',
    ) as ts.PropertyAssignment | undefined

    let primaryButton: ts.JsxSelfClosingElement | ts.JsxElement | undefined = undefined
    let secondaryButton: ts.JsxSelfClosingElement | ts.JsxElement | undefined = undefined

    if (primaryAction) {
      const actionValue = primaryAction.initializer as ts.ObjectLiteralExpression

      // Check if icon prop already exists
      const hasExistingIcon = actionValue.properties.some(
        (prop) => prop?.name?.getText() === 'icon',
      )

      const transformedComponent = transformV1ButtonPropsToButtonOrLinkButton(
        actionValue,
        'secondary',
        hasActionButtonArrow,
      )

      // Track if arrow icon was actually added (only if hasActionButtonArrow is true and no existing icon)
      if (hasActionButtonArrow && !hasExistingIcon) {
        arrowIconWasAdded = true
      }

      primaryButton = transformedComponent.component
      newImports.push(transformedComponent.import)
    }

    if (secondaryAction) {
      const actionValue = secondaryAction?.initializer as ts.ObjectLiteralExpression
      const transformedComponent = transformV1ButtonPropsToButtonOrLinkButton(
        actionValue,
        'tertiary',
      )
      secondaryButton = transformedComponent.component
      newImports.push(transformedComponent.import)
    }

    if (primaryButton || secondaryButton) {
      const newActionsSlotAttr = ts.factory.createJsxAttribute(
        ts.factory.createIdentifier('actionsSlot'),
        ts.factory.createJsxExpression(
          undefined,
          ts.factory.createJsxFragment(
            ts.factory.createJsxOpeningFragment(),
            [primaryButton, secondaryButton].filter(Boolean) as ts.JsxChild[],
            ts.factory.createJsxJsxClosingFragment(),
          ),
        ),
      )

      // Add Icon import if arrow icon was added
      if (arrowIconWasAdded) {
        newImports.push('Icon')
      }

      return {
        actionsSlotAttr: newActionsSlotAttr,
        importsToAdd: newImports.filter(Boolean) as string[],
      }
    }
  }
  return undefined
}
