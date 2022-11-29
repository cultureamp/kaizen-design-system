import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../../storybook/constants"
import { FilterBaseButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseButton"
import { FilterBaseTooltipButton } from "../../src/FilterDateRangePicker/components/Trigger/FilterBaseTooltipButton"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Base Buttons`,
  subcomponents: {
    FilterBaseButton,
    FilterBaseTooltipButton,
  },
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use FilterTriggerButton or RemovableFilterTriggerButton.",
      },
    },
  },
  decorators: [withDesign],
}

const StickerSheetTemplate: Story = () => (
  <StoryWrapper>
    <StoryWrapper.RowHeader headings={["Base", "Hover", "Active", "Focus"]} />
    <StoryWrapper.Row rowTitle="Filter Base Button">
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

    <StoryWrapper.Row rowTitle="Filter Base Tooltip Button">
      <div>
        <FilterBaseTooltipButton
          tooltipText="Tooltip"
          isTooltipInitiallyVisible
        >
          Label
        </FilterBaseTooltipButton>
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
