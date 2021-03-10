// eslint-disable-next-line import/no-extraneous-dependencies
import { ThemeKey } from "@kaizen/design-tokens"
import { useChannel } from "@storybook/addons"
import { useAddonState } from "@storybook/api"
import React, { useEffect } from "react"
import { ADDON_ID, THEME_CHANGE_EVENT_TYPE } from "./constants"
import { getInitialTheme } from "./themeManager"

export const App = () => {
  const [theme, setTheme] = useAddonState<string>(
    ADDON_ID,
    getInitialTheme().themeKey
  )

  const emit = useChannel({
    [THEME_CHANGE_EVENT_TYPE]: nextTheme => setTheme(nextTheme),
  })

  // Notify listeners (the story preview iframe) that the theme should be changed.
  useEffect(() => {
    emit(THEME_CHANGE_EVENT_TYPE, theme)
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
