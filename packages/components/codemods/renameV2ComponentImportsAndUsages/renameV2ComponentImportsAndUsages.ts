import ts from 'typescript'
import {
  processImportDeclaration,
  setImportToAdd,
  setImportToRemove,
  updateJsxElementTagName,
  updateKaioImports,
  type ComponentRenameConfig,
  type ModuleRenameConfig,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'

type RenameConfig = ModuleRenameConfig

const renameMap = new Map<string, RenameConfig>([
  [
    'Select',
    {
      newName: 'SingleSelect',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'SelectProps',
    {
      newName: 'SingleSelectProps',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'SelectOption',
    {
      newName: 'SingleSelectOption',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'SelectOptionGroup',
    {
      newName: 'SingleSelectOptionGroup',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'SelectItem',
    {
      newName: 'SingleSelectItem',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'SelectOptionNode',
    {
      newName: 'SingleSelectOptionNode',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'SelectOptionGroupNode',
    {
      newName: 'SingleSelectOptionGroupNode',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'SelectItemNode',
    {
      newName: 'SingleSelectItemNode',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'LikertScaleLegacy',
    {
      newName: 'LikertScale',
      fromModules: ['@kaizen/components'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'TitleBlockZen',
    {
      newName: 'TitleBlock',
      fromModules: ['@kaizen/components'],
      toModule: '@kaizen/components',
    },
  ],
])

const createComponentRenameConfig = (
  config: RenameConfig,
  fromModule: string,
): ComponentRenameConfig => ({
  newName: config.newName,
  fromModule,
  toModule: config.toModule,
})

const componentRenameMap = new Map<string, ComponentRenameConfig>()
for (const [name, config] of Array.from(renameMap.entries())) {
  if (
    !name.endsWith('Props') &&
    !name.includes('Option') &&
    !name.includes('Item') &&
    !name.includes('Node')
  ) {
    componentRenameMap.set(name, createComponentRenameConfig(config, config.fromModules[0]))
  }
}

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
          const rename = componentRenameMap.get(left)

          if (rename) {
            setImportToRemove(importsToRemove, rename.fromModule, left)
            setImportToAdd(importsToAdd, rename.toModule, { componentName: rename.newName })

            return updateJsxElementTagName(
              context.factory,
              node,
              rename.newName,
              componentRenameMap,
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
          [kaioComponentName, createComponentRenameConfig(renameConfig, oldImportSource)],
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
