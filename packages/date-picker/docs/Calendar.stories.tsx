import React from "react"
import { Story } from "@storybook/react"
import { enAU } from "date-fns/locale"
import { within } from "@storybook/testing-library"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { DayOfWeek } from "../src/enums"
import { Calendar, CalendarProps } from "../src/_primitives/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const SUPPORTED_LOCALES = ["en-US", "en-AU"]

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/${SUB_COMPONENTS_FOLDER_NAME}/Calendar`,
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
  argTypes: {
    locale: {
      options: SUPPORTED_LOCALES,
      control: { type: "radio" },
    },
  },
}

const CalendarExample = (
  props: Partial<CalendarProps> & { id: CalendarProps["id"] }
): JSX.Element => (
  <div data-testid={props.id}>
    <Calendar
      mode="single"
      weekStartsOn={DayOfWeek.Sun}
      onDayChange={() => undefined}
      defaultMonth={new Date("2022-09-05")}
      locale={enAU}
      {...props}
    />
  </div>
)

const StickerSheetCalendarTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Hover", "Focus"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Default" gridColumns={3}>
        <CalendarExample id="default-hover" />
        <CalendarExample id="default-focus" />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Default", "Focus"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Disabled" gridColumns={3}>
        <CalendarExample
          disabledDays={[
            new Date("2022-09-15"),
            { after: new Date("2022-09-17") },
          ]}
          id="disabled-default"
        />
        <CalendarExample
          disabledDays={[
            new Date("2022-09-15"),
            { after: new Date("2022-09-17") },
          ]}
          id="disabled-focus"
        />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Default", "Hover", "Focus"]} />
      <StoryWrapper.Row rowTitle="Selected">
        <CalendarExample value={new Date("2022-09-05")} id="selected-default" />
        <CalendarExample value={new Date("2022-09-05")} id="selected-hover" />
        <CalendarExample value={new Date("2022-09-05")} id="selected-focus" />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader
        headings={["Default", "Selected"]}
        gridColumns={3}
      />
      <StoryWrapper.Row rowTitle="Today" gridColumns={3}>
        <CalendarExample
          defaultMonth={new Date("2022-05-01")}
          id="today-default"
        />
        <CalendarExample
          defaultMonth={new Date("2022-05-01")}
          id="today-selected"
          value={new Date("2022-05-01")}
        />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Hover", "Focus"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Navigation Buttons" gridColumns={3}>
        <CalendarExample id="navigation-hover" />
        <CalendarExample id="navigation-focus" />
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const StickerSheetCalendar = StickerSheetCalendarTemplate.bind({})
StickerSheetCalendar.storyName = "Sticker Sheet (Default)"
StickerSheetCalendar.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

StickerSheetCalendar.play = ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const getElementWithinCalendar = (id: string, name: string) => {
    const calendar = canvas.getByTestId(id)
    return within(calendar).getByRole("button", {
      name,
    })
  }

  const todayCalendarIds = ["today-default", "today-selected"]

  todayCalendarIds.forEach(id => {
    getElementWithinCalendar(id, "1st May (Sunday)").classList.add(
      "story__datepicker__calendar--day-today"
    )
  })

  const calendars = [
    { row: "default", buttonDescription: "5th September (Monday)" },
    { row: "selected", buttonDescription: "5th September (Monday)" },
    { row: "navigation", buttonDescription: "Go to previous month" },
  ]

  calendars.forEach(({ row, buttonDescription }) => {
    getElementWithinCalendar(`${row}-hover`, buttonDescription).classList.add(
      "story__datepicker__calendar--hover"
    )
    getElementWithinCalendar(`${row}-focus`, buttonDescription).classList.add(
      "focus-visible"
    )
  })

  getElementWithinCalendar(
    "disabled-focus",
    "15th September (Thursday)"
  ).classList.add("focus-visible")
}
