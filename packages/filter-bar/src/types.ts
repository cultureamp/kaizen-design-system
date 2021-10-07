export interface IFilter<T = any> {
  name: string
  id: string
  visibility?: VisibilityStates
  removable: boolean
  selected?: T
  Component: JSX.Element
}

export type VisibilityStates = "hidden" | "visible" | "open" | undefined
