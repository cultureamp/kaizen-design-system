import React, { ReactNode } from 'react'

export type ReversedColorsProps = {
  children: ReactNode
  isReversed?: boolean
}

const ReversedColorsContext = React.createContext<boolean>(false)

export const useReversedColors = (): boolean => React.useContext(ReversedColorsContext)

export const ReversedColors = ({
  children,
  isReversed = true,
}: ReversedColorsProps): JSX.Element => (
  <ReversedColorsContext.Provider value={isReversed}>{children}</ReversedColorsContext.Provider>
)
