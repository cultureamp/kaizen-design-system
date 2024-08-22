import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { useOption } from "@react-aria/listbox"
import { mergeProps } from "@react-aria/utils"
import classnames from "classnames"
import { CheckIcon } from "~components/Icon"
import { OverrideClassName } from "~components/types/OverrideClassName"
import { useSelectContext } from "../../context"
import { SelectOption, SelectOptionNode } from "../../types"
import styles from "./Option.module.scss"

export type OptionProps<Option extends SelectOption = SelectOption> = {
  item: SelectOptionNode<Option>
} & OverrideClassName<Omit<HTMLAttributes<HTMLLIElement>, "children">>

export const Option = <Option extends SelectOption = SelectOption>({
  item,
  classNameOverride,
  ...props
}: OptionProps<Option>): JSX.Element => {
  const { state } = useSelectContext<Option>()
  const ref = React.useRef<HTMLLIElement>(null)
  const { optionProps, isSelected, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  )

  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <li
      {...mergeProps(optionProps, focusProps, props)}
      ref={ref}
      className={classnames(
        styles.option,
        isSelected && styles.isSelected,
        isFocusVisible && styles.isFocusVisible,
        isDisabled && styles.disabled,
        classNameOverride
      )}
      aria-label={item.textValue}
    >
      {item.rendered}
      <span
        className={classnames(styles.icon, isSelected && styles.isSelected)}
      >
        {isSelected && <CheckIcon inheritSize role="presentation" />}
      </span>
    </li>
  )
}

Option.displayName = "Option"
