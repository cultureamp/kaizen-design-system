import { useState, RefObject } from "react"
import playIcon from "@kaizen/component-library/icons/launch.icon.svg"
import pauseIcon from "@kaizen/component-library/icons/pause.icon.svg"

type IconType = {
  id: string
  viewBox: string
}

export type usePausePlayHook = {
  toggle: () => void
  icon: IconType
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
    icon: isPaused ? playIcon : pauseIcon,
    label: isPaused ? "Play animation" : "Pause animation",
  }
}
