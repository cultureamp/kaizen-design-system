import React from "react"
import styles from "./Responsive.scss"
export default function Responsive() {
  return (
    <div className={styles.gridWrapper}>
      <div className={styles.column}>1</div>
      <div className={styles.column}>2</div>
      <div className={styles.column}>3</div>
      <div className={styles.column}>4</div>
    </div>
  )
}
