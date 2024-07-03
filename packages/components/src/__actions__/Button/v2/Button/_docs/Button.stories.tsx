import { StoryObj, Meta } from "@storybook/react"
import * as ButtonV1Stories from "../../../v1/Button/_docs/Button.stories"
import { Button } from "../index"

const meta = {
  title: "Actions/Button/v2",
  component: Button,
  args: {
    label: "Label",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = ButtonV1Stories.Playground

export const Variants: Story = ButtonV1Stories.Variants

export const Reversed: Story = ButtonV1Stories.Reversed

export const Disabled: Story = ButtonV1Stories.Disabled

export const Icon: Story = ButtonV1Stories.Icon

export const IconPosition: Story = ButtonV1Stories.IconPosition

export const Badge: Story = ButtonV1Stories.Badge

export const FullWidth: Story = ButtonV1Stories.FullWidth

export const Working: Story = ButtonV1Stories.Working

export const Loading: Story = ButtonV1Stories.Loading

export const NativeFormButton: Story = ButtonV1Stories.NativeFormButton

export const ResolveWorking: Story = ButtonV1Stories.ResolveWorking
