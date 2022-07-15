import React from "react"
import { useSelectionContext } from "../../../provider/SelectionProvider"

import styles from "../SelectionControlButton.scss"

export const ClearButton: React.VFC = () => {
  const { selectionState } = useSelectionContext()
  return (
    <button
      className={styles.button}
      onClick={() => selectionState.selectionManager.clearSelection()}
    >
      Clear
    </button>
  )
}
