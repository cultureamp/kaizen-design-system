import { makeCSSVariableTheme } from "../makeCssVariableTheme"
import { themeForTesting } from "./themeForTesting"

describe("makeCSSVariableTheme()", () => {
  const cssVariableTheme = makeCSSVariableTheme(themeForTesting)

  const extraEntriesForColor = (colorName: string): Record<string, string> => ({
    100: `var(--color-${colorName}-100, #eee)`,
    "100-id": `--color-${colorName}-100`,
    "100-rgb": `var(--color-${colorName}-100-rgb, 238, 238, 238)`,
    "100-rgb-id": `--color-${colorName}-100-rgb`,
    200: `var(--color-${colorName}-200, #ccc)`,
    "200-id": `--color-${colorName}-200`,
    "200-rgb": `var(--color-${colorName}-200-rgb, 204, 204, 204)`,
    "200-rgb-id": `--color-${colorName}-200-rgb`,
  })

  it("adds -id, -rgb, and -rgb-id fields to every leaf (rgbs for colors only)", () => {
    expect(cssVariableTheme).toStrictEqual({
      color: {
        gray: extraEntriesForColor("gray"),
        purple: extraEntriesForColor("purple"),
        blue: extraEntriesForColor("blue"),
        yellow: extraEntriesForColor("yellow"),
        red: extraEntriesForColor("red"),
        green: extraEntriesForColor("green"),
        orange: extraEntriesForColor("orange"),
      },
      border: {
        dashed: {
          borderWidth: "var(--border-dashed-border-width, 2px)",
          "borderWidth-id": "--border-dashed-border-width",
          red: "var(--border-dashed-red, red)",
          "red-rgb": "var(--border-dashed-red-rgb, 255, 0, 0)",
          "red-rgb-id": "--border-dashed-red-rgb",
          "red-id": "--border-dashed-red",
        },
      },
    })
  })
})
