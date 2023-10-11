import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import { Heading, HeadingProps } from "@kaizen/typography"
import { CautionIcon } from "~components/Icon/CautionIcon"
import { CloseIcon } from "~components/Icon/CloseIcon"
import { ExclamationIcon } from "~components/Icon/ExclamationIcon"
import { InformationIcon } from "~components/Icon/InformationIcon"
import { SecurityTipIcon } from "~components/Icon/SecurityTipIcon"
import { SuccessIcon } from "~components/Icon/SuccessIcon"
import { NotificationType } from "~components/Notification/types"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./GenericNotification.module.scss"

const renderIcon = (type: NotificationType): JSX.Element | null => {
  switch (type) {
    case "positive":
      return <SuccessIcon role="presentation" inheritSize />
    case "negative":
      return <ExclamationIcon role="presentation" inheritSize />
    case "cautionary":
      return <CautionIcon role="presentation" inheritSize />
    case "informative":
      return <InformationIcon role="presentation" inheritSize />
    case "security":
      return <SecurityTipIcon role="presentation" inheritSize />
    default:
      return null
  }
}

export type GenericNotificationProps = {
  type: NotificationType
  style: "global" | "inline" | "toast"
  children?: React.ReactNode
  title?: string
  persistent?: boolean
  onHide?: () => void
  noBottomMargin?: boolean
  forceMultiline?: boolean
  headingProps?: HeadingProps
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const GenericNotification = ({
  type,
  style,
  children,
  title,
  persistent = false,
  onHide,
  noBottomMargin,
  forceMultiline,
  headingProps,
  classNameOverride,
  ...restProps
}: GenericNotificationProps): JSX.Element | null => {
  const [isHidden, setIsHidden] = useState<boolean>(true)
  const [isRemoved, setIsRemoved] = useState<boolean>(false)

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    requestAnimationFrame(() => {
      if (containerRef.current) {
        setIsHidden(false)
      }
    })
  }, [])

  const getMarginTop = (): string => {
    if (isHidden && containerRef.current) {
      return -containerRef.current.clientHeight + "px"
    }
    return "0"
  }

  const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>): void => {
    // Be careful: this assumes the final CSS property to be animated is "margin-top".
    if (isHidden && e.propertyName === "margin-top") {
      setIsRemoved(true)
      onHide?.()
    }
  }

  if (isRemoved) {
    return null
  }

  return (
    <div
      ref={containerRef}
      className={classnames(
        styles.notification,
        styles[type],
        styles[style],
        isHidden && styles.hidden,
        noBottomMargin && styles.noBottomMargin,
        classNameOverride,
        persistent && styles.persistent
      )}
      style={{ marginTop: getMarginTop() }}
      onTransitionEnd={onTransitionEnd}
      {...restProps}
    >
      <div className={styles.icon}>{renderIcon(type)}</div>
      <div
        className={classnames(
          styles.textContainer,
          forceMultiline && styles.forceMultiline
        )}
      >
        {style !== "global" && (
          <NotificationHeading titleProp={title} headingProps={headingProps} />
        )}
        {children && <div className={styles.text}>{children}</div>}
      </div>
      {!persistent && <CancelButton onClick={() => setIsHidden(true)} />}
    </div>
  )
}

GenericNotification.displayName = "GenericNotification"

type CancelButtonProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const CancelButton = ({ onClick }: CancelButtonProps): JSX.Element => (
  <button
    className={styles.cancel}
    type="button"
    onClick={onClick}
    data-testid="close-button"
    aria-label="Close notification"
  >
    <CloseIcon role="presentation" />
  </button>
)

type NotificationHeadingProps = {
  titleProp?: HeadingProps["children"]
  headingProps?: HeadingProps
}

const NotificationHeading = ({
  titleProp,
  headingProps,
}: NotificationHeadingProps): JSX.Element | null => {
  if (headingProps) {
    return (
      <Heading
        variant={headingProps.variant || "heading-6"}
        tag={headingProps.tag || "div"}
        color={headingProps.color || "dark"}
        classNameOverride={styles.notificationTitle}
      >
        {headingProps.children}
      </Heading>
    )
  } else if (titleProp) {
    return (
      <Heading
        variant="heading-6"
        tag="div"
        color="dark"
        classNameOverride={styles.notificationTitle}
      >
        {titleProp}
      </Heading>
    )
  } else return null
}
