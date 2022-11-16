import { ThemeManager } from "../ThemeManager"
import { makeCssVariableDefinitionsMap } from "../lib/makeCssVariableDefinitionsMap"
import { heartTheme } from "../themes"
import { Theme } from "../types"

const assertThemeIsActive = (theme: Theme, rootElement: HTMLElement | null) => {
  const variables = makeCssVariableDefinitionsMap(theme)
  Object.entries(variables).forEach(([key, value]) => {
    expect(rootElement?.style.getPropertyValue(key)).toBe(value)
  })
}

describe(ThemeManager.name, () => {
  // TODO: JSDom/CSSOM doesn't support CSS variables, as it seems. Figure out a way to test them. Maybe jest or jsdom just needs an upgrade.
  test.skip("activates initial theme on construction", () => {
    const themeManager = new ThemeManager(heartTheme)
    assertThemeIsActive(heartTheme, themeManager.getRootElement())
  })
})
