import React from 'react'
import { FormattedMessage } from '@cultureamp/i18n-react-intl'
import classnames from 'classnames'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { useSelectionContext } from '../../../context'
import styles from '../SelectionControlButton.module.scss'

export const ClearButton = (): JSX.Element => {
  const { selectionState } = useSelectionContext()
  const filteredOptions = Array.from(selectionState.collection.getKeys())
  const selectedOptions = Array.from(selectionState.selectionManager.selectedKeys)
  const isDisabled =
    filteredOptions.length === 0 ||
    !filteredOptions.find((key) => selectionState.selectionManager.isSelected(key))

  return (
    <button
      type="button"
      className={classnames(styles.button, isDisabled && styles.isDisabled)}
      aria-disabled={isDisabled}
      onClick={
        (): void => {
          if (!isDisabled) {
            selectionState.selectionManager.setSelectedKeys(
              selectedOptions.filter((option) => !filteredOptions.includes(option)),
            )
          }
        }
        // TODO: add announcement here to inform selection cleared
      }
    >
      <FormattedMessage
        defaultMessage="Clear<VisuallyHidden> selections</VisuallyHidden>"
        id="filterMultiSelectClearButton.label"
        description="Clear button label for filter multi-select"
        values={{
          VisuallyHidden: (children: React.ReactNode) => (
            <VisuallyHidden>{children}</VisuallyHidden>
          ),
        }}
      />
    </button>
  )
}

ClearButton.displayName = 'FilterMultiSelect.ClearButton'
