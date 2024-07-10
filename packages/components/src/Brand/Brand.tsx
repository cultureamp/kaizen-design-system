import React, { HTMLAttributes, SVGAttributes } from "react"
import { assetUrl } from "@kaizen/hosted-assets"
import { OverrideClassName } from "~types/OverrideClassName"
import { BrandCollectiveIntelligence } from "./BrandCollectiveIntelligence"
import styles from "./Brand.module.scss"

type MeaningfulSVG = { role: "img"; "aria-label": string }
type DecorativeSVG = { role: "presentation"; "aria-label"?: never }
export type BrandSVGProps = OverrideClassName<SVGAttributes<SVGElement>> &
  (MeaningfulSVG | DecorativeSVG)

type SVGProps = Omit<BrandSVGProps, "role" | "aria-label"> & {
  role?: "img" | "presentation"
}
type VariantSVG = {
  variant: "collective-intelligence"
} & SVGProps

type PictureProps = OverrideClassName<HTMLAttributes<HTMLElement>>
type VariantPicture = {
  variant: "logo-horizontal" | "logo-vertical" | "enso"
} & PictureProps

export type BrandProps = {
  alt: string
  reversed?: boolean
} & (VariantPicture | VariantSVG)

const isSVG = (
  variant: VariantPicture["variant"] | VariantSVG["variant"],
  restProps: SVGProps | PictureProps
): restProps is SVGProps => variant === "collective-intelligence"

export const Brand = ({
  alt,
  reversed = false,
  variant,
  classNameOverride,
  ...restProps
}: BrandProps): JSX.Element => {
  if (isSVG(variant, restProps)) {
    const { role = "img", ...props } = restProps

    if (role === "presentation") {
      return (
        <BrandCollectiveIntelligence
          role={role}
          classNameOverride={classNameOverride}
          {...props}
        />
      )
    }

    return (
      <BrandCollectiveIntelligence
        role={role}
        aria-label={alt}
        classNameOverride={classNameOverride}
        {...props}
      />
    )
  }

  const brandTheme = reversed ? "-reversed" : "-default"

  return (
    <picture className={classNameOverride} {...(restProps as PictureProps)}>
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
