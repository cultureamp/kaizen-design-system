import React, { useMemo } from "react"
import { v4 } from "uuid"

import { mergeProps } from "@react-aria/utils"
import { useFocusRing } from "@react-aria/focus"
import { Node } from "@react-types/shared"
import { useOption } from "@react-aria/listbox"
import classNames from "classnames"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { Icon } from "@kaizen/component-library"
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
      <span
        className={classNames([styles.icon, isSelected && styles.isSelected])}
      >
        {isSelected && <Icon icon={check} role="presentation" />}
      </span>
      {/* can also be item.value since 'rendered' is defined as item.value in SelectionProvider*/}
      {item.rendered}
    </li>
  )
}

Option.displayName = "Option"
