import { lintEquation } from "./lintEquation"

describe("lintEquation", () => {
  test.each([
    ["$kz-color-wisteria-800 * 5", true],

    ["$kz-var-spacing-md 5px - 2px", false],

    ["$kz-something-user-defined + 2", false],

    ["solid 1px + $kz-spacing-md black", true],

    ["calc($kz-spacing-md + 5px)", true],

    ["calc($kz-var-spacing-md + 5px)", true],

    ["calc(#{$kz-var-spacing-md} + 5rem)", false],
  ])("Equation: `%s`, invalid?: %s ", (input, isInvalid) => {
    const result = lintEquation(input, {
      language: "scss",
      reporter: () => {
        //
      },
    })

    expect(result.invalid).toBe(isInvalid)
  })
})
