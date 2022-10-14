import { inspect } from "util"
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
    const rootStylesheetNode = getParser("scss").parse(mockedStyleSheet)
    let reported = 0
    spacingTokensMustBeUsed.ruleFunction(rootStylesheetNode, {
      language: "scss",
      reporter: () => {
        reported++
      },
      fix: fixRule,
    })
    return reported
  }

  it("will report is $ca-grid is present in a stylesheet", () => {
    expect(getReportedCasesOfRule(mockScssStylesheet)).toBeGreaterThan(0)
  })

  it("will not report if $ca-grid is a definition in the stylesheet (ie: $ca-grid:)", () => {
    expect(getReportedCasesOfRule(mockScssStylesheetWithDefinition)).toBe(0)
  })

  it("will remove $ca-grid if the fix is passed to options", () => {
    const transformeDoc = getReportedCasesOfRule(mockScssStylesheet, true)
    expect(transformeDoc).toBe(0)
  })

  it("will replace $ca-grid with $spacing-md", () => {
    const rootStylesheetNode = getParser("scss").parse(mockScssStylesheet)
    const expectedTransformation = "$spacing-md 1rem 0 $spacing-md"
    spacingTokensMustBeUsed.ruleFunction(rootStylesheetNode, {
      language: "scss",
      reporter: () => {
        // no-op
      },
      fix: true,
    })
    expect(
      rootStylesheetNode.toString().indexOf(expectedTransformation)
    ).toBeGreaterThan(0)
  })
})
