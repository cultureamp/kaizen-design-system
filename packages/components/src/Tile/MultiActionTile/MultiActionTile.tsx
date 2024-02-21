import React from "react"
import {
  GenericTile,
  GenericTileProps,
  TileAction,
} from "../subcomponents/GenericTile"
import Action from "../subcomponents/GenericTile/Action"
import styles from "./MultiActionTile.module.scss"

export type MultiActionTileProps = {
  primaryAction: TileAction
  secondaryAction?: TileAction
} & Omit<GenericTileProps, "footer">

const renderActions = (
  primaryAction: TileAction,
  secondaryAction?: TileAction
): JSX.Element => (
  <div className={styles.actions}>
    {secondaryAction && (
      <div className="kz-mr-8">
        <Action action={secondaryAction} secondary />
      </div>
    )}
    <Action action={primaryAction} />
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
  <GenericTile
    footer={renderActions(primaryAction, secondaryAction)}
    {...restProps}
  >
    {children}
  </GenericTile>
)

MultiActionTile.displayName = "MultiActionTile"
