import React from "react"
import { mergeProps } from "@react-aria/utils"
import { useFocusRing } from "@react-aria/focus"
import { Node } from "@react-types/shared"
import { useOption } from "@react-aria/listbox"
import { ListState } from "@react-stately/list"
import classNames from "classnames"
import check from "@kaizen/component-library/icons/check.icon.svg"
import { Icon } from "@kaizen/component-library"
import { Paragraph } from "@kaizen/typography"
import { Badge } from "@kaizen/draft-badge"
import { ItemType } from "../type"
import baseStyles from "./OptionBase.scss"
import styles from "./MultiSelectOption.scss"

export interface OptionProps {
  item: Node<ItemType>
  state: ListState<ItemType>
}

export function MultiSelectOption({ item, state }: OptionProps): JSX.Element {
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
        baseStyles.option,
        isSelected ? baseStyles.isSelected : "",
        isFocusVisible ? baseStyles.isFocusVisible : "",
        isDisabled ? baseStyles.isDisabled : ""
      )}
    >
      <span
        className={classNames(styles.icon, isSelected ? styles.isSelected : "")}
      >
        {isSelected && <Icon icon={check} title="Item selected" />}
      </span>
      <Paragraph variant={"body"} tag="span">
        {item.rendered}
      </Paragraph>
      {item.value.count && <Badge>{item.value.count}</Badge>}
    </li>
  )
}
