import * as React from "react"
import cx from "classnames"
import { v4 } from "uuid"
import {
  Avatar,
  GenericAvatarProps,
  CompanyAvatarProps,
} from "@kaizen/draft-avatar"
import styles from "./styles.module.scss"

type AvatarProps =
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
   * Takes a array of Avatars. Defaults to an empty array
   * @default []
   */
  avatars: AvatarProps[]
}

const renderAvatars = (
  avatars: AvatarProps[],
  size: AvatarGroupSize,
  maxVisible: number
) =>
  avatars?.map(
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
  )

const renderCounter = (totalAvatars: number, maxVisible: number) =>
  totalAvatars > maxVisible && (
    <li
      aria-label={`There are ${
        totalAvatars - maxVisible
      } other memebers of this group`}
    >
      <span className={styles.AvatarCounter} aria-hidden="true">
        +{totalAvatars - maxVisible}
      </span>
    </li>
  )

export const AvatarGroup = ({
  size = "medium",
  maxVisible = 2,
  avatars = [],
}: AvatarGroupProps) => (
  <ul
    className={cx(styles.AvatarGroup, styles[size])}
    aria-label="Avatar Group"
  >
    {renderAvatars(avatars, size, maxVisible)}
    {renderCounter(avatars.length, maxVisible)}
  </ul>
)
