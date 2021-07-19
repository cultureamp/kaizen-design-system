import { Root } from "postcss"
import { missingRequiredKaizenImport } from "../messages"
import { addImport, getCurrentImports } from "../util/importUtils"
import {
  CurrentKaizenToken,
  DeprecatedKaizenToken,
  KaizenToken,
  Options,
  RuleDefinition,
} from "../types"
import { walkKaizenTokens } from "../util/walkers"

export const allUsedTokensMustBeImported: RuleDefinition = {
  name: "all-used-tokens-must-be-imported",
  ruleFunction: (stylesheetNode: Root, options: Options) => {
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
      Array.from(foundKaizenTokens.values())
        // if a Kaizen token doesn't actually exist anymore, we definitely don't want to recommend importing from a module that doesn't have it
        .filter(
          (k): k is CurrentKaizenToken | DeprecatedKaizenToken => !k.removed
        )
        .map(token =>
          options.language === "less"
            ? token.lessModulePath
            : token.sassModulePath
        )
    )

    // For each required import:
    // If the import doesn't exist, and we are in `fix: true` mode, add it.
    requiredImports.forEach(path => {
      if (!currentImports.has(path)) {
        if (options.fix) {
          addImport(stylesheetNode, path)
        } else {
          options.reporter({
            message: missingRequiredKaizenImport(path),
            node: stylesheetNode,
            autofixAvailable: true,
          })
        }
      }
    })
  },
}
