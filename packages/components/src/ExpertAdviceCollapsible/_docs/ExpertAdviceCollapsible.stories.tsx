import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Paragraph } from "@kaizen/typography"
import { controlsSettings } from "~components/Collapsible/_docs/Collapsible.stories"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { ExpertAdviceCollapsible } from "../index"

const meta = {
  title: "Components/Collapsible/ExpertAdviceCollapsible",
  component: ExpertAdviceCollapsible,
  parameters: {
    chromatic: { disable: false },
  },
  argTypes: {
    ...classNameOverrideArgType,
    ...controlsSettings,
  },
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
