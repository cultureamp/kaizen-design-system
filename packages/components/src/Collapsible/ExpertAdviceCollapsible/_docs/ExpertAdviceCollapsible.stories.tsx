import React from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { Text } from '~components/Text'
import { ExpertAdviceCollapsible } from '../index'

const meta = {
  title: 'Components/Collapsibles/ExpertAdviceCollapsible',
  component: ExpertAdviceCollapsible,
  args: {
    title: 'Expert advice collapsible',
    children: <Text variant="body">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>,
  },
} satisfies any

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
