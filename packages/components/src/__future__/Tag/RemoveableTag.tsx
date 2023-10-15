import React, { HTMLAttributes } from "react"
import classNames from "classnames"
import {
  RemoveButton,
  RemoveButtonBaseProps,
} from "./subcomponents/RemoveButton"
import { Tag, TagProps } from "./Tag"
import styles from "./RemoveableTag.module.scss"

export type RemoveableTagProps = {
  removeButtonProps: RemoveButtonBaseProps
} & TagProps

export const RemoveableTag = ({
  children,
  classNameOverride,
  color = "gray",
  removeButtonProps,
  ...restProps
}: RemoveableTagProps): JSX.Element => (
  <Tag
    classNameOverride={classNames(classNameOverride, styles.removeableTag)}
    {...restProps}
    color={color}
  >
    {children}
    <RemoveButton color={color} onClick={removeButtonProps.onClick} />
  </Tag>
)

RemoveableTag.displayName = "RemoveableTag"
