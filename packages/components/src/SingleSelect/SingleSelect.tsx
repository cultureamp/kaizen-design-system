import React, { useEffect, useId, useState } from 'react'
import { type UseFloatingReturn } from '@floating-ui/react-dom'
import { useButton } from '@react-aria/button'
import { HiddenSelect, useSelect } from '@react-aria/select'
import { useSelectState, type SelectProps as AriaSelectProps } from '@react-stately/select'
import { type Key } from '@react-types/shared'
import classnames from 'classnames'
import { FieldMessage } from '~components/FieldMessage'
import { Popover, useFloating } from '~components/MultiSelect/subcomponents/Popover'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { SelectProvider } from './context'
import {
  ListBox,
  ListBoxSection,
  ListItem,
  Option,
  SectionDivider,
  SelectPopoverContents,
  SelectToggle,
  type SelectPopoverContentsProps,
  type SelectToggleProps,
} from './subcomponents'
import { type SingleSelectItem, type SingleSelectOption } from './types'
import { getDisabledKeysFromItems } from './utils/getDisabledKeysFromItems'
import { transformSelectItemToCollectionElement } from './utils/transformSelectItemToCollectionElement'
import styles from './SingleSelect.module.scss'

type OmittedAriaSelectProps = 'children' | 'items' | 'onSelectionChange'

export type SingleSelectProps<Option extends SingleSelectOption = SingleSelectOption> = {
  /**
   * Item objects in the collection.
   */
  items: SingleSelectItem<Option>[]
  id?: string
  /**
   * Optional render function that allows custom rendering of the trigger button.
   * The function receives the `selectToggleProps` and a `ref` to be applied
   * to the button element.
   */
  trigger?: (
    selectToggleProps: SelectToggleProps & {
      ref: UseFloatingReturn<HTMLButtonElement>['refs']['setReference']
    },
  ) => JSX.Element
  /**
   * Optional render function that allows custom rendering of the items in the dropdown.
   * The function receives an object with `items` property, which is an array of
   * `SingleSelectItemNode` objects.
   */
  children?: SelectPopoverContentsProps<Option>['children']
  /**
   * Updates the styling of the validation FieldMessage.
   */
  status?: 'error' | 'caution'
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
   * Creates a portal for the Popover to the matching element id
   */
  portalContainerId?: string
  /**
   * @deprecated Use of placeholder text goes against our a11y standards.
   * Use the `labelText` prop to provide a concise name, and the `description` prop for any help text.
   */
  placeholder?: string
  /**
   * Handler that is called when the selection changes.
   */
  onSelectionChange?: (key: Key) => void
} & OverrideClassName<Omit<AriaSelectProps<Option>, OmittedAriaSelectProps>>

/**
 * {@link https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081896474/Select Guidance} |
 * {@link https://cultureamp.design/?path=/docs/components-select--docs Storybook}
 */
export const SingleSelect = <Option extends SingleSelectOption = SingleSelectOption>({
  label,
  items,
  id: propsId,
  trigger,
  children,
  status,
  validationMessage,
  isReversed,
  isRequired = false,
  isFullWidth,
  classNameOverride,
  selectedKey,
  description,
  placeholder = '',
  isDisabled,
  onSelectionChange,
  portalContainerId,
  ...restProps
}: SingleSelectProps<Option>): JSX.Element => {
  const { refs } = useFloating<HTMLButtonElement>()
  const triggerRef = refs.reference
  const fallbackId = useId()
  const id = propsId ?? fallbackId
  const descriptionId = `${id}--description`
  const validationId = `${id}--validation`
  const popoverId = `${id}--popover`

  const disabledKeys = getDisabledKeysFromItems(items)

  const ariaSelectProps: AriaSelectProps<SingleSelectItem<Option>> = {
    label,
    items,
    children: transformSelectItemToCollectionElement,
    disabledKeys: disabledKeys,
    selectedKey: typeof selectedKey === 'number' ? selectedKey.toString() : selectedKey,
    description,
    placeholder,
    isDisabled,
    isRequired,
    onSelectionChange: onSelectionChange ? (key) => onSelectionChange(key!) : undefined,
    ...restProps,
  }

  const state = useSelectState(ariaSelectProps)

  const {
    labelProps,
    triggerProps: reactAriaTriggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useSelect(ariaSelectProps, state, triggerRef)

  // Hack incoming:
  // react-aria/useSelect wants to prefix the combobox's accessible name with the value of the select.
  // We use role=combobox, meaning screen readers will read the value.
  // So we're modifying the `aria-labelledby` property to remove the value element id.
  // Issue: https://github.com/adobe/react-spectrum/issues/4091
  const reactAriaLabelledBy = reactAriaTriggerProps['aria-labelledby']
  const triggerProps = {
    ...reactAriaTriggerProps,
    'aria-labelledby': reactAriaLabelledBy?.substring(reactAriaLabelledBy.indexOf(' ') + 1),
  }

  const { buttonProps } = useButton(triggerProps, triggerRef)
  const selectToggleProps = {
    ...buttonProps,
    label,
    labelProps,
    'value': state?.selectedItem?.rendered,
    valueProps,
    'isOpen': state.isOpen,
    placeholder,
    status,
    'isDisabled': triggerProps.isDisabled,
    isReversed,
    'ref': refs.setReference,
    'aria-describedby': classnames(validationMessage && validationId, description && descriptionId),
    'aria-required': isRequired,
  }

  const [portalContainer, setPortalContainer] = useState<HTMLElement>()

  useEffect(() => {
    if (portalContainerId) {
      const portalElement = document.getElementById(portalContainerId)
      if (portalElement) setPortalContainer(portalElement)
    }
  }, [portalContainerId])

  return (
    <div className={classnames(!isFullWidth && styles.notFullWidth, classNameOverride)}>
      <HiddenSelect label={label} name={id} state={state} triggerRef={triggerRef} />

      <div className={styles.container}>
        {trigger === undefined ? (
          <SelectToggle {...selectToggleProps} />
        ) : (
          trigger(selectToggleProps)
        )}
        {state.isOpen && (
          <Popover id={popoverId} portalContainer={portalContainer} refs={refs}>
            <SelectProvider<Option> state={state}>
              <SelectPopoverContents menuProps={menuProps} popoverRef={refs.floating}>
                {children}
              </SelectPopoverContents>
            </SelectProvider>
          </Popover>
        )}
      </div>

      {validationMessage && (
        <FieldMessage
          {...errorMessageProps}
          id={validationId}
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

SingleSelect.displayName = 'SingleSelect'

SingleSelect.Section = ListBoxSection
SingleSelect.SectionDivider = SectionDivider
SingleSelect.Option = Option
SingleSelect.ItemDefaultRender = ListItem

// @deprecated Legacy exported aliases
SingleSelect.TriggerButton = SelectToggle
SingleSelect.ListBox = ListBox
