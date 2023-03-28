import { deprecatedTokenReplacements } from "./deprecatedTokens"
import { kaizenTokensByName } from "./src/util/kaizenTokens"

describe("deprecated tokens", () => {
  /* eslint-disable jest/consistent-test-it */
  test("every replacement token is a valid + existing Kaizen token", () => {
    Array.from(deprecatedTokenReplacements.values()).forEach(
      replacementName => {
        if (replacementName) {
          expect(kaizenTokensByName).toHaveProperty(replacementName)
        }
      }
    )
  })
})
