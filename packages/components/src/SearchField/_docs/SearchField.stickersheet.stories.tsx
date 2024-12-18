import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { SearchField, type SearchFieldProps } from '../index'

export default {
  title: 'Components/SearchField',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const variants: {
      heading: string
      variantProps?: Partial<SearchFieldProps>
    }[] = [
      {
        heading: 'Default',
      },
      {
        heading: 'Secondary',
        variantProps: { secondary: true },
      },
    ]

    const COMMON_PROPS = {
      placeholder: 'Search…',
      reversed: isReversed,
      labelText: 'Label',
      value: 'Some value',
    }

    return (
      <>
        {variants.map(({ heading, variantProps }) => (
          <React.Fragment key={heading}>
            <StickerSheet
              isReversed={isReversed}
              title={heading}
              headers={['Base', 'Filled', 'Loading']}
            >
              <StickerSheet.Row>
                <SearchField {...variantProps} {...COMMON_PROPS} value="" />
                <SearchField {...variantProps} {...COMMON_PROPS} />
                <SearchField {...variantProps} {...COMMON_PROPS} loading />
              </StickerSheet.Row>
            </StickerSheet>

            <StickerSheet isReversed={isReversed} headers={['Disabled', 'Hover', 'Focus']}>
              <StickerSheet.Row>
                <SearchField {...variantProps} {...COMMON_PROPS} value="" disabled />
                <SearchField
                  {...variantProps}
                  {...COMMON_PROPS}
                  classNameOverride="story__input-search-hover"
                />
                <SearchField
                  {...variantProps}
                  {...COMMON_PROPS}
                  classNameOverride="story__input-search-focus"
                />
              </StickerSheet.Row>
            </StickerSheet>
          </React.Fragment>
        ))}
      </>
    )
  },
  parameters: {
    pseudo: {
      hover: '.story__input-search-hover > div',
      focus: '.story__input-search-focus > div > input',
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
  parameters: { textDirection: 'rtl' },
}
