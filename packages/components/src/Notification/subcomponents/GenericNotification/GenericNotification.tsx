import React, { HTMLAttributes, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import { HeadingProps } from "@kaizen/typography"
import { NotificationType } from "~components/Notification/types"
import { OverrideClassName } from "~types/OverrideClassName"
import { CancelButton } from "../CancelButton"
import { NotificationHeading } from "../NotificationHeading"
import { NotificationIcon } from "../NotificationIcon"
import styles from "./GenericNotification.module.scss"

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
      <div className={styles.icon}>
        <NotificationIcon type={type} />
      </div>
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
