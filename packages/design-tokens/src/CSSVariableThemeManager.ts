import { Theme } from "./types"
import { flattenObjectToCSSVariables } from "./utils"
export class CSSVariableThemeManager {
  /*   private installedCssVariables: Record<string, string> = {} */

  constructor(
    private theme: Theme,
    private rootElement = document.documentElement
  ) {
    this.setTheme(theme)
  }

  get currentTheme() {
    return this.theme
  }
  public setTheme(theme: Theme) {
    if (this.theme === theme) return
    const cssVariablesOfTheme = flattenObjectToCSSVariables({
      kz: theme,
    })
    Object.entries(cssVariablesOfTheme).forEach(([key, value]) => {
      this.rootElement.style.setProperty(key, value)
    })
    this.theme = theme
  }
  /*
  private uninstallCurrentVariables() {
    Object.keys(this.installedCssVariables).forEach(key =>
      this.rootElement.style.removeProperty(key)
    )
    this.installedCssVariables = {}
  } */
}
