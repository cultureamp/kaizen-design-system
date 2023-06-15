import React from "react"
import { StoryFn } from "@storybook/react"
import { within } from "@storybook/testing-library"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import {
  CalendarRange,
  CalendarSingle,
  CalendarSingleProps,
} from "../src/_subcomponents/Calendar"
import styles from "../src/_subcomponents/Calendar/Calendar.module.scss"

export default {
  tags: ["autodocs"],
  title: "Components/Date Selection/Calendar",
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
}

const CalendarSingleExample = (
  props: Partial<CalendarSingleProps> & { id: CalendarSingleProps["id"] }
): JSX.Element => (
  <div data-testid={props.id}>
    <CalendarSingle defaultMonth={new Date("2021-09-05")} {...props} />
  </div>
)

const StickerSheetTemplate: StoryFn = () => (
  <>
    <StickerSheet heading="Calendars - Day">
      <StickerSheet.Header headings={["Hover", "Focus", "Disabled"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <CalendarSingleExample id="default-hover" />
          <CalendarSingleExample id="default-focus" />
          <CalendarSingleExample
            disabled={[
              new Date("2021-09-15"),
              { after: new Date("2021-09-17") },
            ]}
            id="disabled-default"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="Calendars - Selected Day">
      <StickerSheet.Header headings={["Default", "Hover", "Focus"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <CalendarSingleExample
            selected={new Date("2021-09-05")}
            id="selected-default"
          />
          <CalendarSingleExample
            selected={new Date("2021-09-05")}
            id="selected-hover"
          />
          <CalendarSingleExample
            selected={new Date("2021-09-05")}
            id="selected-focus"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="Calendars - Today">
      <StickerSheet.Header headings={["Default", "Selected", "Disabled"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <CalendarSingleExample
            defaultMonth={new Date("2022-05-01")}
            id="today-default"
          />
          <CalendarSingleExample
            defaultMonth={new Date("2022-05-01")}
            id="today-selected"
            selected={new Date("2022-05-01")}
          />
          <CalendarSingleExample
            defaultMonth={new Date("2022-05-01")}
            id="today-disabled"
            selected={new Date("2022-05-01")}
            disabled={[new Date("2022-05-01")]}
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

    <StickerSheet heading="Calendars - Navigation Buttons">
      <StickerSheet.Header headings={["Hover", "Focus"]} />
      <StickerSheet.Body>
        <StickerSheet.Row>
          <CalendarSingleExample id="navigation-hover" />
          <CalendarSingleExample id="navigation-focus" />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>

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
)

const applyStickerSheetStyles = (canvasElement: HTMLElement): void => {
  const canvas = within(canvasElement)

  const getElementWithinCalendar = (id: string, name: string): HTMLElement => {
    const calendar = canvas.getByTestId(id)
    return within(calendar).getByRole("button", {
      name,
    })
  }

  const todayCalendarIds = ["today-default", "today-selected", "today-disabled"]

  todayCalendarIds.forEach(id => {
    getElementWithinCalendar(id, "1st May (Sunday)").classList.add(
      styles.dayToday
    )
  })

  const calendars = [
    { row: "default", buttonDescription: "5th September (Sunday)" },
    { row: "selected", buttonDescription: "5th September (Sunday)" },
    { row: "navigation", buttonDescription: "Go to previous month" },
  ]

  calendars.forEach(({ row, buttonDescription }) => {
    getElementWithinCalendar(`${row}-hover`, buttonDescription).classList.add(
      "story__datepicker__calendar--hover"
    )
    getElementWithinCalendar(`${row}-focus`, buttonDescription).classList.add(
      "story__datepicker__calendar--focus"
    )
  })
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
StickerSheetDefault.play = ({ canvasElement }): void => {
  applyStickerSheetStyles(canvasElement)
}

export const StickerSheetRTL = StickerSheetTemplate.bind({})
StickerSheetRTL.storyName = "Sticker Sheet (RTL)"
StickerSheetRTL.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
StickerSheetRTL.args = {
  textDirection: "rtl", // Global control; see storybook/preview.tsx
}
StickerSheetRTL.play = ({ canvasElement }): void => {
  applyStickerSheetStyles(canvasElement)
}
