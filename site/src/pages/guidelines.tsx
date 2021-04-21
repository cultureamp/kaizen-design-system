import * as React from "react"
import { ThemeManager, ThemeProvider, heartTheme } from "@kaizen/design-tokens"
import Layout from "../components/Layout"

export default ({ location }) => {
  const themeManager = new ThemeManager(heartTheme)
  return (
    <ThemeProvider themeManager={themeManager}>
      <Layout pageTitle="Guidelines" currentPath={location.pathname}>
        <div>
          <h1>Guidelines page</h1>
        </div>
      </Layout>
    </ThemeProvider>
  )
}
