import React from "react"

export type ModalAccessibleContextType = {
  labelledByID: string
  describedByID: string
}

export const ModalAccessibleContext = React.createContext<
  ModalAccessibleContextType
>({
  labelledByID: "modal-labelledby",
  describedByID: "modal-describedby",
})
