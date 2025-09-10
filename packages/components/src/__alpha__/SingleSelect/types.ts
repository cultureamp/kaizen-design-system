import type { DOMAttributes, RefObject } from 'react'

import type React from 'react'
import { type ComboBoxState, type ComboBoxStateOptions } from '@react-stately/combobox'
import type { ListState } from '@react-stately/list'
import { type SelectState, type SelectStateOptions } from '@react-stately/select'
import { type Key, type Node } from '@react-types/shared'
import { type FocusableElement } from '@react-types/shared/src/dom'
import type { AriaButtonProps, AriaListBoxOptions, AriaPopoverProps } from 'react-aria'

// Shared types
export type SelectItem = {
  label: string
  value: string
  key: Key
}

export type SelectSection = {
  label: string
  options: SelectItem[]
}

// SingleSelect
export type SelectLabel =
  | {
      labelHidden: true
      label: string
    }
  | {
      labelHidden?: false
      label: React.ReactNode
    }

export type SelectBaseProps = {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large'
  labelPosition?: 'top' | 'side'
  isReadOnly?: boolean
  selectedIcon?: 'check' | 'radio'
  selectedPosition?: 'start' | 'end'
} & SelectLabel

export type SelectProps<T extends SelectItem> = Omit<SelectStateOptions<T>, 'label'> &
  SelectBaseProps

export type ComboBoxProps<T extends SelectItem> = Omit<ComboBoxStateOptions<T>, 'label'> &
  SelectBaseProps

export type SingleSelectProps<T extends SelectItem> =
  | (ComboBoxProps<T> & { isComboBox?: true })
  | (SelectProps<T> & { isComboBox?: false })

// Trigger
export type SelectTriggerProps = {
  triggerProps: AriaButtonProps<'button'>
  valueProps: DOMAttributes<FocusableElement>
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>
}

export type ComboBoxTriggerProps = {
  inputProps: React.InputHTMLAttributes<HTMLInputElement>
  inputRef: React.MutableRefObject<HTMLInputElement | null>
  buttonProps: AriaButtonProps<'button'>
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>
  clearButtonRef: React.MutableRefObject<HTMLButtonElement | null>
}

export type ChevronButtonProps = AriaButtonProps<'button'> & {
  buttonRef: React.MutableRefObject<HTMLButtonElement | null>
}

// Popover

export type PopoverProps<T extends SelectItem> = AriaPopoverProps & {
  state: ComboBoxState<T> | SelectState<T>
  triggerRef: React.RefObject<HTMLInputElement> | React.RefObject<HTMLButtonElement>
  popoverRef: React.RefObject<HTMLDivElement>
  clearButtonRef?: React.RefObject<HTMLButtonElement>
  children: React.ReactNode
}

type PositionDataProp = number | string | undefined

export type PositionData = {
  top: PositionDataProp
  bottom: PositionDataProp
  insetInlineStart: PositionDataProp
  maxHeight: PositionDataProp
}

export type LogicalPosition = number | 'auto' | undefined

export type Position = {
  top: LogicalPosition
  bottom: LogicalPosition
  insetInlineStart: number
  maxHeight?: number
}

export type UsePopoverPositioningProps = {
  triggerRef: RefObject<HTMLElement>
  popoverRef: RefObject<HTMLElement>
  direction?: 'ltr' | 'rtl'
  offset?: number
  preferredPlacement?: 'top' | 'bottom'
}

// List
export type ListProps<T extends SelectItem> = {
  state: ComboBoxState<T> | SelectState<T>
  listBoxOptions: AriaListBoxOptions<T>
  listBoxRef: React.RefObject<HTMLUListElement>
}

// ListItem
export type ListItemProps<T extends SelectItem> = {
  item: Node<T>
  state: ListState<T>
}

// ListSection
export type ListSectionProps<T extends SelectItem> = {
  section: Node<T>
  state: ComboBoxState<T> | SelectState<T>
}
