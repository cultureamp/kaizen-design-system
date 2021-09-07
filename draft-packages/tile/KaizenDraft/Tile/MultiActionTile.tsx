import React from "react"

import { Box } from "@kaizen/component-library"
import GenericTile, {
  GenericTileProps,
  TileAction,
} from "./components/GenericTile"
import Action from "./components/Action"

import styles from "./MultiActionTile.scss"

export interface MultiActionTileProps extends GenericTileProps {
  readonly primaryAction: TileAction
  readonly secondaryAction?: TileAction
}

type MultiActionTile = React.FunctionComponent<MultiActionTileProps>

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

const MultiActionTile: MultiActionTile = ({
  title,
  titleTag,
  metadata,
  children,
  primaryAction,
  secondaryAction,
  information,
}) => (
  <GenericTile
    title={title}
    titleTag={titleTag}
    metadata={metadata}
    information={information}
    footer={renderActions(primaryAction, secondaryAction)}
  >
    {children}
  </GenericTile>
)

export default MultiActionTile
