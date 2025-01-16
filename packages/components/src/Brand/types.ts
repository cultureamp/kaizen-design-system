import { type SVGAttributes } from 'react'
import { type OverrideClassName } from '~components/types/OverrideClassName'

type MeaningfulSVG = { 'role': 'img'; 'aria-label': string; 'alt'?: never }

type DecorativeSVG = { 'role': 'presentation'; 'aria-label'?: never; 'alt'?: never }

export type BrandSVGProps = OverrideClassName<SVGAttributes<SVGElement>> &
  (MeaningfulSVG | DecorativeSVG)
