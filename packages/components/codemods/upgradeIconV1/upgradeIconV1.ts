import ts from 'typescript'
import {
  getKaioTagName,
  setImportToAdd,
  setImportToRemove,
  updateKaioImports,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'
import { getNewIconPropsFromOldIconName } from './getNewIconPropsFromOldIconName'
import { transformCaMonogramIconToBrand } from './transformCaMonogramIconToBrand'
import { transformIcon } from './transformIcon'
import { transformSpinnerIconToLoadingSpinner } from './transformSpinnerIconToLoadingSpinner'

export const upgradeIconV1 =
  (tagsMap: TagImportAttributesMap): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const importedBrandTagName = getKaioTagName(rootNode, 'Brand')
    const importedLoadingSpinnerTagName = getKaioTagName(rootNode, 'LoadingSpinner')

    const importsToRemove = new Map() satisfies UpdateKaioImportsArgs['importsToRemove']
    const importsToAdd = new Map() satisfies UpdateKaioImportsArgs['importsToAdd']

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isJsxOpeningElement(node) || ts.isJsxSelfClosingElement(node)) {
        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap.get(tagName)

        if (!tagImportAttributes) return node

        const kaioComponentName = tagImportAttributes.originalName
        const oldImportSource = tagImportAttributes.importModuleName

        if (kaioComponentName === 'CaMonogramIcon') {
          setImportToRemove(importsToRemove, oldImportSource, kaioComponentName)

          if (!importedBrandTagName) {
            setImportToAdd(importsToAdd, '@kaizen/components', {
              componentName: 'Brand',
              alias: importedBrandTagName !== 'Brand' ? importedBrandTagName : undefined,
            })
          }
          return transformCaMonogramIconToBrand(node, importedBrandTagName)
        }

        if (kaioComponentName === 'SpinnerIcon') {
          setImportToRemove(importsToRemove, oldImportSource, kaioComponentName)

          if (!importedLoadingSpinnerTagName) {
            setImportToAdd(importsToAdd, '@kaizen/components', {
              componentName: 'LoadingSpinner',
              alias:
                importedLoadingSpinnerTagName !== 'LoadingSpinner'
                  ? importedLoadingSpinnerTagName
                  : undefined,
            })
          }
          return transformSpinnerIconToLoadingSpinner(node, importedLoadingSpinnerTagName)
        }

        if (kaioComponentName) {
          const newIconProps = getNewIconPropsFromOldIconName(kaioComponentName)
          if (newIconProps === undefined) {
            console.info('SKIPPED - No new icon equivalent found for', node.tagName.getText())
            return node
          }

          setImportToRemove(importsToRemove, oldImportSource, kaioComponentName)
          setImportToAdd(importsToAdd, '@kaizen/components/next', {
            componentName: 'Icon',
          })

          return transformIcon(node, newIconProps.name, newIconProps.isFilled)
        }
      }
      return ts.visitEachChild(node, visit, context)
    }

    const node = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(node as ts.SourceFile)
  }
