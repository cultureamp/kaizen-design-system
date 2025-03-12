import util from 'util'
import ts from 'typescript'
import {
  createJsxElementWithChildren,
  createProp,
  createStringProp,
  updateJsxElementWithNewProps,
  type TagImportAttributesMap,
} from '../utils'
import { transformActionsToButtonNext, transformButtonProp } from './transformActionsToButtonNext'

// TODO: THIS WILL BECOME THE TRANSFORMER

export type TransformedGuidanceBlockActionAttributes = {
  primary: ts.JsxAttributeLike[]
  secondary: ts.JsxAttributeLike[]
}

const createButtonElement = (
  action: ts.PropertyAssignment,
  attr: ts.JsxAttribute,
): ts.JsxSelfClosingElement | ts.JsxElement => {
  let childrenValue: ts.JsxAttributeValue | undefined
  let hasSizeProp = false
  let hasVariant = false
  let hasLinkAttr = false
  const props = action.initializer as ts.ObjectLiteralExpression

  const newProps = props.properties.reduce<ts.JsxAttributeLike[]>((acc, currentProp) => {
    const propName = currentProp?.name?.getText()
    const propValue = ts.isPropertyAssignment(currentProp) ? currentProp.initializer : undefined

    console.log('propName', propName)

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

      if (propName === 'primary' || propName === 'secondary') {
        hasVariant = true
      }

      if (propName === 'size') {
        hasSizeProp = true
      }

      if (propName === 'href' || propName === 'component') {
        hasLinkAttr = true
      }

      const newProp = transformButtonProp(propName, propValue as ts.JsxAttributeValue)

      if (newProp === null) return acc

      if (newProp) {
        acc.push(newProp)
        return acc
      }
    }

    if (ts.isJsxAttribute(attr) || ts.isJsxSpreadAttribute(attr)) {
      acc.push(attr)
    }
    return acc
  }, [])

  if (!hasVariant) {
    newProps.push(createStringProp('variant', 'secondary'))
  }

  if (!hasSizeProp) {
    newProps.push(createStringProp('size', 'large'))
  }

  // console.log('newProps---')
  // console.log(newProps)

  return createJsxElementWithChildren(
    hasLinkAttr ? 'LinkButton' : 'Button',
    newProps,
    childrenValue,
  )
}

export type TransformedButtonProps = {
  targetComponentName: string
  newAttributes: ts.JsxAttributeLike[]
  childrenValue: ts.JsxAttributeValue | undefined
}

// export const transformButtonProps = (
//   // take the guidance block
//   node: ts.JsxSelfClosingElement,
//   kaioComponentName: string,
// ): TransformedButtonProps => {
//   let childrenValue: ts.JsxAttributeValue | undefined
//   const actionsSlot = []
//   const newAttributes = node.attributes.properties.reduce<ts.JsxAttributeLike[]>((acc, attr) => {
//     if (ts.isJsxAttribute(attr)) {
//       const propName = attr.name.getText()
//       const propVal: ts.JsxAttributeValue | undefined = attr.initializer

//       if (propName === 'actions') {
//         console.log('actions---found---')
//         // this is where we start running the transformation
//         if (propVal && ts.isJsxExpression(propVal)) {
//           const expression = propVal.expression
//           if (expression && ts.isObjectLiteralExpression(expression)) {
//             //
//             const buttonElement = transformV1ObjectLiteral(expression, kaioComponentName)

//             const newPrimaryActionProp = ts.factory.createJsxAttribute(
//               ts.factory.createIdentifier('actionsSlot'),
//               buttonElement,
//             )

//             acc.push(newPrimaryActionProp)
//           }
//         }
//       }
//       console.log('actions---end---')

//       if (propName === 'secondaryDismiss') {
//         return acc
//       }
//     }

//     acc.push(attr)
//     return acc
//   }, [])

//   return {
//     targetComponentName: 'GuidanceBlock',
//     newAttributes,
//     childrenValue,
//   }
// }

export const migrateGuidanceBlockToButtonNext =
  (tagsMap: TagImportAttributesMap): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    console.log(`migrateGuidanceBlockToButtonNext`)
    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap.get(tagName)

        if (!tagImportAttributes) return node
        if (tagName === tagImportAttributes.tagName) {
          const newAttributes = node.attributes.properties.map((attr) => {
            if (ts.isJsxAttribute(attr) && attr.name.getText().includes('actions')) {
              if (attr.initializer && ts.isJsxExpression(attr.initializer)) {
                const expression = attr.initializer.expression
                if (expression && ts.isObjectLiteralExpression(expression)) {
                  console.log('FOUND EXPRESSION')
                  console.log('-----')

                  const primaryAction = expression.properties.find(
                    (prop) => ts.isPropertyAssignment(prop) && prop.name.getText() === 'primary',
                  ) as ts.PropertyAssignment | undefined

                  const secondaryAction = expression.properties.find(
                    (prop) => ts.isPropertyAssignment(prop) && prop.name.getText() === 'secondary',
                  ) as ts.PropertyAssignment | undefined

                  let primaryButton: ts.JsxSelfClosingElement | ts.JsxElement | undefined =
                    undefined
                  let secondaryButton: ts.JsxSelfClosingElement | ts.JsxElement | undefined =
                    undefined

                  if (primaryAction) {
                    console.log('FOUND PRIMARY')
                    console.log('-----')
                    primaryButton = primaryAction
                      ? createButtonElement(primaryAction, attr)
                      : undefined
                  }

                  if (secondaryAction) {
                    console.log('FOUND SECONDARY')
                    console.log('-----')
                    secondaryButton = secondaryAction
                      ? createButtonElement(secondaryAction, attr)
                      : undefined
                  }

                  const actionsSlot = ts.factory.createJsxAttribute(
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

                  return actionsSlot
                }
              }
            }

            return attr
          })

          return updateJsxElementWithNewProps(node, newAttributes)
        }
      }
      return ts.visitEachChild(node, visit, context)
    }
    return ts.visitNode(rootNode, visit) as ts.SourceFile
  }
