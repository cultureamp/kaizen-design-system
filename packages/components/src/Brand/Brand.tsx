import React, { HTMLAttributes, SVGAttributes } from 'react'
import classnames from 'classnames'
import { OverrideClassName } from '~components/types/OverrideClassName'
import { assetUrl } from '~components/utils/hostedAssets'
import { BrandCollectiveIntelligence } from './BrandCollectiveIntelligence'
import styles from './Brand.module.scss'

type MeaningfulSVG = { 'role': 'img'; 'aria-label': string; 'alt'?: never }
type DecorativeSVG = { 'role': 'presentation'; 'aria-label'?: never; 'alt'?: never }
export type BrandSVGProps = OverrideClassName<SVGAttributes<SVGElement>> &
  (MeaningfulSVG | DecorativeSVG)

type SVGBackwardsCompatible = { role?: never; alt: string }
type SVGProps = OverrideClassName<SVGAttributes<SVGElement>> &
  (MeaningfulSVG | DecorativeSVG | SVGBackwardsCompatible)
type VariantSVG = {
  variant: 'collective-intelligence'
} & SVGProps

type PictureProps = OverrideClassName<HTMLAttributes<HTMLElement>> & {
  alt: string
}
type VariantPicture = {
  variant: 'logo-horizontal' | 'logo-vertical' | 'enso'
} & PictureProps

export type BrandProps = {
  reversed?: boolean
} & (VariantSVG | VariantPicture)

const isSVG = (
  variant: VariantSVG['variant'] | VariantPicture['variant'],
  restProps: SVGProps | PictureProps,
): restProps is SVGProps => variant === 'collective-intelligence'

export const Brand = ({ reversed = false, variant, ...restProps }: BrandProps): JSX.Element => {
  if (isSVG(variant, restProps)) {
    const { role, alt, 'aria-label': ariaLabel, ...props } = restProps

    if (role === 'presentation') {
      return <BrandCollectiveIntelligence role={role} {...props} />
    }
    if (role === 'img') {
      return <BrandCollectiveIntelligence role={role} aria-label={ariaLabel} {...props} />
    }

    return <BrandCollectiveIntelligence role="img" aria-label={alt} {...props} />
  }

  const { alt, classNameOverride, style, ...otherProps } = restProps
  const brandTheme = reversed ? '-reversed' : '-default'

  return (
    <picture {...otherProps}>
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
        className={classnames(styles.img, classNameOverride)}
        style={style}
      />
    </picture>
  )
}

Brand.displayName = 'Brand'
