import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { FieldGroup } from "../index"

const meta = {
  title: "Components/FieldGroup",
  component: FieldGroup,
  args: {
    /**
     * @note: Put consistent default values here.
     * If your value differs between stories, add the arg to the story instead.
     */
    exampleRequiredString: "Replace me!"
  }
} satisfies Meta<typeof FieldGroup>

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
