import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { MultiSelectOptions, MultiSelectOptionsProps } from '../index'

const meta = {
  title: 'Components/MultiSelect/MultiSelectOptions',
  component: MultiSelectOptions,
  args: {
    id: 'id--multi-select-options',
    selectedValues: new Set(['pancakes']),
    options: [
      {
        label: 'Pancakes',
        value: 'pancakes',
      },
      {
        label: 'Waffle',
        value: 'waffle',
      },
      {
        label: 'Toastie',
        value: 'toastie',
      },
    ],
    onChange: fn(),
  },
} satisfies Meta<typeof MultiSelectOptions>

export default meta

type Story = StoryObj<typeof meta>

const MultiSelectOptionsTemplate: Story = {
  render: (args) => {
    const [selectedValues, setSelectedValues] = useState<
      MultiSelectOptionsProps['selectedValues']
    >(args.selectedValues)
    return (
      <MultiSelectOptions
        {...args}
        selectedValues={selectedValues}
        onChange={setSelectedValues}
      />
    )
  },
}

export const Playground: Story = {
  ...MultiSelectOptionsTemplate,
  args: {
    id: 'id--jaffle',
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
