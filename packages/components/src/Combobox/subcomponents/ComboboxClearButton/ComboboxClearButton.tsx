import React from "react"
import { Button, ComboBoxStateContext } from "react-aria-components"
import { ClearIcon } from "~components/Icon"
import styles from "./ComboboxClearButton.module.css"

export const ComboboxClearButton = () => {
  const state = React.useContext(ComboBoxStateContext)
  return (
    <Button
      // Don't inherit default Button behavior from RAC ComboBox
      slot={null}
      className={styles.clearButton}
      aria-label="Clear"
      onPress={() => state?.setSelectedKey(null)}
    >
      <ClearIcon role="presentation" />
    </Button>
  )
}
