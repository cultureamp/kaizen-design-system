import React from "react"
import { ThemeManager, defaultTheme, Theme } from "../"

export const ThemeContext = React.createContext<Theme>(defaultTheme)

/**
 * Wrap your application in this provider using a ThemeManager, to synchronise it with a react context.
 * This allows child react elements to more easily use theme variables, using the {@link useTheme} hook.
 */
export const ThemeProvider = ({
  themeManager,
  ...props
}: {
  themeManager: ThemeManager
  children: React.ReactNode
}) => {
  const [theme, setTheme] = React.useState<Theme>(
    themeManager.getCurrentTheme()
  )
  React.useEffect(() => {
    let cancelled = false
    const listener = (newTheme: Theme) => {
      if (!cancelled) setTheme(newTheme)
    }
    themeManager.addThemeChangeListener(listener)
    return () => {
      cancelled = true
      themeManager.removeThemeChangeListener(listener)
    }
  }, [])

  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
