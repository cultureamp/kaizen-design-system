import React from "react"
import { GenericTile, GenericTileProps } from "./components/GenericTile"

export type InformationTileProps = GenericTileProps

export const InformationTile: React.VFC<InformationTileProps> = props => (
  <GenericTile {...props} />
)

InformationTile.displayName = "InformationTile"
