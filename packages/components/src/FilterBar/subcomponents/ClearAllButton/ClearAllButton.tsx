import React from "react"
import { Button } from "~components/Button"
import { useFilterBarContext } from "../../context/FilterBarContext"
import styles from "./ClearAllButton.module.scss"

export const ClearAllButton = (): JSX.Element => {
  const {} = useFilterBarContext()

  return (
    <Button
      label="Clear all"
      classNameOverride={styles.clearAllButton}
      secondary
    />
  )
}

ClearAllButton.displayName = "FilterBar.ClearAllButton"
