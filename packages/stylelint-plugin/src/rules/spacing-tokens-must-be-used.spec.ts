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

const mockScssStylesheetNestedChild = `
@import "~@kaizen/component-library/styles/grid";

.mock-definition {
  marign-right: 1rem;

  &:before {
    margin-right: 1rem;
    padding: $ca-grid;
  }

  div {
    padding: $ca-grid;
  }
}
`

const mockScssStylesheetWithDesignTokensImport = `
@import "~@kaizen/component-library/styles/grid";
@import "~@kaizen/design-tokens/sass/spacing";
@import "~@kaizen/design-tokens/sass/typography";

.mock-class {
  padding: $ca-grid 1rem 0 $ca-grid;
  margin-right: $spacing-lg;
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

  it("will report $ca-grid is present in a stylesheet", () => {
    expect(getReportedCasesOfRule(mockScssStylesheet)).toBeGreaterThan(0)
  })

  it("will report $ca-grid in a stylesheet within nested children", () => {
    expect(getReportedCasesOfRule(mockScssStylesheetNestedChild)).toBe(2)
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

  it("will replace $ca-grid with $spacing-md in nested lists", () => {
    const rootStylesheetNode = getParser("scss").parse(
      mockScssStylesheetNestedChild
    )
    const expectedTransformation = "$spacing-md"
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

  it('will replace not have more than one import of "~@kaizen/design-tokens/sass/spacing"', () => {
    const rootStylesheetNode = getParser("scss").parse(
      mockScssStylesheetNestedChild
    )
    const oldImport = "~@kaizen/component-library/style/grid"
    const updatedImport = "~@kaizen/design-tokens/sass/spacing"
    spacingTokensMustBeUsed.ruleFunction(rootStylesheetNode, {
      language: "scss",
      reporter: () => {
        // no-op
      },
      fix: true,
    })

    expect(rootStylesheetNode.toString().indexOf(oldImport)).toBe(-1)
    expect(
      rootStylesheetNode.toString().indexOf(updatedImport)
    ).toBeGreaterThan(0)
  })

  it('will replace the import of "~@kaizen/component-library/style/grid" to "~@kaizen/design-tokens/sass/spacing"', () => {
    const rootStylesheetNode = getParser("scss").parse(
      mockScssStylesheetWithDesignTokensImport
    )
    const updatedImport = "~@kaizen/design-tokens/sass/spacing"
    spacingTokensMustBeUsed.ruleFunction(rootStylesheetNode, {
      language: "scss",
      reporter: () => {
        // no-op
      },
      fix: true,
    })

    expect(
      rootStylesheetNode.toString().match(updatedImport)?.length
    ).toBeGreaterThan(0)
  })
})
