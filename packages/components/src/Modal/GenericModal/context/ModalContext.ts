import { createContext } from "react"

export type ModalContextType = {
  labelledByID: string
  describedByID: string
}

export const ModalContext = createContext<ModalContextType>({
  labelledByID: "modal-labelledby",
  describedByID: "modal-describedby",
})
