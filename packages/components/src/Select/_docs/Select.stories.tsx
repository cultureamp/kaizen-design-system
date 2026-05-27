import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Label } from '~components/Label'
import { AsyncSelect, Select, type SelectOption } from '../index'

const OPTIONS = [
  { value: 'Mindy', label: 'Mindy' },
  { value: 'Jaime', label: 'Jaime' },
  { value: 'Rafa', label: 'Rafa' },
]

const DISABLED_OPTIONS = [
  { value: 'Mindy', label: 'Mindy' },
  { value: 'Jaime', label: 'Jaime', isDisabled: true },
  { value: 'Rafa', label: 'Rafa' },
]

const GROUPED_OPTIONS = [
  {
    label: 'Colours',
    options: [
      { value: 'blue', label: 'blue' },
      { value: 'red', label: 'red' },
      { value: 'green', label: 'green' },
    ],
  },
  {
    label: 'Flavours',
    options: [
      { value: 'vanilla', label: 'Vanilla' },
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
    ],
  },
]

const meta = {
  title: 'Components/Select',
  component: Select,
  args: {
    options: OPTIONS,
    label: 'Select',
  },
} satisfies Meta<typeof Select>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const MultiSelect: Story = {
  args: { isMulti: true },
}

export const Grouped: Story = {
  args: { options: GROUPED_OPTIONS },
}

export const Disabled: Story = {
  args: { options: DISABLED_OPTIONS },
}

const COLORED_OPTIONS: SelectOption[] = [
  { value: 'default', label: 'Default' },
  { value: 'statusLive', label: 'Status Live', tagColor: 'statusLive' },
  { value: 'statusDraft', label: 'Status Draft', tagColor: 'statusDraft' },
  { value: 'statusClosed', label: 'Status Closed', tagColor: 'statusClosed' },
  { value: 'statusAction', label: 'Status Action', tagColor: 'statusAction' },
  { value: 'sentimentPositive', label: 'Sentiment Positive', tagColor: 'sentimentPositive' },
  { value: 'sentimentNeutral', label: 'Sentiment Neutral', tagColor: 'sentimentNeutral' },
  { value: 'sentimentNegative', label: 'Sentiment Negative', tagColor: 'sentimentNegative' },
  { value: 'sentimentNone', label: 'Sentiment None', tagColor: 'sentimentNone' },
  { value: 'validationPositive', label: 'Validation Positive', tagColor: 'validationPositive' },
  {
    value: 'validationInformative',
    label: 'Validation Informative',
    tagColor: 'validationInformative',
  },
  { value: 'validationNegative', label: 'Validation Negative', tagColor: 'validationNegative' },
  {
    value: 'validationCautionary',
    label: 'Validation Cautionary',
    tagColor: 'validationCautionary',
  },
]

export const MultiSelectWithTagColors: Story = {
  args: {
    isMulti: true,
    options: COLORED_OPTIONS,
    defaultValue: COLORED_OPTIONS,
  },
}

export const Async: Story = {
  render: (args) => {
    const filterNames = (inputValue: string): typeof OPTIONS =>
      OPTIONS.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase()))

    const promiseOptions = (inputValue: string): Promise<{ value: string; label: string }[]> =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(filterNames(inputValue))
        }, 1000)
      })

    return (
      <>
        <Label id="asyncSelectLabel" labelText="Type to see options" />
        <AsyncSelect aria-labelledby="asyncSelectLabel" loadOptions={promiseOptions} {...args} />
      </>
    )
  },
}
