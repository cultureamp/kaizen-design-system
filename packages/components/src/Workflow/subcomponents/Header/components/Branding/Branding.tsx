import React, { type HTMLAttributes } from 'react'
import { Brand, type BrandProps } from '~components/Brand'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import styles from './Branding.module.css'

export type WorflowBrandingProps = {
  variant?: BrandProps['variant']
  alt: string
} & OverrideClassName<HTMLAttributes<HTMLDivElement>>

export const Branding = ({
  variant = 'logo-horizontal',
  alt,
}: WorflowBrandingProps): JSX.Element => (
  <div className={styles.branding}>
    <Brand classNameOverride={styles.logo} variant={variant} alt={alt} />
  </div>
)

Branding.displayName = 'Workflow.Branding'
