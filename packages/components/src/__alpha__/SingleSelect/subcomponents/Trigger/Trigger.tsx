import React from 'react'
import { Button as RACButton, SelectValue } from 'react-aria-components'
import { Icon } from '~components/__next__/Icon'
import styles from './Trigger.module.css'

export const Trigger = (): JSX.Element => {
  return (
    <RACButton className={styles.button}>
      <SelectValue />
      <Icon name="keyboard_arrow_down" isPresentational />
    </RACButton>
  )
}
