import React from 'react'
import { Meta } from '@storybook/react'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { Select } from '../index'

export default {
  title: 'Components/Select',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // React-select's list structure missing when there are no options (third-party a11y issue)
            id: 'aria-required-children',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const OPTIONS = [
  { value: 'Mindy', label: 'Mindy' },
  { value: 'Jaime', label: 'Jaime', isDisabled: true },
  { value: 'Rafa', label: 'Rafa' },
  { value: 'Elaine', label: 'Elaine' },
  { value: 'Julio', label: 'Julio' },
  { value: 'Priyanka', label: 'Priyanka' },
  { value: 'Prince', label: 'Prince' },
  { value: 'Charith', label: 'Charith' },
  { value: 'Nick', label: 'Nick' },
  {
    value: 'Long option',
    label:
      'Long option where the container is fixed width and the selected option should ellipsize',
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet
        isReversed={isReversed}
        title="Default Select"
        headers={['Base', 'Clearable', 'Disabled']}
      >
        <StickerSheet.Row header="Default">
          <Select options={OPTIONS} reversed={isReversed} label="Select" />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[0]}
            isClearable
            label="Select"
          />
          <Select options={OPTIONS} reversed={isReversed} label="Select" isDisabled />
        </StickerSheet.Row>
        <StickerSheet.Row header="Ellipsis">
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            label="Select"
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            label="Select"
            isClearable
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[9]}
            label="Select"
            isDisabled
          />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} title="Multi Select" headers={['Base', 'Disabled']}>
        <StickerSheet.Row>
          <Select
            options={OPTIONS}
            reversed={isReversed}
            isMulti={true}
            defaultValue={OPTIONS[0]}
            label="Select"
          />
          <Select
            options={OPTIONS}
            reversed={isReversed}
            defaultValue={OPTIONS[0]}
            isDisabled
            isMulti
            label="Select"
          />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} title="Secondary" headers={['Base', 'Disabled']}>
        <StickerSheet.Row header="Default">
          <Select
            reversed={isReversed}
            variant="secondary"
            options={OPTIONS}
            defaultValue={OPTIONS[0]}
            label="Select"
          />
          <Select
            reversed={isReversed}
            variant="secondary"
            options={OPTIONS}
            defaultValue={OPTIONS[0]}
            isDisabled
            label="Select"
          />
        </StickerSheet.Row>
        <StickerSheet.Row header="Small">
          <Select
            reversed={isReversed}
            variant="secondary-small"
            options={OPTIONS}
            defaultValue={OPTIONS[0]}
            label="Select"
          />
          <Select
            reversed={isReversed}
            variant="secondary-small"
            options={OPTIONS}
            defaultValue={OPTIONS[0]}
            isDisabled
            label="Select"
          />
        </StickerSheet.Row>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} title="Menu" headers={['Base', 'Disabled']}>
        <StickerSheet.Row>
          <Select
            reversed={isReversed}
            variant="secondary"
            options={OPTIONS}
            menuIsOpen
            label="Select"
          />
          <Select
            reversed={isReversed}
            variant="secondary"
            options={[]}
            menuIsOpen
            label="Select"
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

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}
