import React, { useState, useEffect, useRef, HTMLAttributes } from "react"
import classnames from "classnames"
import { Textfit } from "react-textfit"
import { OverrideClassName } from "~types/OverrideClassName"
import { UserIcon } from ".."
import styles from "./Avatar.module.scss"

export type AvatarSizes = "small" | "medium" | "large" | "xlarge" | "xxlarge"

type BaseAvatarProps = {
  /**
   * We use this for the alt text of the avatar, and to derive intials when user has no avatar image.
   */
  fullName?: string
  /**
   * There are 5 fixed avatar sizes. `"small"` will remove border and box shadow to save space.
   */
  size?: AvatarSizes
  /**
   * Src for the avatar img tag - if not passed we will derive initials from the full name.
   * Note that the fullName prop will be used as the alt text.
   */
  avatarSrc?: string
  /**
   * Default behaviour when an avatarSrc is not provided is to generate initials from the username.
   * This disables this feature and shows the generic avatar.
   * Enable this prop when there is no specific individual or group identified.
   */
  disableInitials?: boolean
  /**
   * Renders Company Avatar variant - If true `fullName` and `avatarSrc` will be strictly typed.
   */
  isCompany?: boolean
} & OverrideClassName<HTMLAttributes<HTMLSpanElement>>

export type GenericAvatarProps = BaseAvatarProps & {
  isCompany?: false
  /**
   * Shows a different background colour if the avatar is the current user and does not have a avatar img.
   * @default "true"
   */
  isCurrentUser?: boolean
}

export type CompanyAvatarProps = BaseAvatarProps & {
  fullName: string
  avatarSrc: string
  disableInitials?: undefined
  isCompany: true
  isCurrentUser?: undefined
}

export type AvatarProps = GenericAvatarProps | CompanyAvatarProps

const getInitials = (
  fullName?: string,
  max2Characters: boolean = false
): string =>
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

const fallbackIcon = (fullName: string): JSX.Element => {
  if (fullName) {
    return <UserIcon inheritSize role="img" aria-label={fullName} />
  }

  return <UserIcon inheritSize role="presentation" />
}

const renderInitials = (
  fullName = "",
  size: AvatarSizes,
  disableInitials = false
): JSX.Element => {
  const initials = getInitials(fullName)
  const isLongName = initials.length > 2 && size !== "small"
  const renderFallback = disableInitials || initials === ""

  return renderFallback ? (
    <span className={styles.fallbackIcon}>{fallbackIcon(fullName)}</span>
  ) : (
    <abbr
      className={classnames(styles.initials, isLongName && styles.longName)}
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

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3064857475/Avatar Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-avatar-avatar--docs Storybook}
 */
export const Avatar = ({
  fullName,
  size = "medium",
  avatarSrc,
  disableInitials = false,
  isCompany = false,
  isCurrentUser = true,
  classNameOverride,
  ...restProps
}: AvatarProps): JSX.Element => {
  const [avatarState, setAvatarState] = useState<
    "none" | "error" | "loading" | "success"
  >(avatarSrc ? "loading" : "none")
  const image = useRef<HTMLImageElement>(null)
  const renderInitialAvatar =
    !isCompany && (avatarState === "none" || avatarState === "error")

  useEffect(() => {
    setAvatarState(avatarSrc ? "loading" : "none")
  }, [avatarSrc])

  const onImageFailure = (): void => setAvatarState("error")
  const onImageSuccess = (): void => setAvatarState("success")

  // if the image is cached onLoad may not trigger: https://stackoverflow.com/a/59809184
  useEffect(() => {
    if (image?.current?.complete) onImageSuccess()
  }, [image])

  const isNoneOrError = avatarState === "none" || avatarState === "error"
  const isPersonal = isNoneOrError && isCurrentUser
  const isOtherUser = isNoneOrError && !isCurrentUser

  return (
    <span
      className={classnames(
        styles.wrapper,
        styles[size],
        classNameOverride,
        isCompany && styles.company,
        isPersonal && styles.personal,
        isOtherUser && styles.otherUser,
        (avatarState === "loading" || avatarState === "error") && styles.loading
      )}
      {...restProps}
    >
      {avatarState !== "none" && (
        <img
          ref={image}
          className={classnames(
            styles.avatarImage,
            isCompany && styles.companyAvatarImage
          )}
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
