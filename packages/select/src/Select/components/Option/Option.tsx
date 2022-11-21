import React from "react"
import { useFocusRing } from "@react-aria/focus"
import { useOption } from "@react-aria/listbox"
import { mergeProps } from "@react-aria/utils"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { Icon } from "@kaizen/component-library"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { useSelectionContext } from "../../provider"
import { ItemType } from "../../types"
import styles from "./Option.module.scss"

export interface OptionProps {
  item: Node<ItemType>
}

export const Option: React.VFC<OptionProps> = ({ item }) => {
  const { selectionState: state } = useSelectionContext()
  // Get props for the option element
  const ref = React.createRef<HTMLLIElement>()

  const { optionProps, isSelected } = useOption({ key: item.key }, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      className={classNames([
        styles.option,
        isSelected && styles.isSelected,
        isFocusVisible && styles.isFocusVisible,
      ])}
      aria-label={item.value.label}
    >
      {/* can also be item.value since 'rendered' is defined as item.value in SelectionProvider*/}
      {item.rendered}
      <span
        className={classNames([styles.icon, isSelected && styles.isSelected])}
      >
        {isSelected && <Icon icon={check} role="presentation" />}
      </span>
    </li>
  )
}

Option.displayName = "Option"
