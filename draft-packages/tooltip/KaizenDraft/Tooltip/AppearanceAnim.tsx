import React, { useState } from "react"
import { useDebouncedCallback } from "use-debounce"

type AnimationProps = {
  isAnimIn?: boolean,
  isAnimOut?: boolean,
  prevIsOpen?: boolean,
  isVisible: boolean
}

// Sync with ./AppearanceAnim.scss
const ANIM_DURATION_MS = 200
const ANIM_BUFFER = 200 // Add a buffer, just in case the css animation hasn't had a chance to finish yet

export const AnimationContext = React.createContext<AnimationProps>({
  isVisible: false,
  isAnimIn: false,
  isAnimOut: false,
});

/**
 * Simply applies a css animation to transition a component in and out.
 * When the component is no longer needed, it will no longer be rendered to the
 * dom.
 */
export const AnimationProvider = ({ isVisible, ...otherProps }) => {
  const [isAnimIn, setIsAnimIn] = useState(false)
  const [isAnimOut, setIsAnimOut] = useState(false)
  const [prevIsOpen, setPrevIsOpen] = useState(false)

  // Keeps the modal visible while the css animation is completing
  const [
    trackAnimOutCompleted,
    cancelTrackAnimOutCompleted,
  ] = useDebouncedCallback(
    () => {
      setIsAnimOut(false)
    },
    ANIM_DURATION_MS + ANIM_BUFFER,
    { leading: false }
  )

  // Allows us to flash the component in an "invisible" state, for one frame.
  // Then set it to "visible". This allows us to make sure the css transition
  // actually works.
  const [
    trackAnimInCompleted,
    cancelTrackAnimInCompleted,
  ] = useDebouncedCallback(
    () => {
      setIsAnimIn(false)
    },
    0,
    { leading: false }
  )

  if (isVisible !== prevIsOpen) {
    setPrevIsOpen(isVisible)
    if (!isVisible) {
      cancelTrackAnimInCompleted()
      setIsAnimOut(true)
      trackAnimOutCompleted()
    } else {
      cancelTrackAnimOutCompleted()
      setIsAnimIn(true)
      trackAnimInCompleted()
    }
  }

  return (
    <AnimationContext.Provider value={{
      isVisible,
      isAnimOut,
      isAnimIn
    }} {...otherProps} />
  )
}

export const useAnimation = () => {
  const context = React.useContext(AnimationContext)
  if (!context) {
    throw new Error("useAnimation must be used within a AnimationProvider")
  }
  return context
}

