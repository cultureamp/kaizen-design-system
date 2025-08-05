import ts from 'typescript'
import {
  processImportDeclaration,
  updateKaioImports,
  type ModuleRenameConfig,
  type TagImportAttributesMap,
  type UpdateKaioImportsArgs,
} from '../utils'

type RenameConfig = ModuleRenameConfig

const renameMap = new Map<string, RenameConfig>([
  [
    'Menu',
    {
      newName: 'Menu',
      fromModules: ['@kaizen/components/next', '@kaizen/components/v3/actions'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'MenuHeader',
    {
      newName: 'MenuHeader',
      fromModules: ['@kaizen/components/next', '@kaizen/components/v3/actions'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'MenuItem',
    {
      newName: 'MenuItem',
      fromModules: ['@kaizen/components/next', '@kaizen/components/v3/actions'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'MenuPopover',
    {
      newName: 'MenuPopover',
      fromModules: ['@kaizen/components/next', '@kaizen/components/v3/actions'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'MenuSection',
    {
      newName: 'MenuSection',
      fromModules: ['@kaizen/components/next', '@kaizen/components/v3/actions'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'MenuTrigger',
    {
      newName: 'MenuTrigger',
      fromModules: ['@kaizen/components/next', '@kaizen/components/v3/actions'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'Tabs',
    {
      newName: 'Tabs',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'Tab',
    {
      newName: 'Tab',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'TabList',
    {
      newName: 'TabList',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'TabPanel',
    {
      newName: 'TabPanel',
      fromModules: ['@kaizen/components/next', '@kaizen/components/future'],
      toModule: '@kaizen/components',
    },
  ],
  [
    'Tooltip',
    {
      newName: 'Tooltip',
      fromModules: [
        '@kaizen/components/next',
        '@kaizen/components/future',
        '@kaizen/components/v3/overlays',
      ],
      toModule: '@kaizen/components',
    },
  ],
  [
    'TooltipTrigger',
    {
      newName: 'TooltipTrigger',
      fromModules: [
        '@kaizen/components/next',
        '@kaizen/components/future',
        '@kaizen/components/v3/overlays',
      ],
      toModule: '@kaizen/components',
    },
  ],
])

export const migrateV2NextToCurrent =
  (_tagsMap: TagImportAttributesMap | undefined): ts.TransformerFactory<ts.SourceFile> =>
  (context) =>
  (rootNode) => {
    const importsToRemove: UpdateKaioImportsArgs['importsToRemove'] = new Map()
    const importsToAdd: UpdateKaioImportsArgs['importsToAdd'] = new Map()

    const visit = (node: ts.Node): ts.Node => {
      if (ts.isImportDeclaration(node)) {
        processImportDeclaration(node, {
          importsToRemove,
          importsToAdd,
          renameMap,
        })
      }

      return ts.visitEachChild(node, visit, context)
    }

    const transformedNode = ts.visitNode(rootNode, visit)

    return updateKaioImports({ importsToRemove, importsToAdd })(context)(
      transformedNode as ts.SourceFile,
    )
  }
