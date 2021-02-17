import identifiers from "../tokens/variable-identifiers.json"
import { Theme as BaseTheme } from "./types"
import { makeCSSVariablesOfTheme } from "./utils"
/**
 * Use this class to set and apply themes, and to access or subscribe to the currently active one.
 * This class fulfills the idea of theming and runtime theme switching by relying on CSS variables,
 * and the ability to update them in JavaScript - a framework agnostic method.
 *
 * It works by converting a Theme interface to a flattened map of CSS variable keys and values, then calling `document.documentElement.style.setProperty(key, value)`.
 */
export class ThemeManager<Theme extends BaseTheme = BaseTheme> {
  private themeChangeListeners = [] as Array<(theme: Theme) => void>
  private theme: Theme
  private rootElement = document.documentElement
  constructor(
    theme: Theme,
    rootElement = document.documentElement,
    /* This allows you to stop the  class from applying the theme automatically during construction. Defaults to true */
    apply: boolean = true
  ) {
    /*
      For some reason, storybook likes this way of defining class properties better.
      If you use `constructor( private theme: Theme, ...)` - theme becomes undefined within the class's methods.
    */
    this.theme = theme
    this.rootElement = rootElement
    if (apply) this.applyCurrentTheme()
  }

  public getRootElement = () => this.rootElement
  public getCurrentTheme = () => this.theme
  public getCssVariableThemeKeyIdentifier = () =>
    identifiers["kz-var-id"].themeKey
  public getCssVariableThemeKeyValue = () =>
    this.rootElement.style.getPropertyValue(
      this.getCssVariableThemeKeyIdentifier()
    )
  public setRootElement = (element: HTMLElement) => {
    this.rootElement = element
  }
  public setAndApplyTheme = (theme: Theme, force?: boolean) => {
    if (!force) {
      if (
        this.theme === theme ||
        // This case will happen if you load a theme initially using CSS.
        theme.themeKey === this.getCssVariableThemeKeyValue()
      )
        return
    }
    this.theme = theme
    this.applyCurrentTheme()
    this.notifyThemeChangeListeners(theme)
  }

  public addThemeChangeListener = (listener: (theme: Theme) => void) => {
    this.themeChangeListeners.push(listener)
  }
  public removeThemeChangeListener = (listener: (theme: Theme) => void) => {
    this.themeChangeListeners = this.themeChangeListeners.filter(
      l => l !== listener
    )
  }
  public applyCurrentTheme = () => {
    const cssVariablesOfTheme = makeCSSVariablesOfTheme(this.theme)
    Object.entries(cssVariablesOfTheme).forEach(([key, value]) => {
      if (this.theme.themeKey === "zen") {
        this.rootElement.style.removeProperty(key)
      } else {
        this.rootElement.style.setProperty(key, value)
      }
    })
  }

  private notifyThemeChangeListeners = (theme: Theme) => {
    this.themeChangeListeners.forEach(listener => listener(theme))
  }
}

// I would like to expose this, but instantiating ThemeManager in some situations or runtimes (such as nodejs) cause exceptions.
// For now it is not exposed, but we might come back to it, as it makes sense to have a singleton ThemeManager in almost all cases
/* export const defaultThemeManager = new ThemeManager(defaultTheme) */
