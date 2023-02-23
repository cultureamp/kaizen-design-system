import React from "react"
import { Story } from "@storybook/react"
import { withDesign } from "storybook-addon-designs"
import { StickerSheet } from "../../../../storybook/components/StickerSheet"
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
  <>
    <StickerSheet heading="Filter Trigger Button">
      <StickerSheet.Header
        headings={["Closed", "Open", "Has selected value"]}
        hasVerticalHeadings
        verticalHeadingsWidth={70}
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="LTR">
          <FilterTriggerButton label="Desserts" />
          <FilterTriggerButton label="Desserts" isOpen />
          <FilterTriggerButton label="Desserts" selectedValue="Cake" />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="RTL" dir="rtl">
          <FilterTriggerButton label="Desserts" />
          <FilterTriggerButton label="Desserts" isOpen />
          <FilterTriggerButton label="Desserts" selectedValue="Cake" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="Removable Filter Trigger Button">
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="LTR" rowTitleWidth={70}>
          <RemovableFilterTriggerButton
            triggerButtonProps={{
              label: "Desserts",
            }}
            removeButtonProps={{
              onClick: () => undefined,
            }}
          />
        </StickerSheet.Row>
        <StickerSheet.Row rowTitle="RTL" dir="rtl">
          <RemovableFilterTriggerButton
            triggerButtonProps={{
              label: "Desserts",
            }}
            removeButtonProps={{
              onClick: () => undefined,
            }}
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
