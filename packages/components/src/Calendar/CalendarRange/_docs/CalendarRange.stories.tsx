import React, { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { defaultMonthControls } from '../../_docs/controls/defaultMonthControls'
import { weekStartsOnControls } from '../../_docs/controls/weekStartsOnControls'
import { type DateRange } from '../../types'
import { CalendarRange } from '../index'

const meta = {
  title: 'Components/Datepickers/Calendars (primitives)/CalendarRange (primitive)',
  component: CalendarRange,
  argTypes: {
    ...defaultMonthControls,
    ...weekStartsOnControls,
  },
} satisfies Meta<typeof CalendarRange>

export default meta

type Story = StoryObj<typeof meta>

const CalendarRangeTemplate: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<DateRange | undefined>(args.selected)
    return <CalendarRange {...args} selected={selected} onSelect={setSelected} />
  },
}

export const Playground: Story = {
  ...CalendarRangeTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
