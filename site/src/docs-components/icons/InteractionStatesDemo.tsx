import * as React from "react"
import InteractionStates from "./InteractionStates"
import styles from "./InteractionStatesDemo.scss"

export default () => (
  <div className={styles.wrapper}>
    <InteractionStates dark={false} />
    <InteractionStates dark={true} />
  </div>
)
