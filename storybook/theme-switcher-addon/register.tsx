// /my-addon/src/register.js

import React, { useState, useEffect } from "react"
import { addons, types } from "@storybook/addons"
import { AddonPanel } from "@storybook/components"
import { tokens } from "./tokens"

const ADDON_ID = "theme-switcher"
const PANEL_ID = `${ADDON_ID}/panel`

const App = () => {
  const [theme, setTheme] = useState("zen")
  useEffect(() => {
    let iframe
    if (
      document &&
      document.getElementById("storybook-preview-iframe") &&
      document.getElementById("storybook-preview-iframe").contentWindow.document
    ) {
      iframe = document.getElementById("storybook-preview-iframe").contentWindow
        .document
    } else {
      return
    }

    if (theme === "zen") {
      tokens.forEach(({ name }) => {
        if (iframe.getElementById("root")) {
          iframe.getElementById("root").style.removeProperty(name)
        }
      })
    } else {
      tokens.forEach(({ name, value }) => {
        if (iframe.getElementById("root")) {
          iframe.getElementById("root").style.setProperty(name, value)
        }
      })
    }
  })

  return (
    <label htmlFor="theme-switcher">
      Toggle Heart theme?
      <input
        id="theme-switcher"
        type="checkbox"
        onClick={() => (theme === "zen" ? setTheme("heart") : setTheme("zen"))}
      />
    </label>
  )
}

addons.register(ADDON_ID, api => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Theme Switcher",
    render: ({ active, key }) => (
      <AddonPanel active={active} key={key}>
        <App />
      </AddonPanel>
    ),
  })
})
