import React from "react"
import styles from "./useMediaQueries.scss"

export const useMediaQueries = () => {
  const components = {
    SmallOnly: (props: any) => (
      <div className={styles.smallOnly}>{props.children}</div>
    ),
    MediumOnly: (props: any) => (
      <div className={styles.mediumOnly}>{props.children}</div>
    ),
    LargeOnly: (props: any) => (
      <div className={styles.largeOnly}>{props.children}</div>
    ),
    MediumUp: (props: any) => (
      <div className={styles.mediumUp}>{props.children}</div>
    ),
    MediumDown: (props: any) => (
      <div className={styles.mediumDown}>{props.children}</div>
    ),
  }

  return { components }
}
