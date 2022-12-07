import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StoryWrapper } from "../../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../../storybook/constants"
import {
  FilterTriggerButton,
  RemovableFilterTriggerButton,
} from "../../src/FilterDateRangePicker/components/Trigger"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Filter Trigger Buttons`,
  subcomponents: {
    FilterTriggerButton,
    RemovableFilterTriggerButton,
  },
  parameters: {
    docs: {
      description: {
        component: "This is a subcomponent - use FilterDateRangePicker.",
      },
    },
  },
  decorators: [withDesign],
}

const StickerSheetTemplate: Story = () => (
  // For Chromatic
  <div style={{ paddingBottom: "2rem" }}>
    <StoryWrapper>
      <StoryWrapper.RowHeader
        headings={["Closed", "Open", "Has selected value"]}
      />
      <StoryWrapper.Row rowTitle="Filter Trigger Button">
        <div>
          <FilterTriggerButton label="Desserts" />
        </div>
        <div>
          <FilterTriggerButton label="Desserts" isOpen />
        </div>
        <div>
          <FilterTriggerButton label="Desserts" selectedValue="Cake" />
        </div>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="Removable Filter Trigger Button">
        <div>
          <RemovableFilterTriggerButton
            triggerButtonProps={{
              label: "Desserts",
            }}
            removeButtonProps={{
              onClick: () => undefined,
              isTooltipInitiallyVisible: true,
            }}
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
