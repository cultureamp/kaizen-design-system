import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { RemovableFilterTriggerButton } from "../src/FilterDateRangePicker/components/Trigger"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Removable Filter Trigger Button`,
  component: RemovableFilterTriggerButton,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof RemovableFilterTriggerButton>

export const DefaultStory: ComponentStory<
  typeof RemovableFilterTriggerButton
> = args => <RemovableFilterTriggerButton {...args} />
DefaultStory.storyName = "Removable Filter Trigger Button"
DefaultStory.args = {
  triggerButtonProps: { label: "Label" },
}
