import React from 'react'
import { GenericTile, type GenericTileProps } from '../subcomponents/GenericTile'

export type InformationTileProps = GenericTileProps

/**
 * @deprecated InformationTile is deprecated in v3 and will be removed in v4.
 *
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile#InformationTile%3A Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-tiles-informationtile--docs Storybook}
 */
export const InformationTile = (props: InformationTileProps): JSX.Element => (
  <GenericTile {...props} />
)

InformationTile.displayName = 'InformationTile'
