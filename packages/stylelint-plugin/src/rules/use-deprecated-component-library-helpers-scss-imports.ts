import { Root, AtRule } from "postcss"
import {
  deprecatedComponentLibraryColorImport,
  deprecatedComponentLibraryTypeImport,
  deprecatedComponentLibraryLayoutImport,
} from "../messages"
import { Options } from "../types"

type ImportToReplace = {
  oldImport: string
  newImport: string
  message: any
}

const importsToReplace: ImportToReplace[] = [
  {
    oldImport: '"~@kaizen/component-library/styles/type"',
    newImport: '"~@kaizen/deprecated-component-library-helpers/styles/type"',
    message: deprecatedComponentLibraryTypeImport,
  },
  {
    oldImport: '"~@kaizen/component-library/styles/color"',
    newImport: '"~@kaizen/deprecated-component-library-helpers/styles/color"',
    message: deprecatedComponentLibraryColorImport,
  },
  {
    oldImport: '"~@kaizen/component-library/styles/layout"',
    newImport: '"~@kaizen/deprecated-component-library-helpers/styles/layout"',
    message: deprecatedComponentLibraryLayoutImport,
  },
]

export const useDeprecatedComponentLibraryHelpersScssImportsRuleName =
  "use-deprecated-component-library-helpers-scss-imports"

export const useDeprecatedComponentLibraryHelpersScssImportsRule = (
  styleSheetNode: Root,
  options: Options
) => {
  for (const importToReplace of importsToReplace) {
    replaceImport(styleSheetNode, options, importToReplace)
  }
}

const replaceImport = (
  styleSheetNode: Root,
  options: Options,
  { oldImport, newImport, message }: ImportToReplace
) => {
  const importsToProcess: AtRule[] = []
  let containsOldImport = false
  styleSheetNode.walkAtRules((node: AtRule) => {
    if (node.name === "import") {
      if ([oldImport, newImport].includes(node.params)) {
        importsToProcess.push(node)
        if (node.params.includes(oldImport)) {
          containsOldImport = true
          if (!options.fix) {
            options.reporter({
              message,
              node,
              autofixAvailable: true,
            })
          }
        }
      }
    }
  })

  if (options.fix && containsOldImport) {
    const [lastImport, ...importsToRemove] = importsToProcess.reverse()

    // the last import, whether it's an old or new import, should be
    // changed to a new import
    lastImport.params = newImport

    for (const importToRemove of importsToRemove) {
      // we only want one import, so remove all earlier imports
      importToRemove.remove()
    }
  }
}
