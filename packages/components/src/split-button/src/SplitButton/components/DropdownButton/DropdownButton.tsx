import React from "react"
import classnames from "classnames"
import { Icon } from "@components/Icon"
import chevronDown from "@icons/chevron-down.icon.svg"
import { BaseButton, BaseButtonProps } from "../BaseButton"
import styles from "./DropdownButton.module.scss"

export type DropdownButtonProps = Omit<BaseButtonProps, "label" | "icon">

export const DropdownButton = ({
  classNameOverride,
  "aria-label": ariaLabel,
  ...restProps
}: DropdownButtonProps): JSX.Element => (
  <BaseButton
    label={ariaLabel || "Open menu"}
    icon={<Icon icon={chevronDown} role="presentation" />}
    classNameOverride={classnames(styles.dropdownButton, classNameOverride)}
    {...restProps}
  />
)

DropdownButton.displayName = "DropdownButton"
