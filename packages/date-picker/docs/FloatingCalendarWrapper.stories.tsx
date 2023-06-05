import React from "react"
import { StoryFn } from "@storybook/react"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CalendarRange, CalendarSingle } from "../src/_subcomponents/Calendar"
import {
  FloatingCalendarWrapper,
  FloatingCalendarWrapperProps,
} from "../src/_subcomponents/FloatingCalendarWrapper"

const SUPPORTED_LOCALES = ["en-US", "en-AU"]

export default {
  tags: ["autodocs"],
  title:
    "Components/Date Selection/Date Picker/Subcomponents/Floating Calendar Wrapper",
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
  rowHeight = 300,
}: Partial<
  FloatingCalendarWrapperProps & { rowHeight: number }
>): JSX.Element => {
  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null)

  return (
    <>
      <div
        ref={setReferenceElement}
        style={{ paddingBottom: "24px", marginTop: `${rowHeight}px` }}
      />
      <FloatingCalendarWrapper
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
      </FloatingCalendarWrapper>
    </>
  )
}

const StickerSheetCalendarTemplate: StoryFn<{ isReversed: boolean }> = ({
  isReversed,
}) => (
  <>
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.Row rowTitle="Default">
        <FloatingCalenderWrapperExample rowHeight={102}>
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
    </StoryWrapper>
  </>
)

export const StickerSheetCalendar = StickerSheetCalendarTemplate.bind({})
StickerSheetCalendar.storyName = "Sticker Sheet (Default)"
StickerSheetCalendar.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
