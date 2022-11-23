import React, { useState } from "react"
import { ComponentStory, Story } from "@storybook/react"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { FilterDateRangePicker } from "../src/FilterDateRangePicker"
import { DateRange } from "../src/types"
import { defaultMonthControls } from "./controls/defaultMonthControls"
import { disabledDayMatchersControls } from "./controls/disabledDayMatchersControls"
import { dateRangePickerLocaleControls } from "./controls/localeControls"

export default {
  title: `${CATEGORIES.components}/${SUB_CATEGORIES.datePicker}/Filter Date Range Picker`,
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
    description: {
      control: "text",
    },
  },
}

export const DefaultStory: ComponentStory<
  typeof FilterDateRangePicker
> = props => {
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <FilterDateRangePicker
      {...props}
      selectedRange={range}
      onRangeChange={setRange}
    />
  )
}
DefaultStory.storyName = "Filter Date Range Picker"
DefaultStory.parameters = {
  docs: { source: { type: "code" } },
}
DefaultStory.args = {
  id: "filter-drp--default",
}

const StickerSheetTemplate: Story<{ isReversed: boolean }> = ({
  isReversed,
}) => {
  const [rangeDefault, setRangeDefault] = useState<DateRange | undefined>()
  const [rangeExisting, setRangeExisting] = useState<DateRange | undefined>({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })

  return (
    <StoryWrapper isReversed={isReversed}>
      <StoryWrapper.Row rowTitle="Default">
        <FilterDateRangePicker
          id="stickersheet--filter-drp--default"
          label="Dates"
          locale="en-AU"
          selectedRange={rangeDefault}
          onRangeChange={setRangeDefault}
        />
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="Existing value">
        <FilterDateRangePicker
          id="stickersheet--filter-drp--existing"
          label="Dates"
          locale="en-AU"
          selectedRange={rangeExisting}
          onRangeChange={setRangeExisting}
        />
      </StoryWrapper.Row>
    </StoryWrapper>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
