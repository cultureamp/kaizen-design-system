import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { LoadingHeading } from "~components/Loading"
import { LoadingInput } from "../index"

const meta = {
  title: "Components/Loading states/LoadingInput",
  component: LoadingInput,
} satisfies Meta<typeof LoadingInput>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    chromatic: { disable: false },
  },
}

export const Animated: Story = {
  args: { isAnimated: true },
}

export const Reversed: Story = {
  args: { isReversed: true },
  parameters: {
    backgrounds: { default: "Purple 700" },
    chromatic: { disable: false },
  },
}

const TextControlExampleTemplate: Story = {
  render: args => (
    <>
      <LoadingHeading variant="heading-6" width={10} />
      <LoadingInput {...args} />
    </>
  ),
}

export const TextFieldExample: Story = {
  ...TextControlExampleTemplate,
  name: "TextField Example",
}

export const TextAreaFieldExample: Story = {
  ...TextControlExampleTemplate,
  name: "TextAreaField Example",
  args: { height: 100 },
}
