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
  FilterDateRangePickerField,
  FilterDateRangePickerFieldProps,
} from "../components/FilterDateRangePickerField"
import {
  DateRangeValidationStatus,
  // FilterDateRangePickerField,
  // FilterDateRangePickerFieldProps,
} from "../index"

const IS_CHROMATIC = isChromatic()

export default {
  title: "Components/Filter Date Range Picker Field",
  component: FilterDateRangePickerField,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component:
          'import { FilterDateRangePickerField } from "@kaizen/date-picker"',
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
  props: FilterDateRangePickerFieldProps & {
    validation?: DateRangeValidationStatus
  }
): JSX.Element => {
  const { validation, status, validationMessage, ...restProps } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [range, setRange] = useState<DateRange | undefined>()
  const mergedProps = { ...restProps, ...validation }

  return (
    <FilterDateRangePickerField
      {...mergedProps}
      // Create custom control?
      // renderTrigger={(triggerButtonProps): JSX.Element => (
      //   <FilterButton {...triggerButtonProps} />
      // )}
      // isOpen={props.isOpen ?? isOpen}
      // setIsOpen={setIsOpen}
      selectedRange={range}
      onRangeChange={setRange}
    />
  )
}
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  id: "filter-drp-field--default",
}
