import React, { useState } from "react"
import { Story } from "@storybook/react"
import isChromatic from "chromatic"
import { defaultMonthControls } from "@kaizen/date-picker/docs/controls/defaultMonthControls"
import { disabledDayMatchersControls } from "@kaizen/date-picker/docs/controls/disabledDayMatchersControls"
import { dateRangePickerLocaleControls } from "@kaizen/date-picker/docs/controls/localeControls"
import { validationControls } from "@kaizen/date-picker/docs/controls/validationControls"
import { DateRange } from "@kaizen/date-picker/src/types"
import { StickerSheet } from "../../../../../storybook/components/StickerSheet"
import { FilterButton, FilterButtonRemovable } from "../../FilterButton"
import {
  DateRangeValidationStatus,
  FilterDateRangePicker,
  FilterDateRangePickerProps,
} from "../index"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Date Range Picker",
  component: FilterDateRangePicker,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component:
          'import { FilterDateRangePicker } from "@kaizen/date-picker"',
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
    ...disabledDayMatchersControls,
    ...validationControls,
    description: {
      control: "text",
    },
  },
}

export const DefaultStory = (
  props: FilterDateRangePickerProps & {
    validation?: DateRangeValidationStatus
  }
): JSX.Element => {
  const { validation, status, validationMessage, ...restProps } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()
  const mergedProps = { ...restProps, ...validation }

  return (
    <FilterDateRangePicker
      {...mergedProps}
      // Create custom control?
      renderTrigger={(triggerButtonProps): JSX.Element => (
        <FilterButton {...triggerButtonProps} />
      )}
      isOpen={props.isOpen ?? isOpen}
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
}

const StickerSheetTemplate: Story = () => {
  const [isOpenDefaultBase, setIsOpenDefaultBase] = useState<boolean>(false)
  const [rangeDefaultBase, setRangeDefaultBase] = useState<
    DateRange | undefined
  >()

  const [isOpenDefaultExisting, setIsOpenDefaultExisting] =
    useState<boolean>(false)
  const [rangeDefaultExisting, setRangeDefaultExisting] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })

  const [isOpenRemovableBase, setIsOpenRemovableBase] = useState<boolean>(false)
  const [rangeRemovableBase, setRangeRemovableBase] = useState<
    DateRange | undefined
  >()

  const [isOpenRemovableExisting, setIsOpenRemovableExisting] =
    useState<boolean>(false)
  const [rangeRemovableExisting, setRangeRemovableExisting] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })

  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [rangeOpen, setRangeOpen] = useState<DateRange | undefined>({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })

  return (
    <StickerSheet style={{ paddingBottom: IS_CHROMATIC ? "33rem" : undefined }}>
      <StickerSheet.Header
        headings={["Base", "With existing value"]}
        hasVerticalHeadings
        verticalHeadingsWidth={70}
      />
      <StickerSheet.Body>
        <StickerSheet.Row rowTitle="Default">
          <FilterDateRangePicker
            id="stickersheet--filter-drp--default--base"
            isOpen={isOpenDefaultBase}
            setIsOpen={setIsOpenDefaultBase}
            renderTrigger={(triggerButtonProps): JSX.Element => (
              <FilterButton {...triggerButtonProps} />
            )}
            label="Dates"
            locale="en-US"
            selectedRange={rangeDefaultBase}
            onRangeChange={setRangeDefaultBase}
          />
          <FilterDateRangePicker
            id="stickersheet--filter-drp--default--existing"
            isOpen={isOpenDefaultExisting}
            setIsOpen={setIsOpenDefaultExisting}
            renderTrigger={(triggerButtonProps): JSX.Element => (
              <FilterButton {...triggerButtonProps} />
            )}
            label="Dates"
            locale="en-US"
            selectedRange={rangeDefaultExisting}
            onRangeChange={setRangeDefaultExisting}
          />
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Removable">
          <FilterDateRangePicker
            id="stickersheet--filter-drp--removable--base"
            isOpen={isOpenRemovableBase}
            setIsOpen={setIsOpenRemovableBase}
            renderTrigger={(triggerButtonProps): JSX.Element => (
              <FilterButtonRemovable
                triggerButtonProps={{ ...triggerButtonProps }}
                removeButtonProps={{ onClick: () => undefined }}
              />
            )}
            label="Dates"
            locale="en-US"
            selectedRange={rangeRemovableBase}
            onRangeChange={setRangeRemovableBase}
          />
          <FilterDateRangePicker
            id="stickersheet--filter-drp--removable--existing"
            isOpen={isOpenRemovableExisting}
            setIsOpen={setIsOpenRemovableExisting}
            renderTrigger={(triggerButtonProps): JSX.Element => (
              <FilterButtonRemovable
                triggerButtonProps={{ ...triggerButtonProps }}
                removeButtonProps={{ onClick: () => undefined }}
              />
            )}
            label="Dates"
            locale="en-US"
            selectedRange={rangeRemovableExisting}
            onRangeChange={setRangeRemovableExisting}
          />
        </StickerSheet.Row>

        <StickerSheet.Row rowTitle="Open">
          <FilterDateRangePicker
            id="stickersheet--filter-drp--open"
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            renderTrigger={(triggerButtonProps): JSX.Element => (
              <FilterButton {...triggerButtonProps} />
            )}
            label="Open"
            locale="en-US"
            selectedRange={rangeOpen}
            onRangeChange={setRangeOpen}
            description="This is a custom description"
          />
        </StickerSheet.Row>
      </StickerSheet.Body>
    </StickerSheet>
  )
}

// const applyStickerSheetStyles = (canvasElement: HTMLElement): void => {
//   const canvas = within(canvasElement)
//   const filterButtonOpen = canvas
//     .getByTestId("test__stickersheet--filter-drp--open")
//     .getElementsByTagName("button")[0]
//   userEvent.click(filterButtonOpen)
// }

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
// StickerSheetDefault.play = ({ canvasElement }): void => {
//   applyStickerSheetStyles(canvasElement)
// }

export const StickerSheetRTL = StickerSheetTemplate.bind({})
StickerSheetRTL.storyName = "Sticker Sheet (RTL)"
StickerSheetRTL.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
StickerSheetRTL.args = {
  textDirection: "rtl",
}
// StickerSheetRTL.play = ({ canvasElement }): void => {
//   applyStickerSheetStyles(canvasElement)
// }
