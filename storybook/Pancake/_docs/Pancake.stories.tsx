import { Meta, StoryObj } from "@storybook/react"
import { Pancake } from "../index"

const meta = {
  title: "Components/Pancake",
  component: Pancake,
  args: {
    /**
     * @note: Put consistent default values here.
     * If your value differs between stories, add the arg to the story instead.
     */
    exampleRequiredString: "Replace me!",
  },
} satisfies Meta<typeof Pancake>

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

export const Reversed: Story = {
  parameters: { backgrounds: { default: "Purple 700" } },
  args: { isReversed: true },
}
