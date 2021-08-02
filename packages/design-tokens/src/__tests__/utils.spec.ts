import { heartColorNamePattern, zenColorNamePattern } from "../patterns"
import {
  cssVariableThemeNamespace,
  flattenObjectToCSSVariables,
  makeCSSVariablesOfTheme,
  makeCSSVariableTheme,
  mapLeafsOfObject,
  objectPathToCssVarReference,
} from "../utils"

const themeForTesting = {
  border: {
    dashed: {
      // Contains "ash" as a substring - used for ensuring it's not treated the same as the "ash" color
      borderWidth: "2px",
      redHerringYuzu: "5px", // Same here for yuzu and red
    },
  },
  color: {
    gray: { 100: "#eee", 200: "#ccc" },
    wisteria: { 100: "#eee", 200: "#ccc" },
    cluny: { 100: "#eee", 200: "#ccc" },
    peach: { 100: "#eee", 200: "#ccc" },
    yuzu: { 100: "#eee", 200: "#ccc" },
    seedling: { 100: "#eee", 200: "#ccc" },
    coral: { 100: "#eee", 200: "#ccc" },
    purple: { 100: "#eee", 200: "#ccc" },
    blue: { 100: "#eee", 200: "#ccc" },
    red: { 100: "#eee", 200: "#ccc" },
    yellow: { 100: "#eee", 200: "#ccc" },
    orange: { 100: "#eee", 200: "#ccc" },
    green: { 100: "#eee", 200: "#ccc" },
    ash: "#eee",
    stone: "#ccc",
    iron: "#ccc",
    slate: "#ccc",
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
    const {
      [cssVariableThemeNamespace]: version2Theme,
      ...version3Theme
    } = makeCSSVariableTheme(themeForTesting)

    describe("version 3", () => {
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
              redHerringYuzu: "var(--border-dashed-red-herring-yuzu, 5px)",
              "redHerringYuzu-id": "--border-dashed-red-herring-yuzu",
            },
          },
        })
      })
      test("does not include zen color names", () => {
        expect(version3Theme.color).not.toHaveProperty("wisteria")
        expect(version3Theme.color).not.toHaveProperty("cluny")
        expect(version3Theme.color).not.toHaveProperty("coral")
        expect(version3Theme.color).not.toHaveProperty("seedling")
        expect(version3Theme.color).not.toHaveProperty("yuzu")
        expect(version3Theme.color).not.toHaveProperty("peach")
        expect(version3Theme.color).not.toHaveProperty("ash")
        expect(version3Theme.color).not.toHaveProperty("stone")
        expect(version3Theme.color).not.toHaveProperty("slate")
        expect(version3Theme.color).not.toHaveProperty("iron")
      })
    })
    describe("version 2", () => {
      const version2Augmentations = (colorName: string) => ({
        100: `var(--kz-var-color-${colorName}-100, #eee)`,
        "100-rgb-params": `var(--kz-var-color-${colorName}-100-rgb-params, 238, 238, 238)`,
        200: `var(--kz-var-color-${colorName}-200, #ccc)`,
        "200-rgb-params": `var(--kz-var-color-${colorName}-200-rgb-params, 204, 204, 204)`,
      })
      test("adds -rgb-params fields to leafs which are colors", () => {
        expect(version2Theme).toStrictEqual({
          border: {
            dashed: {
              borderWidth: "var(--kz-var-border-dashed-border-width, 2px)",
              redHerringYuzu:
                "var(--kz-var-border-dashed-red-herring-yuzu, 5px)",
            },
          },
          color: {
            wisteria: version2Augmentations("wisteria"),
            cluny: version2Augmentations("cluny"),
            yuzu: version2Augmentations("yuzu"),
            peach: version2Augmentations("peach"),
            coral: version2Augmentations("coral"),
            seedling: version2Augmentations("seedling"),
            ash: "var(--kz-var-color-ash, #eee)",
            "ash-rgb-params":
              "var(--kz-var-color-ash-rgb-params, 238, 238, 238)",
            stone: "var(--kz-var-color-stone, #ccc)",
            "stone-rgb-params":
              "var(--kz-var-color-stone-rgb-params, 204, 204, 204)",
            slate: "var(--kz-var-color-slate, #ccc)",
            "slate-rgb-params":
              "var(--kz-var-color-slate-rgb-params, 204, 204, 204)",
            iron: "var(--kz-var-color-iron, #ccc)",
            "iron-rgb-params":
              "var(--kz-var-color-iron-rgb-params, 204, 204, 204)",
          },
        })
      })
      test("does not include heart color names", () => {
        expect(version2Theme.color).not.toHaveProperty("purple")
        expect(version2Theme.color).not.toHaveProperty("blue")
        expect(version2Theme.color).not.toHaveProperty("red")
        expect(version2Theme.color).not.toHaveProperty("green")
        expect(version2Theme.color).not.toHaveProperty("yellow")
        expect(version2Theme.color).not.toHaveProperty("orange")
        expect(version2Theme.color).not.toHaveProperty("gray")
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

    describe("version 3 variables", () => {
      const version3ColorVariableKeys = Object.keys(result).filter(key =>
        key.startsWith("--color-")
      )
      test("produces heart color vars", () => {
        version3ColorVariableKeys.forEach(key => {
          if (key.startsWith("--color"))
            expect(key).toMatch(heartColorNamePattern)
        })
      })

      test("doesn't produce zen color vars", () => {
        version3ColorVariableKeys.forEach(key => {
          expect(key).not.toMatch(zenColorNamePattern)
        })
      })
    })
    describe("version 2 variables", () => {
      const keys = Object.keys(result).filter(key =>
        key.startsWith("--kz-var-color")
      )
      test("produces zen color vars", () => {
        keys.forEach(key => {
          expect(key).toMatch(zenColorNamePattern)
        })
      })

      test("doesn't produce heart color vars", () => {
        keys.forEach(key => {
          expect(key).not.toMatch(heartColorNamePattern)
        })
      })
    })
  })
})
