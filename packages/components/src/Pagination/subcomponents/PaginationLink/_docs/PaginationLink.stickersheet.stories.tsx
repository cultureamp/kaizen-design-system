import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { PaginationLink, type PaginationLinkProps } from '../index'

export default {
  title: 'Components/Pagination/PaginationLink',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const PAGINATION_LINK_PROPS: {
  title: string
  props: PaginationLinkProps
}[] = [
  {
    title: 'isActive={false}',
    props: {
      'pageNumber': 1,
      'aria-label': 'Page 1',
    },
  },
  {
    title: 'isActive={true}',
    props: {
      'pageNumber': 1,
      'aria-label': 'Page 1',
      'isActive': true,
    },
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} headers={['Base', 'Hover', 'Active', 'Focus']}>
      {PAGINATION_LINK_PROPS.map(({ title, props }) => (
        <StickerSheet.Row key={title} header={title}>
          <PaginationLink {...props} reversed={isReversed} />
          <PaginationLink {...props} reversed={isReversed} data-sb-pseudo-styles="hover" />
          <PaginationLink {...props} reversed={isReversed} data-sb-pseudo-styles="active" />
          <PaginationLink {...props} reversed={isReversed} data-sb-pseudo-styles="focus" />
        </StickerSheet.Row>
      ))}
    </StickerSheet>
  ),
  parameters: {
    pseudo: {
      hover: '[data-sb-pseudo-styles="hover"]',
      active: '[data-sb-pseudo-styles="active"]',
      focus: '[data-sb-pseudo-styles="focus"]',
      focusVisible: '[data-sb-pseudo-styles="focus"]',
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
