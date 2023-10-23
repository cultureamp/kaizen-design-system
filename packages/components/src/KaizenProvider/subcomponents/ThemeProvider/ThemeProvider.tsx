import React, { createContext } from "react"
import { defaultTheme, Theme as BaseTheme } from "./themes"
import { makeCssVariableDefinitionsMap } from "./utils/makeCssVariableDefinitionsMap"

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
  const designTokensCSSVars = makeCssVariableDefinitionsMap(theme)

  return (
    <div id="kaizen--theme-root" style={designTokensCSSVars}>
      {props.children}
    </div>
  )
}
