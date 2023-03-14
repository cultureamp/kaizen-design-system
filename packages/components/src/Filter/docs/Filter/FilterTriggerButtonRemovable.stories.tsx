import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { FilterTriggerButtonRemovable } from "../../components/FilterTriggerButtonRemovable"

export default {
  title: "Components/Filter/Subcomponents/Filter Trigger Buttons",
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

// @todo move to code tech docs

// export const WithRefsStory: ComponentStory<
//   typeof FilterTriggerButtonRemovable
// > = args => {
//   const triggerButtonRef = React.useRef<HTMLButtonElement>(null)
//   const removeButtonRef = React.useRef<HTMLButtonElement>(null)
//   const ref = React.useRef<FilterTriggerButtonRemovableRefs>({
//     triggerButtonRef,
//     removeButtonRef,
//   })
//   return <FilterTriggerButtonRemovable ref={ref} {...args} />
// }
// WithRefsStory.storyName = "WithRefsStory"
// WithRefsStory.args = {
//   triggerButtonProps: { label: "Label" },
// }
