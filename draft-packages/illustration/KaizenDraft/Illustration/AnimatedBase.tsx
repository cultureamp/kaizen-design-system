import * as React from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import LottiePlayer from "lottie-react"
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
  autoplay,
  loop,
  alt,
}: AnimatedBaseProps & BaseProps) => {
  const [asset, setAsset] = React.useState<null | any>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      const path = assetUrl(name)
      const srcParsed = await fetchPath(path)
      setAsset(srcParsed)
    }

    fetchData()
  }, [])

  return (
    <div className={styles.wrapper}>
      {/* Avoid jump when asset loads */}
      {!asset && (
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle fill="#f9f9f9" cx="48" cy="48" r="48" />
        </svg>
      )}
      <LottiePlayer autoplay={autoplay} loop={loop} animationData={asset} />
    </div>
  )
}
