import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { Text } from '~components/Text'
import { RichTextContent } from '../index'

const meta = {
  title: 'Components/RichTextEditor/RichTextContent',
  component: RichTextContent,
  args: {
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'User text goes here',
          },
        ],
      },
    ],
  },
  argTypes: {
    content: { control: false },
  },
} satisfies Meta<typeof RichTextContent>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    chromatic: { disable: false },
  },
}

export const ReadOnly: Story = {
  parameters: {
    chromatic: { disable: false },
  },
  args: {
    content: [
      {
        type: 'paragraph',
        content: [
          {
            type: 'text',
            text: 'User text goes here',
          },
        ],
      },
    ],
  },
  render: args => (
    <>
      {/* Note that since RichTextContent is not content editable, it is essentially just a div. This is why we haven't used the Label component */}
      <Text
        variant="small"
        tag="div"
        classNameOverride="block mb-6 leading-paragraph font-weight-heading"
      >
        Read only state
      </Text>
      <div className="p-12 bg-gray-200 rounded-default">
        <RichTextContent {...args} />
      </div>
    </>
  ),
}
