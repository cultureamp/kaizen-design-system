import colorString from "color-string"
import { Root } from "postcss"
import valueParser from "postcss-value-parser"
import stylelint from "stylelint"
import { kaizenTokensByValue } from "../util/kaizenTokens"
import { KaizenToken, Options, RuleDefinition } from "../types"
import { variablePrefixForLanguage } from "../util/utils"
import { deprecatedTokenReplacements } from "../../deprecatedTokens"

/**
 * A ranking strategy that causes the preference of tokens with the substring "color" in it, over ones that don't.
 * Solved the issue where a dataviz token had the same hex value as a different color token.
 * This ranks names that contain the word "color" in it higher than ones that don't or have it late in the string.
 *
 * You can extend this function if you have issues in the future.
 */
function getTokenRank(_tokenName: string) {
  const tokenName = _tokenName.toLowerCase()
  return 1 - tokenName.indexOf("color") / tokenName.length
}

const ruleName = "prefer-color-tokens"
const colorMap = Object.entries(kaizenTokensByValue).reduce(
  (acc, [_, value]) => {
    const firstNonDeprecatedColorToken = value
      ?.sort((a, z) => getTokenRank(a.name) - getTokenRank(z.name))
      .find(
        (
          token
        ): token is KaizenToken & {
          color: string
        } =>
          Boolean(!deprecatedTokenReplacements.has(token.name) && token.color)
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

export const preferColorTokens: RuleDefinition = {
  name: ruleName,
  ruleFunction: (root: Root, options: Options) => {
    // walk all declarations
    root.walkDecls(decl => {
      const fixPositions: Array<{
        index: number
        match: string
        expectedValue: string
      }> = []

      const valueSegments = valueParser(decl.value)
      valueSegments.walk(node => {
        const value = node.value
        const type = node.type

        // HEX values are words
        if (type !== "word") {
          return
        }

        const parsedColor = colorString.get(value)

        // Only continue if we are dealing with a color
        if (parsedColor) {
          const parsedColorHex = colorString.to
            .hex(parsedColor.value)
            .toLowerCase()
          const matchingKaizenToken = colorMap[parsedColorHex]
          if (matchingKaizenToken) {
            const expectedValue = `${variablePrefixForLanguage(
              options.language
            )}${matchingKaizenToken.name}`
            if (options.fix) {
              fixPositions.push({
                index: node.sourceIndex,
                match: value,
                expectedValue,
              })
            } else {
              const message = messages.expected(expectedValue, parsedColorHex)
              options.reporter({
                message,
                node: decl,
                autofixAvailable: true,
              })
            }
          }
        }
      })

      while (fixPositions.length) {
        const fix = fixPositions.pop()
        if (!fix) continue
        const newVal =
          decl.value.substring(0, fix.index) +
          fix.expectedValue +
          decl.value.substr(fix.index + fix.match.length)
        decl.value = newVal
      }
    })
  },
}
