// eslint-disable-next-line import/no-extraneous-dependencies
import { defaultTheme, ThemeKey } from "@kaizen/design-tokens"
import { addons } from "@storybook/addons"
import { useAddonState } from "@storybook/api"
import React, { useEffect } from "react"
export const ADDON_ID = "theme-switcher"
export const App = () => {
  const [theme, setTheme] = useAddonState<ThemeKey>(
    ADDON_ID,
    defaultTheme.themeKey
  )

  useEffect(() => {
    addons.getChannel().emit("theme-changed", theme)
  }, [theme])

  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor="theme-switcher">
        <span style={{ paddingRight: "0.5rem" }}>Select Theme:</span>
        <select
          id="theme-switcher"
          name="theme"
          value={theme}
          onChange={evt => setTheme(evt.target.value as ThemeKey)}
        >
          <option value="zen">Zen</option>
          <option value="heart">Heart</option>
        </select>
      </label>
    </div>
  )
}
