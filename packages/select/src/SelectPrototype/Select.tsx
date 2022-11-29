import React, { useEffect } from "react"

import { HiddenSelect, useSelect } from "@react-aria/select"
import { Item } from "@react-stately/collections"
import { useSelectState, SelectProps as AriaSelectProps } from "@react-stately/select"
import classnames from "classnames"
import { Label, FieldMessage } from "@kaizen/draft-form"

import { ListBox } from "./components/ListBox"
import { Option } from "./components/Option"
import { Overlay } from "./components/Overlay"
import { TriggerButton, TriggerButtonProps } from "./components/TriggerButton"
import { ItemType } from "./types"
import selectStyles from "./Select.module.scss"


type SubComponentProps = {
  TriggerButton: typeof TriggerButton
  Option: typeof Option
  Item: typeof Item
}

export interface SelectProps
  extends AriaSelectProps<ItemType> {
  trigger: (props: TriggerButtonProps) => React.ReactNode
  description?: React.ReactNode
  isFullWidth?: boolean
  label: string
  name?: string
  id: string
}

export const Select: React.FC<SelectProps> &
  SubComponentProps = props => {
    const { label, description, trigger, name, isFullWidth } = props

    const buttonRef = React.useRef<HTMLButtonElement>(null)

    const state = useSelectState(props)
    const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
      props,
      state,
      buttonRef
    )

    // Fix the issue when default open and close by keyboard, then focus is lost
    useEffect(() => {
      if (state.isOpen === false) {
        buttonRef.current?.focus()
      }
    }, [state.isOpen])

    return (
      <div
        className={classnames([
          !isFullWidth && selectStyles.notFullWidth,
        ])}
      >
        <Label {...labelProps}>{label}</Label>
        <div className={classnames([selectStyles.container])}>
          <HiddenSelect
            label={label}
            name={name}
            state={state}
            triggerRef={buttonRef}
          />
          {trigger({ triggerProps, buttonRef, valueProps, state })}
          {state.isOpen && (
            <Overlay state={state}>
              <ListBox menuProps={menuProps} state={state} />
            </Overlay>
          )}
        </div>

        {description && (
          <FieldMessage id={`${description}`} message={description} />
        )}
      </div>
    )
  }

Select.TriggerButton = TriggerButton
Select.Option = Option
Select.Item = Item

Select.displayName = "Select"
