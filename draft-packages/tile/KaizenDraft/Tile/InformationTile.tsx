import React from "react"
import { GenericTile, GenericTileProps } from "./components/GenericTile"

export type InformationTileProps = GenericTileProps

/**
 * {@link https://cultureamp.design/components/tile/#informationtile Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-tile--information Storybook}
 */
export const InformationTile: React.VFC<InformationTileProps> = props => (
  <GenericTile {...props} />
)

InformationTile.displayName = "InformationTile"
