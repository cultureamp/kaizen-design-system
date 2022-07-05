import React, { useState } from "react"
import { Story } from "@storybook/react"
import { Paragraph } from "@kaizen/typography"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { DatePicker } from "../src/DatePicker"
import { DateInput } from "../src/DatePicker/components/DateInput"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"

const SUPPORTED_LOCALES = ["en-US", "en-AU"]

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Primitives/DateInput`,
  component: DateInput,
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

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [selectedDate, setValueDate] = useState<Date | undefined>()

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={[
            "Default",
            "Selected Value",
            "Custom Description",
            "Disabled",
            "Error",
          ]}
        />
        <StoryWrapper.Row rowTitle="Input">
          <DatePicker
            id="datepicker-default"
            labelText="Label"
            selectedDay={selectedDate}
            onDayChange={setValueDate}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-AU"
          />
          <DatePicker
            id="datepicker-selected"
            labelText="Label"
            selectedDay={new Date(2022, 1, 5)}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-AU"
          />
          <DatePicker
            id="datepicker-description"
            labelText="Label"
            selectedDay={undefined}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            description={
              <>
                <Paragraph
                  tag="span"
                  variant="small"
                  color={isReversed ? "white" : "dark"}
                >
                  My <strong>Custom</strong> Description Paragraph
                </Paragraph>
              </>
            }
            status="default"
            validationMessage={undefined}
            locale="en-AU"
          />
          <DatePicker
            id="datepicker-disabled"
            labelText="Label"
            selectedDay={undefined}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-AU"
            disabled
          />
          <DatePicker
            id="datepicker-error"
            labelText="Label"
            selectedDay={new Date("potato")}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="error"
            validationMessage="Invalid Date."
            locale="en-AU"
          />
        </StoryWrapper.Row>
      </StoryWrapper>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader headings={["en-AU", "en-US"]} />
        <StoryWrapper.Row rowTitle="Localisation">
          <DatePicker
            id="datepicker-enAU"
            labelText="Label"
            selectedDay={new Date("2022, 1, 5")}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-AU"
          />
          <DatePicker
            id="datepicker-enUS"
            labelText="Label"
            selectedDay={new Date("2022, 1, 5")}
            onDayChange={() => undefined}
            onValidate={() => undefined}
            isReversed={isReversed}
            status="default"
            validationMessage={undefined}
            locale="en-US"
          />
        </StoryWrapper.Row>
      </StoryWrapper>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
