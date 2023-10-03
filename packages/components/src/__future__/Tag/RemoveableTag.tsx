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
    <span className={styles.clearIconContainer}>
      <ClearIcon
        inheritSize
        role="presentation"
        onClick={() => removeButtonProps.onClick()}
      />
    </span>
  </Tag>
)

RemoveableTag.displayName = "RemoveableTag"
