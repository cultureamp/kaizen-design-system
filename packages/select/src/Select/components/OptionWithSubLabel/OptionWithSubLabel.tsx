import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { useOption } from "@react-aria/listbox"
import { mergeProps } from "@react-aria/utils"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { SingleItemType } from "../../../types"
import { useSelectContext } from "../../context/SelectContext"
import styles from "./OptionWithSubLabel.module.scss"

export interface OptionWithSubLabelProps
  extends OverrideClassName<HTMLAttributes<HTMLLIElement>> {
  item: Node<SingleItemType>
}
export const OptionWithSubLabel = ({
  item,
  classNameOverride,
  ...props
}: OptionWithSubLabelProps): JSX.Element => {
  const ref = React.useRef<HTMLLIElement>(null)
  const { state } = useSelectContext()
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
      <div className={styles.label}>
        <div>{item.value.label}</div>
        <div className={styles.small}>{item.value.subLabel}</div>
      </div>
      <span
        className={classNames([styles.icon, isSelected && styles.isSelected])}
      >
        {isSelected && <Icon icon={check} role="presentation" />}
      </span>
    </li>
  )
}

OptionWithSubLabel.displayName = "OptionWithSubLabel"
