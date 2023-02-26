import * as React from "react"
import { Button, ButtonProps } from "@kaizen/button"
import styles from "./LoadMoreButton.module.scss"

export const LoadMoreButton = (props: ButtonProps): JSX.Element => (
  <div className={styles.container}>
    <Button {...props} fullWidth />
  </div>
)
