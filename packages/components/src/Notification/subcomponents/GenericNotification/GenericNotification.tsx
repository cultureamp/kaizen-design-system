import React, {
  forwardRef,
  HTMLAttributes,
  useEffect,
  useRef,
  useState,
} from "react"
import classnames from "classnames"
import { HeadingProps } from "~components/Heading"
import {
  NotificationType,
  NotificationVariant,
} from "~components/Notification/types"
import { OverrideClassName } from "~components/types/OverrideClassName"
import { isRefObject } from "~components/utils/isRefObject"
import { CancelButton } from "../CancelButton"
import { NotificationHeading } from "../NotificationHeading"
import {
  NotificationIconType,
  NotificationIconVariant,
} from "../NotificationIcon"
import styles from "./GenericNotification.module.scss"

type GenericNotificationBase = {
  style: "global" | "inline" | "toast"
  children?: React.ReactNode
  title?: string
  persistent?: boolean
  onHide?: () => void
  noBottomMargin?: boolean
  forceMultiline?: boolean
  headingProps?: HeadingProps
} & Omit<OverrideClassName<HTMLAttributes<HTMLDivElement>>, "style">

export type GenericNotificationType = {
  /**
   * @deprecated Please use `variant` instead
   */
  type: NotificationType
  variant?: never
}

export type GenericNotificationVariant = {
  /**
   * @deprecated Please use `variant` instead
   */
  type?: never
  /**
   * If you are transitioning from `type`:
   * - `positive` should be `success`
   * - `negative` should be `warning`
   */
  variant: NotificationVariant
}

export type GenericNotificationProps = GenericNotificationBase &
  (GenericNotificationType | GenericNotificationVariant)

export const GenericNotification = forwardRef<
  HTMLDivElement,
  GenericNotificationProps
>(
  (
    {
      type,
      variant,
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
    },
    ref
  ): JSX.Element | null => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [isRemoved, setIsRemoved] = useState<boolean>(false)

    const fallbackRef = useRef<HTMLDivElement>(null)
    const containerRef = isRefObject(ref) ? ref : fallbackRef

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

    const onTransitionEnd = (
      e: React.TransitionEvent<HTMLDivElement>
    ): void => {
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
          variant ? styles[variant] : styles[type],
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
          {type ? (
            <NotificationIconType type={type} />
          ) : (
            <NotificationIconVariant variant={variant} />
          )}
        </div>
        <div
          className={classnames(
            styles.textContainer,
            forceMultiline && styles.forceMultiline
          )}
        >
          {style !== "global" && (
            <NotificationHeading
              titleProp={title}
              headingProps={headingProps}
            />
          )}
          {children && <div className={styles.text}>{children}</div>}
        </div>
        {!persistent && <CancelButton onClick={() => setIsHidden(true)} />}
      </div>
    )
  }
)

GenericNotification.displayName = "GenericNotification"
