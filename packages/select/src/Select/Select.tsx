import React, { useEffect, useState } from "react"
import { HiddenSelect, useSelect } from "@react-aria/select"
import { Item, Section } from "@react-stately/collections"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import { Node, CollectionChildren } from "@react-types/shared"
import classnames from "classnames"
import { v4 } from "uuid"
import { OverrideClassName } from "@kaizen/component-base"
import { Label, FieldMessage } from "@kaizen/draft-form"
import { SingleItemType } from "../types"
import { ListBox } from "./components/ListBox"
import { ListBoxSection } from "./components/ListBoxSection"
import { Option } from "./components/Option"
import { Overlay } from "./components/Overlay"
import { TriggerButton, TriggerButtonProps } from "./components/TriggerButton"
import { SelectContext } from "./context/SelectContext"
import selectStyles from "./Select.module.scss"

export type SelectOptionsProps = {
  items: Array<Node<SingleItemType>>
}

export const getSelectChildren: CollectionChildren<SingleItemType> = item =>
  Array.isArray(item.value) ? (
    <Section key={item.label} title={item.label} items={item.value}>
      {(child): JSX.Element => <Item key={child.value}>{child.label}</Item>}
    </Section>
  ) : (
    <Item key={item.value}>{item.label}</Item>
  )

export interface SelectProps
  extends OverrideClassName<
    Omit<AriaSelectProps<SingleItemType>, "children" | "disabledKeys">
  > {
  /** The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with. */
  disabledValues?: React.Key[]
  /**
   * Use the `fullWidth` styles.
   */
  isFullWidth?: boolean
  /**
   * Identifies the element that labels the current element.
   */
  id: string
  /**
   * Replaces the trigger button
   * Exposes the trigger properties and the ref to be used on the replacing trigger */
  trigger?: (
    triggerProps: TriggerButtonProps,
    ref: React.RefObject<HTMLButtonElement>
  ) => React.ReactNode
  /**
   * Replaces the contents of the Listbox and describes how the options are displayed
   * Exposes the option properties which contains the items */
  children?: (optionsProps: SelectOptionsProps) => React.ReactNode
  /**
   * Updates the styling of the validation FieldMessage.
   */
  status?: "error" | "caution"
  /**
   * A descriptive message for the 'status' states.
   */
  validationMessage?: React.ReactNode | undefined
  /**
   * Use the `reversed` styles.
   */
  isReversed?: boolean
}

export const Select = ({
  id,
  label,
  description,
  isFullWidth,
  placeholder,
  isDisabled,
  isReversed = false,
  disabledValues,
  status,
  defaultOpen,
  validationMessage,
  classNameOverride,
  trigger = (triggerProps, buttonRef): JSX.Element => (
    <TriggerButton {...triggerProps} ref={buttonRef} />
  ),
  children,
  ...restProps
}: SelectProps): JSX.Element => {
  const descriptionId = `${id}-field-message`
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const invalidStatus = status === "error" ? "invalid" : "valid"
  const [listBoxID] = useState<string>(v4())

  const ariaSelectProps: AriaSelectProps<SingleItemType> = {
    label,
    description,
    placeholder,
    isDisabled,
    defaultOpen,
    validationState: invalidStatus,
    errorMessage: validationMessage,
    disabledKeys: disabledValues,
    children: getSelectChildren,
    ...restProps,
  }

  const state = useSelectState(ariaSelectProps)
  const renderChildren = children
    ? children
    : ({ items }: SelectOptionsProps): JSX.Element => (
        <>
          {items.map(item =>
            item.type === "section" ? (
              <ListBoxSection key={item.key} section={item} />
            ) : (
              <Option key={item.key} item={item} />
            )
          )}
        </>
      )

  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useSelect(
    {
      ...ariaSelectProps,
      "aria-describedby": descriptionId,
    },
    state,
    buttonRef
  )

  const items = Array.from(state.collection)

  // Fix the issue when default open and close by keyboard, then focus is lost
  useEffect(() => {
    if (state.isOpen === false && defaultOpen) {
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
        <Label {...labelProps} reversed={isReversed}>
          {label}
        </Label>
        <HiddenSelect
          label={label}
          name={id}
          state={state}
          triggerRef={buttonRef}
        />

        <div className={classnames(selectStyles.container)}>
          {trigger(
            {
              placeholder,
              triggerProps,
              valueProps,
              status,
              isReversed,
              "aria-controls": state.isOpen ? listBoxID : undefined,
            },
            buttonRef
          )}

          {state.isOpen && (
            <Overlay>
              <ListBox menuProps={menuProps} id={listBoxID}>
                {renderChildren({ items })}
              </ListBox>
            </Overlay>
          )}
        </div>

        {validationMessage && (
          <FieldMessage
            {...errorMessageProps}
            message={validationMessage}
            status={status}
            reversed={isReversed}
          />
        )}

        {description && (
          <FieldMessage
            {...descriptionProps}
            id={descriptionId}
            message={description}
            reversed={isReversed}
          />
        )}
      </div>
    </SelectContext.Provider>
  )
}

Select.TriggerButton = TriggerButton
Select.ListBox = ListBox
Select.Option = Option

Select.displayName = "Select"
