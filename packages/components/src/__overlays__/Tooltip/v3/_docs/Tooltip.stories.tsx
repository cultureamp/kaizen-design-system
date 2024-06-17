import { Meta, StoryObj } from "@storybook/react"
import * as TooltipV2Stories from "../../v2/_docs/Tooltip.stories"
import { Tooltip } from "../index"

const meta = {
  title: "Overlays/Tooltip/v3",
  component: Tooltip,
  parameters: {
    layout: "centered",
  },
  args: {
    // defaultOpen: true,
  },
  argTypes: {
    // eslint-disable-next-line camelcase
    UNSTABLE_portalContainer: {
      control: false,
      table: { disable: true },
    },
    triggerRef: { control: false },
  },
} satisfies Meta<typeof Tooltip>

export default meta

type Story = StoryObj<typeof meta>

export const OnButton: Story = {
  ...TooltipV2Stories.OnButton,
}
export const OnLink: Story = {
  ...TooltipV2Stories.OnLink,
}
export const OnButtonWithDesc: Story = {
  ...TooltipV2Stories.OnButtonWithDesc,
}
export const OnIconButton: Story = {
  ...TooltipV2Stories.OnIconButton,
}
export const OnDisabledButton: Story = {
  ...TooltipV2Stories.OnDisabledButton,
}
export const OnCustomButtonAnchor: Story = {
  ...TooltipV2Stories.OnCustomButtonAnchor,
}
export const OnCustomButton: Story = {
  ...TooltipV2Stories.OnCustomButton,
}
export const OnCustomFocusableElement: Story = {
  ...TooltipV2Stories.OnCustomFocusableElement,
}
export const PlacementLeft: Story = {
  ...TooltipV2Stories.PlacementLeft,
}
export const PlacementRight: Story = {
  ...TooltipV2Stories.PlacementRight,
}
export const PlacementTop: Story = {
  ...TooltipV2Stories.PlacementTop,
}
export const PlacementBottom: Story = {
  ...TooltipV2Stories.PlacementBottom,
}
export const ReversedColors: Story = {
  ...TooltipV2Stories.ReversedColors,
}
export const ToggleTipStory: Story = {
  ...TooltipV2Stories.ToggleTipStory,
}
