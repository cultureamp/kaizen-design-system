import ts from 'typescript'
import {
  createRenameMapFromGroups,
  processImportDeclaration,
  setImportToAdd,
  setImportToRemove,
  updateJsxElementTagName,
  updateKaioImports,
  type ComponentGroup,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'

const componentGroups: ComponentGroup[] = [
  {
    components: [
      ['Select', 'SingleSelect'],
      ['SelectProps', 'SingleSelectProps'],
      ['SelectOption', 'SingleSelectOption'],
      ['SelectOptionGroup', 'SingleSelectOptionGroup'],
      ['SelectItem', 'SingleSelectItem'],
      ['SelectOptionNode', 'SingleSelectOptionNode'],
      ['SelectOptionGroupNode', 'SingleSelectOptionGroupNode'],
      ['SelectItemNode', 'SingleSelectItemNode'],
      ['LikertScaleLegacy', 'LikertScale'],
      ['TitleBlockZen', 'TitleBlock'],
    ],
    fromModules: ['@kaizen/components/next', '@kaizen/components/future', '@kaizen/components'],
    toModule: '@kaizen/components',
  },
]

const renameMap = createRenameMapFromGroups(componentGroups)

export const renameV2ComponentImportsAndUsages =
  (tagsMap: TagImportAttributesMap | undefined): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const importsToRemove: UpdateKaioImportsArgs['importsToRemove'] = new Map()
    const importsToAdd: UpdateKaioImportsArgs['importsToAdd'] = new Map()
    const validRenames = new Set<string>()

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isImportDeclaration(node)) {
        processImportDeclaration(node, {
          importsToRemove,
          importsToAdd,
          renameMap,
          validRenames,
        })
      }

      if (
        ts.isJsxOpeningElement(node) ||
        ts.isJsxSelfClosingElement(node) ||
        ts.isJsxClosingElement(node)
      ) {
        if (ts.isPropertyAccessExpression(node.tagName)) {
          const left = node.tagName.expression.getText()
          const renameConfig = renameMap.get(left)

          if (renameConfig) {
            setImportToRemove(importsToRemove, renameConfig.fromModules[0], left)
            setImportToAdd(importsToAdd, renameConfig.toModule, {
              componentName: renameConfig.newName,
            })

            // Create temporary map for updateJsxElementTagName
            const tempComponentMap = new Map([
              [
                left,
                {
                  newName: renameConfig.newName,
                  fromModule: renameConfig.fromModules[0],
                  toModule: renameConfig.toModule,
                },
              ],
            ])

            return updateJsxElementTagName(
              context.factory,
              node,
              renameConfig.newName,
              tempComponentMap,
            )
          }

          return ts.visitEachChild(node, visit, context)
        }

        const tagName = node.tagName.getText()
        const tagImportAttributes = tagsMap?.get(tagName)
        if (!tagImportAttributes) return ts.visitEachChild(node, visit, context)
        const kaioComponentName = tagImportAttributes.originalName
        const oldImportSource = tagImportAttributes.importModuleName
        const renameConfig = renameMap.get(kaioComponentName)
        if (!renameConfig) return ts.visitEachChild(node, visit, context)
        if (!renameConfig.fromModules.includes(oldImportSource)) {
          console.warn(
            `Expected ${kaioComponentName} to be imported from one of [${renameConfig.fromModules.join(', ')}], but found ${oldImportSource}`,
          )
          return ts.visitEachChild(node, visit, context)
        }
        setImportToRemove(importsToRemove, oldImportSource, kaioComponentName)

        const alias =
          tagImportAttributes?.tagName !== tagImportAttributes?.originalName
            ? tagImportAttributes?.tagName
            : undefined
        setImportToAdd(importsToAdd, renameConfig.toModule, {
          componentName: renameConfig.newName,
          alias,
        })
        const jsxElementName = alias ?? renameConfig.newName
        const tempComponentMap = new Map([
          [
            kaioComponentName,
            {
              newName: renameConfig.newName,
              fromModule: oldImportSource,
              toModule: renameConfig.toModule,
            },
          ],
        ])
        return updateJsxElementTagName(context.factory, node, jsxElementName, tempComponentMap)
      }

      if (ts.isTypeReferenceNode(node)) {
        const typeName = node.typeName.getText()

        if (validRenames.has(typeName)) {
          const renameConfig = renameMap.get(typeName)
          if (renameConfig) {
            return context.factory.updateTypeReferenceNode(
              node,
              context.factory.createIdentifier(renameConfig.newName),
              node.typeArguments,
            )
          }
        }
      }

      return ts.visitEachChild(node, visit, context)
    }

    const transformedNode = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(
      transformedNode as ts.SourceFile,
    )
  }
