import * as React from "react"
import InteractionStates from "./InteractionStates"
const styles = require("./InteractionStatesDemo.scss")

export default () => (
  <div className={styles.wrapper}>
    <InteractionStates dark={false} />
    <InteractionStates dark={true} />
  </div>
)
