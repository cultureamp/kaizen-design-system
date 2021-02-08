import { CSSVariableThemeManager } from "../CSSVariableThemeManager"
import { zenTheme } from "../themes"
import { Theme } from "../types"
import { flattenObjectToCSSVariables } from "../utils"

const assertThemeIsActive = (theme: Theme, rootElement: HTMLElement) => {
  const variables = flattenObjectToCSSVariables({ kz: theme })
  Object.entries(variables).forEach(([key, value]) => {
    expect(rootElement.style.getPropertyValue(key)).toBe(value)
  })
}

describe(CSSVariableThemeManager.name, () => {
  // TODO: JSDom/CSSOM doesn't support CSS variables, as it seems. Figure out a way to test them. Maybe jest or jsdom just needs an upgrade.
  test.skip("activates initial theme on construction", () => {
    const rootElement = document.documentElement
    new CSSVariableThemeManager(zenTheme, rootElement)
    assertThemeIsActive(zenTheme, rootElement)
  })
})
