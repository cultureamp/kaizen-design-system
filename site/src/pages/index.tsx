import * as React from "react"
import Layout from "../components/Layout"
const styles = require("./styles.scss")

export default ({ location }) => (
  <Layout
    pageTitle="Kaizen Design System"
    currentPath={location.pathname}
    reverseFooter
  >
    <div className={styles.prominent}>🌱</div>
  </Layout>
)
