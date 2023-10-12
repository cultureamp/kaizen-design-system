import React from "react"
import { render, waitFor } from "@testing-library/react"
import { makeCssVariableDefinitionsMap } from "@kaizen/design-tokens"
import { ThemeProvider } from "./ThemeProvider"
import { Theme, heartTheme } from "./themes"

const assertThemeIsActive = (theme: Theme, rootElement: HTMLElement): void => {
  const variables = makeCssVariableDefinitionsMap(theme)
  Object.entries(variables).forEach(([key, value]) => {
    expect(rootElement?.style.getPropertyValue(key)).toBe(value)
  })
}

describe("<ThemeProvider />", () => {
  // TODO: JSDom/CSSOM doesn't support CSS variables, as it seems. Figure out a way to test them. Maybe jest or jsdom just needs an upgrade.
  // eslint-disable-next-line jest/expect-expect
  it("activates initial theme on construction", async () => {
    render(<ThemeProvider>hello</ThemeProvider>)

    await waitFor(() => {
      assertThemeIsActive(heartTheme, document.documentElement)
    })
  }, 10000)
})
