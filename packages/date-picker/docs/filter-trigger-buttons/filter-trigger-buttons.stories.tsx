import React from "react"
import { Meta, StoryFn } from "@storybook/react"
import { StickerSheet } from "../../../../storybook/components/StickerSheet"
import {
  FilterTriggerButton,
  RemovableFilterTriggerButton,
} from "../../src/FilterDateRangePicker/components/Trigger"

export default {
  title:
    "Components/Filter Date Range Picker/Subcomponents/Filter Trigger Buttons",
  parameters: {
    docs: {
      description: {
        component: "This is a subcomponent - use FilterDateRangePicker.",
      },
    },
  },
} as Meta

const StickerSheetTemplate: StoryFn = () => (
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
