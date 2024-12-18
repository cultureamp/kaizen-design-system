import React from 'react'
import { Button } from '~components/Button'
import { GenericTile, GenericTileProps, TileAction } from '../subcomponents/GenericTile'
import styles from './MultiActionTile.module.scss'

export type MultiActionTileProps = {
  primaryAction: TileAction
  secondaryAction?: TileAction
} & Omit<GenericTileProps, 'footer'>

const renderActions = (primaryAction: TileAction, secondaryAction?: TileAction): JSX.Element => (
  <div className={styles.actions}>
    {secondaryAction && (
      <div className={styles.secondaryAction}>
        <Button secondary {...secondaryAction} />
      </div>
    )}
    <Button {...primaryAction} />
  </div>
)

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile#MultiActionTile.1 Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-tiles-multiactiontile--docs Storybook}
 */
export const MultiActionTile = ({
  children,
  primaryAction,
  secondaryAction,
  ...restProps
}: MultiActionTileProps): JSX.Element => (
  <GenericTile footer={renderActions(primaryAction, secondaryAction)} {...restProps}>
    {children}
  </GenericTile>
)

MultiActionTile.displayName = 'MultiActionTile'
