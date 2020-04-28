import React from "react"

type LinkClickContextType = {
  handleNavigationClick?: (
    event:
      | React.MouseEvent<HTMLAnchorElement>
      | React.FormEvent<HTMLFormElement>
  ) => void
}

export const LinkClickContext = React.createContext<LinkClickContextType>({})
