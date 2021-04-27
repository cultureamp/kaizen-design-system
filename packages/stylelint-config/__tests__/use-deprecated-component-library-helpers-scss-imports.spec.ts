import stylelint from "stylelint"

const stylelintConfig = {
  plugins: [
    "./packages/stylelint-config/plugins/use-deprecated-component-library-helpers-scss-imports",
  ],
  rules: {
    "kaizen/use-deprecated-component-library-helpers-scss-imports": [true],
  },
}

const lintNotInFixMode = (code: string) =>
  stylelint.lint({
    code,
    config: stylelintConfig,
    syntax: "scss",
    lang: "scss",
    fix: false,
  })

const lintInFixMode = (code: string) =>
  stylelint.lint({
    code,
    config: stylelintConfig,
    syntax: "scss",
    lang: "scss",
    fix: true,
  })

const getOutputCss = output => {
  const result = output.results[0]._postcssResult // eslint-disable-line no-underscore-dangle

  const css = result.root.toString(result.opts.syntax)

  return css
}

describe("use-deprecated-component=library-helper-scss-imports plugin", () => {
  describe("when not in fix mode", () => {
    test("throws a component-library/styles/color.scss deprecation warning", () =>
      lintNotInFixMode(`
@import "~@kaizen/design-tokens/scss/color"; // GOOD
@import "~@kaizen/component-library/styles/color"; // BAD
`).then(data => {
        const result = data.results[0]
        expect(result.warnings.length).toBe(1)
        expect(result.warnings[0].line).toBe(3)
        expect(result.warnings[0].text).toContain(
          "@kaizen/component-library/styles/color.scss has been deprecated"
        )
      }))

    test("throws a component-library/styles/type.scss deprecation warning", () =>
      lintNotInFixMode(`
@import "~@kaizen/component-library/styles/type"; // BAD
@import "~@kaizen/design-tokens/scss/type"; // GOOD
`).then(data => {
        const result = data.results[0]
        expect(result.warnings.length).toBe(1)
        expect(result.warnings[0].line).toBe(2)
        expect(result.warnings[0].text).toContain(
          "@kaizen/component-library/styles/type.scss has been deprecated"
        )
      }))

    test("throws a component-library/styles/layout.scss deprecation warning", () =>
      lintNotInFixMode(`
@import "~@kaizen/design-tokens/scss/layout"; // GOOD
@import "~@kaizen/component-library/styles/layout"; // BAD
`).then(data => {
        const result = data.results[0]
        expect(result.warnings.length).toBe(1)
        expect(result.warnings[0].line).toBe(3)
        expect(result.warnings[0].text).toContain(
          "@kaizen/component-library/styles/layout.scss has been deprecated"
        )
      }))
  })

  describe("when in fix mode", () => {
    test("replaces a component-library/styles/color.scss import with a deprecate-component-library-helpers one", () =>
      lintInFixMode(`
@import "~@kaizen/some-other-import";
@import "~@kaizen/component-library/styles/color";
@import "~@kaizen/some-other-import-2";
`).then(data => {
        getOutputCss(data)
        expect(getOutputCss(data)).toBe(`
@import "~@kaizen/some-other-import";
@import "~@kaizen/deprecated-component-library-helpers/styles/color";
@import "~@kaizen/some-other-import-2";
`)
      }))
    test("replaces a component-library/styles/type.scss import with a deprecate-component-library-helpers one", () =>
      lintInFixMode('@import "~@kaizen/component-library/styles/type";').then(
        data => {
          getOutputCss(data)
          expect(getOutputCss(data)).toBe(
            '@import "~@kaizen/deprecated-component-library-helpers/styles/type";'
          )
        }
      ))
    test("replaces a component-library/styles/layout.scss import with a deprecate-component-library-helpers one", () =>
      lintInFixMode('@import "~@kaizen/component-library/styles/layout";').then(
        data => {
          getOutputCss(data)
          expect(getOutputCss(data)).toBe(
            '@import "~@kaizen/deprecated-component-library-helpers/styles/layout";'
          )
        }
      ))
    test("does not leave duplicates, and keeps the last import if there are duplicates", () =>
      // if there is both a component-library and deprecated-component-library-helpers
      // imports, then just replacing one would leave two of the same import (which would not
      // pass eslint). One of them needs to be removed, and it's safer to keep the last one
      // to try to preserve any override behaviour.
      lintInFixMode(`
@import "~@kaizen/design-tokens/sass/spacing-vars";
@import "~@kaizen/component-library/styles/color";
@import "~@kaizen/design-tokens/sass/color-vars";
@import "~@kaizen/deprecated-component-library-helpers/styles/color";
`).then(data => {
        getOutputCss(data)
        expect(getOutputCss(data)).toBe(`
@import "~@kaizen/design-tokens/sass/spacing-vars";
@import "~@kaizen/design-tokens/sass/color-vars";
@import "~@kaizen/deprecated-component-library-helpers/styles/color";
`)
      }))
  })
})
