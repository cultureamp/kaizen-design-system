/* eslint-disable import/no-extraneous-dependencies */

import { ThemeProvider } from "@kaizen/design-tokens"
import { render } from "react-dom"
import React from "react"
import { themeManager } from "./themeManager"
import { App } from "./App"

render(
  <ThemeProvider themeManager={themeManager}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
)
