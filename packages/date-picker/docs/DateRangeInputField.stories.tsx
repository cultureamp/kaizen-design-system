import React from "react"
import { ComponentMeta, Story } from "@storybook/react"
import { enAU, enUS } from "date-fns/locale"
import { Paragraph } from "@kaizen/typography"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { SUB_COMPONENTS_FOLDER_NAME } from "../../../storybook/constants"
import {
  DateRangeInputField,
  DateRangeInputFieldProps,
} from "../src/FilterDateRangePicker/components/DateRangeInputField"
import { formatDateAsText } from "../src/utils/formatDateAsText"
import { validationControls } from "./controls/validationControls"

export default {
  title: `Components/Date Picker/Filter Date Range Picker/${SUB_COMPONENTS_FOLDER_NAME}/Date Range Input Field`,
  component: DateRangeInputField,
  parameters: {
    docs: {
      description: {
        component:
          "This is a subcomponent - use DatePicker or DateRangePicker.",
      },
    },
  },
  argTypes: {
    ...validationControls,
  },
} as ComponentMeta<typeof DateRangeInputField>

export const DefaultStory = (
  props: DateRangeInputFieldProps & {
    validation?: {
      status: DateRangeInputFieldProps["status"]
      validationMessage: DateRangeInputFieldProps["validationMessage"]
    }
  }
): JSX.Element => {
  const { validation, status, validationMessage, ...restProps } = props
  const mergedProps = { ...restProps, ...validation }

  return <DateRangeInputField {...mergedProps} />
}
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

const StickerSheetTemplate: Story<{
  textDirection: "ltr" | "rtl" // Global control; see storybook/preview.tsx
  isReversed: boolean
  locale: DateRangeInputFieldProps["locale"]
}> = ({ isReversed, locale }) => {
  const inputRangeStartProps: DateRangeInputFieldProps["inputRangeStartProps"] =
    { labelText: "Date from" }
  const inputRangeEndProps: DateRangeInputFieldProps["inputRangeEndProps"] = {
    labelText: "Date to",
  }

  return (
    <>
      <StickerSheet isReversed={isReversed} heading="Default">
        <StickerSheet.Header
          headings={["Base", "Selected value", "Custom description"]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row style={{ verticalAlign: "top" }}>
            <DateRangeInputField
              id="daterangeinputfield--default"
              legend="Default example"
              isReversed={isReversed}
              inputRangeStartProps={inputRangeStartProps}
              inputRangeEndProps={inputRangeEndProps}
              locale={locale}
            />
            <DateRangeInputField
              id="daterangeinputfield--selected"
              legend="Selected example"
              isReversed={isReversed}
              inputRangeStartProps={{
                ...inputRangeStartProps,
                value: formatDateAsText(
                  new Date("2022-06-08"),
                  undefined,
                  locale
                ),
              }}
              inputRangeEndProps={{
                ...inputRangeEndProps,
                value: formatDateAsText(
                  new Date("2022-12-17"),
                  undefined,
                  locale
                ),
              }}
              locale={locale}
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
              locale={locale}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="States">
        <StickerSheet.Header headings={["Disabled"]} />
        <StickerSheet.Body>
          <StickerSheet.Row style={{ verticalAlign: "top" }}>
            <DateRangeInputField
              id="daterangeinputfield--disabled"
              legend="Disabled example"
              isReversed={isReversed}
              inputRangeStartProps={inputRangeStartProps}
              inputRangeEndProps={inputRangeEndProps}
              locale={locale}
              disabled
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Validation">
        <StickerSheet.Header
          headings={[
            "Error - DateStart",
            "Error - DateEnd",
            "Error - Both",
            "Different Status",
          ]}
        />
        <StickerSheet.Body>
          <StickerSheet.Row style={{ verticalAlign: "top" }}>
            <DateRangeInputField
              id="daterangeinputfield--error-start"
              legend="Error example"
              isReversed={isReversed}
              inputRangeStartProps={inputRangeStartProps}
              inputRangeEndProps={inputRangeEndProps}
              locale={locale}
              status={{
                dateStart: "error",
              }}
              validationMessage={{
                dateStart:
                  '"Date from" cannot be after the "Date to" selection.',
              }}
            />
            <DateRangeInputField
              id="daterangeinputfield--error-end"
              legend="Error example"
              isReversed={isReversed}
              inputRangeStartProps={inputRangeStartProps}
              inputRangeEndProps={inputRangeEndProps}
              locale={locale}
              status={{
                dateEnd: "error",
              }}
              validationMessage={{
                dateEnd:
                  '"Date to" cannot be earlier than the "Date from" selection.',
              }}
            />
            <DateRangeInputField
              id="daterangeinputfield--error-both"
              legend="Error example"
              isReversed={isReversed}
              inputRangeStartProps={inputRangeStartProps}
              inputRangeEndProps={inputRangeEndProps}
              locale={locale}
              status={{
                dateEnd: "error",
                dateStart: "error",
              }}
              validationMessage={{
                dateStart: '"Date from" is not a valid date selection.',
                dateEnd:
                  '"Date to" cannot be earlier than the "Date from" selection.',
              }}
            />
            <DateRangeInputField
              id="daterangeinputfield--error-different"
              legend="Error example"
              isReversed={isReversed}
              inputRangeStartProps={inputRangeStartProps}
              inputRangeEndProps={inputRangeEndProps}
              locale={locale}
              status={{
                dateEnd: "error",
                dateStart: "caution",
              }}
              validationMessage={{
                dateStart: '"Date from" is close to the submission date.',
                dateEnd:
                  '"Date to" cannot be earlier than the "Date from" selection.',
              }}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
StickerSheetDefault.args = {
  locale: enUS,
}

export const StickerSheetRTL = StickerSheetTemplate.bind({})
StickerSheetRTL.storyName = "Sticker Sheet (RTL)"
StickerSheetRTL.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
StickerSheetRTL.args = {
  textDirection: "rtl",
  locale: enUS,
}
