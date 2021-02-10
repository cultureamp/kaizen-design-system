import React, { useState, useEffect } from "react"
import {
  heartTheme,
  zenTheme,
  CSSVariableThemeManager,
  // eslint-disable-next-line import/no-extraneous-dependencies
} from "@kaizen/design-tokens"

const themeOfKey = (themeKey: string) => {
  switch (themeKey) {
    case "heart":
      return heartTheme
    default:
      return zenTheme
  }
}
export const App = () => {
  const [theme, setTheme] = useState(zenTheme)
  const cssVariableThemeManager = React.useMemo(
    () => new CSSVariableThemeManager(theme),
    []
  )
  useEffect(() => {
    let storyRoot
    if (
      document &&
      document.getElementById("storybook-preview-iframe") &&
      document.getElementById("storybook-preview-iframe").contentWindow
        .document &&
      document
        .getElementById("storybook-preview-iframe")
        .contentWindow.document.getElementById("root")
    ) {
      storyRoot = document
        .getElementById("storybook-preview-iframe")
        .contentWindow.document.getElementById("root")
    } else {
      return
    }
    cssVariableThemeManager.setRootElement(storyRoot)
    cssVariableThemeManager.setTheme(theme)
  })

  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor="theme-switcher">
        <span style={{ paddingRight: "0.5rem" }}>Select Theme:</span>
        <select
          id="theme-switcher"
          name="theme"
          value={theme.themeKey}
          onChange={evt => setTheme(themeOfKey(evt.target.value))}
        >
          <option value="zen">Zen</option>
          <option value="heart">Heart</option>
        </select>
      </label>
    </div>
  )
}
