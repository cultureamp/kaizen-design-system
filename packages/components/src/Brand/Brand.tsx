import React, { HTMLAttributes } from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import { OverrideClassName } from "~types/OverrideClassName"
import { BrandCollectiveIntelligence, BrandCollectiveIntelligenceProps } from "./BrandCollectiveIntelligence"
import styles from "./Brand.module.scss"

type CollectiveIntelligenceProps = Omit<BrandCollectiveIntelligenceProps, "role" | "aria-label">

type VariantCollectiveIntelligence = {
  variant: "collective-intelligence"
} & CollectiveIntelligenceProps

type PictureProps = OverrideClassName<HTMLAttributes<HTMLElement>>

type VariantPicture = {
  variant:
    | "logo-horizontal"
    | "logo-vertical"
    | "enso"
} & PictureProps

export type BrandProps = {
  alt: string
  reversed?: boolean
} & (VariantPicture | VariantCollectiveIntelligence)

const isCollectiveIntelligence = (
  variant: VariantPicture["variant"] | VariantCollectiveIntelligence["variant"],
  restProps: CollectiveIntelligenceProps | PictureProps
): restProps is CollectiveIntelligenceProps => variant === "collective-intelligence"

export const Brand = ({
  alt,
  reversed = false,
  variant,
  classNameOverride,
  ...restProps
}: BrandProps): JSX.Element => {
  if (isCollectiveIntelligence(variant, restProps)) {
    return <BrandCollectiveIntelligence
      role="img"
      aria-label={alt}
      classNameOverride={classNameOverride}
      {...restProps}
    />
  }

  const brandTheme = reversed ? "-reversed" : "-default"

  return (
    <picture className={classNameOverride} {...restProps as PictureProps}>
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
