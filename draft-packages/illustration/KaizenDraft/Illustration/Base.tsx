import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import styles from "./style.module.scss"

export type BaseProps = {
  /**
   *  Refer to the Base Illustration Sticker Sheet in Zen UI Kit
   */
  name: string

  /**
   * If there is context/text surrounding this illustration that serves
   * the function of alt text, provide an empty string so that any
   * accessibility checks know the alt text has been intentionally left out
   */
  alt: string

  /**
   * Not recommended. A short-circuit for overriding styles in a pinch
   * @default ""
   */
  classNameAndIHaveSpokenToDST?: string

  /**
   * Aspect ratio that is set on the illustration in Scene/Spot which wraps the
   * component in a container, forcing the aspect ratio.
   */
  aspectRatio?: "landscape" | "portrait" | "square"
}

export const Base = ({
  name,
  alt,
  classNameAndIHaveSpokenToDST,
  aspectRatio,
  ...otherProps
}: BaseProps) => {
  const className =
    (classNameAndIHaveSpokenToDST ? classNameAndIHaveSpokenToDST : "") +
    " " +
    styles.wrapper

  const aspectClassName =
    (aspectRatio ? styles[aspectRatio] : "") + " " + styles.aspectRatioWrapper

  return (
    <>
      {aspectRatio ? (
        <figure className={aspectClassName}>
          <img
            {...otherProps}
            className={className}
            alt={alt}
            src={assetUrl(name)}
          />
        </figure>
      ) : (
        <img
          {...otherProps}
          className={className}
          alt={alt}
          src={assetUrl(name)}
        />
      )}
    </>
  )
}
