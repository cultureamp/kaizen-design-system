import React, { useRef, useEffect } from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import styles from "../style.module.scss"
import { canPlayWebm } from "../utils"

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
   * Fallback image. Used when rendering of the asset fails, or as a
   * poster for the video player.
   */
  fallback: string

  /**
   * The path of the animation source, excluding the file extension. This
   * Player will preference Webm over mp4.
   */
  source: string

  onEnded?: () => void
}

export const VideoPlayer = ({
  autoplay = true,
  loop = false,
  fallback,
  source,
  onEnded,
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
    // when the source of the animation is updated, we need to reload the asset
    // to ensure the video player is in sync with the new source.
    const { current: videoElement } = videoRef
    if (videoElement !== null) {
      videoElement.load()
    }
  }, [source])

  useEffect(() => {
    if (!reducedMotionQuery.addEventListener || !window) return
    const updateMotionPreferences = () => {
      const { matches = false } = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      setPrefersReducedMotion(matches)
    }
    reducedMotionQuery.addEventListener("change", updateMotionPreferences, true)

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
      try {
        videoElement.play()
      } catch (e) {
        /*
         * An DOMException _may_ be raised by some browsers if we
         * programatically interact with the video before the
         * user has interacted with the page. This is okay - so
         * we're going to catch this error without handling it. See:
         * https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#autoplay_availability
         */
      }
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    // Add event listeners for the video element
    const { current: videoElement } = videoRef
    if (!videoElement || !onEnded) return
    videoElement.addEventListener("ended", onEnded)

    return function cleanup() {
      videoElement.removeEventListener("ended", onEnded)
    }
  }, [videoRef])

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
      {/**
       * This seems counter-intuitive, but webm support is codec specific.
       * Only offer webm if we are positive the browser supports it.
       * Reference: https://bugs.webkit.org/show_bug.cgi?id=216652#c1
       */}
      {canPlayWebm() && (
        <source src={assetUrl(`${source}.webm`)} type="video/webm" />
      )}
      <source src={assetUrl(`${source}.mp4`)} type="video/mp4" />
    </video>
  )
}
