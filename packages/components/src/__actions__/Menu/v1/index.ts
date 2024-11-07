// Since we can't add a deprecation flag on a * export
import { Menu as MenuV1, MenuProps as MenuPropsV1 } from './Menu'
import {
  MenuHeading as MenuHeadingV1,
  MenuHeadingProps as MenuHeadingPropsV1,
} from './subcomponents/MenuHeading'
import { MenuItem as MenuItemV1, MenuItemProps as MenuItemPropsV1 } from './subcomponents/MenuItem'
import { MenuList as MenuListV1, MenuListProps as MenuListPropsV1 } from './subcomponents/MenuList'
import {
  StatelessMenu as StatelessMenuV1,
  StatelessMenuProps as StatelessMenuPropsV1,
} from './subcomponents/StatelessMenu'

// Note: deprecate all of these once we have Button v3

export const Menu = MenuV1
export type MenuProps = MenuPropsV1

export const MenuHeading = MenuHeadingV1
export type MenuHeadingProps = MenuHeadingPropsV1

export const MenuItem = MenuItemV1
export type MenuItemProps = MenuItemPropsV1

export const MenuList = MenuListV1
export type MenuListProps = MenuListPropsV1

export const StatelessMenu = StatelessMenuV1
export type StatelessMenuProps = StatelessMenuPropsV1
