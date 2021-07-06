import { getParser } from "../util/utils"
import { renameColorsRule } from "./rename-colors"

const testCases = [
  {
    input:
      ".foo { test-prop: $kz-var-color-wisteria-100 $kz-var-color-wisteria-200 $kz-var-color-wisteria-300 $kz-var-color-wisteria-400 $kz-var-color-wisteria-500 $kz-var-color-wisteria-600 $kz-var-color-wisteria-700 $kz-var-color-wisteria-800; }",
    expectedOutput:
      ".foo { test-prop: $kz-var-color-purple-100 $kz-var-color-purple-200 $kz-var-color-purple-300 $kz-var-color-purple-400 $kz-var-color-purple-500 $kz-var-color-purple-600 $kz-var-color-purple-700 $kz-var-color-purple-800; }",
    testName: "wisteria is renamed to purple in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $kz-var-color-cluny-100 $kz-var-color-cluny-200 $kz-var-color-cluny-300 $kz-var-color-cluny-400 $kz-var-color-cluny-500 $kz-var-color-cluny-600 $kz-var-color-cluny-700; }",
    expectedOutput:
      ".foo { test-prop: $kz-var-color-blue-100 $kz-var-color-blue-200 $kz-var-color-blue-300 $kz-var-color-blue-400 $kz-var-color-blue-500 $kz-var-color-blue-600 $kz-var-color-blue-700; }",
    testName: "cluny is renamed to blue in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $kz-var-color-yuzu-100 $kz-var-color-yuzu-200 $kz-var-color-yuzu-300 $kz-var-color-yuzu-400 $kz-var-color-yuzu-500 $kz-var-color-yuzu-600 $kz-var-color-yuzu-700; }",
    expectedOutput:
      ".foo { test-prop: $kz-var-color-yellow-100 $kz-var-color-yellow-200 $kz-var-color-yellow-300 $kz-var-color-yellow-400 $kz-var-color-yellow-500 $kz-var-color-yellow-600 $kz-var-color-yellow-700; }",
    testName: "yuzu is renamed to yellow in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $kz-var-color-coral-100 $kz-var-color-coral-200 $kz-var-color-coral-300 $kz-var-color-coral-400 $kz-var-color-coral-500 $kz-var-color-coral-600 $kz-var-color-coral-700 $kz-var-color-coral-800; }",
    expectedOutput:
      ".foo { test-prop: $kz-var-color-red-100 $kz-var-color-red-200 $kz-var-color-red-300 $kz-var-color-red-400 $kz-var-color-red-500 $kz-var-color-red-600 $kz-var-color-red-700 $kz-var-color-red-800; }",
    testName: "coral is renamed to red in declarations",
    expectedReports: 0,
  },
  {
    // The input contains a kaizen var `$kz-var-border-dashed-border-style;` that has `ash` as a substring, which should not be replaced.
    input: ".foo { test-prop: $kz-var-border-dashed-border-style; }",
    expectedOutput: ".foo { test-prop: $kz-var-border-dashed-border-style; }",
    testName: "accidental renames don't occur",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $kz-var-color-peach-100 $kz-var-color-peach-200 $kz-var-color-peach-300 $kz-var-color-peach-400 $kz-var-color-peach-500 $kz-var-color-peach-600 $kz-var-color-peach-700; }",
    expectedOutput:
      ".foo { test-prop: $kz-var-color-orange-100 $kz-var-color-orange-200 $kz-var-color-orange-300 $kz-var-color-orange-400 $kz-var-color-orange-500 $kz-var-color-orange-600 $kz-var-color-orange-700; }",
    testName: "peach is renamed to orange in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $kz-var-color-white $kz-var-color-stone $kz-var-color-ash $kz-var-color-iron $kz-var-color-slate; }",
    expectedOutput:
      ".foo { test-prop: $kz-var-color-neutral-100 $kz-var-color-neutral-200 $kz-var-color-neutral-300 $kz-var-color-neutral-500 $kz-var-color-neutral-600; }",
    testName: "neutrals are renamed in declarations",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $kz-var-color-wisteria-100 $kz-var-color-wisteria-200 $kz-var-color-wisteria-300 $kz-var-color-wisteria-400 $kz-var-color-wisteria-500 $kz-var-color-wisteria-600 $kz-var-color-wisteria-700 $kz-var-color-wisteria-800)",
    expectedOutput:
      "@testrule(test-prop: $kz-var-color-purple-100 $kz-var-color-purple-200 $kz-var-color-purple-300 $kz-var-color-purple-400 $kz-var-color-purple-500 $kz-var-color-purple-600 $kz-var-color-purple-700 $kz-var-color-purple-800)",
    testName: "wisteria is renamed to purple in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $kz-var-color-cluny-100 $kz-var-color-cluny-200 $kz-var-color-cluny-300 $kz-var-color-cluny-400 $kz-var-color-cluny-500 $kz-var-color-cluny-600 $kz-var-color-cluny-700)",
    expectedOutput:
      "@testrule(test-prop: $kz-var-color-blue-100 $kz-var-color-blue-200 $kz-var-color-blue-300 $kz-var-color-blue-400 $kz-var-color-blue-500 $kz-var-color-blue-600 $kz-var-color-blue-700)",
    testName: "cluny is renamed to blue in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $kz-var-color-yuzu-100 $kz-var-color-yuzu-200 $kz-var-color-yuzu-300 $kz-var-color-yuzu-400 $kz-var-color-yuzu-500 $kz-var-color-yuzu-600 $kz-var-color-yuzu-700)",
    expectedOutput:
      "@testrule(test-prop: $kz-var-color-yellow-100 $kz-var-color-yellow-200 $kz-var-color-yellow-300 $kz-var-color-yellow-400 $kz-var-color-yellow-500 $kz-var-color-yellow-600 $kz-var-color-yellow-700)",
    testName: "yuzu is renamed to yellow in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $kz-var-color-coral-100 $kz-var-color-coral-200 $kz-var-color-coral-300 $kz-var-color-coral-400 $kz-var-color-coral-500 $kz-var-color-coral-600 $kz-var-color-coral-700 $kz-var-color-coral-800)",
    expectedOutput:
      "@testrule(test-prop: $kz-var-color-red-100 $kz-var-color-red-200 $kz-var-color-red-300 $kz-var-color-red-400 $kz-var-color-red-500 $kz-var-color-red-600 $kz-var-color-red-700 $kz-var-color-red-800)",
    testName: "coral is renamed to red in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $kz-var-color-peach-100 $kz-var-color-peach-200 $kz-var-color-peach-300 $kz-var-color-peach-400 $kz-var-color-peach-500 $kz-var-color-peach-600 $kz-var-color-peach-700)",
    expectedOutput:
      "@testrule(test-prop: $kz-var-color-orange-100 $kz-var-color-orange-200 $kz-var-color-orange-300 $kz-var-color-orange-400 $kz-var-color-orange-500 $kz-var-color-orange-600 $kz-var-color-orange-700)",
    testName: "peach is renamed to orange in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $kz-var-color-white $kz-var-color-stone $kz-var-color-ash $kz-var-color-iron $kz-var-color-slate)",
    expectedOutput:
      "@testrule(test-prop: $kz-var-color-neutral-100 $kz-var-color-neutral-200 $kz-var-color-neutral-300 $kz-var-color-neutral-500 $kz-var-color-neutral-600)",
    testName: "neutrals are renamed in at-rules",
    expectedReports: 0,
  },
]

describe(renameColorsRule.name, () => {
  testCases.forEach(testCase => {
    test(testCase.testName, () => {
      let reports = 0
      const parser = getParser("scss")
      const ast = parser.parse(testCase.input)
      renameColorsRule.ruleFunction(ast, {
        language: "scss",
        reporter: () => reports++,
        fix: true,
      })
      expect(ast.toString()).toBe(
        parser.parse(testCase.expectedOutput).toString()
      )
      expect(reports).toBe(testCase.expectedReports)
    })
  })
})
