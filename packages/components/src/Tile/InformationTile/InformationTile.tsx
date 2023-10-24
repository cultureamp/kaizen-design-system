import React from "react"
import { GenericTile, GenericTileProps } from "../subcomponents/GenericTile"

export type InformationTileProps = GenericTileProps

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile#InformationTile%3A Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-tile-informationtile--docs Storybook}
 */
export const InformationTile = (props: InformationTileProps): JSX.Element => (
  <GenericTile {...props} />
)

InformationTile.displayName = "InformationTile"
