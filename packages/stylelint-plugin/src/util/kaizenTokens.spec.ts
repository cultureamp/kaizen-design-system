import {
  getDeprecatedTokens,
  getReplacementForDeprecatedOrRemovedToken,
  isKaizenTokenDeprecated,
  kaizenTokensByName,
} from "./kaizenTokens"
const allKeysArray = Object.keys(kaizenTokensByName)

const allKeys = new Set(allKeysArray.filter(n => !n.includes("deprecated")))

const allValidTokenKeys = new Set(
  allKeysArray.filter(token => !isKaizenTokenDeprecated(token))
)

describe("kaizenTokens", () => {
  describe(getReplacementForDeprecatedOrRemovedToken.name, () => {
    test("never returns another deprecated token across all Kaizen tokens", () => {
      Object.entries(kaizenTokensByName).forEach(([key, value]) => {
        if (!value) return
        const replacement = getReplacementForDeprecatedOrRemovedToken(
          value.name
        )
        if (!replacement) return
        expect(isKaizenTokenDeprecated(replacement.name)).toBeFalsy()
      })
    })
  })

  // Note: this becomes hard (impossible?) to test once deprecated tokens are removed from design-tokens
  describe(getDeprecatedTokens.name, () => {
    test("all deprecated tokens can be recovered", () => {
      let generatedTokens = new Set<string>()

      // Generate deprecated tokens for every valid token
      allValidTokenKeys.forEach(validTokenName => {
        if (validTokenName.includes("data-viz")) {
          debugger
        }
        generatedTokens = generatedTokens.add(validTokenName)
        getDeprecatedTokens(validTokenName).forEach(generatedToken => {
          generatedTokens = generatedTokens.add(generatedToken)
        })
      })

      // Assert that generated tokens is the same as the current tokens
      expect(generatedTokens).toBe(allKeys)
    })
  })
})
