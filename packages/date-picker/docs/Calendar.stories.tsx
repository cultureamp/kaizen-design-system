import React from "react"
import { Story } from "@storybook/react"
import { enAU } from "date-fns/locale"
import { within } from "@storybook/testing-library"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DayOfWeek } from "../src/enums"
import { Calendar, CalendarProps } from "../src/_primitives/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const SUPPORTED_LOCALES = ["en-US", "en-AU"]

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Primitives/Calendar`,
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
  <Calendar
    mode="single"
    weekStartsOn={DayOfWeek.Sun}
    onDayChange={() => undefined}
    defaultMonth={new Date(2022, 1, 5)}
    locale={enAU}
    {...props}
  />
)

const StickerSheetCalendarTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <div style={{ height: "1600px" }}>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader
        headings={["Hover", "Focus", "Disabled", "Disabled Focus"]}
      />
      <StoryWrapper.Row rowTitle="Default">
        <CalendarExample id="default-hover" />
        <CalendarExample id="default-focus" />
        <CalendarExample
          disabledDays={[
            new Date(2022, 8, 15),
            { after: new Date(2022, 8, 17) },
          ]}
          id="default-disabled"
        />
        <CalendarExample
          disabledDays={[
            new Date(2022, 8, 15),
            { after: new Date(2022, 8, 17) },
          ]}
          id="default-disabled-focus"
        />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Selected", "Hover", "Focus"]} />
      <StoryWrapper.Row rowTitle="Selected">
        <CalendarExample value={new Date(2022, 8, 5)} id="selected-selected" />
        <CalendarExample value={new Date(2022, 8, 5)} id="selected-hover" />
        <CalendarExample value={new Date(2022, 8, 5)} id="selected-focus" />
      </StoryWrapper.Row>
    </StoryWrapper>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Hover", "Focus"]} />
      <StoryWrapper.Row rowTitle="Navigation Buttons">
        <CalendarExample id="navigation-hover" />
        <CalendarExample id="navigation-focus" />
      </StoryWrapper.Row>
    </StoryWrapper>
  </div>
)

export const StickerSheetCalendar = StickerSheetCalendarTemplate.bind({})
StickerSheetCalendar.storyName = "Calendar"
StickerSheetCalendar.parameters = {
  chromatic: { disable: false, viewports: [1800] },
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

  const calendars = [
    { calendar: "default", name: "5th September (Monday)" },
    { calendar: "selected", name: "5th September (Monday)" },
    { calendar: "navigation", name: "Go to previous month" },
  ]

  calendars.forEach(cal => {
    getElementWithinCalendar(`${cal.calendar}-hover`, cal.name).classList.add(
      "story__day-hover"
    )
    getElementWithinCalendar(`${cal.calendar}-focus`, cal.name).classList.add(
      "focus-visible"
    )
  })

  getElementWithinCalendar(
    "default-disabled-focus",
    "15th September (Thursday)"
  ).classList.add("focus-visible")
}
