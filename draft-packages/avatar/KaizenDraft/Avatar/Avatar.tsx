import React, { useState } from "react"
import cx from "classnames"
import { Icon } from "@kaizen/component-library"
// @ts-ignore
import { Textfit } from "react-textfit"
// @ts-ignore
import userIcon from "@kaizen/component-library/icons/user.icon.svg"
// @ts-ignore
import styles from "./styles.module.scss"

type AvatarSizes = "small" | "medium" | "large"

const getInitials: (fullName: string, max2Characters?: boolean) => string = (
  fullName,
  max2Characters = false
) =>
  fullName
    .split(/\s/)
    .reduce((acc, name) => `${acc}${name.slice(0, 1)}`, "")
    .toUpperCase()
    .substring(0, max2Characters ? 2 : 8)

const getMaxFontSizePixels: (size: AvatarSizes) => number = size => {
  if (size === "small") return 8
  if (size === "medium") return 16
  return 22
}

export interface AvatarProps {
  /**
   * We use this for the alt text of the avatar, and to derive intials when user has no avatar image.
   */
  fullName: string
  /**
   * Src for the avatar image to load, if not passed we will derive initials from the full name.
   */
  avatarSrc?: string
  /**
   * Shows a different background colour if the avatar is the current user.
   * @default "true"
   */
  isCurrentUser?: boolean
  /**
   * There are 3 fixed avatar sizes. "small" will remove border and box shadow to save space.
   * @default "medium"
   */
  size?: AvatarSizes
}

export const Avatar = ({
  fullName,
  avatarSrc,
  size = "medium",
  isCurrentUser = true,
}: AvatarProps) => {
  const [avatarState, setAvatarState] = useState<
    "none" | "error" | "loading" | "success"
  >(avatarSrc ? "loading" : "none")

  const isLongName = getInitials(fullName).length > 2 && size !== "small"

  const onImageFailure = () => setAvatarState("error")
  const onImageSuccess = () => setAvatarState("success")
  return (
    <div
      className={cx(styles.wrapper, styles[size], {
        [styles.personal]: isCurrentUser && avatarState === "none",
        [styles.otherUser]: !isCurrentUser && avatarState === "none",
        [styles.loading]: avatarState === "loading" || avatarState === "error",
      })}
    >
      {avatarState !== "none" && (
        <img
          className={styles.avatarImage}
          src={avatarSrc}
          onError={onImageFailure}
          onLoad={onImageSuccess}
          alt={fullName}
        />
      )}
      {avatarState === "none" && (
        <div
          className={cx(styles.initials, {
            [styles.longName]: isLongName,
          })}
        >
          {isLongName ? (
            // Only called if 3 or more initials, fits text width for long names
            <Textfit mode="single" max={getMaxFontSizePixels(size)}>
              {getInitials(fullName)}
            </Textfit>
          ) : (
            getInitials(fullName, size === "small")
          )}
        </div>
      )}
      {avatarState === "error" && (
        <span className={styles.fallbackIcon}>
          <Icon inheritSize role="presentation" icon={userIcon} />
        </span>
      )}
    </div>
  )
}
