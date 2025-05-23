import React, { useEffect, useState } from 'react'
import { type Meta } from '@storybook/react'
import { enAU } from 'date-fns/locale'
import { type DateRange } from 'react-day-picker'
import {
  LegacyCalendarRange,
  type LegacyCalendarRangeProps,
} from '~components/Calendar/LegacyCalendarRange'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { DateRangePicker, formatDateRangeValue, type DateRangePickerProps } from '../index'

export default {
  title: 'Components/Datepickers/DateRangePicker',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const DateRangePickerTemplate = (props: Partial<DateRangePickerProps>): JSX.Element => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    from: undefined,
    to: undefined,
  })
  const [value, setValue] = useState('')

  const onDateRangeChange = (dateRange: DateRange): void => {
    setSelectedDateRange(dateRange)
  }

  // TODO: Make formating built in
  useEffect(() => {
    setValue(formatDateRangeValue(selectedDateRange))
  }, [selectedDateRange])

  return (
    <DateRangePicker
      labelText="Label"
      onChange={onDateRangeChange}
      value={value}
      selectedDateRange={selectedDateRange}
      {...props}
    />
  )
}

const LegacyCalendarRangeTemplate = (props: Partial<LegacyCalendarRangeProps>): JSX.Element => {
  const selectedDateRange = {
    from: undefined,
    to: undefined,
  }

  return (
    <LegacyCalendarRange
      onDayChange={(): void => undefined}
      weekStartsOn={0}
      defaultMonth={new Date(2022, 2)}
      selectedRange={selectedDateRange}
      locale={enAU}
      {...props}
    />
  )
}

const selectedDateRange = {
  from: new Date(2022, 2, 6),
  to: new Date(2022, 2, 16),
}

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet headers={['Default', 'Selected Value', 'Disabled']}>
        <StickerSheet.Row header="Date Range Picker Input">
          <StickerSheet.Cell className="w-[250px]">
            <DateRangePickerTemplate />
          </StickerSheet.Cell>
          <StickerSheet.Cell className="w-[250px]">
            <DateRangePickerTemplate
              selectedDateRange={selectedDateRange}
              value="Mar 6 – Mar 2, 2022"
            />
          </StickerSheet.Cell>
          <StickerSheet.Cell className="w-[250px]">
            <DateRangePickerTemplate isDisabled />
          </StickerSheet.Cell>
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet headers={['Selected Range Dates', 'Disabled Dates']} className="mt-32">
        <StickerSheet.Row header="Date Range Calendar (Legacy)">
          <LegacyCalendarRangeTemplate selectedRange={selectedDateRange} />
          <LegacyCalendarRangeTemplate
            disabledDays={[new Date(2022, 1, 15), { after: new Date(2022, 1, 17) }]}
          />
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: { textDirection: 'rtl' },
}
