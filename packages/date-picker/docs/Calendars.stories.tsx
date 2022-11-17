import React from "react"
import { Story } from "@storybook/react"
import { within } from "@storybook/testing-library"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import {
  CalendarRange,
  CalendarSingle,
  CalendarSingleProps,
} from "../src/_subcomponents/Calendar"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/${SUB_COMPONENTS_FOLDER_NAME}/Calendars`,
  subcomponents: {
    CalendarSingle,
    CalendarRange,
  },
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

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.RowHeader headings={["Hover", "Focus"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Default" gridColumns={3}>
        <CalendarSingleExample id="default-hover" />
        <CalendarSingleExample id="default-focus" />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Default", "Focus"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Disabled" gridColumns={3}>
        <CalendarSingleExample
          disabled={[new Date("2021-09-15"), { after: new Date("2021-09-17") }]}
          id="disabled-default"
        />
        <CalendarSingleExample
          disabled={[new Date("2021-09-15"), { after: new Date("2021-09-17") }]}
          id="disabled-focus"
        />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Default", "Hover", "Focus"]} />
      <StoryWrapper.Row rowTitle="Selected">
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
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Default", "Selected", "Disabled"]} />
      <StoryWrapper.Row rowTitle="Today">
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
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Hover", "Focus"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Navigation Buttons" gridColumns={3}>
        <CalendarSingleExample id="navigation-hover" />
        <CalendarSingleExample id="navigation-focus" />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Default"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Range" gridColumns={3}>
        <CalendarRange
          selected={{
            from: new Date("2022-02-19"),
            to: new Date("2022-03-04"),
          }}
        />
      </StoryWrapper.Row>

      <StoryWrapper.RowHeader headings={["Default"]} gridColumns={3} />
      <StoryWrapper.Row rowTitle="Range with divider" gridColumns={3}>
        <CalendarRange
          selected={{
            from: new Date("2022-02-19"),
            to: new Date("2022-03-04"),
          }}
          hasDivider
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  </>
)

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

StickerSheetDefault.play = ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const getElementWithinCalendar = (id: string, name: string) => {
    const calendar = canvas.getByTestId(id)
    return within(calendar).getByRole("button", {
      name,
    })
  }

  const todayCalendarIds = ["today-default", "today-selected", "today-disabled"]

  todayCalendarIds.forEach(id => {
    getElementWithinCalendar(id, "1st May (Sunday)").classList.add(
      "story__datepicker__calendar--day-today"
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
      "focus-visible"
    )
  })

  getElementWithinCalendar(
    "disabled-focus",
    "15th September (Wednesday)"
  ).classList.add("focus-visible")
}
