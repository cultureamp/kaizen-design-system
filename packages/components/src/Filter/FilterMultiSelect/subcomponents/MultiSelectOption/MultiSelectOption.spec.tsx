// A11y and interaction are tested in SelectionProvider.spec, hence not covered here

import React from 'react'
import { useOption } from '@react-aria/listbox'
import { render, screen } from '@testing-library/react'
import { beforeEach, vi, type Mock } from 'vitest'
import { type ItemType } from '../../types'
import { MultiSelectOption, type MultiSelectOptionProps } from './MultiSelectOption'
import styles from './MultiSelectOption.module.scss'

vi.mock('@react-aria/listbox', () => ({
  useOption: vi.fn(),
}))

vi.mock('../../context', () => ({
  useSelectionContext: (): { selectionState: Record<string, unknown> } => ({
    selectionState: {},
  }),
}))

const itemMock: MultiSelectOptionProps['item'] & { value: ItemType } = {
  index: 0,
  type: 'type-mock',
  key: 'key-mock',
  value: { label: 'label-mock', value: 'value-mock' },
  level: 0,
  hasChildNodes: false,
  childNodes: [],
  rendered: <>rendered-mock</>,
  textValue: '',
}

const MultiSelectOptionWrapper = ({
  item = itemMock,
}: Partial<MultiSelectOptionProps>): JSX.Element => <MultiSelectOption item={item} />

describe('<MultiSelectOptionWrapper /> - Visual content', () => {
  describe('Given item is unselected', () => {
    beforeEach(() => {
      ;(useOption as Mock).mockReturnValue({
        optionProps: {},
        isSelected: false,
        isDisabled: false,
      })
      render(<MultiSelectOptionWrapper />)
    })
    it('shows the provided rendered node', () => {
      const option = screen.getByText('rendered-mock')
      expect(option).toBeVisible()
    })

    it('has aria-label as the item.label', () => {
      const option = screen.getByLabelText('label-mock')
      expect(option).toBeVisible()
    })
  })

  describe('Given item is disabled', () => {
    beforeEach(() => {
      ;(useOption as Mock).mockReturnValue({
        optionProps: {},
        isSelected: false,
        isDisabled: true,
      })
      render(<MultiSelectOptionWrapper />)
    })

    it('has a disabled class', () => {
      const label = screen.getByLabelText('label-mock')
      expect(label).toHaveClass(styles.isDisabled)
    })
  })

  describe('Given count is provided', () => {
    beforeEach(() => {
      ;(useOption as Mock).mockReturnValue({
        optionProps: {},
        isSelected: false,
        isDisabled: false,
      })
      render(
        <MultiSelectOptionWrapper
          item={{
            ...itemMock,
            value: { ...itemMock.value, count: '14' },
          }}
        />,
      )
    })

    it('shows the count in the badge', () => {
      const badge = screen.getByText('14')
      expect(badge).toBeInTheDocument()
    })

    it('has aria-description to describe the count are available for this option', () => {
      const option = screen.getByLabelText('label-mock')
      expect(option).toHaveAccessibleDescription('14 available')
    })
  })
})
