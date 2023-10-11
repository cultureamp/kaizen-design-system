import React, { HTMLAttributes } from "react"
import { RemoveButton } from "./RemoveButton"
import { OverrideClassName } from "~types/OverrideClassName"
import { Tag, TagProps } from "./Tag"
import classNames from "classnames"
import styles from "./RemoveableTag.module.scss"

export type RemoveableTagProps = {
  removeButtonProps: {
    "aria-label": string
    onClick: () => void
  }
} & TagProps &
  OverrideClassName<HTMLAttributes<HTMLSpanElement>>

export const RemoveableTag = ({
  children,
  classNameOverride,
  icon,
  color = "gray",
  removeButtonProps,
}: RemoveableTagProps): JSX.Element => (
  <Tag
    classNameOverride={classNames(classNameOverride, styles.removeableTag)}
    icon={icon}
    color={color}
  >
    {children}

    <RemoveButton color={color} onClick={() => removeButtonProps.onClick()} />
  </Tag>
)

RemoveableTag.displayName = "RemoveableTag"
