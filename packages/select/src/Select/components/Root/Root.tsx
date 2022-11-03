import React, { Key } from "react"
import { Label } from "@kaizen/draft-form"
import { HiddenSelectWrapper } from "../HiddenSelectWrapper/HiddenSelectWrapper"
import {
  MenuTriggerConsumer,
  MenuTriggerProvider,
  MenuTriggerProviderContextType,
  MenuTriggerProviderProps,
} from "../../provider/MenuTriggerProvider"
import {
  SelectionConsumer,
  SelectionProvider,
  SelectionProviderContextType,
} from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import { MenuPopup } from "../MenuPopup"
export interface RootProps extends MenuTriggerProps, SelectionProps {
  trigger: (value?: MenuTriggerProviderContextType) => React.ReactNode
  children: (value?: SelectionProviderContextType) => React.ReactNode // the content of the menu
}

type MenuTriggerProps = Omit<MenuTriggerProviderProps, "children">

interface SelectionProps {
  id: string // provide A11y context for label
  label: string // provide A11y context for listbox
  items: ItemType[]
  selectedKey?: Key | null
  onSelectionChange?: (key: Key) => void
}

export type SelectProps = RootProps

export const Root: React.VFC<RootProps> = ({
  id,
  trigger,
  children,
  isOpen,
  defaultOpen,
  onOpenChange,
  label,
  items,
  selectedKey,
  onSelectionChange,
  isDisabled,
  isFullWidth,
}) => {
  const menuTriggerProps = {
    isOpen,
    defaultOpen,
    onOpenChange,
    isDisabled,
    isFullWidth,
  }

  const selectionProps = {
    id,
    label,
    items,
    selectedKey,
    onSelectionChange,
  }

  return (
    <>
      <Label htmlFor={id} aria-label={label}>
        {label}
      </Label>
      <MenuTriggerProvider {...menuTriggerProps}>
        <div>
          <HiddenSelectWrapper items={items} label={label} name={id} />
          <MenuTriggerConsumer>{trigger}</MenuTriggerConsumer>
          <MenuPopup>
            <SelectionProvider {...selectionProps}>
              <SelectionConsumer>{children}</SelectionConsumer>
            </SelectionProvider>
          </MenuPopup>
        </div>
      </MenuTriggerProvider>
    </>
  )
}

Root.displayName = "Root"
