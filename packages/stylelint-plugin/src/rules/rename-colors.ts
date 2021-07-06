import { AtRule, Declaration, Root } from "postcss"
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
  const handleDeclAndAtRule = (node: Declaration | AtRule) => {
    const value = node.type === "decl" ? node.value : node.params
    renameRules.forEach(renameRule => {
      const [oldName, newName] = renameRule
      if (value.indexOf(oldName) === -1) return
      if (options.fix) {
        const newNode =
          node.type === "decl"
            ? node.clone({
                value: value.replace(new RegExp(oldName, "g"), newName),
              })
            : node.clone({
                params: value.replace(new RegExp(oldName, "g"), newName),
              })
        node.replaceWith(newNode)
      } else {
        options.reporter({
          message: usageOfOldColorName(oldName, newName),
          node,
          autofixAvailable: true,
        })
      }
    })
  }

  walkDeclsWithKaizenTokens(stylesheet, ({ postcssNode }) => {
    handleDeclAndAtRule(postcssNode)
  })

  walkAtRulesWithKaizenTokens(stylesheet, ({ postcssNode }) => {
    handleDeclAndAtRule(postcssNode)
  })
}
