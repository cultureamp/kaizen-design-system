import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import isChromatic from "chromatic"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import { DateRange, FilterDateRangePicker } from "../index"
import { FilterDateRangePickerField } from "../subcomponents/FilterDateRangePickerField"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Date Range Picker",
} satisfies Meta<typeof FilterDateRangePicker>

const StickerSheetTemplate: StoryFn<{ textDirection: "ltr" | "rtl" }> = ({
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
