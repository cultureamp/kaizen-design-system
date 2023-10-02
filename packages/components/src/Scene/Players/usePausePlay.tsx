import React, { useState, RefObject } from "react"
import { LaunchIcon, PauseIcon } from "~components/Icons"

export type usePausePlayHook = {
  toggle: () => void
  icon: React.ReactElement
  label: string
}

export const usePausePlay = (
  videoRef: RefObject<HTMLVideoElement>
): usePausePlayHook => {
  const [isPaused, setPaused] = useState(false)

  return {
    toggle: (): void => {
      if (!videoRef.current) return

      if (videoRef.current.paused) {
        setPaused(false)
        videoRef.current.play()
      } else {
        setPaused(true)
        videoRef.current.pause()
      }
    },
    icon: isPaused ? (
      <LaunchIcon role="presentation" />
    ) : (
      <PauseIcon role="presentation" />
    ),
    label: isPaused ? "Play animation" : "Pause animation",
  }
}
