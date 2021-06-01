import React, { useEffect, useRef, useState } from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import lottie from "lottie-web"
import { BaseProps } from "./Base"
import { fetchPath } from "./utils"
import styles from "./style.module.scss"

export type AnimatedBaseProps = {
  autoplay?: boolean
  loop?: boolean
  isAnimated?: boolean
}

// @TODO
// - accessibility (maybe using figure since I can't add metadata to the lottie animation?)
// - fallback to static image
// - error handling when asset loading fails
// - allow delay on animation
export const AnimatedBase = ({
  name,
  autoplay = true,
  loop = false,
  alt,
}: AnimatedBaseProps & BaseProps) => {
  const lottiePlayer = useRef<HTMLDivElement>(null)
  const [playerLoaded, setPlayerLoaded] = useState<boolean>(false)
  const [asset, setAsset] = React.useState<null | any>(null)

  React.useEffect(() => {
    let didCancel = false;
    const fetchData = async () => {
      const path = assetUrl(name)
      const srcParsed = await fetchPath(path)
      if (!didCancel) {
        setAsset(srcParsed)
      }
    }
    fetchData()
    return () => {
      didCancel = true;
    };
  }, [])

  useEffect(() => {
    const initialiseLottiePlayer = () => {
      if (asset && lottiePlayer.current !== null && !playerLoaded) {
        setPlayerLoaded(true)
        lottie.loadAnimation({
          container: lottiePlayer.current,
          renderer: "svg",
          loop,
          autoplay,
          animationData: asset
        })
      }
    }
    initialiseLottiePlayer()
  }, [asset])

  return (
    <div className={styles.wrapper}>
      {/* Avoid jump when asset loads */}
      {!playerLoaded && (
        <svg data-testid="loading" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle fill="#f9f9f9" cx="48" cy="48" r="48" />
        </svg>
      )}
      <div data-testid="lottie-player" ref={lottiePlayer} />
    </div>
  )
}
