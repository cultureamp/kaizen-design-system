import * as React from "react"
import cx from "classnames"
import {
  Avatar,
  GenericAvatarProps,
  CompanyAvatarProps,
} from "@kaizen/draft-avatar"
import styles from "./styles.module.scss"

type AvatarProps =
  | Omit<GenericAvatarProps, "size">
  | Omit<CompanyAvatarProps, "size">

export interface AvatarGroupProps {
  /**
   * There are 3 fixed sizes available for the AvatarGroup. `"small"` will remove border and box shadow to save space.
   * @default "medium"
   */
  size?: "small" | "medium" | "large"
  /**
   * Limits the number of avatars shown within a group. If the number of avatars exceeds the `maxVisible` a counter token will display the remaining avatars not visible.
   * @default 2
   */
  maxVisible: 2 | 3 | 4 | 5 | 6
  /**
   * Takes a array of Avatars
   */
  avatars: AvatarProps[]
}

export const AvatarGroup = ({
  size = "medium",
  maxVisible = 2,
  avatars,
}: AvatarGroupProps) => (
  <ul
    className={cx(styles.AvatarGroup, styles[size])}
    aria-label="Avatar Group"
  >
    {avatars?.map((avatarProps: AvatarProps, index) =>
      index < maxVisible ? (
        <li className={styles.AvatarGroupItem} role="presentation">
          <Avatar {...avatarProps} size={size} />
        </li>
      ) : null
    )}
    {avatars && avatars.length > maxVisible && (
      <li
        aria-label={`There are ${
          avatars.length - maxVisible
        } other memebers of this group`}
      >
        <span className={styles.AvatarCounter} aria-hidden="true">
          +{avatars.length - maxVisible}
        </span>
      </li>
    )}
  </ul>
)
