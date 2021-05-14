import React, { ReactElement } from "react"
import { InformationTileProps } from "./InformationTile"
import { MultiActionTileProps } from "./MultiActionTile"

import styles from "./TileGrid.scss"

type TileProps = InformationTileProps | MultiActionTileProps

export type TileElement = ReactElement<TileProps>

export interface TileGridProps {
  children: TileElement[] | TileElement
}

const TileGrid: React.FunctionComponent<TileGridProps> = ({ children }) => (
  <div className={styles.grid} data-tile-grid>
    {children}
  </div>
)

export default TileGrid
