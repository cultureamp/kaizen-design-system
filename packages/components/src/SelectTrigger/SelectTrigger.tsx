import React from 'react'
import { SelectValue } from 'react-aria-components'
import { Button } from '~components/__actions__/v3'
import { Icon } from '~components/__future__'

export type SelectTriggerProps = {
  label?: string
}

export const SelectTrigger = ({ label }: SelectTriggerProps): JSX.Element => {
  return (
    <Button
      variant="secondary"
      icon={<Icon name="keyboard_arrow_down" isPresentational />}
      iconPosition="end"
      size="large"
    >
      {label && label}
      {/* className={styles.button} */}
      <SelectValue>
        {({ defaultChildren, isPlaceholder }) => {
          return isPlaceholder ? <></> : defaultChildren
        }}
      </SelectValue>
      {/* <Icon name="keyboard_arrow_down" isPresentational /> */}
    </Button>
  )
}
