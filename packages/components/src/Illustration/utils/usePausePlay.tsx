import React, { useState, RefObject } from 'react'
import { Icon } from '~components/__future__/Icon'

export type usePausePlayHook = {
  toggle: () => void
  icon: JSX.Element
  label: string
}

export const usePausePlay = (videoRef: RefObject<HTMLVideoElement>): usePausePlayHook => {
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
    icon: <Icon name={isPaused ? 'play_circle' : 'pause'} isPresentational isFilled />,
    label: isPaused ? 'Play animation' : 'Pause animation',
  }
}
