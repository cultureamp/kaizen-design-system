import React, { forwardRef, useEffect, useRef, useState, type HTMLAttributes } from 'react'
import classnames from 'classnames'
import { type HeadingProps } from '~components/Heading'
import { type NotificationVariant } from '~components/Notification/types'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { isRefObject } from '~components/utils/isRefObject'
import { CancelButton } from '../CancelButton'
import { NotificationHeading } from '../NotificationHeading'
import { NotificationIconVariant } from '../NotificationIcon'
import styles from './GenericNotification.module.css'

type GenericNotificationBase = {
  style: 'global' | 'inline' | 'toast'
  children?: React.ReactNode
  title?: string
  persistent?: boolean
  onHide?: () => void
  noBottomMargin?: boolean
  forceMultiline?: boolean
  headingProps?: HeadingProps
} & Omit<OverrideClassName<HTMLAttributes<HTMLDivElement>>, 'style'>

export type GenericNotificationVariant = {
  variant: NotificationVariant
}

export type GenericNotificationProps = GenericNotificationBase & GenericNotificationVariant

export const GenericNotification = forwardRef<HTMLDivElement, GenericNotificationProps>(
  (
    {
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
    ref,
  ): JSX.Element | null => {
    const [isHidden, setIsHidden] = useState<boolean>(true)
    const [isRemoved, setIsRemoved] = useState<boolean>(false)

    const fallbackRef = useRef<HTMLDivElement>(null)
    const containerRef = isRefObject(ref) ? ref : fallbackRef
    const entranceFrame = useRef<number>()

    useEffect(() => {
      entranceFrame.current = requestAnimationFrame(() => {
        entranceFrame.current = undefined
        if (containerRef.current) {
          setIsHidden(false)
        }
      })
      return () => {
        if (entranceFrame.current !== undefined) {
          cancelAnimationFrame(entranceFrame.current)
        }
      }
    }, [containerRef])

    const dismiss = (): void => {
      if (entranceFrame.current !== undefined) {
        cancelAnimationFrame(entranceFrame.current)
        entranceFrame.current = undefined
      }
      if (containerRef.current) {
        // Individual CSSOM writes are permitted by CSP style-src-attr 'none'.
        containerRef.current.style.marginTop = -containerRef.current.clientHeight + 'px'
      }
      setIsHidden(true)
    }

    const onTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>): void => {
      // Be careful: this assumes the final CSS property to be animated is "margin-top".
      if (
        isHidden &&
        !isRemoved &&
        e.target === e.currentTarget &&
        e.propertyName === 'margin-top'
      ) {
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
          styles[variant],
          styles[style],
          isHidden && styles.hidden,
          noBottomMargin && styles.noBottomMargin,
          classNameOverride,
          persistent && styles.persistent,
        )}
        onTransitionEnd={onTransitionEnd}
        {...restProps}
      >
        <div className={styles.icon}>
          <NotificationIconVariant variant={variant} />
        </div>
        <div className={classnames(styles.textContainer, forceMultiline && styles.forceMultiline)}>
          {style !== 'global' && (
            <NotificationHeading titleProp={title} headingProps={headingProps} />
          )}
          {children && <div className={styles.text}>{children}</div>}
        </div>
        {!persistent && <CancelButton onClick={dismiss} />}
      </div>
    )
  },
)

GenericNotification.displayName = 'GenericNotification'
