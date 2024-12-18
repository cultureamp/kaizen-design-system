import React, { useState } from 'react'
import { StaticIntlProvider } from '@cultureamp/i18n-react-intl'
import { action } from '@storybook/addon-actions'
import { type Meta } from '@storybook/react'
import isChromatic from 'chromatic'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { FilterButton } from '../../FilterButton'
import { FilterDatePicker, type FilterDatePickerProps } from '../index'
import { FilterDatePickerField } from '../subcomponents/FilterDatePickerField'

const IS_CHROMATIC = isChromatic()

export default {
  title: 'Components/FilterDatePicker',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    const [isOpenNoValue, setIsOpenNoValue] = useState<boolean>(IS_CHROMATIC)
    const [isOpenValue, setIsOpenValue] = useState<boolean>(false)

    const [noDateValue, setNoDateValue] = useState<Date | undefined>()
    const [dateValueValidation, setDateValueValidation] = useState<Date | undefined>(
      new Date('potato'),
    )

    const [dateValue, setDateValue] = useState<Date | undefined>(new Date('2022-05-15'))

    return (
      <StaticIntlProvider locale="en">
        <StickerSheet
          title="Filter Date Picker"
          style={{ paddingBottom: IS_CHROMATIC ? '33rem' : undefined }}
          headers={['No value display', 'Value display']}
        >
          <StickerSheet.Row>
            <FilterDatePicker
              isOpen={isOpenNoValue}
              setIsOpen={setIsOpenNoValue}
              renderTrigger={(triggerButtonProps): JSX.Element => (
                <FilterButton {...triggerButtonProps} />
              )}
              label="Start day"
              locale="en-AU"
              defaultMonth={new Date('2022-05-01')}
              selectedDate={noDateValue}
              onDateChange={setNoDateValue}
            />
            <FilterDatePicker
              isOpen={isOpenValue}
              setIsOpen={setIsOpenValue}
              renderTrigger={(triggerButtonProps): JSX.Element => (
                <FilterButton {...triggerButtonProps} />
              )}
              label="Start day"
              locale="en-AU"
              selectedDate={dateValue}
              onDateChange={setDateValue}
            />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet title="Filter Date Picker Field">
          <StickerSheet.Row header="Default">
            <FilterDatePickerField
              id="stickersheet--filter-dp-field--default"
              inputProps={{ labelText: 'Date' }}
              locale="en-AU"
              defaultMonth={new Date('2022-05-01')}
              selectedDate={noDateValue}
              onDateChange={setNoDateValue}
            />
          </StickerSheet.Row>
          <StickerSheet.Row header="Existing value">
            <FilterDatePickerField
              id="stickersheet--filter-dp-field--existing"
              inputProps={{ labelText: 'Date' }}
              locale="en-AU"
              selectedDate={dateValue}
              onDateChange={setDateValue}
            />
          </StickerSheet.Row>
          <StickerSheet.Row header="Validation">
            <FilterDatePickerField
              id="stickersheet--filter-dp-field--validation"
              inputProps={{ labelText: 'Date' }}
              locale="en-AU"
              selectedDate={dateValueValidation}
              defaultMonth={new Date('01-01-2022')}
              onDateChange={setDateValueValidation}
              onValidate={action('Validation story: date start onValidate')}
              validationMessage={{
                status: 'error',
                message: '(Date custom message) Jelly-filled doughnuts are my favourite!',
              }}
            />
          </StickerSheet.Row>
        </StickerSheet>
      </StaticIntlProvider>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    chromatic: { delay: 400 },
    textDirection: 'rtl',
  },
}

export const StickerSheetLocales: StickerSheetStory = {
  name: 'Sticker Sheet (Locales)',
  render: () => {
    const props = {
      isOpen: false,
      setIsOpen: () => undefined,
      renderTrigger: (triggerButtonProps): JSX.Element => <FilterButton {...triggerButtonProps} />,
      label: 'Start day',
      selectedDate: new Date('2022-05-01'),
      onDateChange: () => undefined,
      locale: 'en-AU',
    } satisfies FilterDatePickerProps

    return (
      <>
        <StickerSheet title="Localisation" headers={['en-AU', 'en-US']}>
          <StickerSheet.Row>
            <FilterDatePicker {...props} locale="en-AU" />
            <FilterDatePicker {...props} locale="en-US" />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet headers={['fr-CA']} className="mt-32 pb-[500px]">
          <StickerSheet.Row>
            <StaticIntlProvider locale="fr-CA">
              <FilterDatePicker {...props} locale="fr-CA" isOpen />
            </StaticIntlProvider>
          </StickerSheet.Row>
        </StickerSheet>
      </>
    )
  },
  parameters: {
    a11y: {
      // Wait for translations to load
      timeout: 1500,
    },
  },
}
