import React from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import chevronDown from "@kaizen/component-library/icons/chevron-down.icon.svg"
import { BaseButton, BaseButtonProps } from "../BaseButton"
import styles from "./DropdownButton.scss"

export type DropdownButtonProps = Omit<BaseButtonProps, "label" | "icon">

export const DropdownButton: React.VFC<DropdownButtonProps> = ({
  classNameOverride,
  "aria-label": ariaLabel,
  ...restProps
}) => (
  <BaseButton
    label={ariaLabel || "Open menu"}
    icon={<Icon icon={chevronDown} role="presentation" />}
    classNameOverride={classnames(styles.dropdownButton, classNameOverride)}
    {...restProps}
  />
)

DropdownButton.displayName = "DropdownButton"
