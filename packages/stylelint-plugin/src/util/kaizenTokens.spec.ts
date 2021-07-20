import {
  getReplacementForDeprecatedOrRemovedToken,
  isKaizenTokenDeprecatedOrRemoved,
  kaizenTokensByName,
} from "./kaizenTokens"

describe("kaizenTokens", () => {
  describe(getReplacementForDeprecatedOrRemovedToken.name, () => {
    test("never returns another deprecated token across all Kaizen tokens", () => {
      Object.entries(kaizenTokensByName).forEach(([key, value]) => {
        if (!value) return
        const replacement = getReplacementForDeprecatedOrRemovedToken(
          value.name
        )
        if (!replacement) return
        if (isKaizenTokenDeprecatedOrRemoved(replacement.name)) {
          console.warn(
            `Kaizen token: ${value.name}, is deprecated and has a replacement of ${replacement.name}, but the replacement is also deprecated`
          )
        }
        expect(isKaizenTokenDeprecatedOrRemoved(replacement.name)).toBeFalsy()
      })
    })
  })
})
