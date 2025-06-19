import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { InputSearch } from '../index'

export default {
  title: 'Components/SearchField/InputSearch (primitive)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // Built with no label on purpose, to be used within `TextField` where label is present
            id: 'label',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet
      isReversed={isReversed}
      headers={['Default', 'Disabled', 'Hover', 'Focus', 'Filled']}
    >
      <StickerSheet.Row header="Default">
        <InputSearch id="input-search--default" reversed={isReversed} />
        <InputSearch
          id="input-search--default"
          reversed={isReversed}
          disabled
          data-sb-a11y-color-contrast-disable
        />
        <InputSearch
          id="input-search--hover"
          reversed={isReversed}
          classNameOverride="story__input-search--hover"
        />
        <InputSearch
          id="input-search--focus"
          reversed={isReversed}
          data-sb-pseudo-styles="focus"
          classNameOverride="story__input-search--focus"
        />
        <InputSearch
          id="input-search--filled"
          reversed={isReversed}
          value="Search me"
          data-sb-pseudo-styles="filled"
          classNameOverride="story__input-search--filled"
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Loading">
        <InputSearch id="input-search--loading" loading reversed={isReversed} />
        <InputSearch
          id="input-search--loading"
          reversed={isReversed}
          loading
          disabled
          data-sb-a11y-color-contrast-disable
        />
        <InputSearch
          id="input-search--hover"
          reversed={isReversed}
          loading
          classNameOverride="story__input-search--hover"
        />
        <InputSearch
          id="input-search--focus"
          reversed={isReversed}
          loading
          data-sb-pseudo-styles="focus"
          classNameOverride="story__input-search--focus"
        />
        <InputSearch
          id="input-search--filled"
          reversed={isReversed}
          loading
          value="Search me"
          data-sb-pseudo-styles="filled"
          classNameOverride="story__input-search--filled"
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Secondary">
        <InputSearch id="input-search--secondary" secondary reversed={isReversed} />
        <InputSearch
          id="input-search--secondary"
          reversed={isReversed}
          secondary
          disabled
          data-sb-a11y-color-contrast-disable
        />
        <InputSearch
          id="input-search--hover"
          reversed={isReversed}
          secondary
          classNameOverride="story__input-search--hover"
        />
        <InputSearch
          id="input-search--focus"
          reversed={isReversed}
          secondary
          data-sb-pseudo-styles="focus"
          classNameOverride="story__input-search--focus"
        />
        <InputSearch
          id="input-search--filled"
          reversed={isReversed}
          secondary
          value="Search me"
          data-sb-pseudo-styles="filled"
          classNameOverride="story__input-search--filled"
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Secondary (Loading)">
        <InputSearch id="input-search--secondary-loading" secondary loading reversed={isReversed} />
        <InputSearch
          id="input-search--secondary-loading"
          reversed={isReversed}
          secondary
          loading
          disabled
          data-sb-a11y-color-contrast-disable
        />
        <InputSearch
          id="input-search--hover"
          reversed={isReversed}
          secondary
          loading
          classNameOverride="story__input-search--hover"
        />
        <InputSearch
          id="input-search--focus"
          reversed={isReversed}
          secondary
          loading
          data-sb-pseudo-styles="focus"
          classNameOverride="story__input-search--focus"
        />
        <InputSearch
          id="input-search--filled"
          reversed={isReversed}
          secondary
          loading
          value="Search me"
          data-sb-pseudo-styles="filled"
          classNameOverride="story__input-search--filled"
        />
      </StickerSheet.Row>
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      focus: '[data-sb-pseudo-styles="focus"]',
      // We need to use `classNameOverride` to target the container div
      // as data-attributes are passed into the input.
      hover: '.story__input-search--hover',
      focusWithin: '.story__input-search--focus',
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
