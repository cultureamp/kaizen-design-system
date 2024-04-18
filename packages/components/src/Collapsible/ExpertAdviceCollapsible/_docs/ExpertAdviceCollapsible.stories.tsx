import React from "react"
import { Text } from "~components/Text"
import { Meta, StoryObj } from "~storybook/index"
import { ExpertAdviceCollapsible } from "../index"

const meta = {
  title: "Components/Collapsibles/ExpertAdviceCollapsible",
  component: ExpertAdviceCollapsible,
  parameters: { chromatic: { disable: false } },
  args: {
    title: "Expert advice collapsible",
    children: (
      <Text variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Text>
    ),
  },
} satisfies Meta<typeof ExpertAdviceCollapsible>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}
