import React, { HTMLAttributes } from "react"
import { ClearButton } from "~components/ClearButton"
import { OverrideClassName } from "~types/OverrideClassName"
import { Tag, TagProps } from "./Tag"

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
  <Tag classNameOverride={classNameOverride} icon={icon} color={color}>
    {children}
    <ClearButton onClick={() => removeButtonProps.onClick()} />
  </Tag>
)

RemoveableTag.displayName = "RemoveableTag"
