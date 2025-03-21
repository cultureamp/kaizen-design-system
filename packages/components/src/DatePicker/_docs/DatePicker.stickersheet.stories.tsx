import React, { useState } from 'react'
import { StaticIntlProvider } from '@cultureamp/i18n-react-intl'
import { type Meta } from '@storybook/react'
import { expect, userEvent, within } from '@storybook/test'
import { Text } from '~components/Text'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { DatePicker } from '../index'

export default {
  title: 'Components/Datepickers/DatePicker',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const [selectedDate, setValueDate] = useState<Date | undefined>()
    return (
      <>
        <StickerSheet
          isReversed={isReversed}
          title="DatePicker"
          headers={['Default', 'Selected Value', 'Custom Description', 'Disabled']}
        >
          <StickerSheet.Row style={{ verticalAlign: 'top' }}>
            <DatePicker
              labelText="Label"
              selectedDay={selectedDate}
              onDayChange={setValueDate}
              isReversed={isReversed}
            />
            <DatePicker
              labelText="Label"
              selectedDay={new Date(2022, 1, 5)}
              onDayChange={() => undefined}
              isReversed={isReversed}
            />
            <DatePicker
              labelText="Label"
              selectedDay={undefined}
              onDayChange={() => undefined}
              isReversed={isReversed}
              description={
                <>
                  <Text tag="span" variant="small" color={isReversed ? 'white' : 'dark'}>
                    My <strong>Custom</strong> Description
                  </Text>
                </>
              }
            />
            <DatePicker
              labelText="Label"
              selectedDay={undefined}
              onDayChange={() => undefined}
              isReversed={isReversed}
              disabled
            />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet isReversed={isReversed} title="Pseudo states" headers={['Hover', 'Focus']}>
          <StickerSheet.Row header="Container">
            <DatePicker
              isReversed={isReversed}
              labelText="Date"
              selectedDay={undefined}
              onDayChange={() => undefined}
              data-sb-pseudo-styles="hover"
            />
            <DatePicker
              isReversed={isReversed}
              labelText="Date"
              selectedDay={undefined}
              onDayChange={() => undefined}
              data-sb-pseudo-styles="focus"
            />
          </StickerSheet.Row>

          <StickerSheet.Row header="Icon button">
            <DatePicker
              isReversed={isReversed}
              labelText="Date"
              selectedDay={undefined}
              onDayChange={() => undefined}
              classNameOverride="story__date-input-single-field--hover"
            />
            <DatePicker
              isReversed={isReversed}
              labelText="Date"
              selectedDay={undefined}
              onDayChange={() => undefined}
              classNameOverride="story__date-input-single-field--focus"
            />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet isReversed={isReversed} title="Validation" headers={['Error', 'Caution']}>
          <StickerSheet.Row>
            <DatePicker
              labelText="Label"
              selectedDay={new Date('potato')}
              onDayChange={() => undefined}
              isReversed={isReversed}
            />
            <DatePicker
              labelText="Label"
              selectedDay={undefined}
              onDayChange={() => undefined}
              isReversed={isReversed}
              status="caution"
              validationMessage="Custom cautionary message"
            />
          </StickerSheet.Row>
        </StickerSheet>
      </>
    )
  },
  parameters: {
    pseudo: {
      hover: ['[data-sb-pseudo-styles="hover"]', '.story__date-input-single-field--hover button'],
      focus: ['[data-sb-pseudo-styles="focus"]', '.story__date-input-single-field--focus button'],
      focusVisible: [
        '[data-sb-pseudo-styles="focus"]',
        '.story__date-input-single-field--focus button',
      ],
    },
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}

export const StickerSheetLocales: StickerSheetStory = {
  name: 'Sticker Sheet (Locales)',
  render: () => (
    <>
      <StickerSheet title="Localisation" headers={['en-AU', 'en-US']}>
        <StickerSheet.Row>
          <DatePicker
            labelText="Label"
            selectedDay={new Date('2022, 1, 5')}
            onDayChange={() => undefined}
          />
          <DatePicker
            labelText="Label"
            selectedDay={new Date('2022, 1, 5')}
            onDayChange={() => undefined}
            locale="en-US"
          />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet headers={['fr-CA']} className="mt-32 pb-[400px]">
        <StickerSheet.Row>
          <StaticIntlProvider locale="fr-CA">
            <DatePicker
              labelText="Label"
              selectedDay={new Date('2022, 1, 5')}
              onDayChange={() => undefined}
              locale="fr-CA"
              data-testid="id--dp-fr-ca"
            />
          </StaticIntlProvider>
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(canvas.getByTestId('id--dp-fr-ca'))
    await expect(canvas.getByText('janvier 2022')).toBeInTheDocument()
  },
}
