import React, { useContext, useEffect } from "react"
import { HiddenSelect, useSelect } from "@react-aria/select"
import { Item } from "@react-stately/collections"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import { Node, CollectionChildren } from "@react-types/shared"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Label, FieldMessage } from "@kaizen/draft-form"
import { SingleItemType, SingleState } from "../types"
import { ListBox } from "./components/ListBox"
import { Option } from "./components/Option"
import { Overlay } from "./components/Overlay"
import { TriggerButton, TriggerButtonProps } from "./components/TriggerButton"
import selectStyles from "./Select.module.scss"

type SubComponentProps = {
  TriggerButton: typeof TriggerButton
  Option: typeof Option
  ListBox: typeof ListBox
}

const SelectContext = React.createContext<SingleState>({} as SingleState)

export type SelectOptionsProps = {
  items: Array<Node<SingleItemType>>
}

export const selectChildren: CollectionChildren<SingleItemType> = item => (
  <Item key={item.value}>{item.label}</Item>
)
export interface SelectProps
  extends OverrideClassName<Omit<AriaSelectProps<SingleItemType>, "children">> {
  isFullWidth?: boolean
  id: string
  trigger?: (
    triggerProps: TriggerButtonProps,
    ref: React.RefObject<HTMLButtonElement>
  ) => React.ReactNode
  children?: (optionsProps: SelectOptionsProps) => React.ReactNode
}

export const Select: React.FC<SelectProps> & SubComponentProps = ({
  id,
  label,
  description,
  isFullWidth,
  placeholder,
  classNameOverride,
  trigger = triggerProps => <TriggerButton {...triggerProps} ref={buttonRef} />,
  children,
  ...restProps
}) => {
  const descriptionId = `${id}-field-message`
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const state = useSelectState({
    label,
    description,
    placeholder,
    ...restProps,
    children: selectChildren,
  })
  const renderChildren = children
    ? children
    : ({ items }) =>
        items.map((item: Node<SingleItemType>) => (
          <Option key={item.key} item={item} />
        ))

  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    {
      label,
      description,
      placeholder,
      ...restProps,
      children: selectChildren,
      "aria-describedby": descriptionId,
    },
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
    <SelectContext.Provider
      value={{
        state,
      }}
    >
      <div
        className={classnames(
          !isFullWidth && selectStyles.notFullWidth,
          classNameOverride
        )}
      >
        <Label {...labelProps}>{label}</Label>
        <HiddenSelect
          label={label}
          name={id}
          state={state}
          triggerRef={buttonRef}
        />

        <div className={classnames([selectStyles.container])}>
          {trigger({ placeholder, triggerProps, valueProps, state }, buttonRef)}

          {state.isOpen && (
            <Overlay>
              <ListBox menuProps={menuProps}>
                {renderChildren({ items })}
              </ListBox>
            </Overlay>
          )}
        </div>

        {description && (
          <FieldMessage id={descriptionId} message={description} />
        )}
      </div>
    </SelectContext.Provider>
  )
}

export const useSelectContext = () => useContext(SelectContext)

export const SelectConsumer = SelectContext.Consumer

Select.TriggerButton = TriggerButton
Select.ListBox = ListBox
Select.Option = Option

Select.displayName = "Select"
