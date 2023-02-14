// Migrated from https://github.com/cultureamp/node-packages/tree/0407d85/packages/stylelint-kaizen/lib
// converted to TypeScript, and modified to be integratable with our stylelint plugin.

import { Root } from "postcss"
import postcssValueParser from "postcss-value-parser"
import stylelint from "stylelint"
import { deprecatedTokenReplacements } from "../../deprecatedTokens"
import { KaizenToken, Options, RuleDefinition } from "../types"
import { normaliseColor } from "../util/colors"
import { kaizenTokensByValue } from "../util/kaizenTokens"
import { variablePrefixForLanguage } from "../util/utils"

/**
 * A ranking strategy that causes the preference of tokens with the substring "color" in it, over ones that don't.
 * Solved the issue where a dataviz token had the same hex value as a different color token.
 * This ranks names that contain the word "color" in it higher than ones that don't or have it late in the string.
 *
 * You can extend this function if you have similar token conflicts in the future.
 */
function getTokenRank(_tokenName: string): number {
  const tokenName = _tokenName.toLowerCase()
  return 1 - tokenName.indexOf("color") / tokenName.length
}

const ruleName = "prefer-color-tokens"

/**
 * This a map of colorHex -> KaizenToken.
 * It allows you to determine which KaizenToken to use for a given color string (normalised using {@link normaliseColor}).
 * {@link kaizenTokensByValue} is a similar map, however, it doesn't only contain colors, and for a given key it will give you an array of KaizenTokens rather than a single one.
 * This map disambiguates {@link kaizenTokensByValue} by choosing the first non deprecated color token (also sorted using {@link getTokenRank}) out of the array of KaizenTokens that are
 * given as the values of {@link kaizenTokensByValue}.
 *
 * To be concrete:
 *  we want: `colorMap["#6b6e94"] -> {name: "$color-wisteria-600", value: "#6b6e94", ...}`
 *  we DON'T want : `colorMap["#6b6e94"] -> [{name: "$data-viz-favorable", value: "#6b6e94", ...}, {name: "$color-wisteria-600", value: "#6b6e94", ...}]
 *
 * You can think of this map also as the decider of which tokens to use if there are multiple candidates for a given value.
 * A lot of the time there won't be any conflicts (e.g. the color `#fff` only has the candidate token `$color-white`), but we want something reliable that works all of the time.
 */
const colorMap = Object.entries(kaizenTokensByValue).reduce(
  (acc, [_, value]) => {
    const firstNonDeprecatedColorToken = value
      ?.sort((a, z) => getTokenRank(a.name) - getTokenRank(z.name))
      .find(
        (
          token
        ): token is KaizenToken & {
          color: string
        } => !deprecatedTokenReplacements.has(token.name) && !!token.color
      )
    if (!firstNonDeprecatedColorToken) {
      return acc
    }
    return {
      ...acc,
      [firstNonDeprecatedColorToken.color]: firstNonDeprecatedColorToken,
    }
  },
  {} as Record<string, KaizenToken | undefined>
)

export const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: (named, original) => `Expected "${original}" to be "${named}"`,
})

/**
 * This is a stylelint rule which will detect inlined color values (in any kind of form such as hex, rgba, hsl, hwb etc)
 * and recommend replacements for them if they are the same as an existing non-deprecated Kaizen token.
 * It is capable of automatically committing replacements in `--fix` mode.
 */
export const preferColorTokens: RuleDefinition = {
  name: ruleName,
  ruleFunction: (root: Root, options: Options) => {
    root.walkDecls(decl => {
      const parsedValue = postcssValueParser(decl.value)
      parsedValue.walk(node => {
        const value = node.value
        const type = node.type

        // HEX values are words
        if (type !== "word") {
          return
        }

        const normalisedColor = normaliseColor(value)

        // Only continue if we are dealing with a color
        if (normalisedColor) {
          const matchingKaizenToken = colorMap[normalisedColor]
          if (matchingKaizenToken) {
            const expectedValue = `${variablePrefixForLanguage(
              options.language
            )}${matchingKaizenToken.name}`

            if (options.fix) {
              node.value = expectedValue
            } else {
              const message = messages.expected(expectedValue, normalisedColor)
              options.reporter({
                message,
                node: decl,
                autofixAvailable: true,
              })
            }
          }
        }
      })

      if (options.fix) {
        decl.replaceWith(
          decl.clone({
            value: postcssValueParser.stringify(parsedValue.nodes),
          })
        )
      }
    })
  },
}
