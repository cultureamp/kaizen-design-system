import { Root } from "postcss"
import { unnecessaryKaizenImport } from "../messages"
import { getCurrentImports, removeImport } from "../importUtils"
import { KaizenToken, Options } from "../types"
import { walkKaizenTokens } from "../walkers"
export const importsNoUnusedRuleName = "imports-no-unused"
export const importsNoUnusedRule = (stylesheetNode: Root, options: Options) => {
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
