import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { CSSTransition } from "react-transition-group"

const styles = require("./styles.module.scss")

type Variant = "default" | "active" | "dark"

export interface BadgeProps {
  readonly children: string
  readonly variant?: Variant
  readonly reversed?: boolean
  /**
   * Enables an animation when the badge text change to draw users' attention.
   * @default "false"
   */
  readonly animateChange?: boolean
}

export const Badge = (props: BadgeProps) => {
  const {
    children,
    variant = "default",
    reversed,
    animateChange = false,
  } = props

  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [children])

  return (
    <span
      className={classNames(styles.badge, {
        [styles.default]: variant === "default",
        [styles.active]: variant === "active",
        [styles.dark]: variant === "dark",
        [styles.reversed]: reversed,
      })}
    >
      <>
        {animateChange && (
          <CSSTransition
            in={isAnimating}
            timeout={{
              enter: 700,
              exit: 0,
            }}
            classNames={{
              enter: styles.enter,
              enterActive: styles.enterActive,
            }}
            onEntered={() => setIsAnimating(false)}
          >
            <span className={styles.animate} />
          </CSSTransition>
        )}

        {children}
      </>
    </span>
  )
}
