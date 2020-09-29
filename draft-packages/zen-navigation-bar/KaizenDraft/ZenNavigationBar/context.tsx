import React from "react"
import { NavigationChange, ColorScheme } from "./types"

type NavBarContextType = {
  handleNavigationChange?: NavigationChange
  hasExtendedNavigation: boolean
  colorScheme: ColorScheme
}

export const NavBarContext = React.createContext<NavBarContextType>({
  hasExtendedNavigation: false,
  colorScheme: "cultureamp",
})
