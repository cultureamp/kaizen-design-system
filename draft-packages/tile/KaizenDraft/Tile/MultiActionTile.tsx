import React from "react"
import { Box } from "@kaizen/component-library"
import {
  GenericTile,
  GenericTileProps,
  TileAction,
} from "./components/GenericTile"
import Action from "./components/Action"
import styles from "./MultiActionTile.scss"

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
