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
  isAnimated?: boolean
}

enum AssetStatus {
  Loading,
  Success,
  Failed,
}

export const AnimatedBase = ({
  name,
  fallback,
  autoplay = true,
  loop = false,
  classNameAndIHaveSpokenToDST,
}: AnimatedBaseProps & BaseProps & { fallback: string }) => {
  const lottiePlayer = useRef<HTMLDivElement>(null)
  const [playerLoaded, setPlayerLoaded] = useState<AssetStatus>(
    AssetStatus.Loading
  )
  const [asset, setAsset] = React.useState<null | LottieAnimation>(null)

  React.useEffect(() => {
    let didCancel = false
    const fetchData = async () => {
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
  }, [])

  useEffect(() => {
    const initialiseLottiePlayer = () => {
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
  }, [asset])

  const wrapper =
    (classNameAndIHaveSpokenToDST ? classNameAndIHaveSpokenToDST : "") +
    " " +
    styles.wrapper

  const LoadingState = (
    /* Avoid jump when asset loads */
    <svg
      data-testid="loading"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle fill="#f9f9f9" cx="48" cy="48" r="48" />
    </svg>
  )

  const FailedState = <img src={assetUrl(fallback)} />

  return (
    <div className={wrapper}>
      {playerLoaded === AssetStatus.Loading && LoadingState}
      {playerLoaded === AssetStatus.Failed && FailedState}
      <div data-testid="lottie-player" ref={lottiePlayer} />
    </div>
  )
}
