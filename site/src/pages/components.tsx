import * as React from "react"
import Layout from "../components/Layout"

export default ({ location }) => (
  <Layout pageTitle="Components" currentPath={location.pathname}>
    <div>
      <h1>Components page</h1>
    </div>
  </Layout>
)
