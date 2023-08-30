import React from "react"
import classnames from "classnames"
import { VisuallyHidden } from "@kaizen/a11y"
import { useSelectionContext } from "../../../context"
import styles from "../SelectionControlButton.module.scss"

export const ClearButton = (): JSX.Element => {
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
      type="button"
      className={classnames(styles.button, isDisabled && styles.isDisabled)}
      aria-disabled={isDisabled}
      onClick={
        (): void => {
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
      Clear<VisuallyHidden> selections</VisuallyHidden>
    </button>
  )
}

ClearButton.displayName = "FilterMultiSelect.ClearButton"
