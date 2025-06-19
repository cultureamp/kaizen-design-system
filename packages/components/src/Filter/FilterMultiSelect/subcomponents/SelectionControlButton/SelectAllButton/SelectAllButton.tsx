import React from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import classnames from 'classnames'
import { useSelectionContext } from '../../../context'
import styles from '../SelectionControlButton.module.scss'

export const SelectAllButton = (): JSX.Element => {
  const { selectionState } = useSelectionContext()
  const selectedOptions = Array.from(selectionState.selectionManager.selectedKeys)
  const disabledOptions = selectionState.disabledKeys ? Array.from(selectionState.disabledKeys) : []
  const filteredOptions = Array.from(selectionState.collection.getKeys()).filter(
    (key) => !disabledOptions.includes(key),
  )

  const { formatMessage } = useIntl()

  return (
    <button
      type="button"
      className={classnames(
        styles.button,
        selectionState.selectionManager.isSelectAll && styles.isDisabled,
      )}
      aria-disabled={selectionState.selectionManager.isSelectAll}
      onClick={
        (): false | void =>
          !selectionState.selectionManager.isSelectAll &&
          selectionState.selectionManager.setSelectedKeys([...selectedOptions, ...filteredOptions])
        // TODO: add announcement here to inform all selected
      }
    >
      {formatMessage({
        defaultMessage: 'Select all',
        id: 'filterMultiSelectSelectAllButton.label',
        description: 'Select all button in filter multi select',
      })}
    </button>
  )
}

SelectAllButton.displayName = 'FilterMultiSelect.SelectAllButton'
