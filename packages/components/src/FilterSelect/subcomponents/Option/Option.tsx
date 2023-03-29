import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { useOption } from "@react-aria/listbox"
import { mergeProps } from "@react-aria/utils"
import classNames from "classnames"
import { Icon } from "@kaizen/component-library"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { useSelectContext } from "~components/FilterSelect/context"
import { OverrideClassName } from "~types/OverrideClassName"
import { SelectOption, SelectOptionNode } from "../../types"
import styles from "./Option.module.scss"

export interface OptionProps<Option extends SelectOption = SelectOption>
  extends OverrideClassName<Omit<HTMLAttributes<HTMLLIElement>, "children">> {
  item: SelectOptionNode<Option>
}

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
      className={classNames([
        styles.option,
        isSelected && styles.isSelected,
        isFocusVisible && styles.isFocusVisible,
        isDisabled && styles.disabled,
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
