import React from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { FilterButton } from '../FilterButton'

const meta = {
  title: 'Components/Filter Base/Filter Buttons/FilterButton',
  component: FilterButton,
  argTypes: {
    selectedValue: { type: 'string' },
    isOpen: { type: 'boolean' },
  },
  args: {
    label: 'Label',
  },
} satisfies any

export default meta

export const Playground: any = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

/**
 * A string or JSX.Element (most common for values with dom formatting).
 */
export const SelectedValue: any = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <FilterButton {...args} selectedValue="Pancakes" />
      <FilterButton
        {...args}
        selectedValue={
          <span>
            <span>3 Apr 2023</span> - <span>1 May 2023</span>
          </span>
        }
      />
    </div>
  ),
}

/**
 * Controls the open state (chevron changes direction).
 */
export const IsOpen: any = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <FilterButton {...args} />
      <FilterButton {...args} isOpen />
    </div>
  ),
}
