import React from "react"
import classNames from "classnames"
import { useSelectionContext } from "../../../provider"

import styles from "../SelectionControlButton.module.scss"

export const ClearButton: React.VFC = () => {
  const { selectionState } = useSelectionContext()
  const filteredOptions = Array.from(selectionState.collection.getKeys())
  const selectedOptions = Array.from(
    selectionState.selectionManager.selectedKeys
  )
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
        () => {
          !isDisabled &&
            selectionState.selectionManager.setSelectedKeys(
              selectedOptions.filter(
                option => !filteredOptions.includes(option)
              )
            )
        }
        // TODO: add announcement here to inform selection cleared
      }
    >
      Clear
    </button>
  )
}
