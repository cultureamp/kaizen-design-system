import React, { HTMLAttributes } from "react"
import classnames from "classnames"
import { assetUrl } from "@kaizen/hosted-assets"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Base.module.scss"

export type BaseProps = {
  /**
   *  Refer to the Base Illustration Sticker Sheet in Heart UI Kit
   */
  name: string

  /**
   * If there is context/text surrounding this illustration that serves
   * the function of alt text, provide an empty string so that any
   * accessibility checks know the alt text has been intentionally left out
   */
  alt?: string

  /**
   * Aspect ratio that is set on the illustration in Scene/Spot which wraps the
   * component in a container, forcing the aspect ratio.
   */
  aspectRatio?: "landscape" | "portrait" | "square"
} & OverrideClassName<HTMLAttributes<HTMLImageElement>>

export const Base = ({
  name,
  alt = "",
  classNameOverride,
  aspectRatio,
  ...restProps
}: BaseProps): JSX.Element => {
  const className = classnames(styles.wrapper, classNameOverride)

  return aspectRatio ? (
    <figure
      className={classnames(
        styles.aspectRatioWrapper,
        aspectRatio && styles[aspectRatio]
      )}
    >
      <img
        {...restProps}
        className={className}
        alt={alt}
        src={assetUrl(name)}
      />
    </figure>
  ) : (
    <img {...restProps} className={className} alt={alt} src={assetUrl(name)} />
  )
}

Base.displayName = "Base"
