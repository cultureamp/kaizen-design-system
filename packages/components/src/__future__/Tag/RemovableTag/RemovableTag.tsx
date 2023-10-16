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
} & TagProps

export const RemovableTag = ({
  children,
  classNameOverride,
  color = "gray",
  removeButtonProps,
  ...restProps
}: RemovableTagProps): JSX.Element => (
  <Tag
    classNameOverride={classNames(classNameOverride, styles.removableTag)}
    {...restProps}
    color={color}
  >
    {children}
    <RemoveButton color={color} {...removeButtonProps} />
  </Tag>
)

RemovableTag.displayName = "RemovableTag"
