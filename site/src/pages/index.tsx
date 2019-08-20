import * as React from "react"
import Layout from "../components/Layout"
import styles from "./styles.scss"

export default ({ location }) => (
  <Layout
    pageTitle="Kaizen Design System"
    currentPath={location.pathname}
    wisteriaFooter
  >
    <div className={styles.prominent}>🌱</div>
  </Layout>
)
