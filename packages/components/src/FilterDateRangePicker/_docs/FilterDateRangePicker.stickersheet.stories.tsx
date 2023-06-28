import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { Meta, StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import isChromatic from "chromatic"
import { DateRange } from "~types/DatePicker"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import { FilterDateRangePicker } from "../index"
import { FilterDateRangePickerField } from "../subcomponents/FilterDateRangePickerField"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Date Range Picker",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof FilterDateRangePicker>

const StickerSheetTemplate: StoryFn<{ textDirection: "ltr" | "rtl" }> = ({
  textDirection,
}) => {
  const [isOpenPartial, setIsOpenPartial] = useState<boolean>(false)
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
                <FilterButton
                  {...triggerButtonProps}
                  data-testid={`${textDirection}-stickersheet--filter-drp--partial-range-button`}
                />
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
              defaultMonth={new Date("2022-05-01")}
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

const applyStickerSheetStyles = async (
  canvasElement: HTMLElement,
  textDirection: "ltr" | "rtl"
): Promise<void> => {
  const canvas = within(canvasElement)

  // We don't need these to run outside of Chromatic
  // if (!IS_CHROMATIC) return

  const validationInputEndDate = canvas.getByTestId(
    `${textDirection}-test__filter-drp-field--validation--end`
  )
  await userEvent.click(validationInputEndDate)
  await userEvent.type(validationInputEndDate, "potato")
  await userEvent.click(document.body)

  const partialRangeButton = canvas.getByTestId(
    `${textDirection}-stickersheet--filter-drp--partial-range-button`
  )
  await userEvent.click(partialRangeButton)
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.args = {
  textDirection: "ltr",
}
StickerSheetDefault.play = ({ canvasElement }) => {
  applyStickerSheetStyles(canvasElement, "ltr")
}

export const StickerSheetRTL = StickerSheetTemplate.bind({})
StickerSheetRTL.storyName = "Sticker Sheet (RTL)"
StickerSheetRTL.args = {
  textDirection: "rtl",
}
StickerSheetRTL.play = ({ canvasElement }) => {
  applyStickerSheetStyles(canvasElement, "rtl")
}
