import React, { useState, type RefObject } from 'react'
import { useIntl } from '@cultureamp/i18n-react-intl'
import { Icon } from '~components/__next__/Icon'

export type usePausePlayHook = {
  toggle: () => void
  icon: JSX.Element
  label: string
}

export const usePausePlay = (videoRef: RefObject<HTMLVideoElement>): usePausePlayHook => {
  const { formatMessage } = useIntl()
  const [isPaused, setPaused] = useState(false)

  const playAnimationLabel = formatMessage({
    id: 'videoPlayer.pausePlayBtn.playLabel',
    defaultMessage: 'Play animation',
    description: 'Label for the starting / playing an animation',
  })

  const pauseAnimationLabel = formatMessage({
    id: 'videoPlayer.pausePlayBtn.pauseLabel',
    defaultMessage: 'Play animation',
    description: 'Label for the pausing / stopping an animation',
  })

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
    icon: <Icon name={isPaused ? 'play_circle' : 'pause_circle'} isPresentational isFilled />,
    label: isPaused ? playAnimationLabel : pauseAnimationLabel,
  }
}
