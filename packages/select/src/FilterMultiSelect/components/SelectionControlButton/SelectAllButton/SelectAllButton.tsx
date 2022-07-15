import React from "react"
import { useSelectionContext } from "../../../provider/SelectionProvider"

import styles from "../SelectionControlButton.scss"

export const SelectAllButton: React.VFC = () => {
  const { selectionState } = useSelectionContext()
  return (
    <button
      className={styles.button}
      onClick={() => selectionState.selectionManager.selectAll()}
    >
      Select All
    </button>
  )
}
