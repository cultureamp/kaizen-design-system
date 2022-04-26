import React, { HTMLAttributes, ReactElement } from "react"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { InformationTileProps } from "./InformationTile"
import { MultiActionTileProps } from "./MultiActionTile"
import styles from "./TileGrid.scss"

type TileProps = InformationTileProps | MultiActionTileProps

export type TileElement = ReactElement<TileProps>

export interface TileGridProps
  extends OverrideClassName<HTMLAttributes<HTMLDivElement>> {
  children: TileElement[] | TileElement
}

export const TileGrid: React.VFC<TileGridProps> = ({
  children,
  classNameOverride,
  ...restProps
}) => (
  <div
    className={classnames(styles.grid, classNameOverride)}
    data-tile-grid
    {...restProps}
  >
    {children}
  </div>
)

TileGrid.displayName = "TileGrid"
