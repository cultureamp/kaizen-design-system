import { makeCssVariableDefinitionsMap } from "../makeCssVariableDefinitionsMap"
import { heartColorNamePattern } from "../patterns"
import { themeForTesting } from "./themeForTesting"

describe("makeCssVariableDefinitionsMap()", () => {
  const cssVariableDefinitions = makeCssVariableDefinitionsMap(themeForTesting)

  // We don't want any CSS variable identifiers within CSS variables - we don't need them
  // E.g. we want to avoid: `--kz-var-color-wisteria-100-id: --kz-var-color-wisteria-100`
  it("doesn't contain any CSS variable identifiers in values", () => {
    Object.values(cssVariableDefinitions).forEach(value => {
      expect(value).not.toMatch(/^--/)
    })
  })

  const cssVariableKeysThatAreColors = Object.keys(
    cssVariableDefinitions
  ).filter(key => key.startsWith("--color-"))
  it("produces heart color vars", () => {
    cssVariableKeysThatAreColors.forEach(key => {
      // eslint-disable-next-line jest/no-conditional-expect
      if (key.startsWith("--color")) expect(key).toMatch(heartColorNamePattern)
    })
  })

  it("produces the correct output with the test theme", () => {
    const actual = makeCssVariableDefinitionsMap(themeForTesting)
    expect(actual).toStrictEqual({
      "--border-dashed-border-width": "2px",
      "--border-dashed-red": "red",
      "--border-dashed-red-rgb": "255, 0, 0",
      "--color-gray-100": "#eee",
      "--color-gray-100-rgb": "238, 238, 238",
      "--color-gray-200": "#ccc",
      "--color-gray-200-rgb": "204, 204, 204",
      "--color-purple-100": "#eee",
      "--color-purple-100-rgb": "238, 238, 238",
      "--color-purple-200": "#ccc",
      "--color-purple-200-rgb": "204, 204, 204",
      "--color-blue-100": "#eee",
      "--color-blue-100-rgb": "238, 238, 238",
      "--color-blue-200": "#ccc",
      "--color-blue-200-rgb": "204, 204, 204",
      "--color-red-100": "#eee",
      "--color-red-100-rgb": "238, 238, 238",
      "--color-red-200": "#ccc",
      "--color-red-200-rgb": "204, 204, 204",
      "--color-orange-100": "#eee",
      "--color-orange-100-rgb": "238, 238, 238",
      "--color-orange-200": "#ccc",
      "--color-orange-200-rgb": "204, 204, 204",
      "--color-green-100": "#eee",
      "--color-green-100-rgb": "238, 238, 238",
      "--color-green-200": "#ccc",
      "--color-green-200-rgb": "204, 204, 204",
      "--color-yellow-100": "#eee",
      "--color-yellow-100-rgb": "238, 238, 238",
      "--color-yellow-200": "#ccc",
      "--color-yellow-200-rgb": "204, 204, 204",
    })
  })
})
