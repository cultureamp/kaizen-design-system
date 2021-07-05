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

const replaceImport = (
  styleSheetNode: Root,
  options: Options,
  { oldImport, newImport, message }: ImportToReplace
) => {
  const importsToProcess: AtRule[] = []
  let containsOldImport = false
  styleSheetNode.walkAtRules((node: AtRule) => {
    if (node.name === "import") {
      const line = node.params
      if (line.indexOf(oldImport) >= 0 || line.indexOf(newImport) >= 0) {
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

    // replace with new import, preserving either single or double quotes depending on the
    // prettier config
    lastImport.params = addQuotes(oldImport, newImport)

    for (const importToRemove of importsToRemove) {
      // we only want one import, so remove all earlier imports
      importToRemove.remove()
    }
  }
}

function addQuotes(oldImport: string, newImport: string) {
  const quoteCharacter = oldImport.indexOf("'") >= 0 ? "'" : '"'
  return `${quoteCharacter}${newImport}${quoteCharacter}`
}
