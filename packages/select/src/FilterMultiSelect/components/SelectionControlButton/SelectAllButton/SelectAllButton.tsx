import classNames from "classnames"
import React from "react"
import { useSelectionContext } from "../../../provider"

import styles from "../SelectionControlButton.scss"

export const SelectAllButton: React.VFC = () => {
  const { selectionState } = useSelectionContext()
  const filteredOptions = Array.from(selectionState.collection.getKeys())
  const selectedOptions = Array.from(
    selectionState.selectionManager.selectedKeys
  )
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
          selectionState.selectionManager.setSelectedKeys([
            ...selectedOptions,
            ...filteredOptions,
          ])
        // TODO: add annoucemnt here to inform all selected
      }
    >
      Select all
    </button>
  )
}
