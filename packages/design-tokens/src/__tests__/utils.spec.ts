import { heartColorNamePattern, zenColorNamePattern } from "../patterns"
import {
  flattenObjectToCSSVariables,
  makeCSSVariablesOfTheme,
  makeCSSVariableTheme,
  mapLeafsOfObject,
  objectPathToCssVarReference,
} from "../utils"

const themeForTesting = {
  border: {
    // Contains "ash" as a substring - used for ensuring it's not treated the same as the "ash" color
    dashed: {
      borderWidth: "2px",
      red: "5px", // Same here for  red
    },
  },
  color: {
    gray: { 100: "#eee", 200: "#ccc" },
    purple: { 100: "#eee", 200: "#ccc" },
    blue: { 100: "#eee", 200: "#ccc" },
    red: { 100: "#eee", 200: "#ccc" },
    yellow: { 100: "#eee", 200: "#ccc" },
    orange: { 100: "#eee", 200: "#ccc" },
    green: { 100: "#eee", 200: "#ccc" },
  },
} as const

describe("kaizen design tokens utilities", () => {
  describe("mapLeafsOfObject", () => {
    test.each([
      [
        {
          test: {
            one: {
              two: {
                three: 123,
              },
            },
          },
        },
        objectPathToCssVarReference,
        {
          test: {
            one: {
              two: {
                three: "var(--test-one-two-three, 123)",
              },
            },
          },
        },
      ],
      [
        {
          rootValue: "Yep",
          test: {
            imACamel: "im-a-camel",
            one: {
              two: {
                three: () => "i'm a function",
              },
            },
          },
        },
        objectPathToCssVarReference,
        {
          rootValue: "var(--root-value, Yep)",
          test: {
            imACamel: "var(--test-im-a-camel, im-a-camel)",
            one: {
              two: {
                three: `var(--test-one-two-three, ${() => "i'm a function"})`,
              },
            },
          },
        },
      ],
      [
        {
          rootValue: "Yep",
          test: {
            imACamel: "im-a-camel",
            one: {
              two: {
                three: () => "this shouldn't show",
              },
            },
          },
        },
        (path: string[], value: unknown) =>
          `${path[path.length - 1]}: ${
            typeof value === "string" ? value : "not-a-string"
          }`,
        {
          rootValue: "rootValue: Yep",
          test: {
            one: {
              two: {
                three: "three: not-a-string",
              },
            },
          },
        },
      ],
    ])("mapLeafsOfObject test case %#", (input, mapper, output) => {
      expect(mapLeafsOfObject(input, mapper)).toMatchObject(output)
    })
  })

  describe("flattenObjectToCSSVariables", () => {
    test.each([
      [
        { test: { one: { two: "#fff", another: { deep: "Greycliff" } } } },
        {
          "--test-one-two": "#fff",
          "--test-one-another-deep": "Greycliff",
        },
      ],
    ])("flattenObjectToCSSVariables test case %#", (input, output) => {
      const actual = flattenObjectToCSSVariables(input)
      expect(actual).toMatchObject(output)
    })
  })

  describe("makeCSSVariableTheme", () => {
    const version3Theme = makeCSSVariableTheme(themeForTesting)

    const version3Augmentations = (colorName: string) => ({
      100: `var(--color-${colorName}-100, #eee)`,
      "100-id": `--color-${colorName}-100`,
      "100-rgb": `var(--color-${colorName}-100-rgb, 238, 238, 238)`,
      "100-rgb-id": `--color-${colorName}-100-rgb`,
      200: `var(--color-${colorName}-200, #ccc)`,
      "200-id": `--color-${colorName}-200`,
      "200-rgb": `var(--color-${colorName}-200-rgb, 204, 204, 204)`,
      "200-rgb-id": `--color-${colorName}-200-rgb`,
    })
    test("adds -id, -rgb, and -rgb-id fields to every leaf (rgbs for colors only)", () => {
      expect(version3Theme).toStrictEqual({
        color: {
          gray: version3Augmentations("gray"),
          purple: version3Augmentations("purple"),
          blue: version3Augmentations("blue"),
          yellow: version3Augmentations("yellow"),
          red: version3Augmentations("red"),
          green: version3Augmentations("green"),
          orange: version3Augmentations("orange"),
        },
        border: {
          dashed: {
            borderWidth: "var(--border-dashed-border-width, 2px)",
            "borderWidth-id": "--border-dashed-border-width",
            red: "var(--border-dashed-red, 5px)",
            "red-id": "--border-dashed-red",
          },
        },
      })
    })
  })

  describe("makeCSSVariablesOfTheme", () => {
    const result = makeCSSVariablesOfTheme(themeForTesting)

    // We don't want any CSS variable identifiers within CSS variables - we don't need them
    // E.g. we want to avoid: `--kz-var-color-wisteria-100-id: --kz-var-color-wisteria-100`
    test("doesn't contain any CSS variable identifiers in values", () => {
      Object.values(result).forEach(value => {
        expect(value).not.toMatch(/^--/)
      })
    })

    const version3ColorVariableKeys = Object.keys(result).filter(key =>
      key.startsWith("--color-")
    )
    test("produces heart color vars", () => {
      version3ColorVariableKeys.forEach(key => {
        if (key.startsWith("--color"))
          expect(key).toMatch(heartColorNamePattern)
      })
    })
  })
})
