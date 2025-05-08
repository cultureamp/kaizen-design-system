import React, { useContext, useRef, useState } from 'react'
import classnames from 'classnames'
import {
  Button as RACButton,
  ComboBox,
  Input,
  Popover,
  type Selection,
} from 'react-aria-components'
import { ChevronIcon } from './InputChevron'
import { ListBox } from './ListBox'
import { FieldContext } from './PickerContext'
import styles from './styles.module.scss'

export const ComboSingleSelect = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [selected, setSelected] = useState<Selection>(new Set())
  const triggerButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef(null)
  const { size, label } = useContext(FieldContext)
  return (
    <ComboBox
      className={classnames(
        styles.input,
        size === 'small' && styles.smallInput,
        size === 'large' && styles.largeInput,
      )}
      ref={triggerRef}
      aria-label={label}
      onFocus={() => triggerButtonRef.current?.click()}
    >
      <div className="flex items-center">
        <Input className={styles.inputOutline} />
        <RACButton ref={triggerButtonRef} className="flex bg-white">
          <ChevronIcon />
        </RACButton>
      </div>

      <Popover triggerRef={triggerRef}>
        <ListBox selectedKeys={selected} onSelectionChange={setSelected}>
          {children}
        </ListBox>
      </Popover>
    </ComboBox>
  )
}
