import React from "react"
import { Meta } from "@storybook/react"
import { within } from "@storybook/testing-library"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import styles from "../Calendar.module.scss"
import { CalendarRange, CalendarSingle, CalendarSingleProps } from "../index"

export default {
  title: "Components/Date controls/Calendars",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const CalendarSingleExample = (
  props: Partial<CalendarSingleProps>
): JSX.Element => (
  <div data-testid={props.id}>
    <CalendarSingle defaultMonth={new Date("2021-09-05")} {...props} />
  </div>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet heading="Calendars - Day">
        <StickerSheet.Header headings={["Hover", "Focus", "Disabled"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <CalendarSingleExample id="id--calendar--hover" />
            <CalendarSingleExample id="id--calendar--focus" />
            <CalendarSingleExample
              disabled={[
                new Date("2021-09-15"),
                { after: new Date("2021-09-17") },
              ]}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Calendars - Selected Day">
        <StickerSheet.Header headings={["Default", "Hover", "Focus"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <CalendarSingleExample selected={new Date("2021-09-05")} />
            <CalendarSingleExample
              selected={new Date("2021-09-05")}
              id="id--calendar-selected--hover"
            />
            <CalendarSingleExample
              selected={new Date("2021-09-05")}
              id="id--calendar-selected--focus"
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
              id="id--calendar-today--default"
            />
            <CalendarSingleExample
              defaultMonth={new Date("2022-05-01")}
              id="id--calendar-today--selected"
              selected={new Date("2022-05-01")}
            />
            <CalendarSingleExample
              defaultMonth={new Date("2022-05-01")}
              id="id--calendar-today--disabled"
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
            <CalendarSingleExample id="id--calendar-navigation--hover" />
            <CalendarSingleExample id="id--calendar-navigation--focus" />
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

  const getElementWithinCalendar = (id: string, name: string): HTMLElement => {
    const calendar = canvas.getByTestId(id)
    return within(calendar).getByRole("button", {
      name,
    })
  }

  const todayCalendarIds = [
    "id--calendar-today--default",
    "id--calendar-today--selected",
    "id--calendar-today--disabled",
  ]

  todayCalendarIds.forEach(id => {
    getElementWithinCalendar(id, "1st May (Sunday)").classList.add(
      styles.dayToday
    )
  })

  const calendarsHover = [
    { id: "id--calendar--hover", buttonDescription: "5th September (Sunday)" },
    {
      id: "id--calendar-selected--hover",
      buttonDescription: "5th September (Sunday)",
    },
    {
      id: "id--calendar-navigation--hover",
      buttonDescription: "Go to previous month",
    },
  ]

  calendarsHover.forEach(({ id, buttonDescription }) => {
    getElementWithinCalendar(id, buttonDescription).setAttribute(
      "data-sb-pseudo-styles",
      "hover"
    )
  })

  const calendarsFocus = [
    { id: "id--calendar--focus", buttonDescription: "5th September (Sunday)" },
    {
      id: "id--calendar-selected--focus",
      buttonDescription: "5th September (Sunday)",
    },
    {
      id: "id--calendar-navigation--focus",
      buttonDescription: "Go to previous month",
    },
  ]

  calendarsFocus.forEach(({ id, buttonDescription }) => {
    getElementWithinCalendar(id, buttonDescription).setAttribute(
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
    /** @note: Only required if template has parameters, otherwise this spread can be removed */
    ...StickerSheetTemplate.parameters,
    textDirection: "rtl",
  },
}
