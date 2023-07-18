import React, { useEffect, createContext, useState } from "react"
import { AddIcon } from "~icons/AddIcon"

const SVGContext = createContext({})

type Props = {
  children: React.ReactNode
}

export const SVGProvider = ({ children }: Props): JSX.Element => {
  // const [Icon, setIcon] = useState(<></>)

  // Handle dynamic imports
  // useEffect(() => {
  // const loadIcon = async (): Promise<any> => {
  // const AddIcon = await import("~icons/AddIcon")
  // setIcon(AddIcon as any)
  // }
  // loadIcon()
  // }, [])

  return (
    <SVGContext.Provider value={{ addIcon: "myCoolAddIcon" }}>
      <>
        <AddIcon />
        {children}

        <svg color={"green"} viewBox="0 0 44 44">
          <use href="#add-icon" />
        </svg>
      </>
    </SVGContext.Provider>
  )
}
