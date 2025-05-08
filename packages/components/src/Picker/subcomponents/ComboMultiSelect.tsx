import React, { useContext, useEffect, useRef, useState, type RefObject } from 'react'
import classnames from 'classnames'
import {
  Button as RACButton,
  ComboBox,
  Header as RACHeader,
  Input,
  ListBoxSection as RACListBoxSection,
  Popover,
  Tag as RACTag,
  TagGroup,
  TagList,
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

export const ComboMultiSelect = ({ items, ...props }: IUIMultiSelectProps): JSX.Element => {
  const [selectedKeys, onSelectionChange] = useState<Set<Key>>(new Set(props?.selectedKeys))
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const triggerButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef(null)
  const { size, label } = useContext(FieldContext)
  const filteredChildren = items.filter(
    (item) => !Array.from(selectedKeys).includes(item.id as Key),
  )

  useEffect(() => {
    setInputValue('')
    return () => {
      inputRef.current?.focus()
    }
  }, [selectedKeys])

  const addItem = (e: Key | null): void => {
    if (!e) return
    onSelectionChange?.((s) => new Set([...Array.from(s), e!]))
    setInputValue('')
    // @ts-expect-error incompatible type Key and Selection
    props.onSelectionChange?.((s) => new Set([...s, e!]))
  }

  const removeItem = (e: Set<Key>): void => {
    onSelectionChange?.((s) => new Set(Array.from(s).filter((i) => i !== e.values().next().value)))
    // @ts-expect-error incompatible type Key and Selection
    props.onSelectionChange?.((s) => new Set([...s].filter((i) => i !== e.values().next().value)))
  }

  const onKeyDownCapture = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Backspace' && inputValue === '') {
      onSelectionChange?.((s) => new Set(Array.from(s).slice(0, -1)))
      setInputValue('')
      // @ts-expect-error incompatible type Key and Selection
      props.onSelectionChange?.((s) => new Set([...s].slice(0, -1)))
    }
  }

  const tagListItems = Array.from(selectedKeys).map((key) => ({
    id: key as string,
    name: items.find((item: ItemProp) => item.id === (key as string))?.name ?? '',
  }))

  return (
    <div
      className={classnames(
        styles.input,
        size === 'small' && styles.smallInput,
        size === 'large' && styles.largeInput,
      )}
      ref={triggerRef}
    >
      <TagGroup onRemove={() => removeItem} aria-hidden aria-label="Selected items">
        <TagList className="flex gap-2" items={tagListItems}>
          {(item: ItemProp) => (
            <RACTag>
              <RemovableTag
                removeButtonProps={{
                  ariaLabel: 'remove tag icon',
                  onClick: () => removeItem(new Set(item.id)),
                }}
              >
                {item.name}
              </RemovableTag>
            </RACTag>
          )}
        </TagList>
      </TagGroup>

      <ComboBox
        onSelectionChange={addItem}
        inputValue={inputValue}
        onInputChange={setInputValue}
        aria-labelledby={label}
      >
        <div className="flex">
          <Input
            className={styles.inputOutline}
            onKeyDownCapture={onKeyDownCapture}
            onFocus={() => triggerButtonRef.current?.click()}
            ref={inputRef as RefObject<HTMLInputElement>}
            onBlur={() => setInputValue('')}
          />
          <RACButton ref={triggerButtonRef} className="flex bg-white">
            <ChevronIcon />
          </RACButton>
        </div>
        <Popover triggerRef={triggerRef} isOpen>
          <ListBox>
            {/* <div className={styles.dropdownActions}>
              <Text variant="body">
                {typeof selectedKeys === 'string' ? items.length : selectedKeys.size} Selected
              </Text>
              {selectedKeys.size > 0 ? (
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
                  onPress={() => onSelectionChange(new Set(items.map((item) => item.id)))}
                >
                  Select all
                </Button>
              )}
            </div> */}
            <RACListBoxSection>
              <RACHeader className={styles.dropdownActions}>
                <Text variant="body">
                  {typeof selectedKeys === 'string' ? items.length : selectedKeys.size} Selected
                </Text>
                {selectedKeys.size > 0 ? (
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
                    onPress={() => onSelectionChange(new Set(items.map((item) => item.id)))}
                  >
                    Select all
                  </Button>
                )}
              </RACHeader>
            </RACListBoxSection>
            {filteredChildren?.map((item: any) => (
              <ListBoxItem key={item.id as Key} id={item.id as Key} textValue={item.name}>
                {item.name}
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </ComboBox>
    </div>
  )
}
