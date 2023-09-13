import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Paragraph } from "@kaizen/typography"
import { ExpertAdviceCollapsible } from "../index"

const meta = {
  title: "KAIO-staging/Collapsibles/ExpertAdviceCollapsible",
  component: ExpertAdviceCollapsible,
  parameters: { chromatic: { disable: false } },
  args: {
    title: "Expert advice collapsible",
    children: (
      <Paragraph variant="body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Paragraph>
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
