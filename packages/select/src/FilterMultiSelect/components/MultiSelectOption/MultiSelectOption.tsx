import React, { useId } from "react"
import { mergeProps } from "@react-aria/utils"
import { useFocusRing } from "@react-aria/focus"
import { Node } from "@react-types/shared"
import { useOption } from "@react-aria/listbox"
import classNames from "classnames"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { Icon } from "@kaizen/component-library"
import { Badge } from "@kaizen/draft-badge"
import { VisuallyHidden } from "@kaizen/a11y"
import { useSelectionContext } from "../../provider"
import { ItemType } from "../../types"
import styles from "./MultiSelectOption.scss"

export interface MultiSelectOptionProps {
  item: Node<ItemType>
}

export const MultiSelectOption: React.VFC<MultiSelectOptionProps> = ({
  item,
}) => {
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
  const countElementId = useId()

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      className={classNames(
        styles.option,
        isSelected ? styles.isSelected : "",
        isFocusVisible ? styles.isFocusVisible : "",
        isDisabled ? styles.isDisabled : ""
      )}
      aria-label={item.value.label}
      aria-describedby={item.value.count ? countElementId : undefined}
    >
      <span
        className={classNames(styles.icon, isSelected ? styles.isSelected : "")}
      >
        {isSelected && <Icon icon={check} role="presentation" />}
      </span>
      {/* can also be item.value since 'rendered' is defined as item.value in SelectionProvider*/}
      {item.rendered}
      {item.value.count && (
        <span id={countElementId}>
          <Badge>{item.value.count}</Badge>
          <VisuallyHidden> available</VisuallyHidden>
        </span>
      )}
    </li>
  )
}

MultiSelectOption.displayName = "MultiSelectOption"
