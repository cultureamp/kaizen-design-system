import React, { useEffect, useState, Children } from "react"
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

const UseAnimation: React.FunctionComponent<{
  isEnabled: boolean
  children: any
}> = ({ isEnabled, children }) => {
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
  }, [children])

  return isEnabled ? (
    <CSSTransition
      in={isAnimating}
      timeout={{
        enter: 700,
        exit: 2,
      }}
      classNames={{
        enter: styles.enter,
        enterActive: styles.enterActive,
        exit: styles.exit,
        exitActive: styles.exitActive,
      }}
      onEntered={() => setIsAnimating(false)}
    >
      {children}
    </CSSTransition>
  ) : (
    children
  )
}

export const Badge = (props: BadgeProps) => {
  const {
    children,
    variant = "default",
    reversed,
    animateChange = false,
  } = props

  return (
    <UseAnimation isEnabled={animateChange}>
      <span
        className={classNames(styles.badge, {
          [styles.default]: variant === "default",
          [styles.active]: variant === "active",
          [styles.dark]: variant === "dark",
          [styles.reversed]: reversed,
        })}
      >
        {children}
      </span>
    </UseAnimation>
  )
}
