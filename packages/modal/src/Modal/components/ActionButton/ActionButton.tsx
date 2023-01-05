import React from "react"
import { Button, ButtonProps } from "@kaizen/button"
import { useMediaQueries } from "@kaizen/responsive"
import styles from "./ActionButton.scss"

export const ActionButton = (props: ButtonProps): JSX.Element => {
  const {
    queries: { isSmall },
  } = useMediaQueries()

  return (
    <Button
      classNameOverride={styles.actionButton}
      type="button"
      fullWidth={isSmall}
      {...props}
    />
  )
}
