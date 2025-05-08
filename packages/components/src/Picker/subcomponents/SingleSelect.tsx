import React, { useContext, useRef, useState } from 'react'
import classnames from 'classnames'
import {
  Button as RACButton,
  Popover,
  Select as RACSelect,
  SelectValue,
  Tree as RACTree,
  type Selection,
} from 'react-aria-components'

import { ChevronIcon } from './InputChevron'
import { ListBox } from './ListBox'
import { FieldContext } from './PickerContext'
import styles from './styles.module.scss'

const List = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [selected, setSelected] = useState<Selection>(new Set())
  return (
    <ListBox
      selectedKeys={selected}
      onSelectionChange={(keys) => setSelected(keys)}
      selectionBehavior="toggle"
      selectionMode="single"
    >
      {children}
    </ListBox>
  )
}

const Nested = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [selected, setSelected] = useState<Selection>(new Set())
  return (
    <RACTree
      className={styles.reactAriaTree}
      selectionMode="single"
      selectedKeys={selected}
      onSelectionChange={(keys) => setSelected(keys)}
    >
      {children}
    </RACTree>
  )
}

export const SingleSelect = ({
  nested = false,
  children,
}: {
  nested?: boolean
  children: React.ReactNode
}): JSX.Element => {
  const { size: componentSize, label } = useContext(FieldContext)
  const triggerRef = useRef(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  return (
    <>
      <RACSelect aria-label={label} placeholder="" ref={triggerRef}>
        <RACButton
          onPress={() => setPopoverOpen(true)}
          popovertarget="select-popover"
          className={classnames(
            styles.input,
            componentSize === 'small' && styles.smallInput,
            componentSize === 'large' && styles.largeInput,
          )}
        >
          <SelectValue />
          <ChevronIcon />
        </RACButton>

        <div id="select-popover" popover="manual">
          <Popover triggerRef={triggerRef} isOpen={popoverOpen} onOpenChange={setPopoverOpen}>
            {nested ? <Nested>{children}</Nested> : <List>{children}</List>}
          </Popover>
        </div>
      </RACSelect>

      {/* <button
        type="button"
        popovertarget="popover-content"
        onClick={() => setIsVisible(!isVisible)}
        // className="popover-trigger"
        // aria-haspopup="true"
        // aria-expanded={isVisible}
        // aria-controls="popover-content"
      >
        click me
      </button>
      {isVisible && (
        <div
          popover="manual"
          id="popover-content"
          // className="popover-content"
          // role="dialog"
          // aria-modal="true"
        >
          Meow
        </div>
      )} */}
    </>
  )
}
