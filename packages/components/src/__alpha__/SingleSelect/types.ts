import { type RefObject } from 'react'
import { type Key } from '@react-types/shared'

// Shared types
export type SelectItem = {
  label: string
  value: string
}

export type SelectSection = {
  label: string
  options: SelectItem[]
}

// SingleSelect related types
export type SingleSelectProps = {
  children?: React.ReactNode
  items: (SelectItem | SelectSection)[]
  onSelectionChange?: (key: Key | null) => void
}

// Trigger related types
export type TriggerProps = {
  triggerRef: React.RefObject<HTMLButtonElement | HTMLDivElement>
  clearButtonRef?: React.RefObject<HTMLButtonElement>
}

// Popover related types
export type PopoverProps = {
  triggerRef: React.RefObject<HTMLElement>
  popoverRef: React.RefObject<HTMLDivElement>
  racPopoverRef: React.Ref<any>
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
