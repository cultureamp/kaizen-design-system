import * as React from "react"
import Head from "../components/Head"
import MainNav from "../components/MainNav"
import styles from "./styles.scss"

export default props => (
  <>
    <Head />
    <MainNav currentPath={props.location.pathname} />
    <div className={styles.prominent}>🌱</div>
  </>
)
