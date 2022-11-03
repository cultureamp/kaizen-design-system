import React from "react"
import isChromatic from "chromatic"
import { Story } from "@storybook/react"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import { CalendarRange, CalendarSingle } from "../src/_subcomponents/Calendar"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  FloatingCalendarWrapper,
  FloatingCalendarWrapperProps,
} from "../src/_subcomponents/FloatingCalendarWrapper"

const IS_CHROMATIC = isChromatic()

const SUPPORTED_LOCALES = ["en-US", "en-AU"]

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/${SUB_COMPONENTS_FOLDER_NAME}/Floating Calendar Wrapper`,
  component: FloatingCalendarWrapper,
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

const FloatingCalenderWrapperExample = ({
  children,
  rowHeight = 320,
}: Partial<
  FloatingCalendarWrapperProps & { rowHeight: number }
>): JSX.Element => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null)

  return (
    <>
      <div ref={setReferenceElement} style={{ height: `${rowHeight}px` }} />
      <FloatingCalendarWrapper
        referenceElement={referenceElement}
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [24, -(rowHeight - 24)],
              },
            },
          ],
        }}
      >
        {children}
      </FloatingCalendarWrapper>
    </>
  )
}

const StickerSheetCalendarTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.Row rowTitle="Default">
        <FloatingCalenderWrapperExample rowHeight={54}>
          FloatingCalendarWrapper
          <br />
          Content goes in here.
        </FloatingCalenderWrapperExample>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="CalendarSingle">
        <FloatingCalenderWrapperExample>
          <CalendarSingle selected={new Date("2022-02-19")} />
        </FloatingCalenderWrapperExample>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="CalendarRange">
        <FloatingCalenderWrapperExample>
          <CalendarRange
            selected={{
              from: new Date("2022-02-19"),
              to: new Date("2022-03-04"),
            }}
          />
        </FloatingCalenderWrapperExample>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="CalendarRange with divider">
        <FloatingCalenderWrapperExample>
          <CalendarRange
            selected={{
              from: new Date("2022-02-19"),
              to: new Date("2022-03-04"),
            }}
            hasDivider
          />
        </FloatingCalenderWrapperExample>
      </StoryWrapper.Row>

      {IS_CHROMATIC && <div style={{ height: "50px" }}>Gap for Chromatic</div>}
    </StoryWrapper>
  </>
)

export const StickerSheetCalendar = StickerSheetCalendarTemplate.bind({})
StickerSheetCalendar.storyName = "Sticker Sheet (Default)"
StickerSheetCalendar.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
