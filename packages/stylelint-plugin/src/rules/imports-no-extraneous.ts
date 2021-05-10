import { Root } from "postcss"
import { missingRequiredKaizeImport } from "../messages"
import { addImport, getCurrentImports } from "../importUtils"
import { KaizenToken, Options } from "../types"
import { walkKaizenTokens } from "../walkers"

export const importsNoExtraneousRuleName = "imports-no-extraneous"
export const importsNoExtraneousRule = (
  stylesheetNode: Root,
  options: Options
) => {
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
          autofixAvailable: true,
        })
      }
    }
  })
}
