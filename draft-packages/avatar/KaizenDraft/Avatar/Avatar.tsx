import React, { useState } from "react"
import cx from "classnames"
import { Textfit } from "react-textfit"
import { Icon } from "@kaizen/component-library"
// @ts-ignore
import userIcon from "@kaizen/component-library/icons/user.icon.svg"
// @ts-ignore
import styles from "./styles.module.scss"

const getInitials: (fullName: string) => string = fullName =>
  fullName.split(/\s/).reduce((acc, name) => `${acc}${name.slice(0, 1)}`, "")

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
   * There are 2 fixed avatar sizes, pass "inherit" to allow for a flexible size which keeps aspect ratio.
   * @default "medium"
   */
  size?: "inherit" | "medium" | "large"
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
  const onImageFailure = () => {
    setAvatarState("error")
  }
  const onImageSuccess = () => {
    setAvatarState("success")
  }
  return (
    <div
      className={cx(styles.wrapper, styles[size], {
        [styles.personal]: isCurrentUser && avatarState === "none",
        [styles.otherUser]: !isCurrentUser && avatarState === "none",
        [styles.loading]: avatarState === "loading" || avatarState === "error",
      })}
    >
      <div className={styles.wrapperInner}>
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
          <div className={styles.initials}>
            {getInitials(fullName).length > 3 ? (
              // Only called if 4 or more initials, fits text width ways for long names
              <Textfit mode="single">{getInitials(fullName)}</Textfit>
            ) : (
              getInitials(fullName)
            )}
          </div>
        )}
        {avatarState === "error" && (
          <span className={styles.fallbackIcon}>
            <Icon inheritSize role="presentation" icon={userIcon} />
          </span>
        )}
      </div>
    </div>
  )
}
