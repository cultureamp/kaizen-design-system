import React from "react"
import { Meta } from "@storybook/react"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { CalendarRange } from "../../CalendarRange"
import { CalendarSingle } from "../../CalendarSingle"
import { CalendarPopover, CalendarPopoverProps } from "../index"

export default {
  title: "Components/Date controls/Calendars/CalendarPopover",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within Date(Range)Picker where label is present
            id: "aria-dialog-name",
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const CalendarPopoverExample = ({
  children,
  rowHeight = 300,
}: Partial<CalendarPopoverProps & { rowHeight: number }>): JSX.Element => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null)

  return (
    <>
      <div
        ref={setReferenceElement}
        style={{ paddingBottom: "24px", marginTop: `${rowHeight}px` }}
      />
      <CalendarPopover
        referenceElement={referenceElement}
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [24, 0],
              },
            },
          ],
          placement: "top-start",
        }}
      >
        {children}
      </CalendarPopover>
    </>
  )
}

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed}>
        <StickerSheet.Row rowTitle="Default">
          <CalendarPopoverExample rowHeight={102}>
            CalendarPopover
            <br />
            Content goes in here.
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="CalendarSingle">
          <CalendarPopoverExample>
            <CalendarSingle selected={new Date("2022-02-19")} />
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="CalendarRange">
          <CalendarPopoverExample>
            <CalendarRange
              selected={{
                from: new Date("2022-02-19"),
                to: new Date("2022-03-04"),
              }}
            />
          </CalendarPopoverExample>
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="CalendarRange with divider">
          <CalendarPopoverExample>
            <CalendarRange
              selected={{
                from: new Date("2022-02-19"),
                to: new Date("2022-03-04"),
              }}
              hasDivider
            />
          </CalendarPopoverExample>
        </StickerSheet.Row>
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
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
