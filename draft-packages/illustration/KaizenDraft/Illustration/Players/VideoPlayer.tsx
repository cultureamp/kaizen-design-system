import React, { useRef, useEffect } from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import styles from "../style.module.scss"

export type VideoPlayerProps = {
  /**
   * Specifies whether the animation plays as soon as it is rendered
   * If the user has enabled prefer-reduced-motion their preferences
   * take precedent over this prop
   */
  autoplay?: boolean

  /**
   * Replay from start when active animation reaches the end of the animation
   */
  loop?: boolean

  /**
   * The path of the initial video asset to play.
   */
  initialAnimation?: string

  alt: string
}

type VideoPlayerFallback = {
  /**
   * Fallback image. Used when rendering of the asset fails, or as a
   * poster for the video player
   */
  fallback: string

  /**
   * The path of the ambient animation. An ambient animation can be used without
   * an initial animation.
   */
  ambientAnimation: string
}

/**
 * TODO
 * Accessibility
 * * Prefer reduced motion
 * tests
 * ambient and initial animation
 */
export const VideoPlayer = ({
  autoplay = true,
  loop = false,
  fallback,
  ambientAnimation,
  alt,
}: VideoPlayerProps & VideoPlayerFallback) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  )
  const [
    prefersReducedMotion,
    setPrefersReducedMotion,
  ] = React.useState<boolean>(reducedMotionQuery.matches || false)

  useEffect(() => {
    /**
     * Setting `muted` on the player is required in Safari/Webkit and older
     * versions of Chome for the video to autoplay (regardless of whether
     * the format contains an audio stream or not).
     *
     * React does not guarentee the `muted` attribute is set on the
     * `video` element. So on load we force set this attribute. See issue:
     * https://github.com/facebook/react/issues/10389
     */
    const { current: videoElement } = videoRef
    if (videoElement !== null) {
      videoElement.setAttribute("muted", "")
    }
  }, [])

  useEffect(() => {
    const updateMotionPreferences = () => {
      const { matches = false } = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      setPrefersReducedMotion(matches)
    }
    reducedMotionQuery.addEventListener("change", updateMotionPreferences, true)

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return function cleanup() {
      reducedMotionQuery.removeEventListener("change", updateMotionPreferences)
    }
  }, [])

  useEffect(() => {
    const { current: videoElement } = videoRef
    if (!videoElement) return
    if (prefersReducedMotion) {
      videoElement.pause()
    } else {
      videoElement.play()
    }
  }, [prefersReducedMotion])

  return (
    <video
      preload="metadata"
      ref={videoRef}
      width="100%"
      data-testid="kz-video-player"
      className={styles.wrapper}
      loop={loop}
      poster={assetUrl(fallback)}
      autoPlay={prefersReducedMotion ? false : autoplay}
      playsInline={true}
    >
      <source src={assetUrl(ambientAnimation)} type="video/webm" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  )
}
