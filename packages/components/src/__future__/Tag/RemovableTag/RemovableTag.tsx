import React from "react"
import classNames from "classnames"
import { Tag, TagProps } from "../Tag"
import {
  RemoveButton,
  RemoveButtonBaseProps,
} from "./subcomponents/RemoveButton"
import styles from "./RemovableTag.module.scss"

export type RemovableTagProps = {
  removeButtonProps: RemoveButtonBaseProps
} & Omit<TagProps, "color" | "icon">

export const RemovableTag = ({
  children,
  classNameOverride,
  // Note: We've commented out color support for now, but may introduce it back in later
  // if a good use case comes along.
  // color = "gray",
  removeButtonProps,
  ...restProps
}: RemovableTagProps): JSX.Element => (
  <Tag
    classNameOverride={classNames(classNameOverride, styles.removableTag)}
    // color={color}
    {...restProps}
  >
    {children}
    <RemoveButton
      // color={color}
      {...removeButtonProps}
    />
  </Tag>
)

RemovableTag.displayName = "RemovableTag"
