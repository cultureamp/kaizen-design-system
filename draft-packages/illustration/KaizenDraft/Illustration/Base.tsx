import { assetUrl } from "@kaizen/hosted-assets"
import * as React from "react"
const styles = require("./style.module.scss")

export type BaseProps = {
  /**
   *  Refer to the Base Illustration Sticker Sheet in Zen UI Kit
   */
  name: string

  /**
   * If there is context/text surrounding this illustration that provides alt text,
   * provide an empty string
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
