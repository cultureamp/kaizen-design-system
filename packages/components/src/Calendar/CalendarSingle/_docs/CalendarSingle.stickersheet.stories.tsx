import React from 'react'
import { type Meta } from '@storybook/react'
import { within } from '@storybook/test'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import styles from '../../baseCalendarClassNames.module.scss'
import { CalendarSingle, type CalendarSingleProps } from '../index'

export default {
  title: 'Components/Date controls/Calendars/CalendarSingle',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const CalendarSingleExample = (props: Partial<CalendarSingleProps>): JSX.Element => (
  <div data-testid={props.id}>
    <CalendarSingle defaultMonth={new Date('2021-09-05')} {...props} />
  </div>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <StickerSheet title="Calendars - Day" headers={['Hover', 'Focus', 'Disabled']}>
        <StickerSheet.Row>
          <CalendarSingleExample id="id--calendar--hover" />
          <CalendarSingleExample id="id--calendar--focus" />
          <CalendarSingleExample
            disabled={[new Date('2021-09-15'), { after: new Date('2021-09-17') }]}
          />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet title="Calendars - Selected Day" headers={['Default', 'Hover', 'Focus']}>
        <StickerSheet.Row>
          <CalendarSingleExample selected={new Date('2021-09-05')} />
          <CalendarSingleExample
            selected={new Date('2021-09-05')}
            id="id--calendar-selected--hover"
          />
          <CalendarSingleExample
            selected={new Date('2021-09-05')}
            id="id--calendar-selected--focus"
          />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet title="Calendars - Today" headers={['Default', 'Selected', 'Disabled']}>
        <StickerSheet.Row>
          <CalendarSingleExample
            defaultMonth={new Date('2022-05-01')}
            id="id--calendar-today--default"
          />
          <CalendarSingleExample
            defaultMonth={new Date('2022-05-01')}
            id="id--calendar-today--selected"
            selected={new Date('2022-05-01')}
          />
          <CalendarSingleExample
            defaultMonth={new Date('2022-05-01')}
            id="id--calendar-today--disabled"
            selected={new Date('2022-05-01')}
            disabled={[new Date('2022-05-01')]}
          />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet title="Calendars - Navigation Buttons" headers={['Hover', 'Focus']}>
        <StickerSheet.Row>
          <CalendarSingleExample id="id--calendar-navigation--hover" />
          <CalendarSingleExample id="id--calendar-navigation--focus" />
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
    },
  },
  play: ({ canvasElement }): void => {
    applyStickerSheetStyles(canvasElement)
  },
}

const applyStickerSheetStyles = (canvasElement: HTMLElement): void => {
  const canvas = within(canvasElement)

  const getElementWithinCalendar = (id: string, role: string, name: string): HTMLElement => {
    const calendar = canvas.getByTestId(id)
    return within(calendar).getByRole(role, { name })
  }

  const todayCalendarIds = [
    'id--calendar-today--default',
    'id--calendar-today--selected',
    'id--calendar-today--disabled',
  ]

  todayCalendarIds.forEach((id) => {
    getElementWithinCalendar(id, 'gridcell', '1').classList.add(styles.dayToday)
  })

  const calendarsPseudoStates = [
    {
      id: 'id--calendar',
      role: 'gridcell',
      name: '5',
    },
    {
      id: 'id--calendar-selected',
      role: 'gridcell',
      name: '5',
    },
    {
      id: 'id--calendar-navigation',
      role: 'button',
      name: 'Go to previous month',
    },
  ]

  calendarsPseudoStates.forEach(({ id, role, name }) => {
    getElementWithinCalendar(`${id}--hover`, role, name).setAttribute(
      'data-sb-pseudo-styles',
      'hover',
    )
    getElementWithinCalendar(`${id}--focus`, role, name).setAttribute(
      'data-sb-pseudo-styles',
      'focus',
    )
  })
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
