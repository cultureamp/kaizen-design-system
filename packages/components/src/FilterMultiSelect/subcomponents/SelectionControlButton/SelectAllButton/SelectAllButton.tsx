import React from "react"
import classnames from "classnames"
import { useSelectionContext } from "../../../provider"
import styles from "../SelectionControlButton.module.scss"

export const SelectAllButton = (): JSX.Element => {
  const { selectionState } = useSelectionContext()
  const selectedOptions = Array.from(
    selectionState.selectionManager.selectedKeys
  )
  const disabledOptions = selectionState.disabledKeys
    ? Array.from(selectionState.disabledKeys)
    : []
  const filteredOptions = Array.from(
    selectionState.collection.getKeys()
  ).filter(key => !disabledOptions.includes(key))

  return (
    <button
      type="button"
      className={classnames(
        styles.button,
        selectionState.selectionManager.isSelectAll && styles.isDisabled
      )}
      aria-disabled={selectionState.selectionManager.isSelectAll}
      onClick={
        (): false | void =>
          !selectionState.selectionManager.isSelectAll &&
          selectionState.selectionManager.setSelectedKeys([
            ...selectedOptions,
            ...filteredOptions,
          ])
        // TODO: add announcement here to inform all selected
      }
    >
      Select all
    </button>
  )
}

SelectAllButton.displayName = "FilterMultiSelect.SelectAllButton"
