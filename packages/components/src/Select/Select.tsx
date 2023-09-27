import React, { useId } from "react"
import { useButton } from "@react-aria/button"
import { HiddenSelect, useSelect } from "@react-aria/select"
import {
  useSelectState,
  SelectProps as AriaSelectProps,
} from "@react-stately/select"
import classnames from "classnames"
import { FieldMessage } from "~components/FieldMessage"
import { Label } from "~components/Label"
import {
  Popover,
  UseFloatingReturn,
  useFloating,
} from "~components/MultiSelect/subcomponents/Popover"
import { OverrideClassName } from "~types/OverrideClassName"
import { SelectProvider } from "./context"
import { ListBox } from "./subcomponents/ListBox"
import { ListBoxSection } from "./subcomponents/ListBoxSection"
import { ListItem } from "./subcomponents/ListItem"
import { ListItems } from "./subcomponents/ListItems"
import { Option } from "./subcomponents/Option"
import { Overlay } from "./subcomponents/Overlay"
import { SectionDivider } from "./subcomponents/SectionDivider"
import { SelectToggle, SelectToggleProps } from "./subcomponents/SelectToggle"
import { SelectItem, SelectItemNode, SelectOption } from "./types"
import { isSelectOptionGroup } from "./utils/isSelectOptionGroup"
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
  children?: (args: { items: Array<SelectItemNode<Option>> }) => React.ReactNode
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
  disabledValues?: React.Key[]
} & OverrideClassName<Omit<AriaSelectProps<Option>, OmittedAriaSelectProps>>

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
  ...restProps
}: SelectProps<Option>): JSX.Element => {
  const { refs } = useFloating<HTMLButtonElement>()
  const triggerRef = refs.reference

  const id = propsId ?? useId()
  const descriptionId = `${id}--description`

  const disabledKeys = items.reduce((acc: React.Key[], item) => {
    if (isSelectOptionGroup(item)) {
      const keys = Array.from(item.options)
        .filter(groupItem => groupItem.disabled)
        .map(disabledItems => disabledItems.value)
      return [...acc, ...keys]
    }

    return item.disabled ? [...acc, item.value] : acc
  }, [])

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
    value: state?.selectedItem?.rendered,
    valueProps,
    isOpen: state.isOpen,
    placeholder,
    status,
    isDisabled: triggerProps.isDisabled,
    isReversed,
    ref: refs.setReference,
  }

  // The collection structure is set by useSelectState's `children`
  // which we have used a util to ensure the following structure
  // - SelectOptionGroup => Section
  // - Option => Item
  const itemNodes = Array.from(state.collection) as Array<
    SelectItemNode<Option>
  >

  return (
    <div
      className={classnames(
        !isFullWidth && styles.notFullWidth,
        classNameOverride
      )}
    >
      <Label {...labelProps} reversed={isReversed} disabled={isDisabled}>
        {label}
      </Label>
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
            refs={refs}
            classNameOverride={styles.popover}
            focusOnProps={{ noIsolation: true }}
          >
            <SelectProvider<Option> state={state}>
              <Overlay<Option>>
                <ListBox<Option> menuProps={menuProps}>
                  {children ? (
                    children({ items: itemNodes })
                  ) : (
                    <ListItems<Option> items={itemNodes} />
                  )}
                </ListBox>
              </Overlay>
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
