import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { FilterButtonBase } from "../src/FilterDateRangePicker/components/Trigger/FilterButtonBase"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Button Base`,
  component: FilterButtonBase,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterButtonBase>

export const DefaultStory: ComponentStory<typeof FilterButtonBase> = args => (
  <FilterButtonBase {...args} />
)
DefaultStory.storyName = "Filter Button Base"
DefaultStory.args = {
  children: "Label",
}

const StickerSheetTemplate: Story = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader headings={["Base", "Hover", "Active", "Focus"]} />
    <StoryWrapper.Row rowTitle="Default">
      <div>
        <FilterButtonBase>Label</FilterButtonBase>
      </div>
      <div>
        <FilterButtonBase classNameOverride="story__filter-button--hover">
          Label
        </FilterButtonBase>
      </div>
      <div>
        <FilterButtonBase classNameOverride="story__filter-button--active">
          Label
        </FilterButtonBase>
      </div>
      <div>
        <FilterButtonBase classNameOverride="story__filter-button--focus">
          Label
        </FilterButtonBase>
      </div>
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
