import type { ModuleRenameConfig } from './createModulePathTransformer'

export type ComponentEntry = string | [string, string] // [oldName, newName]

export type ComponentGroup = {
  components: ComponentEntry[]
  fromModules: string[]
  toModule: string
}

export const createRenameMapFromGroups = (
  groups: ComponentGroup[],
): Map<string, ModuleRenameConfig> => {
  const renameMap = new Map<string, ModuleRenameConfig>()

  groups.forEach(({ components, fromModules, toModule }) => {
    components.forEach((componentEntry) => {
      const [oldName, newName] = Array.isArray(componentEntry)
        ? componentEntry
        : [componentEntry, componentEntry]

      renameMap.set(oldName, {
        newName,
        fromModules,
        toModule,
      })
    })
  })

  return renameMap
}
