import { AtRule, Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { usageOfOldColorName } from "../messages"
import { Options, RuleDefinition } from "../types"
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

/**
 * This rule renames all old colors to the new (wisteria -> purple, cluny -> blue, coral -> red etc).
 * It does so by looping through declarations and at-rules that contain kaizen tokens, then replacing any matching old strings with new strings, based on {@link renameRules}
 */
export const renameColorsRule: RuleDefinition = {
  name: "rename-colors",
  ruleFunction: (stylesheet: Root, options: Options) => {
    const handleDeclOrAtRule = (
      declOrAtRule: Declaration | AtRule,
      parsedValue: postcssValueParser.ParsedValue
    ) => {
      let changesMade = false
      // Walk through each node within the declaration value. e.g. If the declaration was "prop: $kz-color-wisteria-800 $kz-color-cluny-500", two word nodes would be visited.
      parsedValue.walk(node => {
        renameRules.forEach(renameRule => {
          const [oldName, newName] = renameRule

          // We don't care about nodes that don't contain old names.
          if (node.value.indexOf(oldName) === -1) return

          // Only make a report if we're not in fix mode.
          if (options.fix) {
            // This only changes the postcssValueParser node, which needs to be stringified and used as a new value for the postcss node for changes to be made.
            node.value = node.value.replace(oldName, newName)
            changesMade = true
          } else {
            options.reporter({
              message: usageOfOldColorName(oldName, newName),
              node: declOrAtRule,
              autofixAvailable: true,
            })
          }
        })
      })

      // Here is where we replace the postcss node with a new modified value, using the modified postcssValueParser nodes.
      if (options.fix && changesMade) {
        const newNode =
          declOrAtRule.type === "decl"
            ? declOrAtRule.clone({
                value: postcssValueParser.stringify(parsedValue.nodes),
              })
            : declOrAtRule.clone({
                params: postcssValueParser.stringify(parsedValue.nodes),
              })
        declOrAtRule.replaceWith(newNode)
      }
    }

    walkDeclsWithKaizenTokens(stylesheet, ({ postcssNode, parsedValue }) => {
      handleDeclOrAtRule(postcssNode, parsedValue)
    })

    walkAtRulesWithKaizenTokens(stylesheet, ({ postcssNode, parsedValue }) => {
      handleDeclOrAtRule(postcssNode, parsedValue)
    })
  },
}
