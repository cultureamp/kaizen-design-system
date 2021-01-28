import React from "react"
import { NavigationChange } from "./types"

type NavBarContextType = {
  handleNavigationChange?: NavigationChange
  hasExtendedNavigation: boolean
}

export const NavBarContext = React.createContext<NavBarContextType>({
  hasExtendedNavigation: false,
})
