import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { classNameOverrideArgType } from "~storybook/argTypes"
import { CollapsibleGroup } from "../index"

const meta = {
  title: "Components/CollapsibleGroup",
  component: CollapsibleGroup,
  argTypes: { ...classNameOverrideArgType },
  args: {
    /**
     * @note: Put consistent default values here.
     * If your value differs between stories, add the arg to the story instead.
     */
    exampleRequiredString: "Replace me!"
  }
} satisfies Meta<typeof CollapsibleGroup>

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

/**
 * @todo: Add your description here and use <Description /> in the MDX,
 * or write directly in the MDX.
 */
export const Reversed: Story = {
  args: { isReversed: true }
}
