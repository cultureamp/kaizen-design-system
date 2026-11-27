import React, { useState, type ChangeEventHandler } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { CheckboxField, type CheckboxFieldProps } from '~components/Checkbox/CheckboxField'
import { InteractiveCheckboxField } from '~components/Checkbox/CheckboxField/_docs/InteractiveCheckboxField'
import { CheckboxGroup } from '../index'

const meta = {
  title: 'Components/Checkboxes/CheckboxGroup',
  component: CheckboxGroup,
  args: {
    labelText: 'Label',
    children: (
      <>
        <InteractiveCheckboxField labelText="Checkbox one" />
        <InteractiveCheckboxField labelText="Checkbox two" />
        <InteractiveCheckboxField labelText="Checkbox three" />
      </>
    ),
  },
} satisfies Meta<typeof CheckboxGroup>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: (args) => {
    const [checkedStatus, setCheckedStatus] = useState<
      Record<string, CheckboxFieldProps['checkedStatus']>
    >({
      one: 'off',
      two: 'on',
      three: 'mixed',
    })

    const onCheckHandler =
      (id: string): ChangeEventHandler<HTMLInputElement> =>
      () => {
        if (checkedStatus[id] === 'off') {
          setCheckedStatus({
            ...checkedStatus,
            [id]: 'mixed',
          })
        } else if (checkedStatus[id] === 'mixed') {
          setCheckedStatus({
            ...checkedStatus,
            [id]: 'on',
          })
        } else if (checkedStatus[id] === 'on') {
          setCheckedStatus({
            ...checkedStatus,
            [id]: 'off',
          })
        }
      }

    return (
      <CheckboxGroup {...args}>
        <CheckboxField
          labelText="Checkbox one"
          checkedStatus={checkedStatus.one}
          onCheck={onCheckHandler('one')}
        />
        <CheckboxField
          labelText="Checkbox two"
          checkedStatus={checkedStatus.two}
          onCheck={onCheckHandler('two')}
        />
        <CheckboxField
          labelText="Checkbox three"
          checkedStatus={checkedStatus.three}
          onCheck={onCheckHandler('three')}
        />
      </CheckboxGroup>
    )
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}

export const NoBottomMargin: Story = {
  render: (args) => (
    <div className="flex gap-16">
      <div>
        <CheckboxGroup {...args} labelText="Default" />
        New line of text
      </div>
      <div>
        <CheckboxGroup {...args} labelText="NoBottomMargin" noBottomMargin />
        New line of text
      </div>
    </div>
  ),
}

export const ReadOnly: Story = {
  name: 'Read-only',
  args: {
    labelText: 'Completed steps',
    // No onCheck handlers: the checkboxes are read-only
    children: (
      <>
        <CheckboxField labelText="Checkbox one" checkedStatus="off" />
        <CheckboxField labelText="Checkbox two" checkedStatus="on" />
        <CheckboxField labelText="Checkbox three" checkedStatus="mixed" />
      </>
    ),
  },
}
