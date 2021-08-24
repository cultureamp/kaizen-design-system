import React from "react"
import { heartTheme, ThemeManager, ThemeProvider } from "@kaizen/design-tokens"

/**
 * Use this hook to enable the Heart theme, and for it to work with server side rendering
 */
export function useSSRHeartTheme(
  wrappedElement: React.ReactElement
): React.ReactElement {
  const [themeManager, setThemeManager] = React.useState<ThemeManager>()

  // This effect will only occur when rendering in the browser, and not on the server.
  // We want this instantiation deferred because ThemeManager accesses the document, which isn't allowed during SSR.
  React.useEffect(() => {
    setThemeManager(new ThemeManager(heartTheme))
  }, [])
  return themeManager ? (
    <ThemeProvider themeManager={themeManager}>{wrappedElement}</ThemeProvider>
  ) : null
}
