import React, { HTMLAttributes } from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import { OverrideClassName } from "~types/OverrideClassName"
import styles from "./Brand.module.scss"

export type BrandProps = {
  variant:
    | "logo-horizontal"
    | "logo-vertical"
    | "enso"
    | "collective-intelligence"
  alt: string
  reversed?: boolean
} & OverrideClassName<HTMLAttributes<HTMLElement>>

export const Brand = ({
  variant,
  alt,
  reversed = false,
  classNameOverride,
  ...restProps
}: BrandProps): JSX.Element => {
  const brandTheme = reversed ? "-reversed" : "-default"

  return (
    <picture className={classNameOverride} {...restProps}>
      <source
        srcSet={assetUrl(`brand/${variant}-reversed.svg`)}
        media="(forced-colors: active) and (prefers-color-scheme: dark)"
      />
      <source
        srcSet={assetUrl(`brand/${variant}-default.svg`)}
        media="(forced-colors: active) and (prefers-color-scheme: light)"
      />
      <img
        src={assetUrl(`brand/${variant}${brandTheme}.svg`)}
        alt={alt}
        className={styles.img}
      />
    </picture>
  )
}

Brand.displayName = "Brand"
