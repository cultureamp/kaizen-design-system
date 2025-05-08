import React, { useContext } from 'react'
import { Icon } from '~components/__next__/Icon'
import { FieldContext } from './PickerContext'

export const ChevronIcon = (): JSX.Element => {
  const { size } = useContext(FieldContext)
  const small = { fontSize: '16px' }
  const medium = { fontSize: '20px' }
  const large = { fontSize: '24px' }
  return (
    <Icon
      name="keyboard_arrow_down"
      isPresentational
      style={size === 'large' ? large : size === 'small' ? small : medium}
    />
  )
}
