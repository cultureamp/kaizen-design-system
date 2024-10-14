import React from 'react'
import { Label, Popover, Select } from 'react-aria-components'
import { Listbox, ListboxItem } from '~components/Listbox'
import { SelectTrigger } from '~components/SelectTrigger'
import styles from './SingleSelect.module.css'

export const SingleSelect = (): JSX.Element => {
  return (
    <Select>
      {/* <Label>Wat</Label> */}
      <SelectTrigger label="Test" />
      <Popover>
        <Listbox>
          <ListboxItem>Pickles</ListboxItem>
          <ListboxItem>Salami</ListboxItem>
        </Listbox>
      </Popover>
    </Select>
  )
}
