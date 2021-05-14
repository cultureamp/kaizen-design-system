import colorString from "color-string"
import { Root } from "postcss"
import valueParser from "postcss-value-parser"
import stylelint from "stylelint"
import { inverseKaizenTokens } from "../../kaizenTokens"
import { KaizenToken, Options } from "../../types"
import { prefixVariableName } from "../../variableUtils"

const colorMap = Object.entries(inverseKaizenTokens).reduce(
  (acc, [_, value]) => {
    const firstNonDeprecatedColorToken = value?.find(
      (token): token is KaizenToken & { color: string } =>
        Boolean(!token.deprecated && token.color)
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

export const colorsPreferTokenRuleName = "colors-prefer-token"

export const messages = stylelint.utils.ruleMessages(
  colorsPreferTokenRuleName,
  {
    expected: (named, original) => `Expected "${original}" to be "${named}"`,
  }
)

export const colorsPreferTokenRule = (root: Root, options: Options) => {
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
          const expectedValue = prefixVariableName(
            options.language,
            matchingKaizenToken.name
          )
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
}
