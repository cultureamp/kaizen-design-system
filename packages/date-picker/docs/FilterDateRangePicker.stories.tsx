import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { ComponentStory, Story } from "@storybook/react"
import { StoryWrapper } from "../../../storybook/components/StoryWrapper"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
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
    ...figmaEmbed(
      "https://www.figma.com/file/eZKEE5kXbEMY3lx84oz8iN/%E2%9D%A4%EF%B8%8F-UI-Kit%3A-Heart?node-id=45526%3A98760&t=67y0ZhpSLd5K7Rpn-4"
    ),
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
    onRemoveFilter: {
      options: [undefined, "Actions"],
      control: {
        type: "radio",
        labels: {
          Actions: "Remove filter Actions",
        },
      },
      mapping: {
        Actions: action("onRemoveFilter"),
      },
    },
  },
}

export const DefaultStory: ComponentStory<
  typeof FilterDateRangePicker
> = props => {
  const [range, setRange] = useState<DateRange | undefined>()

  return (
    <FilterDateRangePicker
      // Switching the trigger using the controls doesn't cause
      // a full re-render which disassociates the floating wrapper
      // as it uses ref.
      // Add key to force re-render when onRemoveFiler is changed.
      key={props.onRemoveFilter ? "defined" : "undefined"}
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
  onRemoveFilter: undefined,
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
      <StoryWrapper.RowHeader headings={["Base", "With existing value"]} />
      <StoryWrapper.Row rowTitle="Default">
        <div>
          <FilterDateRangePicker
            id="stickersheet--filter-drp--default--base"
            label="Dates"
            locale="en-AU"
            selectedRange={rangeDefault}
            onRangeChange={setRangeDefault}
          />
        </div>
        <div>
          <FilterDateRangePicker
            id="stickersheet--filter-drp--default--existing"
            label="Dates"
            locale="en-AU"
            selectedRange={rangeExisting}
            onRangeChange={setRangeExisting}
          />
        </div>
      </StoryWrapper.Row>

      <StoryWrapper.Row rowTitle="Removable">
        <div>
          <FilterDateRangePicker
            id="stickersheet--filter-drp--removable--base"
            label="Dates"
            locale="en-AU"
            selectedRange={rangeDefault}
            onRangeChange={setRangeDefault}
            onRemoveFilter={() => undefined}
          />
        </div>
        <div>
          <FilterDateRangePicker
            id="stickersheet--filter-drp--removable--existing"
            label="Dates"
            locale="en-AU"
            selectedRange={rangeExisting}
            onRangeChange={setRangeExisting}
            onRemoveFilter={() => undefined}
          />
        </div>
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
