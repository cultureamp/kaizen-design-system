import React, { useEffect, useRef } from "react"
import classnames from "classnames"
import { assetUrl } from "@kaizen/hosted-assets"
import { IconButton } from "~components/Button"
import { canPlayWebm } from "../../utils/canPlayWebm"
import { usePausePlay } from "../../utils/usePausePlay"
import styles from "../Base/Base.module.scss"

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

  /**
   * Aspect ratio that is set on the illustration in Scene/Spot which wraps the
   * component in a container, forcing the aspect ratio.
   */
  aspectRatio?: "landscape" | "portrait" | "square"

  onEnded?: () => void
}

export const VideoPlayer = ({
  autoplay = true,
  loop = false,
  fallback,
  source,
  aspectRatio,
  onEnded,
}: VideoPlayerProps): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [prefersReducedMotion, setPrefersReducedMotion] =
    React.useState<boolean>(true)
  const [isWebmCompatible, setIsWebmCompatible] = React.useState<boolean>(false)
  const [windowIsAvailable, setWindowIsAvailable] =
    React.useState<boolean>(false)

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
    if (!window) return

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    )
    setPrefersReducedMotion(reducedMotionQuery.matches)
    const updateMotionPreferences = (): void => {
      const { matches = false } = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      )
      setPrefersReducedMotion(matches)
    }

    const isLegacyEdge = navigator.userAgent.match(/Edge/)

    const isUnsupportedSafari =
      window.matchMedia("").addEventListener === undefined

    if (isLegacyEdge || isUnsupportedSafari) return

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
        // Older browsers may not return a promise, so .play could return undefined
        videoElement.play()?.catch(() => {
          /*
           * An DOMException _may_ be raised by some browsers if we
           * programatically interact with the video before the
           * user has interacted with the page. This is okay - so
           * we're going to catch this error without handling it. See:
           * https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide#autoplay_availability
           */
        })
      } catch (e) {
        /**
         * Older browsers will raise a synchronous error because their first implementation
         * of `.play` was not a promise.
         */
      }
    }
    /**
     * Chrome seems to have an issue with changes to autoplay after the video
     * has been mounted. If there is a change in autoplay we need to force the
     * play() method to be called.
     */
  }, [prefersReducedMotion, autoplay])

  useEffect(() => {
    // Add event listeners for the video element
    const { current: videoElement } = videoRef
    if (!videoElement || !onEnded) return

    videoElement.addEventListener("ended", onEnded)

    return function cleanup() {
      videoElement.removeEventListener("ended", onEnded)
    }
  }, [videoRef])

  const pausePlay = usePausePlay(videoRef)

  useEffect(() => {
    // SSR does not have a window, which is required for for the canPlayWebm helper.
    // Await window render before rendering the component.
    if (windowIsAvailable !== undefined) {
      setIsWebmCompatible(canPlayWebm())
      setWindowIsAvailable(true)
    }
  }, [windowIsAvailable])

  return (
    <figure
      className={classnames(
        styles.figure,
        aspectRatio && styles[aspectRatio],
        aspectRatio && styles.aspectRatioWrapper
      )}
    >
      <video
        muted={true}
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
        tabIndex={-1}
      >
        {isWebmCompatible && (
          <source src={assetUrl(`${source}.webm`)} type="video/webm" />
        )}
        <source src={assetUrl(`${source}.mp4`)} type="video/mp4" />
      </video>
      <IconButton
        onClick={(): void => pausePlay.toggle()}
        icon={pausePlay.icon}
        label={pausePlay.label}
        classNameOverride={styles.pausePlayButton}
      />
    </figure>
  )
}
