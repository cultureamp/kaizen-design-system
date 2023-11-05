import React from "react"
import classnames from "classnames"
import { ChevronDownIcon } from "~components/Icon"
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
    icon={<ChevronDownIcon role="presentation" />}
    classNameOverride={classnames(styles.dropdownButton, classNameOverride)}
    {...restProps}
  />
)

DropdownButton.displayName = "DropdownButton"
