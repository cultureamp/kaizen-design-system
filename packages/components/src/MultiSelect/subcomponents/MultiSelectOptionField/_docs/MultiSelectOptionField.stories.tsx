import React, { useState } from 'react'
import { action } from 'storybook/actions'
// import { type Meta, type StoryObj } from "storybook"
import { type CheckboxProps } from '../../Checkbox'
import { MultiSelectOptionField } from '../index'

const meta = {
  title: 'Components/MultiSelect/MultiSelectOptionField',
  component: MultiSelectOptionField,
  args: {
    id: 'id--multi-select-option-field',
    option: {
      label: 'Jaffle',
      value: 'jaffle',
    },
    checkedStatus: 'unchecked',
    onChange: action('>:] on change [:<'),
  },
} satisfies any

export default meta

type Story = StoryObj<typeof meta>

const MultiSelectOptionFieldTemplate: Story = {
  render: (args) => {
    const [checkedStatus, setCheckedStatus] = useState<CheckboxProps['checkedStatus']>(
      args.checkedStatus,
    )

    const handleChange = (): void => {
      switch (checkedStatus) {
        case 'checked':
          return setCheckedStatus('unchecked')
        default:
          return setCheckedStatus('checked')
      }
    }

    return (
      <MultiSelectOptionField {...args} checkedStatus={checkedStatus} onChange={handleChange} />
    )
  },
}

export const Playground: Story = {
  ...MultiSelectOptionFieldTemplate,
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
