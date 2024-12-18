import React, { forwardRef } from 'react'
import classnames from 'classnames'
import { Icon } from '~components/__rc__/Icon'
import { isRefObject } from '~components/utils/isRefObject'
import { type FilterTriggerRef } from '../../Filter/types'
import { FilterButtonBase, type FilterButtonBaseProps } from '../subcomponents/FilterButtonBase'
import styles from './FilterButton.module.css'

export type FilterButtonProps = {
  label: string
  selectedValue?: string | JSX.Element
  isOpen?: boolean
} & Omit<FilterButtonBaseProps, 'children'>

export const FilterButton = forwardRef<FilterTriggerRef, FilterButtonProps>(
  ({ label, selectedValue, isOpen = false, classNameOverride, ...restProps }, ref) => {
    const customRefObject = isRefObject(ref) ? ref.current : null
    const triggerRef = customRefObject?.triggerRef
    const selectedValuesLabel = selectedValue

    return (
      <FilterButtonBase
        ref={triggerRef}
        classNameOverride={classnames(styles.filterButton, classNameOverride)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        {...restProps}
      >
        <span className={styles.labelContainer}>
          {selectedValuesLabel ? (
            <>
              <span className={styles.hasSelectedValues}>
                <span>{label}</span>
                <span className={styles.labelSeparator}>:</span>
              </span>
              <span>{selectedValuesLabel}</span>
            </>
          ) : (
            label
          )}
        </span>
        <Icon name={isOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} isPresentational />
      </FilterButtonBase>
    )
  },
)

FilterButton.displayName = 'FilterButton'
