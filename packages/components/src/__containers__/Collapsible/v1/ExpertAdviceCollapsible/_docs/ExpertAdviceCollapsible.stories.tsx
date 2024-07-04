import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/__content__/v2"
import { ExpertAdviceCollapsible } from "../index"

const meta = {
  title: "Containers/ExpertAdviceCollapsible/v1",
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
