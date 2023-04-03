import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { ComponentStory, Story } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import isChromatic from "chromatic"
import Highlight from "react-highlight"
import { Paragraph } from "@kaizen/typography"
import { renderTriggerControls } from "~components/Filter/_docs/controls/renderTriggerControls"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import {
  DateRange,
  DateRangeFieldValidationMessage,
  DateValidationResponse,
  FilterDateRangePicker,
} from "../index"
import { FilterDateRangePickerField } from "../subcomponents/FilterDateRangePickerField"
import { defaultMonthControls } from "./controls/defaultMonthControls"
import { disabledDaysControls } from "./controls/disabledDaysControls"
import { dateRangePickerLocaleControls } from "./controls/localeControls"
import { validationControls } from "./controls/validationControls"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Date Range Picker",
  component: FilterDateRangePicker,
  parameters: {
    docs: {
      description: {
        component: 'import { FilterDateRangePicker } from "@kaizen/components"',
      },
    },
  },
  args: {
    label: "Dates",
    locale: "en-AU",
  },
  argTypes: {
    ...dateRangePickerLocaleControls,
    ...defaultMonthControls,
    ...validationControls,
    disabledDays: disabledDaysControls,
    renderTrigger: renderTriggerControls,
    inputStartDateProps: {
      table: { type: { summary: 'Omit<DateInputProps, "id">' } },
    },
    inputEndDateProps: {
      table: { type: { summary: 'Omit<DateInputProps, "id">' } },
    },
    isOpen: { control: "disabled" },
    description: {
      control: "text",
    },
  },
}

export const DefaultStory: ComponentStory<
  typeof FilterDateRangePicker
> = args => {
  const [isOpen, setIsOpen] = useState<boolean>(args.isOpen)
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <FilterDateRangePicker
      {...args}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      selectedRange={range}
      onRangeChange={setRange}
    />
  )
}
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  id: "filter-drp--default",
  /* @ts-expect-error: Storybook controls key; see argTypes in default export */
  renderTrigger: "Filter Button",
}

export const ValidationStory: Story = () => {
  const [range, setRange] = useState<DateRange | undefined>()
  const [response, setResponse] = useState<DateValidationResponse | undefined>()
  const [validationMessage, setValidationMessage] = useState<
    DateRangeFieldValidationMessage | undefined
  >()

  const handleValidate = (
    validationResponse: DateValidationResponse,
    input: "dateStart" | "dateEnd"
  ): void => {
    setResponse(validationResponse)
    // An example of additional validation
    if (
      validationResponse.isValidDate &&
      validationResponse.date?.getFullYear() !== new Date().getFullYear()
    ) {
      setValidationMessage(currentValue => ({
        ...currentValue,
        [input]: {
          status: "caution",
          message: `(${input}) Date is not this year`,
        },
      }))
      return
    }

    setValidationMessage(currentValue => ({
      ...currentValue,
      [input]: validationResponse.validationMessage,
    }))
  }

  const handleDateStartValidate = (
    validationResponse: DateValidationResponse
  ): void => handleValidate(validationResponse, "dateStart")

  const handleDateEndValidate = (
    validationResponse: DateValidationResponse
  ): void => handleValidate(validationResponse, "dateEnd")

  const submitRequest: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()

    let errors: DateRangeFieldValidationMessage | undefined

    if (validationMessage?.dateStart) {
      errors = {
        dateStart: { status: "error", message: "Error for start date" },
      }
    }

    if (validationMessage?.dateEnd) {
      errors = {
        ...errors,
        dateEnd: { status: "error", message: "Error for end date" },
      }
    }

    if (errors) {
      setValidationMessage(errors)
      return alert("Error")
    }

    alert("Success")
  }

  return (
    <>
      <form onSubmit={submitRequest}>
        <FilterDateRangePickerField
          id="datepicker-default"
          label="Label"
          selectedRange={range}
          onRangeChange={setRange}
          onValidate={{
            dateStart: handleDateStartValidate,
            dateEnd: handleDateEndValidate,
          }}
          validationMessage={validationMessage}
          disabledDays={new Date()}
          locale="en-AU"
        />
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <button type="submit">Submit</button>
        </div>
      </form>

      <div>
        <Paragraph variant="body">
          NOTE: This story includes additional custom validation to provide some
          guidance when dealing with validation other than date isInvalid or
          isDisabled.
        </Paragraph>
        <ul>
          <li>
            There will be a caution when the selectedDay{" "}
            <strong>is valid</strong> but{" "}
            <strong>is not within this year</strong>.
          </li>
          <li>
            There will be an error when the{" "}
            <strong>submit button is clicked</strong> and there is a{" "}
            <strong>current error</strong>.
          </li>
        </ul>
        <Paragraph variant="body">
          The <code>onValidate</code> callback returns a{" "}
          <code>validationResponse</code> object which provides data such as a
          default validation message, and can be utilised for custom validation.
        </Paragraph>

        <Highlight className="json">
          {JSON.stringify(response, null, "\t")}
        </Highlight>

        <ul>
          <li>
            <code>isInvalid</code>: A date that cannot be parsed. e.g "potato".
          </li>
          <li>
            <code>isDisabled</code>: A date that have been set as disabled
            through the <code>disabledDates</code> prop.
          </li>
          <li>
            <code>isEmpty</code>: Input is empty.
          </li>
          <li>
            <code>isValidDate</code>: Date input that is not{" "}
            <code>invalid</code> nor <code>disabled</code> nor{" "}
            <code>empty</code>.
          </li>
        </ul>
      </div>
    </>
  )
}
ValidationStory.storyName = "Validation"
ValidationStory.parameters = {
  docs: { source: { type: "code" } },
  controls: { disable: true },
}

