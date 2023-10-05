import React, { HTMLAttributes } from "react"
import { ClearIcon } from "~components/Icons"
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
    <ClearIcon
      // TODO: Use inheritSize prop once we decide what size this should be
      role="presentation"
      onClick={() => removeButtonProps.onClick()}
    />
  </Tag>
)

RemoveableTag.displayName = "RemoveableTag"
