import React from "react"
import classnames from "classnames"
import { Avatar, AvatarProps } from "~components/Avatar"
import {
  CautionIcon,
  ClearIcon,
  ExclamationIcon,
  InformationIcon,
  LiveIcon,
  SuccessIcon,
} from "~components/Icons"
import { TagVariants } from "./types"
import styles from "./Tag.module.scss"

export type TagWithAvatarProps = Omit<DefaultTagProps, "variant"> & {
  variant: "profile"
  avatar: JSX.Element | AvatarProps
}

type Variant = (typeof TagVariants)[number]

export interface DefaultTagProps {
  variant?: Variant
  children: React.ReactNode
  size?: "medium" | "small"
  inline?: boolean
  dismissible?: boolean
  onDismiss?: React.MouseEventHandler<HTMLSpanElement>
  onMouseDown?: React.MouseEventHandler<HTMLSpanElement>
  onMouseLeave?: React.MouseEventHandler<HTMLSpanElement>
  truncateWidth?: number
}

export type TagProps = DefaultTagProps | TagWithAvatarProps

const isJSXElement = (
  imageElementOrAvatarProps: JSX.Element | AvatarProps
): imageElementOrAvatarProps is JSX.Element =>
  "props" in imageElementOrAvatarProps

const renderAvatar = (
  imageElementOrAvatarProps: JSX.Element | AvatarProps
): JSX.Element =>
  isJSXElement(imageElementOrAvatarProps) ? (
    <>{imageElementOrAvatarProps}</>
  ) : (
    <Avatar {...imageElementOrAvatarProps} size="small" />
  )

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081928978/Tags Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-tag--docs Storybook}
 */
export const Tag = (props: TagProps): JSX.Element => {
  const {
    children,
    variant = "default",
    size = "medium",
    inline = false,
    dismissible = false,
    onDismiss,
    onMouseDown,
    onMouseLeave,
    truncateWidth,
  } = props

  const isTruncated = truncateWidth && truncateWidth > 0
  const canShowIcon = size === "medium"
  return (
    <div
      className={classnames(
        styles.root,
        styles[variant],
        variant === "profile" && styles.default,
        styles[size],
        inline && styles.inline,
        dismissible && styles.dismissible
      )}
    >
      <div className={styles.layoutContainer}>
        <>
          {canShowIcon &&
            ((): JSX.Element | void => {
              switch (props.variant) {
                case "validationPositive":
                  return (
                    <span className={styles.validationIcon}>
                      <SuccessIcon role="presentation" />
                    </span>
                  )
                case "validationNegative":
                  return (
                    <span className={styles.validationIcon}>
                      <ExclamationIcon role="presentation" />
                    </span>
                  )
                case "validationCautionary":
                  return (
                    <span className={styles.validationIcon}>
                      <CautionIcon role="presentation" />
                    </span>
                  )
                case "validationInformative":
                  return (
                    <span className={styles.validationIcon}>
                      <InformationIcon role="presentation" />
                    </span>
                  )
                case "profile":
                  return (
                    <span className={styles.profile}>
                      {props.avatar && renderAvatar(props.avatar)}
                    </span>
                  )
                default:
                  return
              }
            })()}
          <span
            className={classnames(
              styles.textContent,
              isTruncated && styles.truncate
            )}
            style={{
              maxWidth: isTruncated ? truncateWidth : undefined,
            }}
          >
            {children}
          </span>
          {dismissible && (
            <>
              <button
                type="button"
                className={styles.dismissButton}
                onClick={onDismiss}
                onMouseDown={onMouseDown}
                onMouseLeave={onMouseLeave}
              >
                <div className={styles.iconWrapper}>
                  <ClearIcon inheritSize role="img" aria-label="Dismiss" />
                </div>
              </button>
            </>
          )}
          {variant === "statusLive" && (
            <span className={styles.liveIcon}>
              <LiveIcon
                role="presentation"
                classNameOverride={styles.liveIcon_base}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              />
              <LiveIcon
                role="presentation"
                classNameOverride={styles.liveIcon_1}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              />
              <LiveIcon
                role="presentation"
                classNameOverride={styles.liveIcon_2}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              />
              <LiveIcon
                role="presentation"
                classNameOverride={styles.liveIcon_3}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              />
            </span>
          )}
        </>
      </div>
    </div>
  )
}

Tag.displayName = "Tag"
