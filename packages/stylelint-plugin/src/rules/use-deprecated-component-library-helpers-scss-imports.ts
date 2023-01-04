import { Root, AtRule } from "postcss"
import {
  deprecatedComponentLibraryColorImport,
  deprecatedComponentLibraryTypeImport,
  deprecatedComponentLibraryLayoutImport,
} from "../messages"
import { Options, RuleDefinition } from "../types"

type ImportToReplace = {
  oldImport: string
  newImport: string
  message: any
}

const importsToReplace: ImportToReplace[] = [
  {
    oldImport: "~@kaizen/component-library/styles/type",
    newImport: "~@kaizen/deprecated-component-library-helpers/styles/type",
    message: deprecatedComponentLibraryTypeImport,
  },
  {
    oldImport: "~@kaizen/component-library/styles/color",
    newImport: "~@kaizen/deprecated-component-library-helpers/styles/color",
    message: deprecatedComponentLibraryColorImport,
  },
  {
    oldImport: "~@kaizen/component-library/styles/layout",
    newImport: "~@kaizen/deprecated-component-library-helpers/styles/layout",
    message: deprecatedComponentLibraryLayoutImport,
  },
]

export const useDeprecatedComponentLibraryHelpersScssImports: RuleDefinition = {
  name: "use-deprecated-component-library-helpers-scss-imports",
  ruleFunction: (styleSheetNode: Root, options: Options) => {
    for (const importToReplace of importsToReplace) {
      replaceImport(styleSheetNode, options, importToReplace)
    }
  },
}

const addQuotes = (newImport: string, quoteCharacter: string): string =>
  `${quoteCharacter}${newImport}${quoteCharacter}`

const replaceImport = (
  styleSheetNode: Root,
  options: Options,
  { oldImport, newImport, message }: ImportToReplace
): void => {
  const importsToProcess: AtRule[] = []
  let containsOldImport = false
  let quoteCharacter = "'"
  styleSheetNode.walkAtRules((node: AtRule) => {
    if (node.name === "import") {
      const line = node.params
      if (line.includes(oldImport) || line.includes(newImport)) {
        importsToProcess.push(node)
        if (line.includes(oldImport)) {
          quoteCharacter = line.includes("'") ? "'" : '"'
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

    // replace with new import, preserving either single or double quotes depending on the
    // prettier config
    lastImport.params = addQuotes(newImport, quoteCharacter)

    for (const importToRemove of importsToRemove) {
      // we only want one import, so remove all earlier imports
      importToRemove.remove()
    }
  }
}
