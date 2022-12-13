import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../../storybook/components/StickerSheet"
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
// Test test
const StickerSheetTemplate: Story = () => (
  <>
    <StickerSheet heading="Filter Base Button">
      <StickerSheet.Header headings={["Base", "Hover", "Active", "Focus"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <FilterBaseButton>Label</FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--hover">
            Label
          </FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--active">
            Label
          </FilterBaseButton>
          <FilterBaseButton classNameOverride="story__filter-button--focus">
            Label
          </FilterBaseButton>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="Filter Base Tooltip Button" style={{ paddingBottom: "3rem" }}>
      <StickerSheet.Body>
        <StickerSheet.Row>
          <FilterBaseTooltipButton
            tooltipText="Tooltip"
            isTooltipInitiallyVisible
          >
            Label
          </FilterBaseTooltipButton>
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false, disableSnapshot: false, delay: 2500 },
  controls: { disable: true },
}
