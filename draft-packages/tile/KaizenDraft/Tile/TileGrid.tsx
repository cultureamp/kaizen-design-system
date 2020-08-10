import React, { ReactElement } from "react"
import { InformationTileProps } from "./InformationTile"
import { MultiActionTileProps } from "./MultiActionTile"

const styles = require("./TileGrid.scss")

type TileProps = InformationTileProps | MultiActionTileProps

interface TileGrid {
  children: Array<ReactElement<TileProps>>
}

const TileGrid: React.FunctionComponent<TileGrid> = ({ children }) => (
  <div className={styles.grid}>
    {children.map((child, idx) => (
      <div key={idx} className={styles.tile}>
        {child}
      </div>
    ))}
  </div>
)

export default TileGrid
