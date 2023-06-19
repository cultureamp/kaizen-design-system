import React from "react"
import { Button } from "~components/Button"
import { useFilterBarContext } from "../../context/FilterBarContext"
import styles from "./ClearAllButton.module.scss"

export const ClearAllButton = (): JSX.Element => {
  const { clearAllFilters } = useFilterBarContext()

  return (
    <Button
      label="Clear all"
      classNameOverride={styles.clearAllButton}
      secondary
      onClick={clearAllFilters}
    />
  )
}

ClearAllButton.displayName = "FilterBar.ClearAllButton"
