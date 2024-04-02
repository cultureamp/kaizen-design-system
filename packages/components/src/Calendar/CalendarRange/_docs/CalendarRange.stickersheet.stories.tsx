import React from "react"
import { Meta } from "@storybook/react"
import { within } from "@storybook/test"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { CalendarRange, CalendarRangeProps } from "../../index"

export default {
  title: "Components/Date controls/Calendars/CalendarRange",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Pseudo states of Calendar days do not meet contrast ratios
            id: "color-contrast",
            selector:
              ':not([data-sb-pseudo-styles="hover"], [data-sb-pseudo-styles="focus"])',
          },
        ],
      },
    },
  },
} satisfies Meta

const CalendarRangeWrapper = (
  props: Partial<CalendarRangeProps>
): JSX.Element => (
  <div data-testid={props.id}>
    <CalendarRange
      selected={{
        from: new Date("2022-02-19"),
        to: new Date("2022-03-04"),
      }}
      {...props}
    />
  </div>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet heading="Calendar Range">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <CalendarRangeWrapper />
          </StickerSheet.Row>

          <StickerSheet.Row rowTitle="With divider">
            <div style={{ padding: "1.5rem 0" }}>
              <CalendarRangeWrapper hasDivider />
            </div>
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Pseudo states">
        <StickerSheet.Header
          headings={["Hover", "Focus"]}
          hasVerticalHeadings
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Selected (Start)">
            <CalendarRangeWrapper id="id__calendar-range__start--hover" />
            <CalendarRangeWrapper id="id__calendar-range__start--focus" />
          </StickerSheet.Row>

          <StickerSheet.Row rowTitle="Selected (Middle)">
            <CalendarRangeWrapper id="id__calendar-range__middle--hover" />
            <CalendarRangeWrapper id="id__calendar-range__middle--focus" />
          </StickerSheet.Row>

          <StickerSheet.Row rowTitle="Selected (End)">
            <CalendarRangeWrapper id="id__calendar-range__end--hover" />
            <CalendarRangeWrapper id="id__calendar-range__end--focus" />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
  play: ({ canvasElement }): void => {
    applyStickerSheetStyles(canvasElement)
  },
}
const applyStickerSheetStyles = (canvasElement: HTMLElement): void => {
  const canvas = within(canvasElement)

  const getElementWithinCalendar = (
    id: string,
    monthName: string,
    dayName: string
  ): HTMLElement => {
    const calendar = canvas.getByTestId(id)
    const month = within(calendar).getByRole("grid", { name: monthName })
    return within(month).getByRole("gridcell", { name: dayName })
  }

  const calendarsPseudoStates = [
    {
      id: "id__calendar-range__start",
      monthName: "February 2022",
      dayName: "19",
    },
    {
      id: "id__calendar-range__middle",
      monthName: "February 2022",
      dayName: "26",
    },
    {
      id: "id__calendar-range__end",
      monthName: "March 2022",
      dayName: "4",
    },
  ]

  calendarsPseudoStates.forEach(({ id, monthName, dayName }) => {
    getElementWithinCalendar(`${id}--hover`, monthName, dayName).setAttribute(
      "data-sb-pseudo-styles",
      "hover"
    )
    getElementWithinCalendar(`${id}--focus`, monthName, dayName).setAttribute(
      "data-sb-pseudo-styles",
      "focus"
    )
  })
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
