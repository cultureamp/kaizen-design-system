import { defaultTheme } from "./themes"
import { Theme as BaseTheme } from "./types"
import { flattenObjectToCSSVariables } from "./utils"

/**
 * Use this class to set and apply themes, and to access or subscribe to the currently active one.
 * This class fulfills the idea of theming and runtime theme switching by relying on CSS variables,
 * and the ability to update them in JavaScript - a framework agnostic method.
 *
 * It works by converting a Theme interface to a flattened map of CSS variable keys and values, then calling `document.documentElement.style.setProperty(key, value)`.
 */

export class ThemeManager<Theme extends BaseTheme = BaseTheme> {
  private themeChangeListeners = [] as Array<(theme: Theme) => void>

  constructor(
    private theme: Theme,
    private rootElement = document.documentElement
  ) {
    this.applyCurrentTheme()
  }

  public getRootElement = () => this.rootElement
  public getCurrentTheme = () => this.theme
  public getCssVariableThemeKey = () => {
    const justTheKey = flattenObjectToCSSVariables({
      kz: { themeKey: this.theme.themeKey },
    })
    return this.rootElement.style.getPropertyValue(justTheKey["--kz-theme-key"])
  }
  public setRootElement = (element: HTMLElement) => {
    this.rootElement = element
  }
  public setAndApplyTheme = (theme: Theme, force?: boolean) => {
    if (!force) {
      if (
        this.theme === theme ||
        // This case will happen if you load a theme initially using CSS.
        theme.themeKey === this.getCssVariableThemeKey()
      )
        return
    }
    this.theme = theme
    this.applyCurrentTheme()
    this.notifyThemeChangeListeners(theme)
  }

  public onThemeChanged = (listener: (theme: Theme) => void) => {
    this.themeChangeListeners.push(listener)
  }
  public applyCurrentTheme = () => {
    const cssVariablesOfTheme = flattenObjectToCSSVariables({
      kz: this.theme,
    })
    Object.entries(cssVariablesOfTheme).forEach(([key, value]) => {
      this.rootElement.style.setProperty(key, value)
    })
  }

  private notifyThemeChangeListeners = (theme: Theme) => {
    this.themeChangeListeners.forEach(listener => listener(theme))
  }
}

// I would like to expose this, but instantiating ThemeManager in some situations or runtimes (such as nodejs) cause exceptions.
// For now it is not exposed, but we might come back to it, as it makes sense to have a singleton ThemeManager in almost all cases
/* export const defaultThemeManager = new ThemeManager(defaultTheme) */
