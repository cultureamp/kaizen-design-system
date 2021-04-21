import { atRule, Root } from "postcss"
import { missingRequiredKaizeImport, unnecessaryKaizenImport } from "../errors"
import { KaizenToken } from "../kaizenTokens"
import { quotesPattern } from "../patterns"
import { Options } from "../types"
import { walkKaizenTokens } from "../walkVariables"

const getCurrentImports = (stylesheet: Root) => {
  const imports = new Set<string>()
  stylesheet.walkAtRules("import", rule => {
    imports.add(rule.params.replace(quotesPattern, "").replace(/^~/, ""))
  })
  return imports
}

const addImport = (stylesheetNode: Root, path: string) => {
  stylesheetNode.prepend(
    atRule({
      name: "import",
      params: `"~${path}"`,
    })
  )
}
const removeImport = (stylesheetNode: Root, importPathToRemove: string) => {
  stylesheetNode.walkAtRules("import", atrule => {
    const atruleImportPath = atrule.params
      .replace(quotesPattern, "")
      .replace(/^~/, "")
    if (atruleImportPath === importPathToRemove) {
      atrule.remove()
    }
  })
}

/**
 * This linter will report and autofix any missing imports of kaizen variables, and of any unnecessary imports (which is configurable with Options)
 */
export const lintImports = (stylesheetNode: Root, options: Options) => {
  const foundKaizenTokens = new Map<string, KaizenToken>()
  walkKaizenTokens(stylesheetNode, ({ variable }) => {
    foundKaizenTokens.set(variable.name, variable.kaizenToken)
  })

  const currentImports = getCurrentImports(stylesheetNode)
  const requiredImports = new Set(
    Array.from(foundKaizenTokens.values()).map(token =>
      options.language === "less" ? token.lessModulePath : token.sassModulePath
    )
  )
  // Add missing imports
  requiredImports.forEach(path => {
    if (!currentImports.has(path)) {
      if (options.fix) {
        addImport(stylesheetNode, path)
      } else {
        options.reporter({
          message: missingRequiredKaizeImport(path),
          node: stylesheetNode,
        })
      }
    }
  })

  if (options.removeUnusedImports) {
    currentImports.forEach(path => {
      if (
        !requiredImports.has(path) &&
        path.indexOf("@kaizen/design-tokens") !== -1
      ) {
        if (options.fix) {
          removeImport(stylesheetNode, path)
        } else {
          options.reporter({
            message: unnecessaryKaizenImport(path),
            node: stylesheetNode,
          })
        }
      }
    })
  }
}
