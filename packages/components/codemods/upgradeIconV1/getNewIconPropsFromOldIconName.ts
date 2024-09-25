import * as OLD_ICONS from "~components/Icon"
import { IconNames } from "~components/__future__/Icon/types"
import { StringSuggestions } from "~components/types/StringSuggestions"

// `undefined` means the icon is not available in the new icon set
type NewIconProps = { name: IconNames; isFilled?: boolean } | undefined

const iconMap = new Map<keyof typeof OLD_ICONS, NewIconProps>([
  ["AddIcon", { name: "add" }],
  ["FlagOffIcon", { name: "flag" }],
  ["FlagOffWhiteIcon", { name: "flag" }],
  ["FlagOnIcon", { name: "flag", isFilled: true }],
  ["HamburgerIcon", { name: "menu" }],
  ["MeatballsIcon", { name: "more_horiz" }],
])

export const getNewIconPropsFromOldIconName = (
  oldValue: StringSuggestions<keyof typeof OLD_ICONS>
): NewIconProps => iconMap.get(oldValue as keyof typeof OLD_ICONS)
