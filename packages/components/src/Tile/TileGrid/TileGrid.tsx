import React, { HTMLAttributes, ReactElement } from "react"
import classnames from "classnames"
import { OverrideClassName } from "~types/OverrideClassName"
import { InformationTileProps } from "../InformationTile"
import { MultiActionTileProps } from "../MultiActionTile"
import styles from "./TileGrid.module.scss"

type TileProps = InformationTileProps | MultiActionTileProps

export type TileElement = ReactElement<TileProps>

export interface TileGridProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: TileElement[] | TileElement
}

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3079077889/Tile#TileGrid Guidance} |
 * {@link https://cultureamp.design/storybook/?path=/docs/components-tiles-tilegrid--docs Storybook}
 */
export const TileGrid = ({
  children,
  classNameOverride,
  ...restProps
}: TileGridProps): JSX.Element => (
  <div
    className={classnames(styles.grid, classNameOverride)}
    data-tile-grid
    {...restProps}
  >
    {children}
  </div>
)

TileGrid.displayName = "TileGrid"
