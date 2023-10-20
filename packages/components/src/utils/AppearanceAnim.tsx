import React, { useState } from "react"
import cx from "classnames"
import { useDebouncedCallback } from "use-debounce"
import styles from "./AppearanceAnim.module.scss"

type AppearanceAnimProps = {
  children: React.ReactNode
  isVisible: boolean
  className?: string | null
}

// Sync with ./AppearanceAnim.scss
const ANIM_DURATION_MS = 200
const ANIM_BUFFER = 200 // Add a buffer, just in case the css animation hasn't had a chance to finish yet

/**
 * Simply applies a css animation to transition a component in and out.
 * When the component is no longer needed, it will no longer be rendered to the
 * dom.
 */
export const AppearanceAnim = ({
  children,
  isVisible,
  className,
  ...rest
}: AppearanceAnimProps): JSX.Element | null => {
  const [isAnimIn, setIsAnimIn] = useState(false)
  const [isAnimOut, setIsAnimOut] = useState(false)
  const [prevIsOpen, setPrevIsOpen] = useState(isVisible)

  // Keeps the modal visible while the css animation is completing
  const trackAnimOutCompleted = useDebouncedCallback(
    () => {
      setIsAnimOut(false)
    },
    ANIM_DURATION_MS + ANIM_BUFFER,
    { leading: false }
  )

  // Allows us to flash the component in an "invisible" state, for one frame.
  // Then set it to "visible". This allows us to make sure the css transition
  // actually works.
  const trackAnimInCompleted = useDebouncedCallback(
    () => {
      setIsAnimIn(false)
    },
    0,
    { leading: false }
  )

  if (isVisible !== prevIsOpen) {
    setPrevIsOpen(isVisible)
    if (!isVisible) {
      trackAnimInCompleted.cancel()
      setIsAnimOut(true)
      trackAnimOutCompleted()
    } else {
      trackAnimOutCompleted.cancel()
      setIsAnimIn(true)
      trackAnimInCompleted()
    }
  }

  return isVisible || isAnimOut || isAnimIn ? (
    <div
      className={cx([
        {
          [styles.defaultHiddenState]: true,
          [styles.visibleState]: isVisible && !isAnimIn,
        },
        className,
      ])}
      {...rest}
    >
      {children}
    </div>
  ) : null
}

AppearanceAnim.displayName = "AppearanceAnim"
