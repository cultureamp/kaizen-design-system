import { Root } from "postcss"
import { unnecessaryKaizenImport } from "../messages"
import { getCurrentImports, removeImport } from "../util/importUtils"
import { KaizenToken, Options } from "../types"
import { walkKaizenTokens } from "../util/walkers"
export const importsNoUnusedRuleName = "imports-no-unused"
export const importsNoUnusedRule = (stylesheetNode: Root, options: Options) => {
  // Get a map of all distinct kaizen tokens within the stylesheet
  const foundKaizenTokens = new Map<string, KaizenToken>()
  walkKaizenTokens(stylesheetNode, ({ variable }) => {
    foundKaizenTokens.set(variable.name, variable.kaizenToken)
  })

  // Get a set of distinct imports paths within the stylesheet.
  const currentImports = getCurrentImports(stylesheetNode)

  // Go through each kaizen token within the stylesheet, and generate a new set of distinct required imports.
  // Each kaizen token (KaizenToken type) contains a `lessModulePath` or a `sassModulePath`.
  const requiredImports = new Set(
    Array.from(foundKaizenTokens.values()).map(token =>
      options.language === "less" ? token.lessModulePath : token.sassModulePath
    )
  )

  // Loop through each existing import within the stylesheet.
  // If an import is not contained with the set of requiredImports, remove it (or just report it if fix: false)
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
          autofixAvailable: true,
        })
      }
    }
  })
}
