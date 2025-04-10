import React, { useId } from 'react'
import { FormattedMessage, useIntl } from '@cultureamp/i18n-react-intl'
import { useFocusRing } from '@react-aria/focus'
import { useOption } from '@react-aria/listbox'
import { mergeProps } from '@react-aria/utils'
import classnames from 'classnames'
import { Badge } from '~components/Badge'
import { VisuallyHidden } from '~components/VisuallyHidden'
import { Icon } from '~components/__next__/Icon'
import { useSelectionContext } from '../../context'
import { type MultiSelectItem } from '../../types'
import styles from './MultiSelectOption.module.scss'

export interface MultiSelectOptionProps {
  classNameOverride?: string
  item: MultiSelectItem
}

export const MultiSelectOption = ({
  classNameOverride,
  item,
}: MultiSelectOptionProps): JSX.Element => {
  const { selectionState: state } = useSelectionContext()
  // Get props for the option element
  const ref = React.createRef<HTMLLIElement>()
  const { optionProps, isSelected, isDisabled } = useOption({ key: item.key }, state, ref)

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, focusProps } = useFocusRing()
  const countElementId = useId()
  const { formatNumber } = useIntl()

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      className={classnames(
        styles.option,
        classNameOverride,
        isSelected && styles.isSelected,
        isFocusVisible && styles.isFocusVisible,
        isDisabled && styles.isDisabled,
      )}
      aria-label={item.value?.label}
      aria-describedby={item.value?.count ? countElementId : undefined}
    >
      <span className={classnames(styles.icon, isSelected && styles.isSelected)}>
        {isSelected && <Icon name="check" isPresentational />}
      </span>
      {/* can also be item.value since 'rendered' is defined as item.value in SelectionProvider*/}
      {item.rendered}
      {item.value?.count && (
        <span id={countElementId} className={styles.badgeContainer}>
          <FormattedMessage
            defaultMessage="<Badge>{count}</Badge><VisuallyHidden> available</VisuallyHidden>"
            id="filterMultiSelectMultiSelectOption.available"
            description="Number of filter items available"
            values={{
              count: formatNumber(parseInt(item.value.count)),
              Badge: (children: React.ReactNode) => (
                <Badge classNameOverride={styles.badge}>{children}</Badge>
              ),
              VisuallyHidden: (children: React.ReactNode) => (
                <VisuallyHidden>{children}</VisuallyHidden>
              ),
            }}
          />
        </span>
      )}
    </li>
  )
}

MultiSelectOption.displayName = 'FilterMultiSelect.Option'
