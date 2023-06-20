import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import isChromatic from "chromatic"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import { FilterDatePicker } from "../index"
import { FilterDatePickerField } from "../subcomponents/FilterDatePickerField"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Date Picker",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof FilterDatePicker>

const StickerSheetTemplate: StoryFn<{ textDirection: "ltr" | "rtl" }> = ({
  textDirection,
}) => {
  const [isOpenNoValue, setIsOpenNoValue] = useState<boolean>(IS_CHROMATIC)
  const [isOpenValue, setIsOpenValue] = useState<boolean>(false)

  const [noDateValue, setNoDateValue] = useState<Date | undefined>()
  const [dateValueValidation, setDateValueValidation] = useState<
    Date | undefined
  >(new Date("potato"))

  const [dateValue, setDateValue] = useState<Date | undefined>(
    new Date("2022-05-15")
  )

  return (
    <>
      <StickerSheet
        heading="Filter Date Picker"
        style={{ paddingBottom: IS_CHROMATIC ? "33rem" : undefined }}
      >
        <StickerSheet.Header headings={["No value display", "Value display"]} />
        <StickerSheet.Body>
          <StickerSheet.Row>
            <FilterDatePicker
              id={`${textDirection}-stickersheet--filter-dp--no-value-display`}
              isOpen={isOpenNoValue}
              setIsOpen={setIsOpenNoValue}
              renderTrigger={(triggerButtonProps): JSX.Element => (
                <FilterButton {...triggerButtonProps} />
              )}
              label="Start day"
              locale="en-AU"
              defaultMonth={new Date("2022-05-01")}
              selectedDate={noDateValue}
              onDateChange={setNoDateValue}
            />
            <FilterDatePicker
              id={`${textDirection}-stickersheet--filter-dp-value-display`}
              isOpen={isOpenValue}
              setIsOpen={setIsOpenValue}
              renderTrigger={(triggerButtonProps): JSX.Element => (
                <FilterButton {...triggerButtonProps} />
              )}
              label="Start day"
              locale="en-AU"
              selectedDate={dateValue}
              onDateChange={setDateValue}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Filter Date Picker Field">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Default">
            <FilterDatePickerField
              id={`${textDirection}-stickersheet--filter-dp-field--default`}
              inputProps={{ labelText: "Date" }}
              locale="en-AU"
              defaultMonth={new Date("2022-05-01")}
              selectedDate={noDateValue}
              onDateChange={setNoDateValue}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Existing value">
            <FilterDatePickerField
              id={`${textDirection}-stickersheet--filter-dp-field--existing`}
              inputProps={{ labelText: "Date" }}
              locale="en-AU"
              selectedDate={dateValue}
              onDateChange={setDateValue}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Validation">
            <FilterDatePickerField
              id={`${textDirection}-stickersheet--filter-dp-field--validation`}
              inputProps={{ labelText: "Date" }}
              locale="en-AU"
              selectedDate={dateValueValidation}
              defaultMonth={new Date("01-01-2022")}
              onDateChange={setDateValueValidation}
              onValidate={action("Validation story: date start onValidate")}
              validationMessage={{
                status: "error",
                message:
                  "(Start date custom message) Jelly-filled doughnuts are my favourite!",
              }}
              data-testid={`${textDirection}-test__filter-dp-field--validation`}
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
    `${textDirection}-test__filter-dp-field--validation`
  )
  userEvent.click(inputEndDate)
  userEvent.type(inputEndDate, "potato")
  userEvent.click(document.body)
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.args = {
  textDirection: "ltr",
}
StickerSheetDefault.play = ({ canvasElement }): void => {
  applyStickerSheetStyles(canvasElement, "ltr")
}

export const StickerSheetRTL = StickerSheetTemplate.bind({})
StickerSheetRTL.storyName = "Sticker Sheet (RTL)"
StickerSheetRTL.args = {
  textDirection: "rtl",
}
StickerSheetRTL.play = ({ canvasElement }): void => {
  applyStickerSheetStyles(canvasElement, "rtl")
}
