import React from "react"
import { render } from "react-dom"
import { KaizenProvider } from "@kaizen/components"
import { themeManager } from "./themeManager"
import { App } from "./useThemeExample.docsExample"

render(
  <KaizenProvider themeManager={themeManager}>
    <App />
  </KaizenProvider>,
  // disable sicne this is an example file
  // eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
  document.getElementById("root")
)
