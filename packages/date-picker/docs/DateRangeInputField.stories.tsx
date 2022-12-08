import React from "react"
import { ComponentMeta, ComponentStory, Story } from "@storybook/react"
import { enAU } from "date-fns/locale"
import { Paragraph } from "@kaizen/typography"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import {
  CATEGORIES,
  SUB_CATEGORIES,
  SUB_COMPONENTS_FOLDER_NAME,
} from "../../../storybook/constants"
import {
  DateRangeInputField,
  DateRangeInputFieldProps,
} from "../src/FilterDateRangePicker/components/DateRangeInputField"

const LOCALE = enAU

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Date Range Input Field`,
  component: DateRangeInputField,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
} as ComponentMeta<typeof DateRangeInputField>

export const DefaultStory: ComponentStory<
  typeof DateRangeInputField
> = props => <DateRangeInputField {...props} />
DefaultStory.storyName = "Date Range Input Field"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  id: "daterangeinputfield--default",
  legend: "Legend",
  inputRangeStartProps: { labelText: "Date from" },
  inputRangeEndProps: { labelText: "Date to" },
  locale: enAU,
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const inputRangeStartProps: DateRangeInputFieldProps["inputRangeStartProps"] =
    { labelText: "Date from" }
  const inputRangeEndProps: DateRangeInputFieldProps["inputRangeEndProps"] = {
    labelText: "Date to",
  }

  return (
    <>
      <StoryWrapper isReversed={isReversed}>
        <StoryWrapper.RowHeader
          headings={["Base", "Selected value", "Custom description"]}
        />
        <StoryWrapper.Row rowTitle="Default">
          <DateRangeInputField
            id="daterangeinputfield--default"
            legend="Default example"
            isReversed={isReversed}
            inputRangeStartProps={inputRangeStartProps}
            inputRangeEndProps={inputRangeEndProps}
            locale={LOCALE}
          />
          <DateRangeInputField
            id="daterangeinputfield--selected"
            legend="Selected example"
            isReversed={isReversed}
            inputRangeStartProps={{
              ...inputRangeStartProps,
              value: "8 Jun 2022",
            }}
            inputRangeEndProps={{
              ...inputRangeEndProps,
              value: "25 Nov 2022",
            }}
            locale={LOCALE}
          />
          <DateRangeInputField
            id="daterangeinputfield--description"
            legend="Description example"
            isReversed={isReversed}
            inputRangeStartProps={inputRangeStartProps}
            inputRangeEndProps={inputRangeEndProps}
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
            locale={LOCALE}
          />
        </StoryWrapper.Row>
      </StoryWrapper>

      <StoryWrapper>
        <StoryWrapper.RowHeader headings={["Disabled", "Error"]} />
        <StoryWrapper.Row rowTitle="States">
          <DateRangeInputField
            id="daterangeinputfield--disabled"
            legend="Disabled example"
            isReversed={isReversed}
            inputRangeStartProps={inputRangeStartProps}
            inputRangeEndProps={inputRangeEndProps}
            locale={LOCALE}
            disabled
          />
          <DateRangeInputField
            id="daterangeinputfield--error"
            legend="Error example"
            isReversed={isReversed}
            inputRangeStartProps={inputRangeStartProps}
            inputRangeEndProps={inputRangeEndProps}
            locale={LOCALE}
            status="error"
            validationMessage="Error message"
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
