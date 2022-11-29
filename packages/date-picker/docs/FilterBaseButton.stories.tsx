import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { FilterBaseButton } from "../src/FilterDateRangePicker/components/Trigger/FilterBaseButton"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Button Base`,
  component: FilterBaseButton,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterBaseButton>

export const DefaultStory: ComponentStory<typeof FilterBaseButton> = args => (
  <FilterBaseButton {...args} />
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
        <FilterBaseButton>Label</FilterBaseButton>
      </div>
      <div>
        <FilterBaseButton classNameOverride="story__filter-button--hover">
          Label
        </FilterBaseButton>
      </div>
      <div>
        <FilterBaseButton classNameOverride="story__filter-button--active">
          Label
        </FilterBaseButton>
      </div>
      <div>
        <FilterBaseButton classNameOverride="story__filter-button--focus">
          Label
        </FilterBaseButton>
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
