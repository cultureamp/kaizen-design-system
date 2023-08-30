import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import {
  Avatar,
  CompanyAvatarProps,
  GenericAvatarProps,
} from "~components/Avatar"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./AvatarGroup.module.scss"

export type AvatarGroupAvatarProps =
  | Omit<GenericAvatarProps, "size">
  | Omit<CompanyAvatarProps, "size">

export type AvatarGroupSize = "small" | "medium" | "large"
export type AvatarList = [AvatarGroupAvatarProps, ...AvatarGroupAvatarProps[]]

export interface AvatarGroupProps
  extends OverrideClassName<HTMLAttributes<HTMLUListElement>> {
  /**
   * There are 3 fixed sizes available. `"small"` will remove border and box shadow to save space.
   * @default "medium"
   */
  size?: AvatarGroupSize
  /**
   * If the length of Avatars exceeds the `maxVisible` a counter token will render
   * @default 2
   */
  maxVisible: 2 | 3 | 4 | 5 | 6
  /**
   * Takes a array of `AvatarProps` that must have at least item.
   * Note that 'size' is omitted from the `AvatarProps` type so it will throw a type error if size is provided.
   * */
  avatars: AvatarList
}

const renderCounter = (remainingAvatars: number): JSX.Element | void => {
  if (remainingAvatars <= 0) return
  return (
    <li
      aria-label={`There ${
        remainingAvatars > 1
          ? `are ${remainingAvatars} other members`
          : `is ${remainingAvatars} other member`
      } of this group`}
      className={styles.AvatarGroupItem}
    >
      <span className={styles.AvatarCounter} aria-hidden={true}>
        {`+${remainingAvatars}`}
      </span>
    </li>
  )
}

const renderAvatars = (
  avatars: AvatarList,
  maxVisible: number,
  size: AvatarGroupSize
): JSX.Element => (
  <>
    {avatars?.map(
      (avatarProps, index) =>
        index < maxVisible && (
          <li key={`avatar-${index}`} className={styles.AvatarGroupItem}>
            <Avatar {...avatarProps} size={size} />
          </li>
        )
    )}
    {renderCounter(avatars?.length - maxVisible)}
  </>
)

/**
 * {@link https://cultureamp.design/components/avatar-group/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-avatar-avatar-group--default-story Storybook}
 */
export const AvatarGroup = ({
  size = "medium",
  maxVisible = 2,
  avatars,
  classNameOverride,
  ...restProps
}: AvatarGroupProps): JSX.Element => (
  <ul
    className={classnames(styles.AvatarGroup, styles[size], classNameOverride)}
    aria-label="Avatar Group"
    {...restProps}
  >
    {renderAvatars(avatars, maxVisible, size)}
  </ul>
)
