import React, { useMemo } from 'react'
import { Button as RACButton } from 'react-aria-components'
import { Icon } from '~components/__next__/Icon'
import { useSingleSelectContext } from '../../context'
import { type SelectItem, type SelectSection } from '../../types'
import styles from './Trigger.module.css'

function flattenItems(items: (SelectItem | SelectSection)[]): SelectItem[] {
  return items.flatMap((item) => ('options' in item ? item.options : item))
}

type TriggerProps = {
  buttonRef: React.RefObject<HTMLButtonElement>
}

export const Trigger = ({ buttonRef }: TriggerProps): JSX.Element => {
  const { isOpen, setOpen, selectedKey, items } = useSingleSelectContext()
  // manually handle selected label to show in button
  const flattenedItems = useMemo(() => flattenItems(items), [items])
  const selectedLabel = useMemo(() => {
    const key = selectedKey
    const item = flattenedItems.find((i) => i.value === key)
    return item?.label ?? <div></div>
  }, [flattenedItems, selectedKey])

  return (
    <RACButton
      className={styles.button}
      ref={buttonRef}
      onPress={() => setOpen(!isOpen)}
      aria-expanded={isOpen}
    >
      {selectedLabel}
      <Icon name="keyboard_arrow_down" isPresentational />
    </RACButton>
  )
}
