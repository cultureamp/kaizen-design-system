import { getParser } from "../util/utils"
import { spacingTokensMustBeUsed } from "./spacing-tokens-must-be-used"

const mockScssStylesheet = `
@import "~@kaizen/component-library/styles/grid";

.mock-class {
  padding: $ca-grid 1rem 0 $ca-grid;
  color: black;
}
`
const mockScssStylesheetWithDefinition = `
@import "~@kaizen/component-library/styles/grid";

.mock-definition {
  $ca-grid: 1rem;
  marign-right: 1rem;
}
`

describe("replace-ca-grid rule", () => {
  const getReportedCasesOfRule = (
    mockedStyleSheet: string,
    fixRule = false
  ) => {
    let reported = 0
    spacingTokensMustBeUsed.ruleFunction(
      // @ts-ignore
      getParser("scss").parse(mockedStyleSheet),
      {
        language: "scss",
        reporter: () => {
          reported++
        },
        fix: fixRule,
      }
    )
    return reported
  }

  it("will report is $ca-grid is present in a stylesheet", () => {
    expect(getReportedCasesOfRule(mockScssStylesheet)).toBeGreaterThan(0)
  })

  it("will not report is $ca-grid: is a definition in the stylesheet", () => {
    expect(getReportedCasesOfRule(mockScssStylesheetWithDefinition)).toBe(0)
  })

  it("will remove $ca-grid if the fix is passed to options", () => {
    expect(getReportedCasesOfRule(mockScssStylesheet, true)).toBe(0)
  })
})
