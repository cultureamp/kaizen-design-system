import { flattenObjectToCSSVariables } from "./utils"
/**
 * Use this class to manage theme variables, and which theme is active.
 * This class fulfills the idea of theming and runtime theme switching by relying on CSS variables,
 * and the ability to update them in JavaScript - a framework agnostic method.
 *
 * It works by converting a Theme interface to a flattened map of CSS variable keys and values, then calling `document.documentElement.style.setProperty(key, value)`.
 */
export class CSSVariableThemeManager<
  Theme extends import("./types").Theme = import("./types").Theme
> {
  constructor(
    private theme: Theme,
    private rootElement = document.documentElement
  ) {
    this.setTheme(theme)
  }
  public getRootElement = () => this.rootElement
  public getCurrentTheme = () => this.theme
  public getCssVariableThemeKey = () => {
    const justTheKey = flattenObjectToCSSVariables({
      kz: { themeKey: this.theme.themeKey },
    })
    return this.rootElement.style.getPropertyValue(justTheKey["--kz-theme-key"])
  }
  public setRootElement = (element: HTMLElement, force?: boolean) => {
    if (this.rootElement !== element || force) {
      this.rootElement = element
      this.setTheme(this.theme)
    }
  }
  public setTheme = (theme: Theme, force?: boolean) => {
    if (!force) {
      if (this.theme === theme) return

      // This case will happen if you load a theme initially using CSS.
      if (theme.themeKey !== this.getCssVariableThemeKey()) {
        this.theme = theme
        return
      }
    }
    const cssVariablesOfTheme = flattenObjectToCSSVariables({
      kz: theme,
    })
    Object.entries(cssVariablesOfTheme).forEach(([key, value]) => {
      this.rootElement.style.setProperty(key, value)
    })
  }
}
