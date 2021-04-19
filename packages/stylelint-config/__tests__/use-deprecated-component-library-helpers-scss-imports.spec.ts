import stylelint from "stylelint"

describe("use-deprecated-component=library-helper-scss-imports plugin", () => {
  test("converts a component-library color.scss import to a deprecated-component-library-helpers one", () => {
    const config = {
      plugins: [
        "./packages/stylelint-config/plugins/use-deprecated-component-library-helpers-scss-imports",
      ],
      rules: {
        "kaizen/use-deprecated-component-library-helpers-scss-imports": [true],
      },
    }

    return stylelint
      .lint({
        code: `
@import "~@kaizen/design-tokens/scss/typography"; // GOOD
@import "~@kaizen/component-library/styles/color"; // BAD
`,
        config,
        syntax: "scss",
        lang: "scss",
      })
      .then(data => {
        const result = data.results[0]
        expect(result.warnings.length).toBe(1)
        expect(result.warnings[0].line).toBe(3)
        expect(result.warnings[0].text).toContain(
          "@kaizen/component-library/styles/color.scss has been deprecated"
        )
      })
  })
})
