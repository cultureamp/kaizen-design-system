import React from "react"
import classnames from "classnames"
import { BaseButton, BaseButtonProps } from "../BaseButton"
import styles from "./ActionButton.scss"

export type ActionButtonProps = Omit<BaseButtonProps, "icon">

export const ActionButton: React.VFC<ActionButtonProps> = ({
  classNameOverride,
  ...restProps
}) => (
  <BaseButton
    classNameOverride={classnames(styles.actionButton, classNameOverride)}
    {...restProps}
  />
)

ActionButton.displayName = "ActionButton"
