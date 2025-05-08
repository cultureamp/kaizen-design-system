import React, { useContext, useRef, useState } from 'react'
import classnames from 'classnames'
import {
  Button as RACButton,
  Header as RACHeader,
  ListBoxSection as RACListBoxSection,
  Popover,
  Select as RACSelect,
  type Key,
  type Selection,
} from 'react-aria-components'
import { Text } from '~components/Text'
import { Button } from '../../__next__/Button'
import { RemovableTag } from '../../__next__/Tag'
import { ChevronIcon } from './InputChevron'
import { ListBox } from './ListBox'
import { ListBoxItem } from './ListBoxItem'
import { FieldContext } from './PickerContext'
import styles from './styles.module.scss'

type ItemProp = {
  id: string
  name: string
}

type IUIMultiSelectProps = {
  items: ItemProp[]
  selectedKeys?: Key[]
  children?: React.ReactNode
}

export const MultiSelect = ({ items, ...props }: IUIMultiSelectProps): JSX.Element => {
  const [selectedKeys, onSelectionChange] = useState<Selection>(new Set(props?.selectedKeys))
  const triggerButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef(null)
  const { size, label } = useContext(FieldContext)
  const filteredChildren = items.filter(
    (item) => !Array.from(selectedKeys).includes(item.id as Key),
  )

  const addItem = (e: Key | null): void => {
    if (!e) return
    onSelectionChange?.((s) => new Set([...Array.from(s), e!]))
    // @ts-expect-error incompatible type Key and Selection
    props.onSelectionChange?.((s) => new Set([...s, e!]))
  }

  const removeItem = (e: Set<Key>): void => {
    onSelectionChange?.((s) => new Set(Array.from(s).filter((i) => i !== e.values().next().value)))
    // @ts-expect-error incompatible type Key and Selection
    props.onSelectionChange?.((s) => new Set([...s].filter((i) => i !== e.values().next().value)))
  }

  const tagListItems =
    selectedKeys === 'all'
      ? items.map((item: ItemProp) => ({
          id: item.id,
          name: item.name,
        }))
      : Array.from(selectedKeys).map((key) => ({
          id: key as string,
          name: items.find((item: ItemProp) => item.id === (key as string))?.name ?? '',
        }))

  const EmptyInputButton = (): JSX.Element => (
    <RACButton
      ref={triggerButtonRef}
      className={classnames(
        styles.input,
        size === 'small' && styles.smallInput,
        size === 'large' && styles.largeInput,
      )}
    >
      <ChevronIcon />
    </RACButton>
  )

  const InputButtonWithTags = (): JSX.Element => (
    <span
      className={classnames(
        styles.input,
        size === 'small' && styles.smallInput,
        size === 'large' && styles.largeInput,
      )}
    >
      {tagListItems.map((item, key) => (
        <RemovableTag
          removeButtonProps={{
            ariaLabel: 'remove tag icon',
            onClick: () => removeItem(new Set(item.id)),
          }}
          key={key}
        >
          {item.name}
        </RemovableTag>
      ))}
      <RACButton ref={triggerButtonRef} className="flex bg-white">
        <ChevronIcon />
      </RACButton>
    </span>
  )

  // TODO: need to understand if we can add the tags to the select input
  return (
    <>
      <RACSelect onSelectionChange={addItem} aria-label={label} ref={triggerRef}>
        {tagListItems.length > 0 ? <InputButtonWithTags /> : <EmptyInputButton />}

        <Popover triggerRef={triggerRef}>
          <ListBox selectionMode="multiple">
            <RACListBoxSection>
              <RACHeader className="flex">
                <>
                  <Text variant="body">
                    {typeof selectedKeys === 'string' ? items.length : selectedKeys.size} Selected
                  </Text>
                  {selectedKeys === 'all' || selectedKeys.size > 1 ? (
                    <Button
                      aria-label="clear"
                      variant="tertiary"
                      onPress={() => onSelectionChange(new Set())}
                    >
                      Clear
                    </Button>
                  ) : (
                    <Button
                      aria-label="Select all"
                      variant="tertiary"
                      onPress={() => onSelectionChange('all')}
                    >
                      Select all
                    </Button>
                  )}
                </>
              </RACHeader>
            </RACListBoxSection>
            {selectedKeys !== 'all' &&
              filteredChildren?.map((item: any) => (
                <ListBoxItem key={item.id as Key} id={item.id as Key} textValue={item.name}>
                  {item.name}
                </ListBoxItem>
              ))}
          </ListBox>
        </Popover>
      </RACSelect>
    </>
  )
}
