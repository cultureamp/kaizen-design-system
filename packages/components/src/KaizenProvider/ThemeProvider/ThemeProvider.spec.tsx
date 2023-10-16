import React from "react"
import { render } from "@testing-library/react"
import { makeCssVariableDefinitionsMap } from "@kaizen/design-tokens"
import { ThemeProvider } from "./ThemeProvider"
import { Theme, heartTheme } from "./themes"

const assertThemeIsActive = (
  theme: Theme,
  rootElement: HTMLElement | null
): void => {
  if (rootElement) {
    const variables = makeCssVariableDefinitionsMap(theme)
    Object.entries(variables).forEach(([key, value]) => {
      expect(rootElement?.style.getPropertyValue(key)).toBe(value)
    })
  }
}

describe("<ThemeProvider />", () => {
  // TODO: JSDom/CSSOM doesn't support CSS variables, as it seems. Figure out a way to test them. Maybe jest or jsdom just needs an upgrade.
  it("activates initial theme on construction", () => {
    render(<ThemeProvider>hello</ThemeProvider>)

    const rootElement = document.documentElement
    assertThemeIsActive(heartTheme, rootElement)
    expect(rootElement?.style.getPropertyValue("--color-purple-800")).toBe(
      "#2f2438"
    )
  })

  it("applies custom theme", () => {
    const customTheme = {
      ...heartTheme,
      color: {
        ...heartTheme.color,
        pancake: "#000",
      },
    }

    render(<ThemeProvider theme={customTheme}>hello</ThemeProvider>)

    const rootElement = document.documentElement
    assertThemeIsActive(customTheme, rootElement)
    expect(rootElement?.style.getPropertyValue("--color-pancake")).toBe("#000")
  })
})
