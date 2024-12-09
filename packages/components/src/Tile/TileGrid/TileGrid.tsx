import React, { HTMLAttributes, ReactElement } from 'react'
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
  if (Array.isArray(children)) {
    return (
      <ul className={classnames(styles.grid, classNameOverride)} data-tile-grid {...restProps}>
        {children.map((tile: TileElement, index) => (
          <li className={classnames(styles.li)} key={`${tile.props.title}-${index}`}>
            {tile}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <ul className={classnames(styles.grid, classNameOverride)} data-tile-grid {...restProps}>
      {children.type === React.Fragment ? (
        children?.props?.children ? (
          Array.isArray(children.props.children) ? (
            children.props.children.map((tile: TileElement, index) => (
              <li className={classnames(styles.li)} key={`${tile.props.title}-${index}`}>
                {tile}
              </li>
            ))
          ) : (
            <li className={classnames(styles.li)}>{children}</li>
          )
        ) : null
      ) : (
        <li className={classnames(styles.li)}>{children}</li>
      )}
    </ul>
  )
}
TileGrid.displayName = 'TileGrid'

/*
const TileListItem = () => {

}
*/
