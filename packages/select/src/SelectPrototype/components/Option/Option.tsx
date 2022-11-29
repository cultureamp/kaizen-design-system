import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { useOption } from "@react-aria/listbox"
import { mergeProps } from "@react-aria/utils"
import { SelectState } from "@react-stately/select"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { ItemType } from "../../types"
import styles from "./Option.module.scss"

export interface OptionProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  item: Node<ItemType>
  state: SelectState<ItemType>
}

export const Option = ({ item, classNameOverride, state }: OptionProps) => {
  const ref = React.useRef<HTMLLIElement>(null)

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
        classNameOverride,
      ])}
      aria-label={item.textValue}
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
