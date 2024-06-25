// Since we can't add a deprecation flag on a * export
import { Menu as MenuV1, MenuProps as MenuPropsV1 } from "./Menu"
import {
  MenuHeading as MenuHeadingV1,
  MenuHeadingProps as MenuHeadingPropsV1,
} from "./subcomponents/MenuHeading"
import {
  MenuItem as MenuItemV1,
  MenuItemProps as MenuItemPropsV1,
} from "./subcomponents/MenuItem"
import {
  MenuList as MenuListV1,
  MenuListProps as MenuListPropsV1,
} from "./subcomponents/MenuList"
import {
  StatelessMenu as StatelessMenuV1,
  StatelessMenuProps as StatelessMenuPropsV1,
} from "./subcomponents/StatelessMenu"

/** * @deprecated use v2 or upgrade to v3 for the latest release */
export const Menu = MenuV1
/** * @deprecated use v2 or upgrade to v3 for the latest release */
export type MenuProps = MenuPropsV1

/** * @deprecated use v2 or upgrade to v3 for the latest release */
export const MenuHeading = MenuHeadingV1
/** * @deprecated use v2 or upgrade to v3 for the latest release */
export type MenuHeadingProps = MenuHeadingPropsV1

/** * @deprecated use v2 or upgrade to v3 for the latest release */
export const MenuItem = MenuItemV1
/** * @deprecated use v2 or upgrade to v3 for the latest release */
export type MenuItemProps = MenuItemPropsV1

/** * @deprecated use v2 or upgrade to v3 for the latest release */
export const MenuList = MenuListV1
/** * @deprecated use v2 or upgrade to v3 for the latest release */
export type MenuListProps = MenuListPropsV1

/** * @deprecated use v2 or upgrade to v3 for the latest release */
export const StatelessMenu = StatelessMenuV1
/** * @deprecated use v2 or upgrade to v3 for the latest release */
export type StatelessMenuProps = StatelessMenuPropsV1
