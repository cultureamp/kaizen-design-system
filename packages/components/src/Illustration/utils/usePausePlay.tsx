import React, { useEffect, useState, type RefObject } from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import { Icon } from '~components/__next__/Icon'

export type usePausePlayHook = {
  toggle: () => void
  icon: JSX.Element
  label: string
}

export const usePausePlay = (videoRef: RefObject<HTMLVideoElement>): usePausePlayHook => {
  const { formatMessage } = useIntl()
  const [isPaused, setPaused] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    setPaused(video.paused)

    const handlePlay = (): void => setPaused(false)
    const handlePause = (): void => setPaused(true)

    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
    }
  }, [videoRef])

  const playAnimationLabel = formatMessage({
    id: 'videoPlayer.pausePlayBtn.playLabel',
    defaultMessage: 'Play animation',
    description: 'Label for the starting / playing an animation',
  })

  const pauseAnimationLabel = formatMessage({
    id: 'videoPlayer.pausePlayBtn.pauseLabel',
    defaultMessage: 'Pause animation',
    description: 'Label for the pausing / stopping an animation',
  })

  return {
    toggle: (): void => {
      if (!videoRef.current) return

      if (videoRef.current.paused) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    },
    icon: <Icon name={isPaused ? 'play_circle' : 'pause_circle'} isPresentational isFilled />,
    label: isPaused ? playAnimationLabel : pauseAnimationLabel,
  }
}
