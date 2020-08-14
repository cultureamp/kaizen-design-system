import React, { ReactElement } from "react"
import { InformationTileProps } from "./InformationTile"
import { MultiActionTileProps } from "./MultiActionTile"

const styles = require("./TileGrid.scss")

type TileProps = InformationTileProps | MultiActionTileProps

export type TileElement = ReactElement<TileProps>

interface TileGrid {
  children: TileElement[] | TileElement
}

const TileGrid: React.FunctionComponent<TileGrid> = ({ children }) => {
  const renderChildren = () => {
    if (children.length > 1) {
      return children.map((child, idx) => (
        <div key={idx} className={styles.tile}>
          {child}
        </div>
      ))
    } else {
      return children
    }
  }

  return <div className={styles.grid}>{renderChildren()}</div>
}

export default TileGrid
