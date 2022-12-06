import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { useOption } from "@react-aria/listbox"
import { mergeProps } from "@react-aria/utils"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { SingleItemType, SingleState } from "../../../types"
import styles from "./Option.module.scss"

export type OptionProps = OverrideClassName<HTMLAttributes<HTMLLIElement>> &
  HTMLAttributes<HTMLLIElement> &
  SingleState & {
    item: Node<SingleItemType>
  }
export const Option: React.VFC<OptionProps> = ({
  item,
  classNameOverride,
  state,
  ...props
}) => {
  const ref = React.useRef<HTMLLIElement>(null)

  const { optionProps, isSelected } = useOption({ key: item.key }, state, ref)
  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <li
      {...mergeProps(optionProps, focusProps, props)}
      ref={ref}
      className={classNames([
        styles.option,
        isSelected && styles.isSelected,
        isFocusVisible && styles.isFocusVisible,
        classNameOverride,
      ])}
      aria-label={item.textValue}
    >
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
