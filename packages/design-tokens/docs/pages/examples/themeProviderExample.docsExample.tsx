import React from "react"
import { render } from "react-dom"
import { ThemeProvider } from "@kaizen/design-tokens"
import { themeManager } from "./themeManager"
import { App } from "./useThemeExample.docsExample"

render(
  <ThemeProvider themeManager={themeManager}>
    <App />
  </ThemeProvider>,
  // disable sicne this is an example file
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  document.getElementById("root")
)
