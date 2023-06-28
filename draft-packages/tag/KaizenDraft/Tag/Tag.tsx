import React from "react"
import classnames from "classnames"
import { Icon } from "@kaizen/component-library"
import cautionIcon from "@kaizen/component-library/icons/caution-white.icon.svg"
import clearIcon from "@kaizen/component-library/icons/clear-white.icon.svg"
import errorIcon from "@kaizen/component-library/icons/exclamation-white.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information.icon.svg"
import successIcon from "@kaizen/component-library/icons/success.icon.svg"
import { Avatar, AvatarProps } from "@kaizen/draft-avatar"
import styles from "./Tag.module.scss"

type Variant =
  | "default"
  | "sentimentPositive"
  | "sentimentNeutral"
  | "sentimentNegative"
  | "sentimentNone"
  | "validationPositive"
  | "validationInformative"
  | "validationNegative"
  | "validationCautionary"
  | "statusLive"
  | "statusDraft"
  | "statusClosed"
  | "statusAction"
  | "customIcon"
export interface TagWithAvatarProps extends Omit<DefaultTagProps, "variant"> {
  variant: "profile"
  avatar: JSX.Element | AvatarProps
}

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
  customIcon?: React.SVGAttributes<SVGElement>
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
 * {@link https://cultureamp.design/components/tag/ Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-tag--default-story Storybook}
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
    customIcon,
  } = props

  const renderCustomIcon = (
    icon: React.SVGAttributes<SVGElement>
  ): JSX.Element => (
    <span className={styles.icon}>
      {icon && <Icon icon={icon} role="presentation" />}
    </span>
  )

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
                      <Icon icon={successIcon} role="presentation" />
                    </span>
                  )
                case "validationNegative":
                  return (
                    <span className={styles.validationIcon}>
                      <Icon icon={errorIcon} role="presentation" />
                    </span>
                  )
                case "validationCautionary":
                  return (
                    <span className={styles.validationIcon}>
                      <Icon icon={cautionIcon} role="presentation" />
                    </span>
                  )
                case "validationInformative":
                  return (
                    <span className={styles.validationIcon}>
                      <Icon icon={informationIcon} role="presentation" />
                    </span>
                  )
                case "customIcon":
                  return (
                    <span className={styles.customIcon}>
                      {customIcon && renderCustomIcon(customIcon)}
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
                  <Icon
                    icon={clearIcon}
                    inheritSize
                    role="img"
                    title="Dismiss"
                  />
                </div>
              </button>
            </>
          )}
          {variant === "statusLive" && (
            <span className={styles.pulse}>
              <span className={styles.pulseRing} />
            </span>
          )}
        </>
      </div>
    </div>
  )
}

Tag.displayName = "Tag"
