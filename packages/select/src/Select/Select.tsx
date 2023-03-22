import React, { useEffect } from "react"
import { HiddenSelect, useSelect } from "@react-aria/select"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import { Node } from "@react-types/shared"
import classnames from "classnames"
import { OverrideClassName } from "@kaizen/component-base"
import { Label, FieldMessage } from "@kaizen/draft-form"
import { SingleItemType } from "../types"
import { ListBox } from "./components/ListBox"
import { ListItems } from "./components/ListItems"
import { Option } from "./components/Option"
import { Overlay } from "./components/Overlay"
import { TriggerButton, TriggerButtonProps } from "./components/TriggerButton"
import { SelectContext } from "./context/SelectContext"
import { transformSelectChildren } from "./utils/transformSelectChildren"
import styles from "./Select.module.scss"

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
  children?: (args: { items: Array<Node<SingleItemType>> }) => React.ReactNode
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
  trigger = (triggerProps): JSX.Element => (
    <TriggerButton {...triggerProps} ref={buttonRef} />
  ),
  children,
  ...restProps
}: SelectProps): JSX.Element => {
  const descriptionId = `${id}-field-message`
  const buttonRef = React.useRef<HTMLButtonElement>(null)
  const invalidStatus = status === "error" ? "invalid" : "valid"

  const ariaSelectProps: AriaSelectProps<SingleItemType> = {
    label,
    description,
    placeholder,
    isDisabled,
    defaultOpen,
    validationState: invalidStatus,
    errorMessage: validationMessage,
    disabledKeys: disabledValues,
    children: transformSelectChildren,
    ...restProps,
  }

  const state = useSelectState(ariaSelectProps)

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
          !isFullWidth && styles.notFullWidth,
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

        <div className={classnames([styles.container])}>
          {trigger(
            { placeholder, triggerProps, valueProps, status, isReversed },
            buttonRef
          )}

          {state.isOpen && (
            <Overlay classNameOverride={styles.menuPopup}>
              <ListBox menuProps={menuProps} classNameOverride={styles.listBox}>
                {children ? children({ items }) : <ListItems items={items} />}
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
