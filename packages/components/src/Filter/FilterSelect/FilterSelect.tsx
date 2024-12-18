import React, { useState } from 'react'
import { useButton } from '@react-aria/button'
import { HiddenSelect, useSelect } from '@react-aria/select'
import { useSelectState, type SelectProps as AriaSelectProps } from '@react-stately/select'
import { Filter, FilterContents } from '~components/Filter/Filter'
import { type FilterButtonProps } from '~components/Filter/FilterButton'
import { SelectProvider } from '~components/__rc__/Select/context'
import {
  ListBoxSection,
  ListItem,
  Option,
  SectionDivider,
  SelectPopoverContents,
  type SelectPopoverContentsProps,
} from '~components/__rc__/Select/subcomponents'
import { getDisabledKeysFromItems } from '~components/__rc__/Select/utils/getDisabledKeysFromItems'
import { transformSelectItemToCollectionElement } from '~components/__rc__/Select/utils/transformSelectItemToCollectionElement'
import { type OverrideClassName } from '~components/types/OverrideClassName'
import { type SelectItem, type SelectOption } from './types'
import styles from './FilterSelect.module.scss'

type OmittedAriaSelectProps =
  | 'label'
  | 'children'
  | 'isOpen'
  | 'onOpenChange'
  | 'defaultOpen'
  | 'items'

export type FilterSelectProps<Option extends SelectOption = SelectOption> = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  renderTrigger: (triggerButtonProps: FilterButtonProps) => JSX.Element
  label: string
  children?: SelectPopoverContentsProps<Option>['children']
  items: SelectItem<Option>[]
} & OverrideClassName<Omit<AriaSelectProps<Option>, OmittedAriaSelectProps>>

export const FilterSelect = <Option extends SelectOption = SelectOption>({
  isOpen,
  setIsOpen,
  renderTrigger,
  label,
  children,
  items,
  classNameOverride,
  selectedKey,
  ...restProps
}: FilterSelectProps<Option>): JSX.Element => {
  // Ref will be populated by Filter
  const [triggerRef, setTriggerRef] = useState<React.RefObject<HTMLButtonElement>>({
    current: null,
  })

  const disabledKeys = getDisabledKeysFromItems(items)

  const ariaSelectProps: AriaSelectProps<SelectItem<Option>> = {
    label,
    items,
    children: transformSelectItemToCollectionElement,
    isOpen,
    onOpenChange: setIsOpen,
    disabledKeys,
    selectedKey: typeof selectedKey === 'number' ? selectedKey.toString() : selectedKey,
    ...restProps,
  }

  const state = useSelectState(ariaSelectProps)

  const { triggerProps, menuProps } = useSelect(ariaSelectProps, state, triggerRef)

  const { buttonProps } = useButton(triggerProps, triggerRef)

  // `aria-labelledby` and `aria-controls` are being remapped because the `buttonProps` ids generated by React Aria point to nothing.
  // This should ideally be refactored but for now the `aria-controls` is set to the Filter's Listbox (menuProps.id) and the `aria-labelledby` to undefined so the accessible name is derived from the buttons content.
  const renderTriggerButtonProps = {
    ...buttonProps,
    'aria-labelledby': undefined,
    'aria-controls': menuProps.id,
  }
  return (
    <>
      <HiddenSelect label={label} state={state} triggerRef={triggerRef} />
      <Filter
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        renderTrigger={(): JSX.Element =>
          renderTrigger({
            selectedValue: state.selectedItem?.textValue,
            label,
            isOpen,
            ...renderTriggerButtonProps,
          })
        }
        onMount={setTriggerRef}
        classNameOverride={classNameOverride}
      >
        <FilterContents classNameOverride={styles.filterContents}>
          <SelectProvider<Option> state={state}>
            <SelectPopoverContents menuProps={{ ...menuProps, 'aria-labelledby': buttonProps.id }}>
              {children}
            </SelectPopoverContents>
          </SelectProvider>
        </FilterContents>
      </Filter>
    </>
  )
}

FilterSelect.displayName = 'FilterSelect'

FilterSelect.Section = ListBoxSection
FilterSelect.SectionDivider = SectionDivider
FilterSelect.Option = Option
FilterSelect.ItemDefaultRender = ListItem
