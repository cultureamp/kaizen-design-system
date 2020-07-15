import * as React from "react"
import Layout from "../components/Layout"

export default ({ location }) => (
  <Layout pageTitle="Guidelines" currentPath={location.pathname}>
    <div>
      <h1>Guidelines page</h1>
    </div>
  </Layout>
)
