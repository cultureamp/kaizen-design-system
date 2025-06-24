import React from 'react'
import { Button as RACButton, SelectValue } from 'react-aria-components'
import { Icon } from '~components/__next__/Icon'

export const Trigger = (): JSX.Element => {
  return (
    <RACButton
      className={
        'min-h-48 border border-solid border-gray-500 rounded bg-white flex items-center justify-between p-12 font-family-paragraph text-current'
      }
    >
      <SelectValue />
      <Icon name="keyboard_arrow_down" isPresentational />
    </RACButton>
  )
}
