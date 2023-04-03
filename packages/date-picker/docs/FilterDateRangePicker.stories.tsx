import React, { useState } from "react"
import { action } from "@storybook/addon-actions"
import { StoryFn } from "@storybook/react"
import { within, userEvent } from "@storybook/testing-library"
import isChromatic from "chromatic"
import { StickerSheet } from "../../../storybook/components/StickerSheet"
import {
  DateRangeValidationStatus,
  FilterDateRangePicker,
  FilterDateRangePickerProps,
} from "../src/FilterDateRangePicker"
import { DateRange } from "../src/types"
import { defaultMonthControls } from "./controls/defaultMonthControls"
import { disabledDayMatchersControls } from "./controls/disabledDayMatchersControls"
import { dateRangePickerLocaleControls } from "./controls/localeControls"
import { validationControls } from "./controls/validationControls"

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

export const DefaultStory = (
  props: FilterDateRangePickerProps & {
    validation?: DateRangeValidationStatus
  }
): JSX.Element => {
  const { validation, status: _s, validationMessage: _v, ...restProps } = props
  const [range, setRange] = useState<DateRange | undefined>()
  const mergedProps = { ...restProps, ...validation }

  return (
    <FilterDateRangePicker
      // Switching the trigger using the controls doesn't cause
      // a full re-render which disassociates the floating wrapper
      // as it uses ref.
      // Add key to force re-render when onRemoveFiler is changed.
      key={restProps.onRemoveFilter ? "defined" : "undefined"}
      {...mergedProps}
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
  onRemoveFilter: undefined,
}

const StickerSheetTemplate: StoryFn = () => {
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

        <StickerSheet.Row rowTitle="Removable">
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

        <StickerSheet.Row rowTitle="Open">
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
  )
}

const applyStickerSheetStyles = (canvasElement: HTMLElement): void => {
  const canvas = within(canvasElement)
  const filterButtonOpen = canvas
    .getByTestId("test__stickersheet--filter-drp--open")
    .getElementsByTagName("button")[0]
  userEvent.click(filterButtonOpen)
}

export const StickerSheetDefault = StickerSheetTemplate.bind({})
StickerSheetDefault.storyName = "Sticker Sheet (Default)"
StickerSheetDefault.parameters = {
  chromatic: { disable: false },
  controls: { disable: true },
}
StickerSheetDefault.play = ({ canvasElement }): void => {
  applyStickerSheetStyles(canvasElement)
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
  applyStickerSheetStyles(canvasElement)
}
