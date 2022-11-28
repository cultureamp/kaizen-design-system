import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { FilterTriggerButton } from "../src/FilterDateRangePicker/components/Trigger"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Trigger Button`,
  component: FilterTriggerButton,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
} as ComponentMeta<typeof FilterTriggerButton>

export const DefaultStory: ComponentStory<
  typeof FilterTriggerButton
> = args => <FilterTriggerButton {...args} />
DefaultStory.storyName = "Filter Trigger Button"
DefaultStory.args = {
  label: "Label",
}

const StickerSheetTemplate: Story = () => (
  <div style={{ paddingBottom: "1rem" }}>
    <StoryWrapper>
      <StoryWrapper.RowHeader
        headings={["Base", "Has selected value", "Open"]}
      />
      <StoryWrapper.Row rowTitle="Default">
        <div>
          <FilterTriggerButton label="Desserts" />
        </div>
        <div>
          <FilterTriggerButton label="Desserts" selectedValue="Cake" />
        </div>
        <div>
          <FilterTriggerButton label="Desserts" isOpen />
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>

    <StoryWrapper>
      <StoryWrapper.RowHeader headings={["Hover", "Active", "Focus"]} />
      <StoryWrapper.Row rowTitle="Pseudo states">
        <div>
          <FilterTriggerButton
            label="Desserts"
            classNameOverride="story__filter-button--hover"
          />
        </div>
        <div>
          <FilterTriggerButton
            label="Desserts"
            classNameOverride="story__filter-button--active"
          />
        </div>
        <div>
          <FilterTriggerButton
            label="Desserts"
            classNameOverride="story__filter-button--focus"
          />
        </div>
      </StoryWrapper.Row>
    </StoryWrapper>
  </div>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
