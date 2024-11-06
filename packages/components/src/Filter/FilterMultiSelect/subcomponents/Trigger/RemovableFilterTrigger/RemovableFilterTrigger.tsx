import React, { useRef } from 'react'
import classnames from 'classnames'
import { FilterTriggerRef } from '~components/Filter/Filter'
import { FilterButtonRemovable } from '~components/Filter/FilterButton'
import { useMenuTriggerContext } from '../../../context'
import { getTruncatedLabels } from '../../../utils'
import { FilterTriggerButtonProps } from '../FilterTriggerButton'
import styles from './RemovableFilterTrigger.module.css'

export type RemovableFilterTriggerProps = FilterTriggerButtonProps & {
  onRemove: () => void
}

export const RemovableFilterTrigger = ({
  label,
  selectedOptionLabels,
  labelCharacterLimitBeforeTruncate = 50,
  classNameOverride,
  onRemove,
}: RemovableFilterTriggerProps): JSX.Element => {
  const { buttonProps, buttonRef, menuTriggerState } = useMenuTriggerContext()
  const ref = useRef<FilterTriggerRef>({ triggerRef: buttonRef })

  return (
    <FilterButtonRemovable
      ref={ref}
      classNameOverride={classnames(
        styles.filterButtonRemovable,
        classNameOverride,
      )}
      triggerButtonProps={{
        ...buttonProps,
        label,
        selectedValue: getTruncatedLabels(
          selectedOptionLabels,
          labelCharacterLimitBeforeTruncate,
        ),
        isOpen: menuTriggerState.isOpen,
      }}
      removeButtonProps={{
        onClick: onRemove,
      }}
    />
  )
}

RemovableFilterTrigger.displayName = 'FilterMultiSelect.RemovableTrigger'
