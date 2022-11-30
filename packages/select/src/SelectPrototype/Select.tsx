import React, { useEffect } from "react"

import { HiddenSelect, useSelect } from "@react-aria/select"
import { Item } from "@react-stately/collections"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import { Node } from "@react-types/shared"
import classnames from "classnames"
import { VisuallyHidden } from "@kaizen/a11y"
import { Label, FieldMessage } from "@kaizen/draft-form"

import { ListBox, ListBoxProps } from "./components/ListBox"
import { Option, OptionProps } from "./components/Option"
import { Overlay } from "./components/Overlay"
import { TriggerButton, TriggerButtonProps } from "./components/TriggerButton"
import { ItemType, State } from "./types"
import selectStyles from "./Select.module.scss"

type SubComponentProps = {
  TriggerButton: typeof TriggerButton
  Option: typeof Option
  ListBox: typeof ListBox
}

type OptionsProps = State & {
  items: Array<Node<ItemType>>
}

export interface SelectProps
  extends Omit<AriaSelectProps<ItemType>, "children"> {
  isFullWidth?: boolean
  name: string
  id: string
  trigger?: (triggerProps: TriggerButtonProps) => React.ReactNode
  children?: (optionsProps: OptionsProps) => React.ReactNode
}

export const Select: React.FC<SelectProps> & SubComponentProps = props => {
  const {
    label,
    description,
    isFullWidth,
    trigger = triggerProps => <TriggerButton {...triggerProps} />,
    children = ({ items }) =>
      items.map(item => <Option key={item.key} item={item} state={state} />),
  } = props

  const buttonRef = React.useRef<HTMLButtonElement>(null)

  const selectChildren = item => <Item key={item.value}>{item.label}</Item>

  const state = useSelectState({ ...props, children: selectChildren })
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    { ...props, children: selectChildren },
    state,
    buttonRef
  )

  const items = Array.from(state.collection)

  // Fix the issue when default open and close by keyboard, then focus is lost
  useEffect(() => {
    if (state.isOpen === false) {
      buttonRef.current?.focus()
    }
  }, [state.isOpen])

  return (
    <div className={classnames([!isFullWidth && selectStyles.notFullWidth])}>
      <Label {...labelProps}>{label}</Label>
      {/* <VisuallyHidden {...labelProps}>{label}</VisuallyHidden> */}
      {/* TODO hidden select value not working. expected ? */}
      <HiddenSelect {...props} state={state} triggerRef={buttonRef} />

      <div className={classnames([selectStyles.container])}>
        {trigger({ triggerProps, buttonRef, valueProps, state })}

        {state.isOpen && (
          <Overlay state={state}>
            <ListBox menuProps={menuProps} state={state}>
              {children({ items, state })}
            </ListBox>
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
