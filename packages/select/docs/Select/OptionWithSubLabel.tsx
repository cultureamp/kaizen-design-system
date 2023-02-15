import React, { HTMLAttributes } from "react"
import { useFocusRing } from "@react-aria/focus"
import { useOption } from "@react-aria/listbox"
import { mergeProps } from "@react-aria/utils"
import { Node } from "@react-types/shared"
import classNames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Icon } from "@kaizen/component-library"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { Paragraph } from "../../../typography"
import { useSelectContext } from "../../src/Select/context/SelectContext"
import { SingleItemType } from "../../src/types"
import styles from "./OptionWithSubLabel.module.scss"

export interface SingleItemTypeWithSubtitle extends SingleItemType {
  subtitle: string
}

export interface OptionWithSubLabelProps
  extends OverrideClassName<HTMLAttributes<HTMLLIElement>> {
  item: Node<SingleItemTypeWithSubtitle>
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
        <Paragraph variant="small">{item.value.subtitle}</Paragraph>
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
