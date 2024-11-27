import React, { useState } from "react"
import { StaticIntlProvider } from "@cultureamp/i18n-react-intl"
import { action } from "@storybook/addon-actions"
import { Meta } from "@storybook/react"
import { within, userEvent } from "@storybook/test"
import isChromatic from "chromatic"
import { DateRange } from "~components/Calendar"
import {
  StickerSheet,
  StickerSheetStory,
} from "~storybook/components/StickerSheet"
import { FilterButton } from "../../FilterButton"
import { FilterDateRangePicker, FilterDateRangePickerProps } from "../index"
import { FilterDateRangePickerField } from "../subcomponents/FilterDateRangePickerField"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Date Range Picker",
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      // Translated strings start as an empty string which fails a11y.
      // Allow the strings to populate before running axe.
      timeout: 3000,
    },
  },
} satisfies Meta

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
      <div>
        <StickerSheet
          title="Filter Date Range Picker"
          style={{ paddingBottom: IS_CHROMATIC ? "33rem" : undefined }}
          headers={["Partial range", "Complete range"]}
        >
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
        </StickerSheet>

        <StickerSheet title="Filter Date Range Picker Field">
          <StickerSheet.Row header="Default">
            <FilterDateRangePickerField
              id="stickersheet--filter-drp-field--default"
              label="Dates"
              locale="en-US"
              defaultMonth={new Date("2022-05-01")}
              selectedRange={rangeFieldDefault}
              onRangeChange={setRangeFieldDefault}
            />
          </StickerSheet.Row>
          <StickerSheet.Row header="Existing value">
            <FilterDateRangePickerField
              id="stickersheet--filter-drp-field--existing"
              label="Dates"
              locale="en-US"
              selectedRange={rangeFieldExisting}
              onRangeChange={setRangeFieldExisting}
            />
          </StickerSheet.Row>
          <StickerSheet.Row header="Validation">
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
            <FilterDateRangePickerField
              id="stickersheet--filter-drp-field--validation-merged"
              label="Dates"
              locale="en-US"
              selectedRange={rangeFieldValidation}
              onRangeChange={setRangeFieldValidation}
              onValidate={{
                dateStart: action("Validation story: date start onValidate"),
                dateEnd: action("Validation story: date end onValidate"),
              }}
              validationMessage={{
                dateStart: {
                  status: "error",
                  message:
                    "(Start date custom message) Jelly-filled doughnuts are my favourite!",
                },
                dateEnd: {
                  status: "caution",
                  message:
                    "(End date custom message) Jelly-filled doughnuts are dangerous!",
                },
              }}
              inputEndDateProps={{
                "data-testid": "test__filter-drp-field--validation-merged--end",
              }}
            />
          </StickerSheet.Row>
        </StickerSheet>
      </div>
    )
  },
  play: async ({ canvasElement }): Promise<void> => {
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
  },
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

export const StickerSheetLocales: StickerSheetStory = {
  name: "Sticker Sheet (Locales)",
  render: () => {
    const props = {
      isOpen: false,
      setIsOpen: () => undefined,
      renderTrigger: (triggerButtonProps): JSX.Element => (
        <FilterButton {...triggerButtonProps} />
      ),
      label: "Dates",
      selectedRange: {
        from: new Date("2022-05-15"),
        to: new Date("2022-06-22"),
      },
      onRangeChange: () => undefined,
      locale: "en-AU",
    } satisfies FilterDateRangePickerProps

    return (
      <>
        <StickerSheet title="Localisation" headers={["en-AU", "en-US"]}>
          <StickerSheet.Row>
            <FilterDateRangePicker {...props} locale="en-AU" />
            <FilterDateRangePicker {...props} locale="en-US" />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet headers={["fr-CA"]} className="mt-32 pb-[520px]">
          <StickerSheet.Row>
            <StaticIntlProvider locale="fr-CA">
              <FilterDateRangePicker {...props} locale="fr-CA" isOpen />
            </StaticIntlProvider>
          </StickerSheet.Row>
        </StickerSheet>
      </>
    )
  },
}
