/* eslint-disable jest/consistent-test-it */
import { getParser } from "../util/utils"
import { noInvalidUseOfVarTokensInEquations } from "./no-invalid-use-of-var-tokens-in-equations"

describe("no-invalid-use-of-var-tokens-in-equations rule", () => {
  const expectEquationIsValid = (value: string): jest.JestMatchers<boolean> => {
    let reported = 0
    noInvalidUseOfVarTokensInEquations.ruleFunction(
      // @ts-ignore
      getParser("scss").parse(`.foo { padding: ${value}; }`),
      {
        language: "scss",
        reporter: () => {
          reported++
        },
      }
    )
    /* eslint-disable jest/valid-expect */
    return expect(reported === 0)
  }

  test("Equations are valid regardless of whether they are deprecated", () => {
    expectEquationIsValid("$kz-layout-breakpoints-large * 5").toBe(true)
  })
  test("Equations are valid when their values are not CSS variables", () => {
    expectEquationIsValid(
      "$layout-breakpoints-large + $layout-breakpoints-medium + 5px"
    ).toBe(true)
  })
  test("Equations are invalid if not wrapped in calc", () => {
    expectEquationIsValid("$color-purple-800 * 5").toBe(false)
  })

  test("Valid equations in space separated values are supported", () => {
    // The token is a separate value in a space-separated list.
    // The actual equation has no token.
    expectEquationIsValid("$spacing-md 5px - 2px").toBe(true)
  })

  test("Invalid equations in space separated values are detected", () => {
    expectEquationIsValid("solid 1px + $spacing-md black").toBe(false)
  })

  test("Our rule does not test/change unknown variables", () => {
    expectEquationIsValid("$something-user-defined + 2").toBe(true)
  })

  test("Interpolation is needed inside calc()", () => {
    expectEquationIsValid("calc($spacing-md + 5px)").toBe(false)
  })

  test("Interpolation within calc() is valid", () => {
    expectEquationIsValid("calc(#{$spacing-md} + 5px)").toBe(true)
  })

  test("Negative values are invalid (needs to be calc)", () => {
    expectEquationIsValid("-$spacing-md").toBe(false)
  })

  test("Negating values with calc() is valid", () => {
    expectEquationIsValid("calc(#{$spacing-md} * -1)").toBe(true)
  })

  test("Multiplying by a negative is valid", () => {
    expectEquationIsValid("calc(#{$spacing-md} * -5rem)").toBe(true)
  })

  test("Multiplying by a negative, without interpolation, is invalid", () => {
    expectEquationIsValid("calc($spacing-md * -5px)").toBe(false)
  })
})
