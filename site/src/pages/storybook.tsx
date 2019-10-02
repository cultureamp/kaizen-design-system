import { withPrefix } from "gatsby"
import * as React from "react"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

export default ({ location }) => (
  <Layout
    pageTitle="Kaizen Design System"
    currentPath={location.pathname}
    fullWidthContent
    footer={<Footer />}
  >
    <iframe
      src={withPrefix("/storybook-static")}
      style={{ width: "100%", border: "0", height: "100%" }}
    ></iframe>
  </Layout>
)
