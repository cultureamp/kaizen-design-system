import React, { useState } from "react"
import { useDebouncedCallback } from "use-debounce"

type AnimationProps = {
  isAnimIn?: boolean
  isAnimOut?: boolean
  prevIsOpen?: boolean
  animationDuration?: number
  isVisible: boolean
}

const ANIM_DURATION_MS = 400

export const AnimationContext = React.createContext<AnimationProps>({
  isVisible: false,
  isAnimIn: false,
  isAnimOut: false,
})

/**
 * Simply applies a css animation to transition a component in and out.
 * When the component is no longer needed, it will no longer be rendered to the
 * dom.
 */
export const AnimationProvider = ({
  isVisible,
  animationDuration = ANIM_DURATION_MS,
  ...otherProps
}: AnimationProps & { children?: React.ReactNode }): JSX.Element => {
  const [isAnimIn, setIsAnimIn] = useState(false)
  const [isAnimOut, setIsAnimOut] = useState(false)
  const [prevIsOpen, setPrevIsOpen] = useState(false)

  // Keeps the modal visible while the css animation is completing
  const trackAnimOutCompleted = useDebouncedCallback(
    () => {
      setIsAnimOut(false)
    },
    animationDuration,
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

  return (
    <AnimationContext.Provider
      value={{
        isVisible,
        isAnimOut,
        isAnimIn,
      }}
      {...otherProps}
    />
  )
}

export const useAnimation = (): AnimationProps => {
  const context = React.useContext(AnimationContext)
  if (!context) {
    throw new Error("useAnimation must be used within a AnimationProvider")
  }
  return context
}
