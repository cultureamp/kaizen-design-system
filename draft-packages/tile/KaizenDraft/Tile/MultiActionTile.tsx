import React from "react"
import { Box } from "@kaizen/component-library"
import Action from "./components/Action"
import {
  GenericTile,
  GenericTileProps,
  TileAction,
} from "./components/GenericTile"
import styles from "./MultiActionTile.module.scss"

export interface MultiActionTileProps extends Omit<GenericTileProps, "footer"> {
  primaryAction: TileAction
  secondaryAction?: TileAction
}

const renderActions = (
  primaryAction: TileAction,
  secondaryAction?: TileAction
) => (
  <div className={styles.actions}>
    {secondaryAction && (
      <Box mr={0.5}>
        <Action action={secondaryAction} secondary />
      </Box>
    )}
    <Action action={primaryAction} />
  </div>
)

/**
 * {@link https://cultureamp.design/components/tile/#multiactiontile Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-tile--multi-action Storybook}
 */
export const MultiActionTile: React.VFC<MultiActionTileProps> = ({
  children,
  primaryAction,
  secondaryAction,
  ...restProps
}) => (
  <GenericTile
    footer={renderActions(primaryAction, secondaryAction)}
    {...restProps}
  >
    {children}
  </GenericTile>
)

MultiActionTile.displayName = "MultiActionTile"
