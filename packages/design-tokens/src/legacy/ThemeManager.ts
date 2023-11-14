import { makeCssVariableDefinitionsMap } from "../lib/makeCssVariableDefinitionsMap"
import { Theme as BaseTheme } from "./types"
/**
 * Use this class to set and apply themes, and to access or subscribe to the currently active one.
 * This class fulfills the idea of theming and runtime theme switching by relying on CSS variables,
 * and the ability to update them in JavaScript - a framework agnostic method.
 *
 * It works by converting a Theme interface to a flattened map of CSS variable keys and values, then calling `document.documentElement.style.setProperty(key, value)`.
 */
/**
 * @deprecated Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 *
 * {@link https://cultureamp.design/?path=/docs/guides-app-starter--docs Check App Starter guidance}
 */
export class ThemeManager<Theme extends BaseTheme = BaseTheme> {
  private themeChangeListeners = [] as Array<(theme: Theme) => void>
  private theme: Theme
  private rootElement: HTMLElement | null = null
  private rootElementId: string

  constructor(
    theme: Theme,
    rootElementId: string = "",
    /* This allows you to stop the  class from applying the theme automatically during construction. Defaults to true */
    apply: boolean = true
  ) {
    /*
      For some reason, storybook likes this way of defining class properties better.
      If you use `constructor( private theme: Theme, ...)` - theme becomes undefined within the class's methods.
    */
    this.theme = theme
    this.rootElementId = rootElementId
    if (apply) this.applyCurrentTheme()
  }

  public getRootElement = (): HTMLElement | null => this.rootElement
  public getRootElementId = (): string => this.rootElementId
  public getCurrentTheme = (): Theme => this.theme

  public setRootElement = (element: HTMLElement): void => {
    this.rootElement = element
  }
  public setRootElementId = (rootElementId: string): string =>
    (this.rootElementId = rootElementId)
  public setAndApplyTheme = (theme: Theme, force?: boolean): void => {
    if (!force) {
      if (this.theme === theme) return
    }
    this.theme = theme
    this.applyCurrentTheme()
    this.notifyThemeChangeListeners(theme)
  }

  public addThemeChangeListener = (listener: (theme: Theme) => void): void => {
    this.themeChangeListeners.push(listener)
  }
  public removeThemeChangeListener = (
    listener: (theme: Theme) => void
  ): void => {
    this.themeChangeListeners = this.themeChangeListeners.filter(
      l => l !== listener
    )
  }
  public applyCurrentTheme = (): void => {
    if (typeof window !== "undefined") {
      this.setRootElement(
        document.getElementById(this.rootElementId) ?? document.documentElement
      )
      const cssVariableDefinitions = makeCssVariableDefinitionsMap(this.theme)
      Object.entries(cssVariableDefinitions).forEach(([key, value]) => {
        this.rootElement?.style.setProperty(key, value)
      })
    }
  }

  private notifyThemeChangeListeners = (theme: Theme): void => {
    this.themeChangeListeners.forEach(listener => listener(theme))
  }
}

// I would like to expose this, but instantiating ThemeManager in some situations or runtimes (such as nodejs) cause exceptions.
// For now it is not exposed, but we might come back to it, as it makes sense to have a singleton ThemeManager in almost all cases
/* export const defaultThemeManager = new ThemeManager(defaultTheme) */
