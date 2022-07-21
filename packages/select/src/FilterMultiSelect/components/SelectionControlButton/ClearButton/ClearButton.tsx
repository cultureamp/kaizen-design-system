import React from "react"
import { useSelectionContext } from "../../../provider"

import styles from "../SelectionControlButton.scss"

export const ClearButton: React.VFC = () => {
  const { selectionState } = useSelectionContext()
  return (
    <button
      className={styles.button}
      onClick={
        () => selectionState.selectionManager.clearSelection()
        // TODO: add annoucemnt here to inform selection cleared
      }
    >
      Clear
    </button>
  )
}
