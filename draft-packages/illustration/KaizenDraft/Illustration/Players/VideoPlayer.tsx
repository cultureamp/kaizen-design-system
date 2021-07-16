import React, { useRef, useEffect } from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import styles from "../style.module.scss"

export type VideoPlayerProps = {
  /**
   * Specifies whether the animation plays as soon as it is rendered.
   * If the user has enabled prefer-reduced-motion their preferences
   * take precedent over this prop.
   */
  autoplay?: boolean

  /**
   * Replay from start when active animation reaches the end of the animation.
   */
  loop?: boolean

  /**
   * The path of the initial video asset to play. This is only used in
   * situations where we have two clips - the `initialAnimation` will play
   * once, then we will swap to the ambient animation and loop indefinitely
   */
  initialAnimation?: string

  /**
   * Fallback image. Used when rendering of the asset fails, or as a
   * poster for the video player.
   */
  fallback: string

  /**
   * The path of the ambient animation. An ambient animation can be used without
   * an initial animation.
   */
  ambientAnimation: string
}

export const VideoPlayer = ({
  autoplay = true,
  loop = false,
  fallback,
  ambientAnimation,
}: VideoPlayerProps) => {
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
    if (!reducedMotionQuery.addEventListener || !window) return
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
    } else if (autoplay && !prefersReducedMotion) {
      videoElement.play().catch(err =>
        /*
         * An DOMException _may_ be raised by some browsers if we
         * programatically interact with the video before the
         * user has interacted with the page. This is okay - so
         * we're going to catch this error without handling it. See:
         * https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#autoplay_availability
         */
        // eslint-disable-next-line no-console
        console.warn(err)
      )
    }
  }, [prefersReducedMotion])

  return (
    <video
      aria-hidden={true}
      preload="metadata"
      ref={videoRef}
      width="100%"
      data-testid="kz-video-player"
      className={styles.wrapper}
      loop={loop}
      poster={assetUrl(`${fallback}.png`)}
      autoPlay={prefersReducedMotion ? false : autoplay}
      playsInline={true}
    >
      <source src={assetUrl(`${ambientAnimation}.webm`)} type="video/webm" />
      <source src={assetUrl(`${ambientAnimation}.mp4`)} type="video/mp4" />
    </video>
  )
}
