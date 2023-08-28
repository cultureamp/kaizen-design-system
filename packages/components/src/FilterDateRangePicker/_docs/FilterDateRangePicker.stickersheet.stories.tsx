import React, { useState } from "react"
import { StaticIntlProvider } from "@cultureamp/i18n-react-intl"
import { action } from "@storybook/addon-actions"
import { Meta } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import isChromatic from "chromatic"
import { DateRange } from "~types/DatePicker"
import {
  StickerSheet,
  StickerSheetStory,
} from "../../../../../storybook/components/StickerSheet"
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
} satisfies Meta

const applyStickerSheetStyles = async (
  canvasElement: HTMLElement
): Promise<void> => {
  const canvas = within(canvasElement)

  const validationInputEndDate = canvas.getByTestId(
    "test__filter-drp-field--validation--end"
  )
  await userEvent.click(validationInputEndDate)
  await userEvent.type(validationInputEndDate, "potato")
  await userEvent.click(document.body)

  if (IS_CHROMATIC) {
    const partialRangeButton = canvas.getByTestId(
      "stickersheet--filter-drp--partial-range-button"
    )
    await userEvent.click(partialRangeButton)
  }
}

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
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
      <StaticIntlProvider locale="en">
        <StickerSheet
          heading="Filter Date Range Picker"
          style={{ paddingBottom: IS_CHROMATIC ? "33rem" : undefined }}
        >
          <StickerSheet.Header headings={["Partial range", "Complete range"]} />
          <StickerSheet.Body>
            <StickerSheet.Row>
              <FilterDateRangePicker
                isOpen={isOpenPartial}
                setIsOpen={setIsOpenPartial}
                renderTrigger={(triggerButtonProps): JSX.Element => (
                  <FilterButton
                    {...triggerButtonProps}
                    data-testid="stickersheet--filter-drp--partial-range-button"
                  />
                )}
                label="Dates"
                locale="en-US"
                selectedRange={rangePartial}
                onRangeChange={setRangePartial}
              />
              <FilterDateRangePicker
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
                id="stickersheet--filter-drp-field--default"
                label="Dates"
                locale="en-US"
                defaultMonth={new Date("2022-05-01")}
                selectedRange={rangeFieldDefault}
                onRangeChange={setRangeFieldDefault}
              />
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Existing value">
              <FilterDateRangePickerField
                id="stickersheet--filter-drp-field--existing"
                label="Dates"
                locale="en-US"
                selectedRange={rangeFieldExisting}
                onRangeChange={setRangeFieldExisting}
              />
            </StickerSheet.Row>
            <StickerSheet.Row rowTitle="Validation">
              <FilterDateRangePickerField
                id="stickersheet--filter-drp-field--validation"
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
                  "data-testid": "test__filter-drp-field--validation--end",
                }}
              />
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>

        <StickerSheet heading="Translated">
          <StickerSheet.Body>
            <StickerSheet.Row rowTitle="Japanese">
              <StaticIntlProvider locale="ja">
                <FilterDateRangePickerField
                  id="stickersheet--filter-drp-field--translated"
                  label="Dates"
                  locale="en-US"
                  selectedRange={rangeFieldValidation}
                  onRangeChange={setRangeFieldValidation}
                  onValidate={{
                    dateStart: action(
                      "Validation story: date start onValidate"
                    ),
                  }}
                />
              </StaticIntlProvider>
            </StickerSheet.Row>
          </StickerSheet.Body>
        </StickerSheet>
      </StaticIntlProvider>
    )
  },
  play: ({ canvasElement }) => applyStickerSheetStyles(canvasElement),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (Default)",
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: "Sticker Sheet (RTL)",
  parameters: { textDirection: "rtl" },
}
