import { useEffect, useState } from "react"
import {
  makeCssVariableDefinitionsMap,
  Theme as BaseTheme,
} from "@kaizen/design-tokens"

type UseThemeManagerReturn<Theme extends BaseTheme = BaseTheme> = {
  theme: Theme
}

export const useThemeManager = <Theme extends BaseTheme = BaseTheme>(
  theme: Theme,
  rootElementId?: string,
  apply: boolean = true
): UseThemeManagerReturn<Theme> => {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null)

  const applyTheme = (): void => {
    if (rootElement) {
      const cssVariableDefinitions = makeCssVariableDefinitionsMap(theme)
      Object.entries(cssVariableDefinitions).forEach(([key, value]) => {
        rootElement.style.setProperty(key, value)
      })
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(
        rootElementId
          ? document.getElementById(rootElementId)
          : document.documentElement
      )
    }
  }, [])

  useEffect(() => {
    if (apply && rootElement) {
      applyTheme()
    }
  }, [rootElement])

  return {
    theme,
  }
}
