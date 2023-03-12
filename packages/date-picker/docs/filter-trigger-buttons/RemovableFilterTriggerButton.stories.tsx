import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { RemovableFilterTriggerButton } from "../../src/FilterDateRangePicker/components/Trigger"

export default {
  title:
    "Components/Filter Date Range Picker/Subcomponents/Filter Trigger Buttons",
  component: RemovableFilterTriggerButton,
  parameters: {
    docs: {
      description: {
        component: "This is a subcomponent - use FilterDateRangePicker.",
      },
    },
  },
} satisfies Meta<typeof RemovableFilterTriggerButton>

export const RemovableFilterTriggerButtonStory: StoryFn<
  typeof RemovableFilterTriggerButton
> = args => <RemovableFilterTriggerButton {...args} />
RemovableFilterTriggerButtonStory.storyName = "Removable Filter Trigger Button"
RemovableFilterTriggerButtonStory.args = {
  triggerButtonProps: { label: "Label" },
}
