import React, { createContext, useContext } from "react"
import { makeCssVariableDefinitionsMap } from "~components/KaizenProvider/subcomponents/ThemeProvider/utils/makeCssVariableDefinitionsMap"
import { defaultTheme, Theme as BaseTheme } from "./themes"

// We set the generic default value to `any` as ThemeContext
// is instantiated as a constant which does not accept generics.
type ThemeContextValue<Theme extends BaseTheme = any> = Theme

export const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Wrap your application in this provider using a ThemeManager, to synchronise it with a react context.
 * This allows child react elements to more easily use theme variables, using the {@link useTheme} hook.
 */
export const ThemeProvider = <Theme extends BaseTheme = BaseTheme>({
  theme: userTheme,
  ...props
}: {
  theme?: Theme
  children: React.ReactNode
}): JSX.Element => {
  const theme = userTheme ?? defaultTheme
  const themeVariables = makeCssVariableDefinitionsMap(theme)

  return (
    <ThemeContext.Provider value={theme}>
      <div id="kaizen--theme-root" style={themeVariables}>
        {props.children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = <
  Theme extends BaseTheme = BaseTheme,
>(): ThemeContextValue<Theme> => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error("useTheme must be used within the KaizenProvider")
  }

  return context
}
