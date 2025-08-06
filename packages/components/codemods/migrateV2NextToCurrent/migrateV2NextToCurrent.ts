import ts from 'typescript'
import {
  createRenameMapFromGroups,
  processImportDeclaration,
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
    components: ['Tabs', 'Tab', 'TabList', 'TabPanel'],
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
    components: ['Focusable', 'Key', 'Button', 'ButtonProps', 'ButtonsSizes', 'ButtonVariants'],
    fromModules: [
      '@kaizen/components/next',
      '@kaizen/components/future',
      '@kaizen/components/v3/actions',
    ],
    toModule: '@kaizen/components',
  },
]

const renameMap = createRenameMapFromGroups(componentGroups)

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
