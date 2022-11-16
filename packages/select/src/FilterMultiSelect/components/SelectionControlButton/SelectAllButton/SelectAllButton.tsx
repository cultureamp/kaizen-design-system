import React from "react"
import classNames from "classnames"
import { useSelectionContext } from "../../../provider"

import styles from "../SelectionControlButton.module.scss"

export const SelectAllButton: React.VFC = () => {
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
      className={classNames(styles.button, {
        [styles.isDisabled]: selectionState.selectionManager.isSelectAll,
      })}
      aria-disabled={selectionState.selectionManager.isSelectAll}
      onClick={
        () =>
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
