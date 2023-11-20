import React, { useId } from "react"
import { UseFloatingReturn } from "@floating-ui/react-dom"
import { useButton } from "@react-aria/button"
import { HiddenSelect, useSelect } from "@react-aria/select"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import { Key } from "@react-types/shared"
import classnames from "classnames"
import { FieldMessage } from "~components/FieldMessage"
import {
  Popover,
  useFloating,
} from "~components/MultiSelect/subcomponents/Popover"
import { OverrideClassName } from "~types/OverrideClassName"
import { SelectProvider } from "./context"
import {
  ListBox,
  ListBoxSection,
  ListItem,
  Option,
  SectionDivider,
  SelectPopoverContents,
  SelectPopoverContentsProps,
  SelectToggle,
  SelectToggleProps,
} from "./subcomponents"
import { SelectItem, SelectOption } from "./types"
import { getDisabledKeysFromItems } from "./utils/getDisabledKeysFromItems"
import { transformSelectItemToCollectionElement } from "./utils/transformSelectItemToCollectionElement"
import styles from "./Select.module.scss"

type OmittedAriaSelectProps = "children" | "items"

export type SelectProps<Option extends SelectOption = SelectOption> = {
  /**
   * Item objects in the collection.
   */
  items: Array<SelectItem<Option>>
  id?: string
  trigger?: (
    selectToggleProps: SelectToggleProps & {
      ref: UseFloatingReturn<HTMLButtonElement>["refs"]["setReference"]
    },
    // @deprecated: This arg is unnecessary now, but provided for legacy usages
    ref: UseFloatingReturn<HTMLButtonElement>["refs"]["setReference"]
  ) => JSX.Element
  children?: SelectPopoverContentsProps<Option>["children"]
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
  /**
   * Use the `fullWidth` styles.
   */
  isFullWidth?: boolean
  /**
   * @deprecated: Either define `disabled` in your `Option` (in `items`), or use `disabledKeys`
   */
  disabledValues?: Key[]
  portalContainer?: Element | DocumentFragment
} & OverrideClassName<Omit<AriaSelectProps<Option>, OmittedAriaSelectProps>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896474/Select Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-select--docs Storybook}
 */
export const Select = <Option extends SelectOption = SelectOption>({
  label,
  items,
  id: propsId,
  trigger,
  children,
  status,
  validationMessage,
  isReversed,
  isFullWidth,
  disabledValues,
  classNameOverride,
  selectedKey,
  description,
  placeholder,
  isDisabled,
  portalContainer,
  ...restProps
}: SelectProps<Option>): JSX.Element => {
  const { refs } = useFloating<HTMLButtonElement>()
  const triggerRef = refs.reference

  const id = propsId ?? useId()
  const descriptionId = `${id}--description`
  const popoverId = `${id}--popover`

  const disabledKeys = getDisabledKeysFromItems(items)

  const ariaSelectProps: AriaSelectProps<SelectItem<Option>> = {
    label,
    items,
    children: transformSelectItemToCollectionElement,
    disabledKeys: disabledValues ?? disabledKeys,
    selectedKey:
      typeof selectedKey === "number" ? selectedKey.toString() : selectedKey,
    description,
    placeholder,
    isDisabled,
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
  } = useSelect(ariaSelectProps, state, triggerRef)

  const { buttonProps } = useButton(triggerProps, triggerRef)
  const selectToggleProps = {
    ...buttonProps,
    label,
    labelProps,
    value: state?.selectedItem?.rendered,
    valueProps,
    isOpen: state.isOpen,
    placeholder,
    status,
    isDisabled: triggerProps.isDisabled,
    isReversed,
    ref: refs.setReference,
    "aria-controls": popoverId,
  }

  return (
    <div
      className={classnames(
        !isFullWidth && styles.notFullWidth,
        classNameOverride
      )}
    >
      <HiddenSelect
        label={label}
        name={id}
        state={state}
        triggerRef={triggerRef}
      />

      <div className={styles.container}>
        {trigger === undefined ? (
          <SelectToggle {...selectToggleProps} />
        ) : (
          trigger(selectToggleProps, selectToggleProps.ref)
        )}
        {state.isOpen && (
          <Popover
            id={popoverId}
            portalContainer={portalContainer}
            refs={refs}
            focusOnProps={{
              onEscapeKey: state.close,
              onClickOutside: state.close,
              noIsolation: true,
            }}
          >
            <SelectProvider<Option> state={state}>
              <SelectPopoverContents menuProps={menuProps}>
                {children}
              </SelectPopoverContents>
            </SelectProvider>
          </Popover>
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
  )
}

Select.displayName = "Select"

Select.Section = ListBoxSection
Select.SectionDivider = SectionDivider
Select.Option = Option
Select.ItemDefaultRender = ListItem

// @deprecated Legacy exported aliases
Select.TriggerButton = SelectToggle
Select.ListBox = ListBox
