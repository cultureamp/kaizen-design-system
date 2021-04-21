jest.deepUnmock("./codemod")
import { codemodOnSource } from "./codemod"
import { Language } from "./types"

type TestExample = {
  language: Language
  testName: string
  expectedUnmigratableTokens: number
  input: string
  expectedOutput: string
}

const testExamples: TestExample[] = [
  {
    language: "scss",
    testName: "asserts that missing imports are added",
    input:
      "@media (min-width: $kz-layout-breakpoints-large) { .test { color: $kz-color-wisteria-800 } }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; @import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) { .test { color: $kz-var-color-wisteria-800 } }',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "less",
    testName: "asserts that missing imports are added",
    input:
      "@media (min-width: @kz-layout-breakpoints-large) { .test { color: @kz-color-wisteria-800 } }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color-vars"; @import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) { .test { color: @kz-var-color-wisteria-800 } }',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "scss",
    testName: "asserts that unnecessary imports are removed",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; @import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "less",
    testName: "asserts that unnecessary imports are removed",
    input:
      '@import "~@kaizen/design-tokens/less/color-vars"; @import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) { .test { color: red; } }',
    expectedUnmigratableTokens: 1,
  },

  {
    language: "scss",
    testName: "doesn't migrate variables within @media queries",
    input: "@media (min-width: $kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @media (min-width: $kz-layout-breakpoints-large) {}',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "less",
    testName: "doesn't migrate variables within @media queries",
    input: "@media (min-width: @kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @media (min-width: @kz-layout-breakpoints-large) {}',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "scss",
    testName: "doesn't migrate variables when used as equation terms",
    input: ".foo { padding: $kz-spacing-md * 2; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing"; .foo { padding: $kz-spacing-md * 2; }',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "less",
    testName: "doesn't migrate variables when used as equation terms",
    input: ".foo { padding: @kz-spacing-md * 2; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/spacing"; .foo { padding: @kz-spacing-md * 2; }',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "scss",
    testName: "migrates variables when used next to an equation",
    input: ".foo { padding: 0 1px 5 * 10px $kz-spacing-md; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: 0 1px 5 * 10px $kz-var-spacing-md; }',
    expectedUnmigratableTokens: 0,
  },
  {
    language: "less",
    testName: "migrates variables when used next to an equation",
    input: ".foo { padding: 0 1px 5 * 10px @kz-spacing-md; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/spacing-vars"; .foo { padding: 0 1px 5 * 10px @kz-var-spacing-md; }',
    expectedUnmigratableTokens: 0,
  },
  {
    language: "scss",
    testName: "migrates tokens in other cases",
    input: ".foo { padding: $kz-spacing-md; color: $kz-color-wisteria-800; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; @import "~@kaizen/design-tokens/sass/spacing-vars"; .foo { padding: $kz-var-spacing-md; color: $kz-var-color-wisteria-800; }',
    expectedUnmigratableTokens: 0,
  },
  {
    language: "less",
    testName: "migrates tokens in other cases",
    input: ".foo { padding: @kz-spacing-md; color: @kz-color-wisteria-800; }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color-vars"; @import "~@kaizen/design-tokens/less/spacing-vars"; .foo { padding: @kz-var-spacing-md; color: @kz-var-color-wisteria-800; }',
    expectedUnmigratableTokens: 0,
  },
  {
    language: "scss",
    testName: "migrates add-alpha, rgba, and rgb functions to use -rgb-params",
    input:
      ".foo { color: add-alpha($kz-color-wisteria-800, 80%); background-color: rgba($kz-color-cluny-600, 0.5); border-color: rgb($kz-color-yuzu-600) }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 80%); background-color: rgba($kz-var-color-cluny-600-rgb-params, 0.5); border-color: rgb($kz-var-color-yuzu-600-rgb-params) }',
    expectedUnmigratableTokens: 0,
  },
  {
    language: "less",
    testName: "migrates add-alpha, rgba, and rgb functions to use -rgb-params",
    input:
      ".foo { color: add-alpha(@kz-color-wisteria-800, 80%); background-color: rgba(@kz-color-cluny-600, 0.5); border-color: rgb(@kz-color-yuzu-600) }",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color-vars"; .foo { color: rgba(@kz-var-color-wisteria-800-rgb-params, 80%); background-color: rgba(@kz-var-color-cluny-600-rgb-params, 0.5); border-color: rgb(@kz-var-color-yuzu-600-rgb-params) }',
    expectedUnmigratableTokens: 0,
  },
  {
    language: "scss",
    testName: "migrates basic usages of tokens",
    input:
      ".foo { color: $kz-color-wisteria-800; background-color: $kz-color-cluny-600; border-color: $kz-color-yuzu-600 } @media (min-width: $kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/layout"; @import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: $kz-var-color-wisteria-800; background-color: $kz-var-color-cluny-600; border-color: $kz-var-color-yuzu-600 } @media (min-width: $kz-layout-breakpoints-large) {}',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "less",
    testName: "migrates basic usages of tokens",
    input:
      ".foo { color: @kz-color-wisteria-800; background-color: @kz-color-cluny-600; border-color: @kz-color-yuzu-600 } @media (min-width: @kz-layout-breakpoints-large) {}",
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/layout"; @import "~@kaizen/design-tokens/less/color-vars"; .foo { color: @kz-var-color-wisteria-800; background-color: @kz-var-color-cluny-600; border-color: @kz-var-color-yuzu-600 } @media (min-width: @kz-layout-breakpoints-large) {}',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "scss",
    testName: "doesn't migrate functions other than rgba, rgb, or add-alpha",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; @import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-color-wisteria-800, 0.4); background-color: darken($kz-color-cluny-700, 0.8); test: something-else($kz-color-yuzu-400); another: rgb($kz-color-cluny-200); foo: add-alpha($kz-color-wisteria-700, 90%); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; @import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 0.4); background-color: darken($kz-color-cluny-700, 0.8); test: something-else($kz-color-yuzu-400); another: rgb($kz-var-color-cluny-200-rgb-params); foo: rgba($kz-var-color-wisteria-700-rgb-params, 90%); }',
    expectedUnmigratableTokens: 2,
  },
  {
    language: "less",
    testName: "doesn't migrate functions other than rgba, rgb, or add-alpha",
    input:
      '@import "~@kaizen/design-tokens/less/color"; @import "~@kaizen/design-tokens/less/color-vars"; .foo { color: rgba(@kz-color-wisteria-800, 0.4); background-color: darken(@kz-color-cluny-700, 0.8); test: something-else(@kz-color-yuzu-400); another: rgb(@kz-color-cluny-200); foo: add-alpha(@kz-color-wisteria-700, 90%); }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; @import "~@kaizen/design-tokens/less/color-vars"; .foo { color: rgba(@kz-var-color-wisteria-800-rgb-params, 0.4); background-color: darken(@kz-color-cluny-700, 0.8); test: something-else(@kz-color-yuzu-400); another: rgb(@kz-var-color-cluny-200-rgb-params); foo: rgba(@kz-var-color-wisteria-700-rgb-params, 90%); }',
    expectedUnmigratableTokens: 2,
  },
  {
    language: "scss",
    testName: "doesn't migrate tokens within variables",
    input:
      '@import "~@kaizen/design-tokens/sass/color"; $foo: $kz-color-wisteria-800;',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color"; $foo: $kz-color-wisteria-800;',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "less",
    testName: "doesn't migrate tokens within variables",
    input:
      '@import "~@kaizen/design-tokens/less/color"; @foo: @kz-color-wisteria-800;',
    expectedOutput:
      '@import "~@kaizen/design-tokens/less/color"; @foo: @kz-color-wisteria-800;',
    expectedUnmigratableTokens: 1,
  },
  {
    language: "scss",
    testName:
      "migrates new kaizen css variable tokens when used incorrectly in rgba|rgb|add-alpha",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 80%) }',
    expectedUnmigratableTokens: 0,
  },
  {
    language: "scss",
    testName:
      "migrates new kaizen css variable tokens when used incorrectly in rgba|rgb|add-alpha",
    input:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800, 80%) }',
    expectedOutput:
      '@import "~@kaizen/design-tokens/sass/color-vars"; .foo { color: rgba($kz-var-color-wisteria-800-rgb-params, 80%) }',
    expectedUnmigratableTokens: 0,
  },
]

describe("Codemod", () => {
  testExamples.forEach(
    ({
      input,
      language,
      testName,
      expectedOutput,
      expectedUnmigratableTokens,
    }) =>
      test(`${language}: ${testName}`, () => {
        const result = codemodOnSource(input, {
          language,
          fix: true,
          removeUnusedImports: true,
          reporter: () => {
            // noop
            // If we wanted to test that everything is being reported correctly, we could do that here.
          },
        })
        expect(result.stylesheet.toString().replace(/\n/g, " ").trim()).toBe(
          expectedOutput.replace(/\n/g, " ").trim()
        )
        expect(result.unmigratables.length).toBe(expectedUnmigratableTokens)
      })
  )
})
