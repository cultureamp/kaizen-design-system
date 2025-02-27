import ts from 'typescript'
import {
  createJsxElementWithChildren,
  getKaioTagName,
  setImportToAdd,
  setImportToRemove,
  updateKaioImports,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'
import { transformV1ButtonAttributes } from './transformV1ButtonAttributes'

const V1_BUTTONS = ['Button', 'IconButton']
const V1_BUTTONS_IMPORT_SOURCE = [
  '@kaizen/components',
  '@kaizen/components/v1/actions',
  '@kaizen/components/v2/actions',
]
const BUTTON_IMPORT_DESTINATION = '@kaizen/components/next'
const LINKBUTTON_IMPORT_DESTINATION = '@kaizen/components'

export const upgradeV1Buttons =
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

        if (!V1_BUTTONS.includes(tagImportAttributes.originalName)) return node
        if (!V1_BUTTONS_IMPORT_SOURCE.includes(tagImportAttributes.importModuleName)) return node

        const { targetComponentName, newAttributes, childrenValue } = transformV1ButtonAttributes(
          node,
          tagImportAttributes.originalName,
        )

        const targetTagName =
          targetComponentName === 'Button'
            ? (importedTargetButtonTagName ?? 'Button')
            : (importedTargetLinkButtonTagName ?? 'LinkButton')

        setImportToRemove(
          importsToRemove,
          tagImportAttributes.importModuleName,
          tagImportAttributes.originalName,
        )

        if (targetComponentName === 'Button' && !importedTargetButtonTagName) {
          setImportToAdd(importsToAdd, BUTTON_IMPORT_DESTINATION, {
            componentName: 'Button',
            alias:
              importedTargetButtonTagName !== 'Button' ? importedTargetButtonTagName : undefined,
          })
        }

        if (targetComponentName === 'LinkButton' && !importedTargetLinkButtonTagName) {
          setImportToAdd(importsToAdd, LINKBUTTON_IMPORT_DESTINATION, {
            componentName: 'LinkButton',
            alias:
              importedTargetLinkButtonTagName !== 'LinkButton'
                ? importedTargetLinkButtonTagName
                : undefined,
          })
        }

        return createJsxElementWithChildren(targetTagName, newAttributes, childrenValue)
      }
      return ts.visitEachChild(node, visit, context)
    }

    const node = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(node as ts.SourceFile)
  }
