import React from 'react'
import { type Meta } from '@storybook/react'
import { Icon } from '~components/__rc__/Icon'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Link, type LinkProps } from '../Link'

export default {
  title: 'Components/Link',
  component: Link,
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const variants = ['primary', 'secondary'] satisfies LinkProps['variant'][]
const sizes = ['extra-small', 'small', 'medium', 'large'] satisfies LinkProps['size'][]
const href = 'https://www.google.com' satisfies LinkProps['href']

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet
        title="Link"
        headers={['Icon start', 'Icon end', 'Underlined', 'isDisabled']}
        isReversed={isReversed}
      >
        {variants.map((variant) =>
          sizes.map((size) => (
            <StickerSheet.Row key={size + variant} header={`${variant} (${size})`}>
              <Link
                variant={variant}
                size={size}
                href={href}
                underlined={false}
                isReversed={isReversed ? isReversed : false}
                isInline={false}
                icon={<Icon name="add" isPresentational />}
                iconPosition={'start'}
              >
                Label
              </Link>
              <Link
                variant={variant}
                size={size}
                href={href}
                underlined={false}
                isReversed={isReversed ? isReversed : false}
                isInline={false}
                icon={<Icon name="add" isPresentational />}
                iconPosition={'end'}
              >
                Label
              </Link>
              <Link
                variant={variant}
                size={size}
                href={href}
                underlined={true}
                isReversed={isReversed ? isReversed : false}
                isInline={false}
              >
                Label
              </Link>
              <Link
                variant={variant}
                size={size}
                href={href}
                underlined={true}
                isReversed={isReversed ? isReversed : false}
                isInline={false}
                isDisabled={true}
              >
                Label
              </Link>
            </StickerSheet.Row>
          )),
        )}
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
  parameters: {
    textDirection: 'rtl',
  },
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    reverseColors: true,
  },
  args: {
    isReversed: true,
  },
}
