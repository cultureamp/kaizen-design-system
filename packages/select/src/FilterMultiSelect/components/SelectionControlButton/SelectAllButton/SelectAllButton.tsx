import classNames from "classnames"
import React from "react"
import { useSelectionContext } from "../../../provider"

import styles from "../SelectionControlButton.scss"

export const SelectAllButton: React.VFC = () => {
  const { selectionState } = useSelectionContext()
  return (
    <button
      className={classNames(
        styles.button,
        selectionState.selectionManager.isSelectAll ? styles.isDisabled : ""
      )}
      aria-disabled={selectionState.selectionManager.isSelectAll}
      onClick={
        () =>
          !selectionState.selectionManager.isSelectAll &&
          selectionState.selectionManager.selectAll()
        // TODO: add annoucemnt here to inform all selected
      }
    >
      Select all
    </button>
  )
}
