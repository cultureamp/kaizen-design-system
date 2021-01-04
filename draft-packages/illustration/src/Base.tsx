import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
import styles from "../styles/style.module.scss"

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
}

export const Base = ({
  name,
  alt,
  classNameAndIHaveSpokenToDST,
  ...otherProps
}: BaseProps) => {
  const className =
    (classNameAndIHaveSpokenToDST ? classNameAndIHaveSpokenToDST : "") +
    " " +
    styles.wrapper

  return (
    <img {...otherProps} className={className} alt={alt} src={assetUrl(name)} />
  )
}
