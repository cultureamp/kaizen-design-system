import { AtRule, Declaration, Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import { usageOfDeprecatedName } from "../messages"
import { Options, RuleDefinition } from "../types"
import { parseVariable } from "../util/variableUtils"
import {
  walkAtRulesWithKaizenTokens,
  walkDeclsWithKaizenTokens,
} from "../util/walkers"

const renameRules: Array<[RegExp, string]> = [
  [/color-wisteria/, "color-purple"],
  [/color-cluny/, "color-blue"],
  [/color-yuzu/, "color-yellow"],
  [/color-coral/, "color-red"],
  [/color-seedling/, "color-green"],
  [/color-peach/, "color-orange"],
  [/color-white/, "color-neutral-100"],
  [/color-stone/, "color-neutral-200"],
  [/color-ash/, "color-neutral-300"],
  [/color-iron/, "color-neutral-500"],
  [/color-slate/, "color-neutral-600"],
  [/kz-var-/, ""],
  [/-rgb-params/, "-rgb"],
  [/(kz-var-id-)([\-0-9A-z_]+)/, "$2-id"],
]

/**
 * This rule renames all old colors to the new (wisteria -> purple, cluny -> blue, coral -> red etc), removes the `kz-var-` prefix from all tokens, replaces `-rgb-params` with `-rgb`, and replaces `$kz-var-id-*` with `*-id`.
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
          const [oldPattern, replacement] = renameRule

          // We only care about word nodes becasue only they can be variables.
          if (node.type !== "word") return

          // We don't care about nodes that don't contain old names.
          if (!oldPattern.test(node.value)) return

          const replacementValue = node.value.replace(oldPattern, replacement)

          const variable = parseVariable({ ...node, value: replacementValue })

          // After we've made a replacement, DOUBLE CHECK whether the replaced variable is an existing kaizen token. If it's not, just return and don't report.
          // We do this because the rename rules are not declared in a way where there is 100% certainty that the replacement will be correct 100% of the time.
          // Rabbit hole: using the Theme type, and TypeScript's template literal power, we could probably strongly type those rename rules.
          if (!variable?.kaizenToken) return

          // Also, just make a report if we're not in fix mode.
          if (options.fix) {
            // This only changes the postcssValueParser node, which needs to be stringified and used as a new value for the postcss node for changes to be made.
            // The manipulation of the postcss ast is done outside of this block.
            node.value = replacementValue
            changesMade = true
          } else {
            options.reporter({
              message: usageOfDeprecatedName(node.value, replacementValue),
              node: declOrAtRule,
              autofixAvailable: true,
            })
          }
        })
      })

      // Here is where we replace the postcss node value with something new: a stringified postcssValueParser AST, which will have been mutated in the previous block that walked through each node.
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
