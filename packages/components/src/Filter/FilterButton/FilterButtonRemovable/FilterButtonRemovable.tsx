import React, { forwardRef } from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import classnames from 'classnames'
import { ButtonGroup, ButtonGroupProps } from '~components/ButtonGroup'
import { FilterTriggerRef } from '~components/Filter/Filter'
import { Icon } from '~components/__future__/Icon'
import { Tooltip } from '~components/__overlays__/Tooltip/v1'
import { DataAttributes } from '~components/types/DataAttributes'
import { isRefObject } from '~components/utils/isRefObject'
import { FilterButton, FilterButtonProps } from '../FilterButton'
import { FilterButtonBase, FilterButtonBaseProps } from '../subcomponents/FilterButtonBase'
import styles from './FilterButtonRemovable.module.css'

export type FilterButtonRemovableProps = {
  triggerButtonProps: FilterButtonProps & DataAttributes
  removeButtonProps: Partial<Omit<FilterButtonBaseProps, 'children'>> &
    DataAttributes & { tooltipText?: string }
} & Omit<ButtonGroupProps, 'children'>

export type FilterButtonRemovableRefs = FilterTriggerRef & {
  removeButtonRef?: React.RefObject<HTMLButtonElement>
}

export const FilterButtonRemovable = forwardRef<
  FilterButtonRemovableRefs,
  FilterButtonRemovableProps
>(({ triggerButtonProps, removeButtonProps, ...restProps }, ref) => {
  const { formatMessage } = useIntl()

  const removeButtonLabelFallback = formatMessage(
    {
      id: 'filterButton.removable.removeButtonLabel',
      defaultMessage: 'Remove filter - {filterLabel}',
      description: 'Button label to remove a single filter from the filter bar',
    },
    {
      filterLabel: triggerButtonProps?.label,
    },
  )

  const customRefObject = isRefObject(ref) ? ref.current : null
  const removeButtonRef = customRefObject?.removeButtonRef

  const removeButtonLabel = removeButtonProps?.tooltipText ?? removeButtonLabelFallback

  return (
    <ButtonGroup {...restProps}>
      <FilterButton ref={ref} {...triggerButtonProps} />
      <Tooltip text={removeButtonLabel} display="inline-block" position="below">
        <FilterButtonBase
          ref={removeButtonRef}
          classNameOverride={classnames(styles.filterButtonBase, restProps.classNameOverride)}
          {...removeButtonProps}
        >
          <Icon name="cancel" alt={removeButtonLabel} isFilled />
        </FilterButtonBase>
      </Tooltip>
    </ButtonGroup>
  )
})

FilterButtonRemovable.displayName = 'FilterButtonRemovable'
