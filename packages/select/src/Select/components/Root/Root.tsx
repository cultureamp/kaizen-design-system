import React from "react"
import { SingleSelection } from "@react-types/shared"
import classnames from "classnames"
import { Label, FieldMessage } from "@kaizen/draft-form"
import {
  MenuTriggerProvider,
  MenuTriggerProviderProps,
} from "../../provider/MenuTriggerProvider"
import { SelectionProvider } from "../../provider/SelectionProvider"
import { ItemType } from "../../types"
import { FloatingSelectWrapper } from "../FloatingSelectWrapper"
import { HiddenSelectWrapper } from "../HiddenSelectWrapper/HiddenSelectWrapper"
import rootStyles from "./rootStyles.module.scss"
export interface RootProps extends MenuTriggerProps, SelectionProps {
  trigger: React.ReactNode
  children: React.ReactNode // the content of the menu
  description?: React.ReactNode
  isFullWidth?: boolean
}

type MenuTriggerProps = Omit<MenuTriggerProviderProps, "children">

interface SelectionProps {
  id: string // provide A11y context for label
  label: string // provide A11y context for listbox
  items: ItemType[]
  selectedKey?: SingleSelection["selectedKey"]
  onSelectionChange?: SingleSelection["onSelectionChange"]
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
  description,
}) => {
  const menuTriggerProps = {
    isOpen,
    defaultOpen,
    onOpenChange,
    isDisabled,
    isFullWidth,
    description,
    items,
  }

  const selectionProps = {
    id,
    label,
    items,
    selectedKey,
    onSelectionChange,
  }

  return (
    <div>
      <Label
        htmlFor={id}
        aria-label={label}
        classNameOverride={classnames([
          !isFullWidth && rootStyles.notFullWidth,
        ])}
      >
        {label}
      </Label>
      <MenuTriggerProvider {...menuTriggerProps}>
        <div
          className={classnames([
            rootStyles.container,
            !isFullWidth && rootStyles.notFullWidth,
          ])}
        >
          <HiddenSelectWrapper items={items} label={label} name={id} />
          {trigger}
          <FloatingSelectWrapper>
            <SelectionProvider {...selectionProps}>
              {children}
            </SelectionProvider>
          </FloatingSelectWrapper>
        </div>
      </MenuTriggerProvider>
      {description && (
        <FieldMessage id={`${description}`} message={description} />
      )}
    </div>
  )
}

Root.displayName = "Root"
