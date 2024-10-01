import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { mergeProps, useFocusRing, useOption } from "react-aria"
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

  const {
    // Remove these props as they cause propagation issues on touch devices
    onClick: _onClick,
    onPointerUp: _onPointerUp,
    ...restOptionProps
  } = optionProps

  const { isFocusVisible, focusProps } = useFocusRing()

  return (
    <li
      {...mergeProps(restOptionProps, focusProps, props, {
        // Manually control onClick to stop propagation on touch devices
        onClick: () => {
          state.setSelectedKey(item.key)
          state.close()
        },
      })}
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
