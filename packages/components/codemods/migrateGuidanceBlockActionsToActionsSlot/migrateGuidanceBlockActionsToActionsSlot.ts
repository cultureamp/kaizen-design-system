import ts from 'typescript'
import {
  getKaioTagName,
  setImportToAdd,
  updateKaioImports,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'
import { transformActionsToActionsSlot } from './transformActionsToActionsSlot'

const BUTTON_IMPORT_DESTINATION = '@kaizen/components'
const LINKBUTTON_IMPORT_DESTINATION = '@kaizen/components'
const ICON_IMPORT_DESTINATION = '@kaizen/components'

export const migrateGuidanceBlockActionsToActionsSlot =
  (tagsMap: TagImportAttributesMap): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const importsToRemove: UpdateKaioImportsArgs['importsToRemove'] = new Map()
    const importsToAdd: UpdateKaioImportsArgs['importsToAdd'] = new Map()

    const importedTargetButtonTagName = getKaioTagName(
      rootNode,
      'Button',
      BUTTON_IMPORT_DESTINATION,
    )

    const importedTargetLinkButtonTagName = getKaioTagName(
      rootNode,
      'LinkButton',
      LINKBUTTON_IMPORT_DESTINATION,
    )

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap.get(tagName)

        if (!tagImportAttributes) return node
        if (
          tagName === 'GuidanceBlock' ||
          tagImportAttributes.importModuleName === 'GuidanceBlock'
        ) {
          // Added flag to add arrow-forward icon to the secondary-variant Button created from the primary action, to minimise visual changes
          let hasActionButtonArrow: boolean = true

          const componentProps: ts.JsxAttributeLike[] = node.attributes.properties.reduce<
            ts.JsxAttributeLike[]
          >((guidanceBlockProps, prop) => {
            if (ts.isJsxAttribute(prop)) {
              const propName = prop.name.getText()
              const propValue = prop.initializer as ts.JsxExpression

              if (propName === 'withActionButtonArrow') {
                if (propValue?.expression?.kind === ts.SyntaxKind.FalseKeyword) {
                  hasActionButtonArrow = false
                } else {
                  hasActionButtonArrow = true
                }
                return guidanceBlockProps
              }

              if (propName === 'secondaryDismiss') {
                return guidanceBlockProps
              }

              if (propName === 'actions') {
                const transformedActions = transformActionsToActionsSlot(
                  propValue.getChildren()[1] as ts.ObjectLiteralExpression,
                  hasActionButtonArrow,
                )

                if (transformedActions?.importsToAdd) {
                  transformedActions.importsToAdd.forEach((importToAdd) => {
                    if (importToAdd === 'Button') {
                      setImportToAdd(importsToAdd, BUTTON_IMPORT_DESTINATION, {
                        componentName: 'Button',
                        alias:
                          importedTargetButtonTagName !== 'Button'
                            ? importedTargetButtonTagName
                            : undefined,
                      })
                    }
                    if (importToAdd === 'LinkButton') {
                      setImportToAdd(importsToAdd, LINKBUTTON_IMPORT_DESTINATION, {
                        componentName: 'LinkButton',
                        alias:
                          importedTargetLinkButtonTagName !== 'LinkButton'
                            ? importedTargetLinkButtonTagName
                            : undefined,
                      })
                    }
                    if (importToAdd === 'Icon') {
                      setImportToAdd(importsToAdd, ICON_IMPORT_DESTINATION, {
                        componentName: 'Icon',
                      })
                    }
                  })
                }

                return transformedActions?.actionsSlotAttr
                  ? [...guidanceBlockProps, transformedActions.actionsSlotAttr]
                  : guidanceBlockProps
              }

              return [...guidanceBlockProps, prop]
            }
            return [...guidanceBlockProps, prop]
          }, [])

          return ts.factory.createJsxSelfClosingElement(
            ts.factory.createIdentifier(tagName),
            undefined,
            ts.factory.createJsxAttributes(componentProps),
          )
        }
        return ts.visitEachChild(node, visit, context)
      }
      return ts.visitEachChild(node, visit, context)
    }

    const node = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(node as ts.SourceFile)
  }
