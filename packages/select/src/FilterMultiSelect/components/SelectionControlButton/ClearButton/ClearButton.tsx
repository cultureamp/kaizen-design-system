import classNames from "classnames"
import React from "react"
import { useSelectionContext } from "../../../provider"

import styles from "../SelectionControlButton.scss"

export const ClearButton: React.VFC = () => {
  const { selectionState } = useSelectionContext()
  const filteredOptions = Array.from(selectionState.collection.getKeys())
  const isDisabled =
    filteredOptions.length === 0 ||
    !Boolean(
      filteredOptions.find(key =>
        selectionState.selectionManager.isSelected(key)
      )
    )

  return (
    <button
      className={classNames(styles.button, isDisabled ? styles.isDisabled : "")}
      aria-disabled={isDisabled}
      onClick={
        // use setSelectedKeys(<currently selected - everything filtered>)
        () => !isDisabled && selectionState.selectionManager.clearSelection()
        // TODO: add annoucemnt here to inform selection cleared
      }
    >
      Clear
    </button>
  )
}
