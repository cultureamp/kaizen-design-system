import React from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import styles from "./Brand.scss"

export interface BrandProps {
  variant:
    | "logo-horizontal"
    | "logo-vertical"
    | "enso"
    | "collective-intelligence"
  reversed?: boolean
  alt: string
}

export const Brand = (props: BrandProps) => {
  const brandTheme = props.reversed ? "-reversed" : "-default"

  return (
    <picture>
      <source
        srcSet={assetUrl(`brand/${props.variant}-reversed.svg`)}
        media="(forced-colors: active) and (prefers-color-scheme: dark)"
      />
      <source
        srcSet={assetUrl(`brand/${props.variant}-default.svg`)}
        media="(forced-colors: active) and (prefers-color-scheme: light)"
      />
      <img
        src={assetUrl(`brand/${props.variant}${brandTheme}.svg`)}
        alt={props.alt}
        className={styles.img}
      />
    </picture>
  )
}
