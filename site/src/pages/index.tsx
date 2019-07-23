import * as React from "react"
import Layout from "../components/Layout"
import styles from "./styles.scss"

export default ({ location }) => (
  <Layout pageTitle="Components" currentPath={location.pathname}>
    <div className={styles.prominent}>🌱</div>
  </Layout>
)
