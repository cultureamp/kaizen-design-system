import { getParser } from "../util/utils"
import { noInvalidUseOfVarTokensInEquations } from "./no-invalid-use-of-var-tokens-in-equations"

describe("no-invalid-use-of-var-tokens-in-equations rule", () => {
  const expectEquationIsValid = (value: string) => {
    let reported = 0
    noInvalidUseOfVarTokensInEquations.ruleFunction(
      getParser("scss").parse(`.foo { padding: ${value}; }`),
      {
        language: "scss",
        reporter: () => {
          reported++
        },
      }
    )
    return expect(reported === 0)
  }

  test("Equations are invalid if not wrapped in calc", () => {
    expectEquationIsValid("$kz-color-wisteria-800 * 5").toBe(false)
  })

  test("Valid equations in space separated values are supported", () => {
    // The token is a separate value in a space-separated list.
    // The actual equation has no token.
    expectEquationIsValid("$kz-var-spacing-md 5px - 2px").toBe(true)
  })

  test("Invalid equations in space separated values are detected", () => {
    expectEquationIsValid("solid 1px + $kz-spacing-md black").toBe(false)
  })

  test("Our rule does not test/change unknown variables", () => {
    expectEquationIsValid("$something-user-defined + 2").toBe(true)
  })

  test("Interpolation is needed inside calc()", () => {
    expectEquationIsValid("calc($kz-var-spacing-md + 5px)").toBe(false)
  })

  test("Interpolation within calc() is valid", () => {
    expectEquationIsValid("calc(#{$kz-var-spacing-md} + 5px)").toBe(true)
  })

  test("Negative values are invalid (needs to be calc)", () => {
    expectEquationIsValid("-$kz-var-spacing-md").toBe(false)
  })

  test("Negating values with calc() is valid", () => {
    expectEquationIsValid("calc(#{$kz-var-spacing-md} * -1)").toBe(true)
  })

  test("Multiplying by a negative is valid", () => {
    expectEquationIsValid("calc(#{$kz-var-spacing-md} * -5rem)").toBe(true)
  })

  test("Multiplying by a negative, without interpolation, is invalid", () => {
    expectEquationIsValid("calc($kz-var-spacing-md * -5px)").toBe(false)
  })
})
