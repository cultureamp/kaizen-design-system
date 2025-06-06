import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Icon } from '~components/__next__/Icon'
import { TagColorKeys } from '../types'
import { Tag } from '..'

const meta = {
  title: 'Components/Tag/Tag (next)',
  component: Tag,
  args: {
    children: 'My tag',
  },
  argTypes: {
    icon: {
      options: ['delete', 'arrow', 'add'],
      mapping: {
        delete: <Icon isPresentational name="delete" />,
        arrow: <Icon isPresentational name="arrow_forward" />,
        add: <Icon isPresentational name="add" />,
      },
    },
  },
} satisfies Meta<typeof Tag>

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

export const Children: StoryObj = {
  args: { children: 'This text is the children' },
}

export const Color: StoryObj = {
  render: () => (
    <div className="flex gap-16">
      {TagColorKeys.map((color) => (
        <Tag color={color} icon={<Icon name="label" isPresentational isFilled />} key={color}>
          {color}
        </Tag>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
}

export const IconStory: StoryObj = {
  name: 'Icon',
  render: () => (
    <div className="flex gap-16">
      <Tag icon={<Icon name="school" isPresentational isFilled />}>AcademyIcon</Tag>
      <Tag color="yellow" icon={<Icon name="flash_on" isPresentational />}>
        ActionOffIcon
      </Tag>
      <Tag color="green" icon={<Icon name="add" isPresentational />}>
        AddIcon
      </Tag>
    </div>
  ),
  parameters: {
    docs: {
      source: { type: 'dynamic' },
    },
  },
}

export const ClassNameOverride: StoryObj = {
  args: {
    classNameOverride: 'border-red-500 border-solid border',
  },
}
