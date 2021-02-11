// eslint-disable-next-line import/no-extraneous-dependencies
import { heartTheme, ThemeManager, zenTheme } from "@kaizen/design-tokens"
import React, { useEffect, useState } from "react"

const themeOfKey = (themeKey: string) => {
  switch (themeKey) {
    case "heart":
      return heartTheme
    default:
      return zenTheme
  }
}
export const App = () => {
  const themeManager = React.useRef<ThemeManager | null>(null)
  const [theme, setTheme] = useState(zenTheme)
  useEffect(() => {
    let storyRoot

    const storybookIframe =
      document &&
      (document.getElementById(
        "storybook-preview-iframe"
      ) as HTMLIFrameElement | null)
    if (
      storybookIframe &&
      storybookIframe.contentWindow.document &&
      storybookIframe.contentWindow.document.getElementById("root")
    ) {
      storyRoot = storybookIframe.contentWindow.document.getElementById("root")
      if (!themeManager.current) {
        themeManager.current = new ThemeManager(theme, storyRoot)
      } else {
        themeManager.current.setRootElement(storyRoot)
        themeManager.current.setAndApplyTheme(theme)
      }
    } else {
      return
    }
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
