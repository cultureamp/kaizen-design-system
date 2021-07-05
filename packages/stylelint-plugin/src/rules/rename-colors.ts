import { Root } from "postcss"
import { usageOfOldColorName } from "../messages"
import { Options } from "../types"
import {
  walkAtRulesWithKaizenTokens,
  walkDeclsWithKaizenTokens,
} from "../util/walkers"

const renameRules = [
  ["wisteria", "purple"],
  ["cluny", "blue"],
  ["yuzu", "yellow"],
  ["coral", "red"],
  ["peach", "orange"],
]

export const renameColorsRuleName = "rename-colors"
export const renameColorsRule = (stylesheet: Root, options: Options) => {
  walkDeclsWithKaizenTokens(stylesheet, ({ postcssNode }) => {
    renameRules.forEach(renameRule => {
      const [oldName, newName] = renameRule
      if (postcssNode.value.indexOf(oldName) === -1) return
      if (options.fix) {
        postcssNode.replaceWith(
          postcssNode.clone({
            value: postcssNode.value.replace(new RegExp(oldName, "g"), newName),
          })
        )
      } else {
        options.reporter({
          message: usageOfOldColorName(oldName, newName),
          node: postcssNode,
          autofixAvailable: true,
        })
      }
    })
  })

  walkAtRulesWithKaizenTokens(stylesheet, ({ postcssNode }) => {
    renameRules.forEach(renameRule => {
      const [oldName, newName] = renameRule
      if (postcssNode.params.indexOf(oldName) === -1) return
      if (options.fix) {
        postcssNode.replaceWith(
          postcssNode.clone({
            params: postcssNode.params.replace(
              new RegExp(oldName, "g"),
              newName
            ),
          })
        )
      } else {
        options.reporter({
          message: usageOfOldColorName(oldName, newName),
          node: postcssNode,
          autofixAvailable: true,
        })
      }
    })
  })
}
