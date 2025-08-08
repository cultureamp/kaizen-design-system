import ts from 'typescript'
import { setImportToAdd, setImportToRemove, type UpdateKaioImportsArgs } from './updateKaioImports'

export type ModuleRenameConfig = {
  newName: string
  fromModules: string[]
  toModule: string
}

export type ProcessImportOptions = {
  importsToRemove: NonNullable<UpdateKaioImportsArgs['importsToRemove']>
  importsToAdd: NonNullable<UpdateKaioImportsArgs['importsToAdd']>
  renameMap: Map<string, ModuleRenameConfig>
  validRenames?: Set<string>
}

/**
 * Takes an import declaration and transforms it as specified in the options.renameMap
 *
 * @param node - The import declaration to process
 * @param options - Configuration for import transformations
 *
 * @example
 * ```typescript
 * // For an import like: import { OldButton } from '@kaizen/legacy'
 * // With renameMap: { 'OldButton': { newName: 'Button', fromModules: ['@kaizen/legacy'], toModule: '@kaizen/button' } }
 * // Results in: import { Button } from '@kaizen/button'
 * ```
 */
export const processImportDeclaration = (
  node: ts.ImportDeclaration,
  options: ProcessImportOptions,
): void => {
  const { importsToRemove, importsToAdd, renameMap, validRenames } = options
  const moduleSpecifier = node.moduleSpecifier.getText().slice(1, -1)

  const importClause = node.importClause
  if (importClause?.namedBindings && ts.isNamedImports(importClause.namedBindings)) {
    importClause.namedBindings.elements.forEach((importSpecifier) => {
      const importName = importSpecifier.propertyName?.getText() ?? importSpecifier.name?.getText()

      const renameConfig = renameMap.get(importName)
      if (renameConfig?.fromModules.includes(moduleSpecifier)) {
        validRenames?.add(importName)
        setImportToRemove(importsToRemove, moduleSpecifier, importName)

        const alias = importSpecifier.propertyName?.getText()
          ? importSpecifier.name?.getText()
          : undefined

        setImportToAdd(importsToAdd, renameConfig.toModule, {
          componentName: renameConfig.newName,
          alias,
          isTypeOnly: importSpecifier.isTypeOnly || importClause.isTypeOnly,
        })
      }
    })
  }
}
