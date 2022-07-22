import React from "react"
import { useSelectionContext } from "../../../provider"

import styles from "../SelectionControlButton.scss"

export const ClearButton: React.VFC = () => {
  const { selectionState } = useSelectionContext()
  return (
    <button
      className={styles.button}
      aria-disabled={selectionState.selectionManager.isEmpty}
      onClick={
        () =>
          !selectionState.selectionManager.isEmpty &&
          selectionState.selectionManager.clearSelection()
        // TODO: add annoucemnt here to inform selection cleared
      }
    >
      Clear
    </button>
  )
}
