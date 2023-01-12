import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { ComponentStory, Story } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import isChromatic from "chromatic"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import { CATEGORIES, SUB_CATEGORIES } from "../../../storybook/constants"
import { figmaEmbed } from "../../../storybook/helpers"
import { FilterDateRangePicker } from "../src/FilterDateRangePicker"
import { DateRange } from "../src/types"
import { defaultMonthControls } from "./controls/defaultMonthControls"
import { disabledDayMatchersControls } from "./controls/disabledDayMatchersControls"
import { dateRangePickerLocaleControls } from "./controls/localeControls"

const IS_CHROMATIC = isChromatic()

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

const StickerSheetTemplate: Story = () => {
  const [rangeDefaultBase, setRangeDefaultBase] = useState<
    DateRange | undefined
  >()
  const [rangeDefaultExisting, setRangeDefaultExisting] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })
  const [rangeRemovableBase, setRangeRemovableBase] = useState<
    DateRange | undefined
  >()
  const [rangeRemovableExisting, setRangeRemovableExisting] = useState<
    DateRange | undefined
  >({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })
  const [rangeOpen, setRangeOpen] = useState<DateRange | undefined>({
    from: new Date("2022-05-15"),
    to: new Date("2022-06-22"),
  })

  return (
    <>
      <StickerSheet heading="Default">
        <StickerSheet.Header
          headings={["Base", "With existing value"]}
          hasVerticalHeadings
          verticalHeadingsWidth={70}
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="LTR">
            <FilterDateRangePicker
              id="stickersheet--filter-drp--default--base"
              label="Dates"
              locale="en-US"
              selectedRange={rangeDefaultBase}
              onRangeChange={setRangeDefaultBase}
            />
            <FilterDateRangePicker
              id="stickersheet--filter-drp--default--existing"
              label="Dates"
              locale="en-US"
              selectedRange={rangeDefaultExisting}
              onRangeChange={setRangeDefaultExisting}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="RTL" dir="rtl">
            <FilterDateRangePicker
              id="stickersheet--filter-drp--default--base--rtl"
              label="Dates"
              locale="en-US"
              selectedRange={rangeDefaultBase}
              onRangeChange={setRangeDefaultBase}
            />
            <FilterDateRangePicker
              id="stickersheet--filter-drp--default--existing--rtl"
              label="Dates"
              locale="en-US"
              selectedRange={rangeDefaultExisting}
              onRangeChange={setRangeDefaultExisting}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet heading="Removable">
        <StickerSheet.Header
          headings={["Base", "With existing value"]}
          hasVerticalHeadings
          verticalHeadingsWidth={70}
        />
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="LTR">
            <FilterDateRangePicker
              id="stickersheet--filter-drp--removable--base"
              label="Dates"
              locale="en-US"
              selectedRange={rangeRemovableBase}
              onRangeChange={setRangeRemovableBase}
              onRemoveFilter={(): void => undefined}
            />
            <FilterDateRangePicker
              id="stickersheet--filter-drp--removable--existing"
              label="Dates"
              locale="en-US"
              selectedRange={rangeRemovableExisting}
              onRangeChange={setRangeRemovableExisting}
              onRemoveFilter={(): void => undefined}
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="RTL" dir="rtl">
            <FilterDateRangePicker
              id="stickersheet--filter-drp--removable--base--rtl"
              label="Dates"
              locale="en-US"
              selectedRange={rangeRemovableBase}
              onRangeChange={setRangeRemovableBase}
              onRemoveFilter={(): void => undefined}
            />
            <FilterDateRangePicker
              id="stickersheet--filter-drp--removable--existing--rtl"
              label="Dates"
              locale="en-US"
              selectedRange={rangeRemovableExisting}
              onRangeChange={setRangeRemovableExisting}
              onRemoveFilter={(): void => undefined}
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet
        heading="Open"
        style={{ paddingBottom: IS_CHROMATIC ? "32rem" : undefined }}
      >
        <StickerSheet.Body>
          <StickerSheet.Row>
            <FilterDateRangePicker
              data-testid="test__stickersheet--filter-drp--open"
              id="stickersheet--filter-drp--open"
              label="Open"
              locale="en-US"
              selectedRange={rangeOpen}
              onRangeChange={setRangeOpen}
              description="This is a custom description"
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>
    </>
  )
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}

StickerSheetDefault.play = ({ canvasElement }): void => {
  const canvas = within(canvasElement)
  const filterButtonOpen = canvas
    .getByTestId("test__stickersheet--filter-drp--open")
    .getElementsByTagName("button")[0]
  userEvent.click(filterButtonOpen)
}
