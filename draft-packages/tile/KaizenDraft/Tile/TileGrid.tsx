import React, { ReactElement } from "react"
import { InformationTileProps } from "./InformationTile"
import { MultiActionTileProps } from "./MultiActionTile"

import styles from "./TileGrid.scss"

type TileProps = InformationTileProps | MultiActionTileProps

export type TileElement = ReactElement<TileProps>

export interface TileGridProps {
  children: TileElement[] | TileElement
}

const TileGrid: React.FunctionComponent<TileGridProps> = ({ children }) => {
  const renderChildren = () => {
    const childrenArray = React.Children.toArray(children)

    if (childrenArray.length > 1) {
      return childrenArray.map((child, idx) => child)
    } else {
      return children
    }
  }

  return (
    <div className={styles.grid} data-tile-grid>
      {renderChildren()}
    </div>
  )
}

export default TileGrid
