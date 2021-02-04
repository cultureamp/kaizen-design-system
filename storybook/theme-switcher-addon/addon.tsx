import React, { useState, useEffect } from "react"
import { tokens } from "./tokens"

export const App = () => {
  const [theme, setTheme] = useState("zen")
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

    tokens.forEach(({ name, value }) => {
      if (theme === "zen") {
        storyRoot.style.removeProperty(name)
      } else {
        storyRoot.style.setProperty(name, value)
      }
    })
  })

  return (
    <div style={{ padding: "1rem" }}>
      <label htmlFor="theme-switcher">
        <span style={{ paddingRight: "0.5rem" }}>Select Theme:</span>
        <select
          id="theme-switcher"
          name="theme"
          value={theme}
          onChange={evt => setTheme(evt.target.value)}
        >
          <option value="zen">Zen</option>
          <option value="heart">Heart</option>
        </select>
      </label>
    </div>
  )
}
