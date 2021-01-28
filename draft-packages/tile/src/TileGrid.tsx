import React, { ReactElement } from "react"
import styles from "../styles/TileGrid.scss"
import { InformationTileProps } from "./InformationTile"
import { MultiActionTileProps } from "./MultiActionTile"

type TileProps = InformationTileProps | MultiActionTileProps

export type TileElement = ReactElement<TileProps>

export interface TileGridProps {
  children: TileElement[] | TileElement
}

const TileGrid: React.FunctionComponent<TileGridProps> = ({ children }) => {
  const renderChildren = () => {
    const childrenArray = React.Children.toArray(children)

    if (childrenArray.length > 1) {
      return childrenArray.map((child, idx) => <div key={idx}>{child}</div>)
    } else {
      return children
    }
  }

  return <div className={styles.grid}>{renderChildren()}</div>
}

export default TileGrid
