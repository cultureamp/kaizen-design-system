import React from "react"
import { render, waitFor } from "@testing-library/react"
import {
  makeCssVariableDefinitionsMap,
  heartTheme,
  Theme,
} from "@kaizen/design-tokens"
import { ThemeProvider } from "./ThemeProvider"

const assertThemeIsActive = (
  theme: Theme,
  rootElement: HTMLElement | null
): void => {
  const variables = makeCssVariableDefinitionsMap(theme)
  Object.entries(variables).forEach(([key, value]) => {
    console.info(key, rootElement?.style.getPropertyValue(key))
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
