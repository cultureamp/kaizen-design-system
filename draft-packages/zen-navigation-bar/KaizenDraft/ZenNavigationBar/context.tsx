import React from "react"
import { NavigationChange } from "./types"

type LinkClickContextType = {
  handleNavigationChange?: NavigationChange
}

export const LinkClickContext = React.createContext<LinkClickContextType>({})
