import React, { useEffect, createContext, useState } from "react"
import { AddIcon } from "~icons/AddIcon"

export const SVGContext = createContext({})

type Props = {
  children: React.ReactNode
}

export const SVGProvider = ({ children }: Props): JSX.Element => {
  const [icons, setIcons] = useState<string[]>([])

  return (
    <SVGContext.Provider value={{ icons, setIcons }}>
      <>
        {children}

        <AddIcon />
      </>
    </SVGContext.Provider>
  )
}
