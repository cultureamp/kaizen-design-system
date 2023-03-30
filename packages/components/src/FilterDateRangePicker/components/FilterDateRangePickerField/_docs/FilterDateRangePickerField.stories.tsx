import React, { useState } from "react"
import { ComponentStory } from "@storybook/react"
import { defaultMonthControls } from "@kaizen/date-picker/docs/controls/defaultMonthControls"
import { disabledDayMatchersControls } from "@kaizen/date-picker/docs/controls/disabledDayMatchersControls"
import { dateRangePickerLocaleControls } from "@kaizen/date-picker/docs/controls/localeControls"
import { DateRange } from "@kaizen/date-picker/src/types"
import { FilterDateRangePickerField } from ".."
import { validationControls } from "./validationControls"

export default {
  title: "Components/Filter Date Range Picker Field",
  component: FilterDateRangePickerField,
  parameters: {
    actions: {
      argTypesRegex: "^on.*",
    },
    docs: {
      description: {
        component: "Subcomponent for FilterDateRangePicker",
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

export const DefaultStory: ComponentStory<
  typeof FilterDateRangePickerField
> = args => {
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <FilterDateRangePickerField
      {...args}
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
