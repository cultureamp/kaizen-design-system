import { getParser } from "../util/utils"
import { renameColorsRule } from "./rename-tokens"

const testCases = [
  {
    input:
      ".foo { test-prop: $color-wisteria-100 $color-wisteria-200 $color-wisteria-300 $color-wisteria-400 $color-wisteria-500 $color-wisteria-600 $color-wisteria-700 $color-wisteria-800; }",
    expectedOutput:
      ".foo { test-prop: $color-purple-100 $color-purple-200 $color-purple-300 $color-purple-400 $color-purple-500 $color-purple-600 $color-purple-700 $color-purple-800; }",
    testName: "wisteria is renamed to purple in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $color-cluny-100 $color-cluny-200 $color-cluny-300 $color-cluny-400 $color-cluny-500 $color-cluny-600 $color-cluny-700; }",
    expectedOutput:
      ".foo { test-prop: $color-blue-100 $color-blue-200 $color-blue-300 $color-blue-400 $color-blue-500 $color-blue-600 $color-blue-700; }",
    testName: "cluny is renamed to blue in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $color-yuzu-100 $color-yuzu-200 $color-yuzu-300 $color-yuzu-400 $color-yuzu-500 $color-yuzu-600 $color-yuzu-700; }",
    expectedOutput:
      ".foo { test-prop: $color-yellow-100 $color-yellow-200 $color-yellow-300 $color-yellow-400 $color-yellow-500 $color-yellow-600 $color-yellow-700; }",
    testName: "yuzu is renamed to yellow in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $color-coral-100 $color-coral-200 $color-coral-300 $color-coral-400 $color-coral-500 $color-coral-600 $color-coral-700; }",
    expectedOutput:
      ".foo { test-prop: $color-red-100 $color-red-200 $color-red-300 $color-red-400 $color-red-500 $color-red-600 $color-red-700; }",
    testName: "coral is renamed to red in declarations",
    expectedReports: 0,
  },
  {
    input: ".foo { test-prop: $color-coral-800 $color-coral-700 $kz-var-blah;}",
    expectedOutput:
      ".foo { test-prop: $color-coral-800 $color-red-700 $kz-var-blah;}",
    testName:
      "doesn't rename anything that would result in a non-existent kaizen-token",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $color-seedling-100 $color-seedling-200 $color-seedling-300 $color-seedling-400 $color-seedling-500 $color-seedling-600 $color-seedling-700; }",
    expectedOutput:
      ".foo { test-prop: $color-green-100 $color-green-200 $color-green-300 $color-green-400 $color-green-500 $color-green-600 $color-green-700; }",
    testName: "seedling is renamed to green in declarations",
    expectedReports: 0,
  },
  {
    // The input contains a kaizen var `$border-dashed-border-style;` that has `ash` as a substring, which should not be replaced.
    input: ".foo { test-prop: $border-dashed-border-style; }",
    expectedOutput: ".foo { test-prop: $border-dashed-border-style; }",
    testName: "accidental renames don't occur",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $color-peach-100 $color-peach-200 $color-peach-300 $color-peach-400 $color-peach-500 $color-peach-600 $color-peach-700; }",
    expectedOutput:
      ".foo { test-prop: $color-orange-100 $color-orange-200 $color-orange-300 $color-orange-400 $color-orange-500 $color-orange-600 $color-orange-700; }",
    testName: "peach is renamed to orange in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $color-white $color-stone $color-ash $color-iron $color-slate; }",
    expectedOutput:
      ".foo { test-prop: $color-neutral-100 $color-neutral-200 $color-neutral-300 $color-neutral-500 $color-neutral-600; }",
    testName: "neutrals are renamed in declarations",
    expectedReports: 0,
  },
  {
    input:
      ".foo { test-prop: $kz-var-color-blue-100, $kz-var-spacing-md $kz-var-shadow-large-box-shadow; }",
    expectedOutput:
      ".foo { test-prop: $color-blue-100, $spacing-md $shadow-large-box-shadow; }",
    testName: "kz-var prefix is removed in declarations",
    expectedReports: 0,
  },
  {
    input: ".foo { test-prop: $kz-var-id-color-blue-100; }",
    expectedOutput: ".foo { test-prop: $color-blue-100-id; }",
    testName: "kz-var-id-* is replaced with *-id ",
    expectedReports: 0,
  },
  {
    input: ".foo { test-prop: ($kz-var-id-color-cluny-100); }",
    expectedOutput: ".foo { test-prop: ($color-blue-100-id); }",
    testName: "kz-var-id-* is replaced with *-id and handles brackets",
    expectedReports: 0,
  },
  {
    input: ".foo { test-prop: #{$kz-var-id-color-cluny-100}; }",
    expectedOutput: ".foo { test-prop: #{$color-blue-100-id}; }",
    testName: "kz-var-id-* is replaced with *-id and handles interpolation",
    expectedReports: 0,
  },
  {
    input: ".foo { test-prop: $kz-var-color-cluny-100-rgb-params; }",
    expectedOutput: ".foo { test-prop: $color-blue-100-rgb; }",
    testName: "-rgb-params is replaced with -rgb",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $color-wisteria-100 $color-wisteria-200 $color-wisteria-300 $color-wisteria-400 $color-wisteria-500 $color-wisteria-600 $color-wisteria-700 $color-wisteria-800)",
    expectedOutput:
      "@testrule(test-prop: $color-purple-100 $color-purple-200 $color-purple-300 $color-purple-400 $color-purple-500 $color-purple-600 $color-purple-700 $color-purple-800)",
    testName: "wisteria is renamed to purple in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $color-cluny-100 $color-cluny-200 $color-cluny-300 $color-cluny-400 $color-cluny-500 $color-cluny-600 $color-cluny-700)",
    expectedOutput:
      "@testrule(test-prop: $color-blue-100 $color-blue-200 $color-blue-300 $color-blue-400 $color-blue-500 $color-blue-600 $color-blue-700)",
    testName: "cluny is renamed to blue in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $color-yuzu-100 $color-yuzu-200 $color-yuzu-300 $color-yuzu-400 $color-yuzu-500 $color-yuzu-600 $color-yuzu-700)",
    expectedOutput:
      "@testrule(test-prop: $color-yellow-100 $color-yellow-200 $color-yellow-300 $color-yellow-400 $color-yellow-500 $color-yellow-600 $color-yellow-700)",
    testName: "yuzu is renamed to yellow in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $color-coral-100 $color-coral-200 $color-coral-300 $color-coral-400 $color-coral-500 $color-coral-600 $color-coral-700)",
    expectedOutput:
      "@testrule(test-prop: $color-red-100 $color-red-200 $color-red-300 $color-red-400 $color-red-500 $color-red-600 $color-red-700)",
    testName: "coral is renamed to red in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $color-peach-100 $color-peach-200 $color-peach-300 $color-peach-400 $color-peach-500 $color-peach-600 $color-peach-700)",
    expectedOutput:
      "@testrule(test-prop: $color-orange-100 $color-orange-200 $color-orange-300 $color-orange-400 $color-orange-500 $color-orange-600 $color-orange-700)",
    testName: "peach is renamed to orange in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $color-seedling-100 $color-seedling-200 $color-seedling-300 $color-seedling-400 $color-seedling-500 $color-seedling-600 $color-seedling-700)",
    expectedOutput:
      "@testrule(test-prop: $color-green-100 $color-green-200 $color-green-300 $color-green-400 $color-green-500 $color-green-600 $color-green-700)",
    testName: "seedling is renamed to green in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule(test-prop: $color-white $color-stone $color-ash $color-iron $color-slate)",
    expectedOutput:
      "@testrule(test-prop: $color-neutral-100 $color-neutral-200 $color-neutral-300 $color-neutral-500 $color-neutral-600)",
    testName: "neutrals are renamed in at-rules",
    expectedReports: 0,
  },
  {
    input:
      "@testrule($kz-var-color-blue-100, $kz-var-spacing-md $kz-var-shadow-large-box-shadow)",
    expectedOutput:
      "@testrule($color-blue-100, $spacing-md $shadow-large-box-shadow)",
    testName: "kz-var prefix is removed in at-rules",
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
