import ts from 'typescript'
import {
  setImportToAdd,
  setImportToRemove,
  updateKaioImports,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'
import { transformV1Buttons } from './transformV1Buttons'

export const upgradeV1Buttons =
  (tagsMap: TagImportAttributesMap): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const IMPORT_DESTINATION = '@kaizen/components/v3/actions'
    const importsToRemove: UpdateKaioImportsArgs['importsToRemove'] = new Map()
    const importsToAdd: UpdateKaioImportsArgs['importsToAdd'] = new Map()

    const importedButtonTagName = Array.from(tagsMap.values()).find(
      ({ originalName, importModuleName }) =>
        originalName === 'Button' && importModuleName === IMPORT_DESTINATION,
    )?.tagName

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap.get(tagName)

        if (tagImportAttributes) {
          setImportToRemove(
            importsToRemove,
            tagImportAttributes.importModuleName,
            tagImportAttributes.originalName,
          )

          if (!importedButtonTagName) {
            setImportToAdd(importsToAdd, IMPORT_DESTINATION, {
              componentName: importedButtonTagName ?? 'Button',
            })
          }

          return transformV1Buttons(node, tagImportAttributes.originalName, importedButtonTagName)
        }
      }
      return ts.visitEachChild(node, visit, context)
    }

    const node = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(node as ts.SourceFile)
  }
