import React, { useState, useEffect, useRef } from "react"
import cx from "classnames"
import { Icon } from "@kaizen/component-library"
import { Textfit } from "react-textfit"
import userIcon from "@kaizen/component-library/icons/user.icon.svg"
import styles from "./styles.module.scss"

export type AvatarSizes = "small" | "medium" | "large" | "xlarge" | "xxlarge"

export interface GenericAvatarProps {
  /**
   * Src for the avatar img tag - if not passed we will derive initials from the full name.
   * Note that the fullName prop will be used as the alt text.
   */
  avatarSrc?: string
  /**
   * We use this for the alt text of the avatar, and to derive intials when user has no avatar image.
   */
  fullName?: string
  /**
   * There are 5 fixed avatar sizes. `"small"` will remove border and box shadow to save space.
   * @default "medium"
   */
  size?: AvatarSizes
  /**
   * Default behaviour when an avatarSrc is not provided is to generate initials from the username.
   * This disables this feature and shows the generic avatar.
   * Enable this prop when there is no specific individual or group identified.
   */
  disableInitials?: boolean
  /**
   * Shows a different background colour if the avatar is the current user and does not have a avatar img.
   * @default "true"
   */
  isCurrentUser?: boolean
  /**
   * Renders Company Avatar variant - If true `fullName` and `avatarSrc` will be strictly typed.
   */
  isCompany?: false
}

export interface CompanyAvatarProps
  extends Omit<
    GenericAvatarProps,
    "isCompany" | "isCurrentUser" | "disableInitials" | "avatarSrc" | "fullName"
  > {
  isCurrentUser?: undefined
  disableInitials?: undefined
  avatarSrc: string
  fullName: string
  isCompany: true
}

export type AvatarProps = GenericAvatarProps | CompanyAvatarProps

const getInitials: (fullName?: string, max2Characters?: boolean) => string = (
  fullName,
  max2Characters = false
) =>
  fullName == null
    ? ""
    : fullName
        .split(/\s/)
        .reduce((acc, name) => `${acc}${name.slice(0, 1)}`, "")
        .toUpperCase()
        .substring(0, max2Characters ? 2 : 8)

const getMaxFontSizePixels: (size: AvatarSizes) => number = size => {
  if (size === "small") return 8
  if (size === "medium") return 16
  if (size === "xlarge" || size === "xxlarge") return 34
  return 22
}

const fallbackIcon = (fullName: string) => (
  <span className={styles.fallbackIcon}>
    <Icon
      inheritSize
      role={fullName ? "img" : "presentation"}
      title={fullName}
      icon={userIcon}
    />
  </span>
)

const renderInitials = (
  fullName = "",
  size: AvatarSizes,
  disableInitials = false
) => {
  const initials = getInitials(fullName)
  const isLongName = initials.length > 2 && size !== "small"
  const renderFallback = disableInitials || initials === ""

  return renderFallback ? (
    fallbackIcon(fullName)
  ) : (
    <abbr
      className={cx(styles.initials, {
        [styles.longName]: isLongName,
      })}
      title={fullName || ""}
    >
      {isLongName ? (
        // Only called if 3 or more initials, fits text width for long names
        <Textfit mode="single" max={getMaxFontSizePixels(size)}>
          {initials}
        </Textfit>
      ) : (
        getInitials(fullName, size === "small")
      )}
    </abbr>
  )
}

export const Avatar = (props: AvatarProps) => {
  const {
    fullName,
    avatarSrc,
    disableInitials,
    size = "medium",
    isCurrentUser = true,
    isCompany = false,
  } = props
  const [avatarState, setAvatarState] = useState<
    "none" | "error" | "loading" | "success"
  >(avatarSrc ? "loading" : "none")
  const image = useRef<HTMLImageElement>(null)
  const renderInitialAvatar =
    !isCompany && (avatarState === "none" || avatarState === "error")

  useEffect(() => {
    setAvatarState(avatarSrc ? "loading" : "none")
  }, [avatarSrc])

  const onImageFailure = () => setAvatarState("error")
  const onImageSuccess = () => setAvatarState("success")

  // if the image is cached onLoad may not trigger: https://stackoverflow.com/a/59809184
  useEffect(() => {
    if (image?.current?.complete) onImageSuccess()
  }, [image])

  return (
    <span
      className={cx(styles.wrapper, styles[size], {
        [styles.company]: isCompany,
        [styles.personal]:
          isCurrentUser && (avatarState === "none" || avatarState === "error"),
        [styles.otherUser]:
          !isCurrentUser && (avatarState === "none" || avatarState === "error"),
        [styles.loading]: avatarState === "loading" || avatarState === "error",
      })}
    >
      {avatarState !== "none" && (
        <img
          ref={image}
          className={cx(styles.avatarImage, {
            [styles.companyAvatarImage]: isCompany,
          })}
          src={avatarSrc}
          onError={onImageFailure}
          onLoad={onImageSuccess}
          alt={fullName || ""}
        />
      )}
      {renderInitialAvatar && renderInitials(fullName, size, disableInitials)}
    </span>
  )
}
