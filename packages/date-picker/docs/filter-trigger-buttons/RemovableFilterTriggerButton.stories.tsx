import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { SUB_COMPONENTS_FOLDER_NAME } from "../../../../storybook/constants"
import { RemovableFilterTriggerButton } from "../../src/FilterDateRangePicker/components/Trigger"

export default {
  title: `Components/Date Picker/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Trigger Buttons`,
  component: RemovableFilterTriggerButton,
  parameters: {
    docs: {
      description: {
        component: "This is a subcomponent - use FilterDateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof RemovableFilterTriggerButton>

export const RemovableFilterTriggerButtonStory: ComponentStory<
  typeof RemovableFilterTriggerButton
> = args => <RemovableFilterTriggerButton {...args} />
RemovableFilterTriggerButtonStory.storyName = "Removable Filter Trigger Button"
RemovableFilterTriggerButtonStory.args = {
  triggerButtonProps: { label: "Label" },
}
