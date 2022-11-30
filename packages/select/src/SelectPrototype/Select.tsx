import React, { useEffect } from "react"

import { HiddenSelect, useSelect } from "@react-aria/select"
import { Item } from "@react-stately/collections"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import classnames from "classnames"
import { VisuallyHidden } from "@kaizen/a11y"
import { Label, FieldMessage } from "@kaizen/draft-form"

import { ListBox, ListBoxProps } from "./components/ListBox"
import { Option } from "./components/Option"
import { Overlay } from "./components/Overlay"
import { TriggerButton, TriggerButtonProps } from "./components/TriggerButton"
import { ItemType } from "./types"
import selectStyles from "./Select.module.scss"

type SubComponentProps = {
  TriggerButton: typeof TriggerButton
  Option: typeof Option
  ListBox: typeof ListBox
}

export interface SelectProps
  extends Omit<AriaSelectProps<ItemType>, "children"> {
  isFullWidth?: boolean
  name: string
  id: string
  trigger?: (triggerProps: TriggerButtonProps) => React.ReactNode
  children?: (listBoxProps: ListBoxProps) => React.ReactNode
}

export const Select: React.FC<SelectProps> & SubComponentProps = props => {
  const {
    label,
    description,
    isFullWidth,
    trigger = triggerProps => <TriggerButton {...triggerProps} />,
    children = listBoxProps => <ListBox {...listBoxProps} />,
  } = props

  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const selectChildren = item => <Item key={item.value}>{item.label}</Item>

  const state = useSelectState({ ...props, children: selectChildren })
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    { ...props, children: selectChildren },
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
    <div className={classnames([!isFullWidth && selectStyles.notFullWidth])}>
      <Label {...labelProps}>{label}</Label>

      <div className={classnames([selectStyles.container])}>
        <HiddenSelect {...props} state={state} triggerRef={buttonRef} />
        {trigger({ triggerProps, buttonRef, valueProps, state })}

        {state.isOpen && (
          <Overlay state={state}>
            <VisuallyHidden {...labelProps}>{label}</VisuallyHidden>
            {children({ menuProps, state })}
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
Select.ListBox = ListBox
Select.Option = Option

Select.displayName = "Select"
