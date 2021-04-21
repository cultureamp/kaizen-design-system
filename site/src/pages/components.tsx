import * as React from "react"
import { ThemeManager, ThemeProvider, heartTheme } from "@kaizen/design-tokens"
import Layout from "../components/Layout"

export default ({ location }) => {
  const themeManager = new ThemeManager(heartTheme)
  return (
    <ThemeProvider themeManager={themeManager}>
      <Layout pageTitle="Components" currentPath={location.pathname}>
        <div>
          <h1>Components page</h1>
        </div>
      </Layout>
    </ThemeProvider>
  )
}
