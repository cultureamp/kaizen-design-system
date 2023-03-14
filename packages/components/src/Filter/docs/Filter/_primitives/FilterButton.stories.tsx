import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../../components/_primitives/FilterButton"

export default {
  title: "Components/Filter/Subcomponents/Buttons/Filter Button",
  component: FilterButton,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use FilterTriggerButton or RemovableFilterTriggerButton.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterButton>

export const FilterButtonStory: ComponentStory<typeof FilterButton> = args => (
  <FilterButton {...args} />
)
FilterButtonStory.storyName = "Filter Button"
FilterButtonStory.args = {
  children: "Label",
}

const StickerSheetTemplate: Story = () => (
  <StickerSheet heading="Filter Button">
    <StickerSheet.Header headings={["Base", "Hover", "Active", "Focus"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <FilterButton>Label</FilterButton>
        <FilterButton classNameOverride="story__filter-button--hover">
          Label
        </FilterButton>
        <FilterButton classNameOverride="story__filter-button--active">
          Label
        </FilterButton>
        <FilterButton classNameOverride="story__filter-button--focus">
          Label
        </FilterButton>
      </StickerSheet.Row>
    </StickerSheet.Body>
  </StickerSheet>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
