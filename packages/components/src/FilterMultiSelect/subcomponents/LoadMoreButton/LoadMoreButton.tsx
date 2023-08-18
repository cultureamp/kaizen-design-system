import React from "react"
import { Button, ButtonProps } from "~components/Button"
import styles from "./LoadMoreButton.module.scss"

export type LoadMoreButtonProps = ButtonProps

export const LoadMoreButton = (props: LoadMoreButtonProps): JSX.Element => (
  <div className={styles.container}>
    <Button {...props} fullWidth />
  </div>
)

LoadMoreButton.displayName = "FilterMultiSelect.LoadMoreButton"
