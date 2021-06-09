import { getParser } from "../util/utils"
import { noInvalidUseOfVarTokensInEquations } from "./no-invalid-use-of-var-tokens-in-equations"

describe("no-invalid-use-of-var-tokens-in-equations rule", () => {
  test.each([
    ["$kz-color-wisteria-800 * 5", true],

    ["$kz-var-spacing-md 5px - 2px", false],

    ["$kz-something-user-defined + 2", false],

    ["solid 1px + $kz-spacing-md black", true],

    ["calc($kz-spacing-md + 5px)", true],

    ["calc($kz-var-spacing-md + 5px)", true],

    ["calc(#{$kz-var-spacing-md} + 5rem)", false],
    ["-$kz-var-spacing-md", true],
  ])("Equation: `%s`, invalid?: %s ", (input, isInvalid) => {
    let reported = 0
    noInvalidUseOfVarTokensInEquations.ruleFunction(
      getParser("scss").parse(`.foo { padding: ${input}; }`),
      {
        language: "scss",
        reporter: () => {
          reported++
        },
      }
    )
    if (isInvalid) {
      expect(reported).toBeGreaterThan(0)
    } else {
      expect(reported).toBe(0)
    }
  })
})
