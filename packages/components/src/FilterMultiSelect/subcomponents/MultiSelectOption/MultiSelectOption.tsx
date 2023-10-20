import React, { useMemo } from "react"
import { useFocusRing } from "@react-aria/focus"
import { useOption } from "@react-aria/listbox"
import { mergeProps } from "@react-aria/utils"
import classnames from "classnames"
import { v4 } from "uuid"
import { Badge } from "~components/Badge"
import { CheckIcon } from "~components/Icon"
import { VisuallyHidden } from "~components/VisuallyHidden"
import { useSelectionContext } from "../../context"
import { MultiSelectItem } from "../../types"
import styles from "./MultiSelectOption.module.scss"

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
  const { optionProps, isSelected, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  )

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, focusProps } = useFocusRing()
  const countElementId = useMemo(() => v4(), [])

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      className={classnames(
        styles.option,
        classNameOverride,
        isSelected && styles.isSelected,
        isFocusVisible && styles.isFocusVisible,
        isDisabled && styles.isDisabled
      )}
      aria-label={item.value?.label}
      aria-describedby={item.value?.count ? countElementId : undefined}
    >
      <span
        className={classnames(styles.icon, isSelected && styles.isSelected)}
      >
        {isSelected && <CheckIcon role="presentation" />}
      </span>
      {/* can also be item.value since 'rendered' is defined as item.value in SelectionProvider*/}
      {item.rendered}
      {item.value?.count && (
        <span id={countElementId} className={styles.badgeContainer}>
          <Badge classNameOverride={styles.badge}>{item.value.count}</Badge>
          <VisuallyHidden> available</VisuallyHidden>
        </span>
      )}
    </li>
  )
}

MultiSelectOption.displayName = "FilterMultiSelect.Option"
