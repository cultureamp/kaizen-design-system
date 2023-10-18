import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { CalendarRange } from "../../index"

export default {
  title: "Components/Date controls/Calendars/CalendarRange",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet heading="Calendar Range">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <CalendarRange
              selected={{
                from: new Date("2022-02-19"),
                to: new Date("2022-03-04"),
              }}
            />
          </StickerSheet.Row>

          <StickerSheet.Row rowTitle="With divider">
            <div style={{ padding: "1.5rem 0" }}>
              <CalendarRange
                selected={{
                  from: new Date("2022-02-19"),
                  to: new Date("2022-03-04"),
                }}
                hasDivider
              />
            </div>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
