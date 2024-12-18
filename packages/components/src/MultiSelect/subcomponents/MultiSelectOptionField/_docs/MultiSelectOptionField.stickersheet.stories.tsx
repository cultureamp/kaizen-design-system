import React from 'react'
import { action } from '@storybook/addon-actions'
import { type Meta, type StoryObj } from '@storybook/react'
import { StickerSheet } from '~storybook/components/StickerSheet'
import { MultiSelectOptionField, type MultiSelectOptionFieldProps } from '../index'

const meta = {
  title: 'Components/MultiSelect/MultiSelectOptionField',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta<typeof MultiSelectOptionField>

export default meta

type Story = StoryObj<typeof meta>

const STATUS_ROWS = [
  { title: 'Unchecked', status: 'unchecked' },
  { title: 'Checked', status: 'checked' },
  { title: 'Indeterminate', status: 'indeterminate' },
] satisfies {
  title: string
  status: MultiSelectOptionFieldProps['checkedStatus']
}[]

const StickerSheetTemplate: Story = {
  render: () => (
    <>
      <StickerSheet title="MultiSelectOptionField" headers={['Default', 'Hover', 'Focus']}>
        {STATUS_ROWS.map(({ title, status }) => (
          <StickerSheet.Row key={title} header={title}>
            <MultiSelectOptionField
              id="id--jaffle"
              onChange={action('jaffle clicked')}
              option={{
                label: 'Jaffle',
                value: 'jaffle',
              }}
              checkedStatus={status}
            />
            <MultiSelectOptionField
              id="id--waffle"
              onChange={action('waffle clicked')}
              option={{
                label: 'Waffle',
                value: 'waffle',
              }}
              data-sb-pseudo-styles="hover"
              checkedStatus={status}
            />
            <MultiSelectOptionField
              id="id--flapjack"
              onChange={action('flapjack clicked')}
              option={{
                label: 'Flapjack',
                value: 'flapjack',
              }}
              data-sb-pseudo-styles="focus"
              checkedStatus={status}
            />
          </StickerSheet.Row>
        ))}
      </StickerSheet>

      <StickerSheet title="Long text wrap">
        <StickerSheet.Row>
          <div className=" w-280 border-solid border-gray-500 border">
            <MultiSelectOptionField
              id="id--john-long-name"
              onChange={action('long name option clicked')}
              option={{
                label:
                  'johnTheJaffleEaterAndDevourerOfPancakesWithBlackPuddingAndASideOfBeans@yahoo.com',
                value: 'email',
              }}
              checkedStatus="unchecked"
            />
            <MultiSelectOptionField
              id="id--long-sentence"
              onChange={action('long sentence option clicked')}
              option={{
                label:
                  'John was a jaffle eater and devourer of pancakes with black pudding and a side of beans',
                value: 'sentence',
              }}
              checkedStatus="unchecked"
            />
          </div>
        </StickerSheet.Row>
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      focusWithin: '[data-sb-pseudo-styles="focus"]',
    },
  },
}

export const StickerSheetDefault = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
