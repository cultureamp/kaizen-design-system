import * as React from "react"
import cx from "classnames"
import { v4 } from "uuid"
import {
  Avatar,
  GenericAvatarProps,
  CompanyAvatarProps,
} from "@kaizen/draft-avatar"
import styles from "./styles.module.scss"

export type AvatarProps =
  | Omit<GenericAvatarProps, "size">
  | Omit<CompanyAvatarProps, "size">

export type AvatarGroupSize = "small" | "medium" | "large"
export interface AvatarGroupProps {
  /**
   * There are 3 fixed sizes available for the AvatarGroup. `"small"` will remove border and box shadow to save space.
   * @default "medium"
   */
  size?: AvatarGroupSize
  /**
   * Limits the number of avatars shown within a group. If the number of avatars exceeds the `maxVisible` a counter token will display the remaining avatars not visible.
   * @default 2
   */
  maxVisible: 2 | 3 | 4 | 5 | 6
  /**
   * Takes a array of `AvatarProps` that must have at least item.
   * In this component 'size' is ommited from the avatarProps type.
   * */
  avatars: [AvatarProps, ...AvatarProps[]]
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
        +{remainingAvatars}
      </span>
    </li>
  )
}

const renderAvatars = (
  avatars: [AvatarProps, ...AvatarProps[]],
  size: AvatarGroupSize,
  maxVisible: number
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
    {renderAvatars(avatars, size, maxVisible)}
  </ul>
)
