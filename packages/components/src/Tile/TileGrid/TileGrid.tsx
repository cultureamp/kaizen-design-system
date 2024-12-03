import React, {
  Children,
  HTMLAttributes,
  isValidElement,
  ReactElement,
} from "react"
import classnames from "classnames"
import { OverrideClassName } from "~components/types/OverrideClassName"
import { InformationTileProps } from "../InformationTile"
import { MultiActionTileProps } from "../MultiActionTile"
import styles from "./TileGrid.module.scss"

type TileProps = InformationTileProps | MultiActionTileProps

export type TileElement = ReactElement<TileProps>

export interface TileGridProps
  extends OverrideClassName<HTMLAttributes<HTMLUListElement>> {
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
}: TileGridProps): JSX.Element => {
  const tiles = Children.map(children, child => {
    if (isValidElement(child.props.children)) {
      return child.props.children!.map(tile => (
        <li className={classnames(styles.li, classNameOverride)}>{tile}</li>
      ))
    }
  })

  const test = Array.isArray(children) && ?  children[0].props.children!.map()

  return (
    <ul
      className={classnames(styles.grid, classNameOverride)}
      data-tile-grid
      {...restProps}
    >
      {tiles}
    </ul>
  )
}
TileGrid.displayName = "TileGrid"
