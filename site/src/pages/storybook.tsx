import * as React from "react"
import Layout from "../components/Layout"

export default ({ location }) => (
  <Layout
    pageTitle="Kaizen Design System"
    currentPath={location.pathname}
    fullWidthContent
  >
    <iframe
      src=""
      style={{ width: "100%", border: "0", height: "100%" }}
    ></iframe>
  </Layout>
)
