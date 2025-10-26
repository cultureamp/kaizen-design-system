import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { SingleSelect } from '../index'
import { type SelectItem, type SingleSelectProps } from '../types'
import { singleMockItems } from './mockData'

const meta: Meta = {
  title: 'Components/SingleSelect/SingleSelectAlpha',
  component: SingleSelect,
  tags: ['alpha'],
  decorators: [
    (Story) => (
      <div className="h-200 justify-center items-center position-relative flex">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { control: 'text', description: 'The label for the select/combobox input' },
    labelHidden: { control: 'boolean', description: 'Visually hide the label' },
    labelPosition: {
      control: { type: 'radio' },
      options: ['top', 'side'],
      description: 'Position of the label relative to the input',
    },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      description: 'Visual variant',
    },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
      description: 'Size of the input',
    },
    isReadOnly: { control: 'boolean', description: 'Whether the input is read-only' },
    isDisabled: { control: 'boolean', description: 'Whether the input is disabled' },
    isComboBox: {
      control: 'boolean',
      description: 'Whether to render as a combobox (filterable input) or select',
    },
    items: { control: 'object', description: 'List of options to display' },
  },
}

export default meta

export const Playground: StoryObj<SingleSelectProps<SelectItem>> = {
  args: {
    label: 'Choose an item',
    isComboBox: false,
    items: singleMockItems,
  },
  render: (args: SingleSelectProps<SelectItem>) => (
    <SingleSelect {...args}>
      {(item) => <SingleSelect.Item key={item.key}>{item.label}</SingleSelect.Item>}
    </SingleSelect>
  ),
  parameters: {
    docs: { canvas: { sourceState: 'shown' } },
  },
}
