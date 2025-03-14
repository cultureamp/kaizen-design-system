import ts from 'typescript'
import { transformV1ButtonPropsToButtonOrLinkButton } from '../utils'

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
      const actionValue = primaryAction?.initializer as ts.ObjectLiteralExpression
      primaryButton = primaryAction
        ? transformV1ButtonPropsToButtonOrLinkButton(actionValue, 'secondary')
        : undefined
    }

    if (secondaryAction) {
      const actionValue = secondaryAction?.initializer as ts.ObjectLiteralExpression
      secondaryButton = secondaryAction
        ? transformV1ButtonPropsToButtonOrLinkButton(actionValue, 'tertiary')
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
