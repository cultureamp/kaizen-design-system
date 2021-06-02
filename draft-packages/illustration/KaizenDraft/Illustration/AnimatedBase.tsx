import React, { useEffect, useRef, useState } from "react"
import lottie from "lottie-web"
import { BaseProps } from "./Base"
import { getAnimationData } from "./utils"
import styles from "./style.module.scss"

export type AnimatedBaseProps = {
  autoplay?: boolean
  loop?: boolean
  isAnimated?: boolean
}

export const AnimatedBase = ({
  name,
  autoplay = true,
  loop = false,
}: AnimatedBaseProps & BaseProps) => {
  const lottiePlayer = useRef<HTMLDivElement>(null)
  const [playerLoaded, setPlayerLoaded] = useState<boolean>(false)
  const [asset, setAsset] = React.useState<null | any>(null)

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
      }
    }
    fetchData()
    return () => {
      didCancel = true
    }
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
          animationData: asset,
        })
      }
    }
    initialiseLottiePlayer()
  }, [asset])

  return (
    <div className={styles.wrapper}>
      {!playerLoaded && (
        /* Avoid jump when asset loads */
        <svg
          data-testid="loading"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle fill="#f9f9f9" cx="48" cy="48" r="48" />
        </svg>
      )}
      {lottiePlayer && <div data-testid="lottie-player" ref={lottiePlayer} />}
    </div>
  )
}
