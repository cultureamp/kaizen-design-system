import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { RemovableFilterTriggerButton } from "@kaizen/date-picker/src/FilterDateRangePicker/components/Trigger"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../../../../storybook/constants"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.filter}/${SUB_COMPONENTS_FOLDER_NAME}/Filter Trigger Buttons`,
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
