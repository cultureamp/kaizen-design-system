import React, { useState } from 'react'
// import { type Meta, type StoryObj } from "storybook"
import { defaultMonthControls } from '../../_docs/controls/defaultMonthControls'
import { weekStartsOnControls } from '../../_docs/controls/weekStartsOnControls'
import { CalendarSingle } from '../index'

const meta = {
  title: 'Components/Datepickers/Calendars (primitives)/CalendarSingle (primitive)',
  component: CalendarSingle,
  argTypes: {
    ...defaultMonthControls,
    ...weekStartsOnControls,
  },
} satisfies any

export default meta

type Story = StoryObj<typeof meta>

const CalendarSingleTemplate: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<Date | undefined>(args.selected)
    return <CalendarSingle {...args} selected={selected} onSelect={setSelected} />
  },
}

export const Playground: Story = {
  ...CalendarSingleTemplate,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
