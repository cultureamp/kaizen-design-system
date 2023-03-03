import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../../../../storybook/constants"
import { FilterRef } from "../../components/FilterTriggerButton"
import {
  FilterTriggerButtonRemovable,
  FilterTriggerButtonRemovableRefs,
} from "../../components/FilterTriggerButtonRemovable"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.filter}/${SUB_COMPONENTS_FOLDER_NAME}/Filter Trigger Buttons`,
  component: FilterTriggerButtonRemovable,
  parameters: {
    docs: {
      description: {
        component: "This is a subcomponent - use FilterDateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterTriggerButtonRemovable>

export const FilterTriggerButtonRemovableStory: ComponentStory<
  typeof FilterTriggerButtonRemovable
> = args => <FilterTriggerButtonRemovable {...args} />
FilterTriggerButtonRemovableStory.storyName = "Removable Filter Trigger Button"
FilterTriggerButtonRemovableStory.args = {
  triggerButtonProps: { label: "Label" },
}

export const WithRefsStory: ComponentStory<
  typeof FilterTriggerButtonRemovable
> = args => {
  const triggerButtonRef = React.useRef<FilterRef>(null)
  const removeButtonRef = React.useRef<HTMLButtonElement>(null)
  const ref = React.useRef<FilterTriggerButtonRemovableRefs>({
    triggerButtonRef,
    removeButtonRef,
  })
  return <FilterTriggerButtonRemovable ref={ref} {...args} />
}
WithRefsStory.storyName = "WithRefsStory"
WithRefsStory.args = {
  triggerButtonProps: { label: "Label" },
}
