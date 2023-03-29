import {
  makeCssVariableDefinitionsMap,
  heartTheme,
  Theme,
} from "@kaizen/design-tokens"
import { ThemeManager } from "./ThemeManager"

const assertThemeIsActive = (
  theme: Theme,
  rootElement: HTMLElement | null
): void => {
  const variables = makeCssVariableDefinitionsMap(theme)
  Object.entries(variables).forEach(([key, value]) => {
    expect(rootElement?.style.getPropertyValue(key)).toBe(value)
  })
}

describe("ThemeManager", () => {
  // TODO: JSDom/CSSOM doesn't support CSS variables, as it seems. Figure out a way to test them. Maybe jest or jsdom just needs an upgrade.
  // eslint-disable-next-line jest/expect-expect
  it("activates initial theme on construction", () => {
    const themeManager = new ThemeManager(heartTheme)

    assertThemeIsActive(heartTheme, themeManager.getRootElement())
  })
})
