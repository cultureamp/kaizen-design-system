import React from 'react'
import { Label as RACLabel } from 'react-aria-components'
import { Label } from '~components/Label'

export const PickerLabel = ({ children }: { children: React.ReactNode }): JSX.Element => {
  /* we can keep the design of our label & wrap it in the RACLabel if that's easier */
  return (
    <RACLabel>
      <Label>{children}</Label>
    </RACLabel>
  )
}
