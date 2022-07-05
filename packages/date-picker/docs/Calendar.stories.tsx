import React, { useState } from "react"
import { Story } from "@storybook/react"
import { usePopper } from "react-popper"
import { enAU } from "date-fns/locale"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DayOfWeek } from "../src/DatePicker"
import { Calendar, CalendarProps } from "../src/DatePicker/components/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const SUPPORTED_LOCALES = ["en-US", "en-AU"]

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Primitives/Calendar`,
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: 'import { Calendar, DateInput } from "@kaizen/date-picker"',
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

const CalendarExample = (props: Partial<CalendarProps>): JSX.Element => {
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
    null
  )

  const [referenceElement, setReferenceElement] =
    useState<HTMLDivElement | null>(null)

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 15],
        },
      },
    ],
    placement: "bottom-start",
  })

  return (
    <div ref={setReferenceElement}>
      <Calendar
        mode="single"
        id="calendar-dialog"
        setPopperElement={setPopperElement}
        popperStyles={styles}
        popperAttributes={attributes}
        weekStartsOn={DayOfWeek.Sun}
        onDayChange={() => undefined}
        defaultMonth={new Date(2022, 1, 5)}
        locale={enAU}
        {...props}
      />
    </div>
  )
}

const StickerSheetCalendarTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <StoryWrapper isReversed={isReversed}>
    <StoryWrapper.RowHeader headings={["Selected Date", "Disabled Dates"]} />
    <StoryWrapper.Row rowTitle="Calendar">
      <CalendarExample value={new Date(2022, 1, 5)} />
      <CalendarExample
        disabledDays={[new Date(2022, 1, 15), { after: new Date(2022, 1, 17) }]}
        id="calendar-dialog-disabled"
      />
    </StoryWrapper.Row>
  </StoryWrapper>
)

export const StickerSheetCalendar = StickerSheetCalendarTemplate.bind({})
StickerSheetCalendar.storyName = "Sticker Sheet (Default)"
StickerSheetCalendar.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
export const StickerSheetReversed = StickerSheetCalendarTemplate.bind({})
StickerSheetReversed.storyName = "Sticker Sheet (Reversed)"
StickerSheetReversed.args = { isReversed: true }
StickerSheetReversed.parameters = {
  controls: { disable: true },
  backgrounds: { default: "Purple 700" },
  chromatic: { disable: false },
}
