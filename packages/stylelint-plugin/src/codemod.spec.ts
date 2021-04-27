import { codemodOnSource } from "./codemod"
import { allRulesEnabled, Language } from "./types"

type TestExample = {
  language: Language
  testName: string
  expectedReports: number
  input: string
  expectedOutput: string
  only?: boolean
}

const testExamples: TestExample[] = [
  {
    language: "scss",
    testName: "asserts that missing imports are added",
    input:
      "@media (min-width: $kz-layout-breakpoints-large) { .test { color: $kz-color-wisteria-800 } }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; @import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) { .test { color: $kz-var-color-wisteria-800 } }',
    expectedReports: 0,
  },
  {
    language: "less",
    testName: "asserts that missing imports are added",
    input:
      "@media (min-width: @kz-layout-breakpoints-large) { .test { color: @kz-color-wisteria-800 } }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color-vars"; @import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) { .test { color: @kz-var-color-wisteria-800 } }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "asserts that unnecessary imports are removed",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; @import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedReports: 0,
  },
  {
    language: "less",
    testName: "asserts that unnecessary imports are removed",
    input:
      '@import "~@kaizen/design-tokens/less/color-vars"; @import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedReports: 0,
  },

  {
    language: "scss",
    testName:
      "doesn't migrate variables within @media queries, but still fixes imports for variables in AtRule parameters",
    input: "@media (min-width: $kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) {}',
    expectedReports: 0,
  },
  {
    language: "less",
    testName:
      "doesn't migrate variables within @media queries, but still fixes imports for variables in AtRule parameters",
    input: "@media (min-width: @kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) {}',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "doesn't migrate variables when used as equation terms",
    input: ".foo { padding: $kz-spacing-md * 2; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: $kz-spacing-md * 2; }',
    expectedReports: 2,
  },
  {
    language: "less",
    testName: "doesn't migrate variables when used as equation terms",
    input: ".foo { padding: @kz-spacing-md * 2; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/spacing"; .foo { padding: @kz-spacing-md * 2; }',
    expectedReports: 2,
  },
  {
    language: "scss",
    testName: "migrates variables when used next to an equation",
    input: ".foo { padding: 0 1px 5 * 10px $kz-spacing-md; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: 0 1px 5 * 10px $kz-var-spacing-md; }',
    expectedReports: 0,
  },
  {
    language: "less",
    testName: "migrates variables when used next to an equation",
    input: ".foo { padding: 0 1px 5 * 10px @kz-spacing-md; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/spacing-vars"; .foo { padding: 0 1px 5 * 10px @kz-var-spacing-md; }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "migrates tokens in other cases",
    input: ".foo { padding: $kz-spacing-md; color: $kz-color-wisteria-800; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; @import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: $kz-var-spacing-md; color: $kz-var-color-wisteria-800; }',
    expectedReports: 0,
  },
  {
    language: "less",
    testName: "migrates tokens in other cases",
    input: ".foo { padding: @kz-spacing-md; color: @kz-color-wisteria-800; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color-vars"; @import "~@kaizen/design-tokens/less/spacing-vars"; .foo { padding: @kz-var-spacing-md; color: @kz-var-color-wisteria-800; }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "migrates add-alpha, rgba, and rgb functions to use -rgb-params",
    input:
      ".foo { color: add-alpha($kz-color-wisteria-800, 80); background-color: rgba($kz-color-cluny-600, 0.5); border-color: rgb($kz-color-yuzu-600) }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 0.8); background-color: rgba($kz-var-color-cluny-600-rgb-params, 0.5); border-color: rgb($kz-var-color-yuzu-600-rgb-params) }',
    expectedReports: 0,
  },
  {
    language: "less",
    testName: "migrates add-alpha, rgba, and rgb functions to use -rgb-params",
    input:
      ".foo { color: add-alpha(@kz-color-wisteria-800, 80%); background-color: rgba(@kz-color-cluny-600, 0.5); border-color: rgb(@kz-color-yuzu-600) }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color-vars"; .foo { color: rgba(@kz-var-color-wisteria-800-rgb-params, 0.8); background-color: rgba(@kz-var-color-cluny-600-rgb-params, 0.5); border-color: rgb(@kz-var-color-yuzu-600-rgb-params) }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "migrates basic usages of tokens",
    input:
      ".foo { color: $kz-color-wisteria-800; background-color: $kz-color-cluny-600; border-color: $kz-color-yuzu-600 } @media (min-width: $kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: $kz-var-color-wisteria-800; background-color: $kz-var-color-cluny-600; border-color: $kz-var-color-yuzu-600 } @media (min-width: $kz-layout-breakpoints-large) {}',
    expectedReports: 0,
  },
  {
    language: "less",
    testName: "migrates basic usages of tokens",
    input:
      ".foo { color: @kz-color-wisteria-800; background-color: @kz-color-cluny-600; border-color: @kz-color-yuzu-600 } @media (min-width: @kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @import "~@kaizen/design-tokens/less/color-vars"; .foo { color: @kz-var-color-wisteria-800; background-color: @kz-var-color-cluny-600; border-color: @kz-var-color-yuzu-600 } @media (min-width: @kz-layout-breakpoints-large) {}',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "migrates functions other than rgba, rgb, or add-alpha",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; @import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-color-wisteria-800, 0.4); background-color: darken($kz-color-cluny-700, 0.8); test: something-else($kz-color-yuzu-400); another: rgb($kz-color-cluny-200); foo: add-alpha($kz-color-wisteria-700, 90); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 0.4); background-color: #002f53; test: something-else($kz-color-yuzu-400); another: rgb($kz-var-color-cluny-200-rgb-params); foo: rgba($kz-var-color-wisteria-700-rgb-params, 0.9); }',
    expectedReports: 2,
  },
  {
    language: "less",
    testName: "doesn't migrates functions other than rgba, rgb, or add-alpha",
    input:
      '@import "~@kaizen/design-tokens/less/color"; @import "~@kaizen/design-tokens/less/color-vars"; .foo { color: rgba(@kz-color-wisteria-800, 0.4); background-color: darken(@kz-color-cluny-700, 0.8); test: something-else(@kz-color-yuzu-400); another: rgb(@kz-color-cluny-200); foo: add-alpha(@kz-color-wisteria-700, 90%); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; @import "~@kaizen/design-tokens/less/color-vars"; .foo { color: rgba(@kz-var-color-wisteria-800-rgb-params, 0.4); background-color: darken(@kz-color-cluny-700, 0.8); test: something-else(@kz-color-yuzu-400); another: rgb(@kz-var-color-cluny-200-rgb-params); foo: rgba(@kz-var-color-wisteria-700-rgb-params, 0.9); }',
    expectedReports: 4,
  },
  {
    language: "scss",
    testName: "doesn't migrate tokens within variables",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $foo: $kz-color-wisteria-800;',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; $foo: $kz-color-wisteria-800;',
    expectedReports: 1,
  },
  {
    language: "scss",
    testName:
      "migrates new kaizen css variable tokens when used incorrectly in rgba|rgb|add-alpha",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 80%) }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "migrates new kaizen css variable tokens when used incorrectly in rgba|rgb|add-alpha",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 80%) }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "migrates tokens used in calc() without string interpolations",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: calc(5px + $kz-spacing-md) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: calc(5px + #{$kz-var-spacing-md}) }',
    expectedReports: 0,
  },
  {
    language: "less",
    testName: "nothing unmigratable showing up for valid use cases",
    input:
      '@import "~@kaizen/design-tokens/less/color-vars"; .foo { color: rgba(@kz-var-color-wisteria-800-rgb-params, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color-vars"; .foo { color: rgba(@kz-var-color-wisteria-800-rgb-params, 80%) }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "interpolated tokens are still migrated",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: #{$kz-spacing-lg} }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: #{$kz-var-spacing-lg} }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "negation of old token is detected as an equation, and then migrated with a calc()",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: -$kz-spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: calc(-1 * #{$kz-var-spacing-lg}); }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "negation of old token is detected as an equation, and then migrated with a calc(), but not if it's already within one",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: calc(-$kz-spacing-lg); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: calc((-1 * #{$kz-var-spacing-lg})); }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "negation of old token is detected as an equation, and then migrated with a calc(), even when it's part of a value with multiple 'sides' ",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: 5px -$kz-spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: 5px calc(-1 * #{$kz-var-spacing-lg}); }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "negation of old token is detected as an equation, and then migrated with a calc(), even when it's part of a value with multiple 'sides', and with another kaizen token next to it ",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: $kz-spacing-md -$kz-spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: $kz-var-spacing-md calc(-1 * #{$kz-var-spacing-lg}); }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "doesn't migrate ambiguous case of negation (knows if it's an equation and not a negation - all it takes is a space)",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: 5px - $kz-spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: 5px - $kz-spacing-lg; }',
    expectedReports: 2,
  },

  {
    language: "less",
    testName:
      "negation of old token is detected as an equation, but not migrated in LESS",
    input:
      '@import "~@kaizen/design-tokens/less/spacing"; .foo { padding: -@kz-spacing-lg; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/spacing"; .foo { padding: -@kz-spacing-lg; }',
    expectedReports: 1,
  },
  {
    language: "scss",
    testName:
      "migrates variables even though next to an operator but separated by a comma",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: rgba(+, $kz-spacing-md) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: rgba(+, $kz-var-spacing-md) }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles mix() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $customVar: white; .foo { color: mix($kz-color-wisteria-800, $customVar, 80%) }',
    expectedOutput: "$customVar: white; .foo { color: #5d5f6e }",
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles add-shade() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $custom-param: 80%; .foo { color: add-shade($kz-color-wisteria-800, $custom-param) }',
    expectedOutput: "$custom-param: 80%; .foo { color: #0b0b0f }",
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles add-tint() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $custom-param: 80%; .foo { color: add-tint($kz-color-wisteria-800, $custom-param) }',
    expectedOutput: "$custom-param: 80%; .foo { color: #d7d7db }",
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles darken() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $custom-param: 10%; .foo { color: darken($kz-color-wisteria-800, $custom-param) }',
    expectedOutput: "$custom-param: 10%; .foo { color: #20212c }",
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles lighten() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $custom-param: 10%; .foo { color: lighten($kz-color-wisteria-800, $custom-param) }',
    expectedOutput: "$custom-param: 10%; .foo { color: #4a4d68 }",
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles transparentize() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $custom-param: 0.1; .foo { color: transparentize($kz-color-wisteria-800, $custom-param) }',
    expectedOutput: "$custom-param: 0.1; .foo { color: rgba(53, 55, 74, 0.9) }",
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles adjust-hue() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $custom-param: 100; .foo { color: adjust-hue($kz-color-wisteria-800, $custom-param) }',
    expectedOutput: "$custom-param: 100; .foo { color: #4a353e }",
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles saturate() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $custom-param: 10%; .foo { color: saturate($kz-var-color-wisteria-800, $custom-param) }',
    expectedOutput: "$custom-param: 10%; .foo { color: #2f3250 }",
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "compiles desaturate() function in place",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $custom-param: 10%; .foo { color: desaturate($kz-var-color-wisteria-800, $custom-param) }',
    expectedOutput: "$custom-param: 10%; .foo { color: #3b3c44 }",
    expectedReports: 0,
  },
  {
    language: "less",
    testName: "doesn't compile functions in place",
    input:
      '@import "~@kaizen/design-tokens/less/color"; @customVar: white; .foo { color: mix(@kz-color-wisteria-800, @customVar, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; @customVar: white; .foo { color: mix(@kz-color-wisteria-800, @customVar, 80%) }',
    expectedReports: 2,
  },
  {
    language: "scss",
    testName: "weird add-alpha alpha parameter is fixed",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; .foo { color: add-alpha($kz-color-wisteria-800, 70) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 0.7) }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "transitive kaizen tokens are fixed",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; $foo: $kz-var-color-wisteria-800; .foo { color: $foo; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; $foo: $kz-var-color-wisteria-800; .foo { color: $kz-var-color-wisteria-800; }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName: "transitive kaizen tokens containing multiple values are fixed",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; $foo: $kz-var-color-wisteria-800 $kz-var-color-wisteria-700 $kz-var-color-wisteria-800; .foo { color: $foo; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; $foo: $kz-var-color-wisteria-800 $kz-var-color-wisteria-700 $kz-var-color-wisteria-800; .foo { color: $kz-var-color-wisteria-800 $kz-var-color-wisteria-700 $kz-var-color-wisteria-800; }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "color manipulation functions are computed, even when a transitive kaizen token is used",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; $foo: $kz-var-color-wisteria-800; .foo { color: mix($foo, $white, 80%); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; $foo: $kz-var-color-wisteria-800; .foo { color: #5d5f6e; }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "color manipulation functions are computed, even when a transitive kaizen token defined in the same block is used",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; $foo: $kz-var-color-wisteria-600; .foo { $foo: $kz-var-color-wisteria-800; color: mix($foo, $white, 80%); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; $foo: $kz-var-color-wisteria-600; .foo { $foo: $kz-var-color-wisteria-800; color: #5d5f6e; }',
    expectedReports: 0,
  },
  {
    language: "scss",
    testName:
      "transitive tokens are fixed correctly when their usages are negated, and their replacements are simple",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; $foo: $kz-spacing-md; .foo { top: -$foo; }',
    expectedOutput:
      ' @import "~@kaizen/design-tokens/sass/spacing-vars"; @import "~@kaizen/design-tokens/sass/spacing"; $foo: $kz-spacing-md; .foo { top: calc(-1 * #{$kz-var-spacing-md}); }',
    expectedReports: 1,
  },
  {
    language: "scss",
    testName:
      "transitive tokens are fixed correctly when their usages are interpolated",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing"; $foo: $kz-spacing-md; .foo { top: #{$foo}; }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; @import "~@kaizen/design-tokens/sass/spacing"; $foo: $kz-spacing-md; .foo { top: #{$kz-var-spacing-md}; }',
    expectedReports: 1,
  },
  {
    language: "scss",
    testName:
      "transitive tokens are fixed correctly when their usages are negated, and the replacement variable value is complex",
    input:
      '@import "~@kaizen/design-tokens/sass/border"; $focus-ring-offset: ($kz-border-focus-ring-border-width * 2) + 1px; .foo { padding: -$focus-ring-offset }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/border"; $focus-ring-offset: ($kz-border-focus-ring-border-width * 2) + 1px; .foo { padding: -(($kz-border-focus-ring-border-width * 2) + 1px) }',
    expectedReports: 4,
  },
  {
    language: "scss",
    testName:
      "transitive tokens are fixed correctly when their usages are negated, and the replacement variable value is complex, and the variable is declared both locally and globally",
    input:
      '@import "~@kaizen/design-tokens/sass/border"; $focus-ring-offset: ($kz-border-focus-ring-border-width * 2) + 1px; .foo { $focus-ring-offset: ($kz-border-focus-ring-border-width * 4) + 10px; padding: -$focus-ring-offset }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/border"; $focus-ring-offset: ($kz-border-focus-ring-border-width * 2) + 1px; .foo { $focus-ring-offset: ($kz-border-focus-ring-border-width * 4) + 10px; padding: -(($kz-border-focus-ring-border-width * 4) + 10px) }',
    expectedReports: 5,
  },
]

describe("Codemod", () => {
  const testExample = ({
    language,
    testName,
    input,
    expectedOutput,
    expectedReports: expectedUnmigratableTokens,
    only,
  }: TestExample) => {
    const testFn = only ? test.only : test
    testFn(`${language}: ${testName}`, () => {
      let unfixables = 0
      const result = codemodOnSource(input, {
        language,
        fix: true,
        ...allRulesEnabled,
        reporter: ({ message, autofixAvailable }) => {
          // Uncomment this if you want to see reports
          // console.log(message)
          if (!autofixAvailable) {
            unfixables++
          }
        },
      })

      expect(result.toString().replace(/\n/g, " ").trim()).toBe(
        expectedOutput.replace(/\n/g, " ").trim()
      )
      expect(unfixables).toBe(expectedUnmigratableTokens)
    })
  }
  testExamples.forEach(testExample)
  // TEst a single example by adding "only" to an example up above
  // OR
  // Test a single example like so:
  /*   testExample({
    language: "scss",
    testName: "test",
    input:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: $kz-var-spacing-lg calc(-1 * #{$kz-var-spacing-md}); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: $kz-var-spacing-lg calc(-1 * #{$kz-var-spacing-md}); }',
    expectedUnmigratableTokens: 0,
  }) */
})
