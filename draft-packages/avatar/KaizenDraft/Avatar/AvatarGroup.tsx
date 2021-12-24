import * as React from "react"
import cx from "classnames"
import { v4 } from "uuid"
import { Avatar, GenericAvatarProps, CompanyAvatarProps } from "./Avatar"
import styles from "./AvatarGroup.module.scss"

export type AvatarProps =
  | Omit<GenericAvatarProps, "size">
  | Omit<CompanyAvatarProps, "size">

export type AvatarGroupSize = "small" | "medium" | "large"
export type AvatarList = [AvatarProps, ...AvatarProps[]]

export interface AvatarGroupProps {
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
   * Note that 'size' is ommited from the `AvatarProps` type so it will throw a type error if size is provided.
   * */
  avatars: AvatarList
}

const renderCounter = (remainingAvatars: number) => {
  if (remainingAvatars <= 0) return
  return (
    <li
      aria-label={`There is ${remainingAvatars} other memeber${
        remainingAvatars > 1 && "s"
      } of this group`}
    >
      <span
        className={styles.AvatarCounter}
        aria-hidden={true}
        role="presentation"
      >
        {`+${remainingAvatars}`}
      </span>
    </li>
  )
}

const renderAvatars = (
  avatars: AvatarList,
  maxVisible: number,
  size: AvatarGroupSize
) => (
  <>
    {avatars?.map(
      (avatarProps, index) =>
        index < maxVisible && (
          <li
            key={`avatar-${v4()}`}
            className={styles.AvatarGroupItem}
            role="presentation"
          >
            <Avatar {...avatarProps} size={size} />
          </li>
        )
    )}
    {renderCounter(avatars?.length - maxVisible)}
  </>
)

export const AvatarGroup = ({
  size = "medium",
  maxVisible = 2,
  avatars,
}: AvatarGroupProps) => (
  <ul
    className={cx(styles.AvatarGroup, styles[size])}
    aria-label="Avatar Group"
  >
    {renderAvatars(avatars, maxVisible, size)}
  </ul>
)
