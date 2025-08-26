import ts from 'typescript'
import {
  createRenameMapFromGroups,
  processImportDeclaration,
  setImportToAdd,
  setImportToRemove,
  updateKaioImports,
  type ComponentGroup,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'

const componentGroups: ComponentGroup[] = [
  {
    components: ['Menu', 'MenuHeader', 'MenuItem', 'MenuPopover', 'MenuSection', 'MenuTrigger'],
    fromModules: ['@kaizen/components/next', '@kaizen/components/v3/actions'],
    toModule: '@kaizen/components',
  },
  {
    components: ['Tabs', 'Tab', 'TabList', 'TabPanel', 'Icon', 'Focusable', 'Key'],
    fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
    toModule: '@kaizen/components',
  },
  {
    components: ['Tooltip', 'TooltipTrigger'],
    fromModules: [
      '@kaizen/components/next',
      '@kaizen/components/future',
      '@kaizen/components/v3/overlays',
    ],
    toModule: '@kaizen/components',
  },
  {
    components: ['ReversedColors'],
    fromModules: ['@kaizen/components/v3/utilities'],
    toModule: '@kaizen/components',
  },
  {
    components: ['Button', 'ButtonProps', 'ButtonsSizes', 'ButtonVariants'],
    fromModules: [
      '@kaizen/components/next',
      '@kaizen/components/future',
      '@kaizen/components/v3/actions',
    ],
    toModule: '@kaizen/components',
  },
]

const renameMap = createRenameMapFromGroups(componentGroups)

const modulePathMap = new Map([
  ['@kaizen/components/v3/react-aria', '@kaizen/components/libs/react-aria'],
  ['@kaizen/components/v3/react-aria-components', '@kaizen/components/libs/react-aria-components'],
])

export const migrateV2NextToCurrent =
  (_tagsMap: TagImportAttributesMap | undefined): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const importsToRemove: UpdateKaioImportsArgs['importsToRemove'] = new Map()
    const importsToAdd: UpdateKaioImportsArgs['importsToAdd'] = new Map()

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isImportDeclaration(node)) {
        const moduleSpecifier = node.moduleSpecifier
        if (ts.isStringLiteral(moduleSpecifier)) {
          const moduleName = moduleSpecifier.text

          if (modulePathMap.has(moduleName)) {
            const newModuleName = modulePathMap.get(moduleName)!
            const namedBindings = node.importClause?.namedBindings

            if (namedBindings && ts.isNamedImports(namedBindings)) {
              namedBindings.elements.forEach((element) => {
                const importName = element.name.text
                const aliasName = element.propertyName?.text

                setImportToRemove(importsToRemove, moduleName, aliasName ?? importName)

                setImportToAdd(importsToAdd, newModuleName, {
                  componentName: aliasName ?? importName,
                  alias: aliasName ? importName : undefined,
                })
              })
            }
          } else {
            processImportDeclaration(node, {
              importsToRemove,
              importsToAdd,
              renameMap,
            })
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
