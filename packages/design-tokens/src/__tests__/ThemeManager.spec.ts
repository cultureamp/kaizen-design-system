import { ThemeManager } from "../ThemeManager"
import { zenTheme } from "../themes"
import { Theme } from "../types"
import { makeCSSVariablesOfTheme } from "../utils"

const assertThemeIsActive = (theme: Theme, rootElement: HTMLElement) => {
  const variables = makeCSSVariablesOfTheme(theme)
  Object.entries(variables).forEach(([key, value]) => {
    expect(rootElement.style.getPropertyValue(key)).toBe(value)
  })
}

describe(ThemeManager.name, () => {
  // TODO: JSDom/CSSOM doesn't support CSS variables, as it seems. Figure out a way to test them. Maybe jest or jsdom just needs an upgrade.
  test.skip("activates initial theme on construction", () => {
    const rootElement = document.documentElement
    new ThemeManager(zenTheme, rootElement)
    assertThemeIsActive(zenTheme, rootElement)
  })
})
