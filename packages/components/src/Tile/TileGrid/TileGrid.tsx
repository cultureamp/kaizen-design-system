import React, { HTMLAttributes, ReactElement, ReactNode } from 'react'
import classnames from 'classnames'
import { OverrideClassName } from '~components/types/OverrideClassName'
import { InformationTileProps } from '../InformationTile'
import { MultiActionTileProps } from '../MultiActionTile'
import styles from './TileGrid.module.scss'

type TileProps = InformationTileProps | MultiActionTileProps

export type TileElement = ReactElement<TileProps>

export interface TileGridProps extends OverrideClassName<HTMLAttributes<HTMLUListElement>> {
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
  const isFragment = !Array.isArray(children) && children.type === React.Fragment

  return (
    <ul className={classnames(styles.grid, classNameOverride)} data-tile-grid {...restProps}>
      {isFragment ? (
        children?.props?.children ? (
          <TileListItem tiles={children.props.children} />
        ) : null
      ) : (
        <TileListItem tiles={children} />
      )}
    </ul>
  )
}
TileGrid.displayName = 'TileGrid'

type TileListItemProps = { tiles: ReactNode }

const TileListItem = ({ tiles }: TileListItemProps): JSX.Element => {
  if (Array.isArray(tiles)) {
    return (
      <>
        {tiles.map((tile: TileElement, index) => (
          <li key={`${tile.props.title}-${index}`}>{tile}</li>
        ))}
      </>
    )
  }

  return <li>{tiles}</li>
}
