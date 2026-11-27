import React, { useState } from 'react'
import { CheckboxField, type CheckboxFieldProps } from '../index'

/** Story helper: a `CheckboxField` with local state so it toggles on click */
export const InteractiveCheckboxField = ({
  checkedStatus = 'off',
  ...props
}: CheckboxFieldProps): JSX.Element => {
  const [status, setStatus] = useState(checkedStatus)

  return (
    <CheckboxField
      {...props}
      checkedStatus={status}
      onCheck={() => setStatus(status === 'on' ? 'off' : 'on')}
    />
  )
}
