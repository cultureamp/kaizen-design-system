import React, { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import { assetUrl } from "@kaizen/hosted-assets"
import { BaseProps } from "./Base"
import { getAnimationData } from "./utils"
import styles from "./style.module.scss"
import { LottieAnimation } from "./types"

export type AnimatedBaseProps = {
  autoplay?: boolean
  loop?: boolean
}

enum AssetStatus {
  Loading,
  Success,
  Failed,
  Fallback
}

export const AnimatedBase = ({
  name,
  fallback,
  autoplay = true,
  loop = false,
  alt,
  classNameAndIHaveSpokenToDST,
}: AnimatedBaseProps & BaseProps & { fallback: string }) => {
  const lottiePlayer = useRef<HTMLDivElement>(null)
  const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState<boolean>(reducedMotionQuery.matches || false)
  const [playerLoaded, setPlayerLoaded] = useState<AssetStatus>(
    AssetStatus.Loading
  )
  const [asset, setAsset] = React.useState<null | LottieAnimation>(null)

  useEffect(() => {
    const updateMotionPreferences = () => {
      const { matches = false } = window.matchMedia("(prefers-reduced-motion: reduce)");
      setPrefersReducedMotion(matches)
    }
    reducedMotionQuery.addEventListener("change", updateMotionPreferences, true)

    // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
    return function cleanup() {
      reducedMotionQuery.removeEventListener("change", updateMotionPreferences)
    }
  }, [])

  React.useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
      if (playerLoaded || prefersReducedMotion) return
      try {
        const srcParsed = await getAnimationData(name)
        if (!didCancel) {
          setAsset(srcParsed)
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn(err)
        setPlayerLoaded(AssetStatus.Failed)
      }
    }
    fetchData()
    return () => {
      didCancel = true
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    const initialiseLottiePlayer = () => {
      if (prefersReducedMotion) return
      if (asset && lottiePlayer.current !== null) {
        setPlayerLoaded(AssetStatus.Success)
        lottie.loadAnimation({
          container: lottiePlayer.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData: asset,
        })
      }
    }
    initialiseLottiePlayer()
  }, [asset, prefersReducedMotion])

  const wrapper =
    (classNameAndIHaveSpokenToDST ? classNameAndIHaveSpokenToDST : "") +
    " " +
    styles.wrapper

  const LoadingState = (
    /* Avoid jump when asset loads */
    <svg
      aria-hidden={true}
      data-testid="loading"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill="#f9f9f9" cx="48" cy="48" r="48" />
    </svg>
  )

  const FallbackAsset = <img src={assetUrl(fallback)} aria-hidden={true} />

  return (
    <figure className={wrapper}>
      <figcaption className={styles.visuallyHidden}>{alt}</figcaption>
      {playerLoaded === AssetStatus.Loading && LoadingState}
      {playerLoaded === AssetStatus.Failed || playerLoaded === AssetStatus.Fallback && FallbackAsset}
      <div data-testid="lottie-player" ref={lottiePlayer} aria-hidden={true} />
    </figure>
  )
}
