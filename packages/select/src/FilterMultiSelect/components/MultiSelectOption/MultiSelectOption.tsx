import React from "react"
import { mergeProps } from "@react-aria/utils"
import { useFocusRing } from "@react-aria/focus"
import { Node } from "@react-types/shared"
import { useOption } from "@react-aria/listbox"
import classNames from "classnames"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { Icon } from "@kaizen/component-library"
import { Badge } from "@kaizen/draft-badge"
import { useSelectionContext } from "../../provider"
import { ItemType } from "../../FilterMultiSelect"
import styles from "./MultiSelectOption.scss"

// TODO: could rename to Option?
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
      // TODO: appears to be a bug in eslint-plugin-jsx-a11y: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/699
      // eslint-disable-next-line jsx-a11y/aria-props
      aria-description={
        item.value.count ? `${item.value.count} available` : undefined
      }
    >
      <span
        className={classNames(styles.icon, isSelected ? styles.isSelected : "")}
      >
        {isSelected && <Icon icon={check} role="presentation" />}
      </span>
      {/* can also be item.value since 'rendered' is defined as item.value in SelectionProvider*/}
      {item.rendered}
      {item.value.count && <Badge>{item.value.count}</Badge>}
    </li>
  )
}

MultiSelectOption.displayName = "MultiSelectOption"
