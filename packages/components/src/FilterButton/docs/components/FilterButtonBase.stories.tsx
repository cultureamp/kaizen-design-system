import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { StickerSheet } from "../../../../../../storybook/components/StickerSheet"
import { FilterButtonBase } from "../../components/FilterButtonBase"

export default {
  title: "Components/Filter/Filter Button/Subcomponents/Filter Button Base",
  component: FilterButtonBase,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use FilterButton or FilterButtonRemovable.",
      },
    },
  },
} as ComponentMeta<typeof FilterButtonBase>

export const FilterButtonBaseStory: ComponentStory<
  typeof FilterButtonBase
> = args => <FilterButtonBase {...args} />
FilterButtonBaseStory.storyName = "Filter Button Base"
FilterButtonBaseStory.args = {
  children: "Label",
}

const StickerSheetTemplate: Story = () => (
  <StickerSheet heading="Filter Button Base">
    <StickerSheet.Header headings={["Base", "Hover", "Active", "Focus"]} />
    <StickerSheet.Body>
      <StickerSheet.Row>
        <FilterButtonBase>Label</FilterButtonBase>
        <FilterButtonBase classNameOverride="story__filter-button-base--hover">
          Label
        </FilterButtonBase>
        <FilterButtonBase classNameOverride="story__filter-button-base--active">
          Label
        </FilterButtonBase>
        <FilterButtonBase classNameOverride="story__filter-button-base--focus">
          Label
        </FilterButtonBase>
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
