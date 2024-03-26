import React from "react"
import { AvatarProps } from "~components/Avatar"
import { TagVariants } from "./types"

export type TagWithAvatarProps = Omit<DefaultTagProps, "variant"> & {
  variant: "profile"
  avatar: JSX.Element | AvatarProps
}

type Variant = (typeof TagVariants)[number]

export interface DefaultTagProps {
  variant?: Variant
  children: React.ReactNode
  size?: "medium" | "small"
  inline?: boolean
  dismissible?: boolean
  onDismiss?: React.MouseEventHandler<HTMLSpanElement>
  onMouseDown?: React.MouseEventHandler<HTMLSpanElement>
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>
  truncateWidth?: number
}

export type TagProps = DefaultTagProps | TagWithAvatarProps

export const Tag = (props: TagProps): JSX.Element => {
  const { variant = "default" } = props
  return <div>Testing Tag component {variant}</div>
}

Tag.displayName = "Tag"
