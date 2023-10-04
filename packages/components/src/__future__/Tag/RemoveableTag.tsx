import React, { ReactNode, HTMLAttributes } from "react"
import classNames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { ClearIcon } from "~components/Icons"
import { Tag, TagProps } from "./Tag"
import styles from "./RemoveableTag.module.scss"

export type RemoveableTagProps = {
  removeButtonProps: {
    "aria-label": string
    onClick: Function
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
  <Tag classNameOverride={classNameOverride} icon={icon} color={color}>
    {children}
    <ClearIcon
      // TODO: Use inheritSize prop once we decide what size this should be
      role="presentation"
      onClick={() => removeButtonProps.onClick()}
    />
  </Tag>
)

RemoveableTag.displayName = "RemoveableTag"