const StickerSheetTemplate: Story<{ textDirection: "ltr" | "rtl" }> = ({
  textDirection,
}) => {
  const [isOpenPartial, setIsOpenPartial] = useState<boolean>(IS_CHROMATIC)
  const [rangePartial, setRangePartial] = useState<DateRange | undefined>({
    from: new Date("2022-05-15"),
  })
  const [isOpenComplete, setIsOpenComplete] = useState<boolean>(false)
  const [rangeComplete, setRangeComplete] = useState<DateRange | undefined>({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })

  const [rangeFieldDefault, setRangeFieldDefault] = useState<
    DateRange | undefined
  >()
  const [rangeFieldExisting, setRangeFieldExisting] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })
  const [rangeFieldValidation, setRangeFieldValidation] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
  })

  return (
    <>
      <StickerSheet
        heading="Filter Date Range Picker"
        style={{ paddingBottom: IS_CHROMATIC ? "33rem" : undefined }}
      >
        <StickerSheet.Header headings={["Partial range", "Complete range"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <FilterDateRangePicker
              id={`${textDirection}-stickersheet--filter-drp--partial-range`}
              isOpen={isOpenPartial}
              setIsOpen={setIsOpenPartial}
              renderTrigger={(triggerButtonProps): JSX.Element => (
                <FilterButton {...triggerButtonProps} />
              )}
              label="Dates"
              locale="en-US"
              selectedRange={rangePartial}
              onRangeChange={setRangePartial}
            />
            <FilterDateRangePicker
              id={`${textDirection}-stickersheet--filter-drp--complete-range`}
              isOpen={isOpenComplete}
              setIsOpen={setIsOpenComplete}
              renderTrigger={(triggerButtonProps): JSX.Element => (
                <FilterButton {...triggerButtonProps} />
              )}
              label="Dates"
              locale="en-US"
              selectedRange={rangeComplete}
              onRangeChange={setRangeComplete}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Filter Date Range Picker Field">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <FilterDateRangePickerField
              id={`${textDirection}-stickersheet--filter-drp-field--default`}
              label="Dates"
              locale="en-US"
              defaultMonth={new Date("2023-05-01")}
              selectedRange={rangeFieldDefault}
              onRangeChange={setRangeFieldDefault}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Existing value">
            <FilterDateRangePickerField
              id={`${textDirection}-stickersheet--filter-drp-field--existing`}
              label="Dates"
              locale="en-US"
              selectedRange={rangeFieldExisting}
              onRangeChange={setRangeFieldExisting}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Validation">
            <FilterDateRangePickerField
              id={`${textDirection}-stickersheet--filter-drp-field--validation`}
              label="Dates"
              locale="en-US"
              selectedRange={rangeFieldValidation}
              onRangeChange={setRangeFieldValidation}
              onValidate={{
                dateStart: action("Validation story: date start onValidate"),
              }}
              validationMessage={{
                dateStart: {
                  status: "error",
                  message:
                    "(Start date custom message) Jelly-filled doughnuts are my favourite!",
                },
              }}
              inputEndDateProps={{
                "data-testid": `${textDirection}-test__filter-drp-field--validation--end`,
              }}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

const applyStickerSheetStyles = (
  canvasElement: HTMLElement,
  textDirection: "ltr" | "rtl"
): void => {
  const canvas = within(canvasElement)
  const inputEndDate = canvas.getByTestId(
    `${textDirection}-test__filter-drp-field--validation--end`
  )
  userEvent.click(inputEndDate)
  userEvent.type(inputEndDate, "potato")
  userEvent.click(document.body)
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
StickerSheetDefault.args = {
  textDirection: "ltr",
}
StickerSheetDefault.play = ({ canvasElement }): void => {
  applyStickerSheetStyles(canvasElement, "ltr")
}

export const StickerSheetRTL = StickerSheetTemplate.bind({})
StickerSheetRTL.storyName = "Sticker Sheet (RTL)"
StickerSheetRTL.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
StickerSheetRTL.args = {
  textDirection: "rtl",
}
StickerSheetRTL.play = ({ canvasElement }): void => {
  applyStickerSheetStyles(canvasElement, "rtl")
}
