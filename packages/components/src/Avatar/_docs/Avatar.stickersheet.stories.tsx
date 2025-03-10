import React from 'react'
import { type Meta } from '@storybook/react'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'

import {
  Avatar,
  type AvatarSizes,
  type CompanyAvatarProps,
  type GenericAvatarProps,
} from '../index'

export default {
  title: 'Components/Avatar',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const PROPS_PHOTO_PERSONAL: GenericAvatarProps = {
  fullName: 'Jane Doe',
  disableInitials: false,
  isCurrentUser: true,
  avatarSrc:
    'https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png',
}

const PROPS_INITIALS_PERSONAL: GenericAvatarProps = {
  fullName: 'Jane Doe',
  disableInitials: false,
  isCurrentUser: true,
}

const PROPS_INITIALS_GENERIC: GenericAvatarProps = {
  fullName: 'Jane Doe',
  disableInitials: false,
  isCurrentUser: false,
}

const PROPS_INITIALS_UNICODE: GenericAvatarProps = {
  fullName: '李存信',
  disableInitials: false,
  isCurrentUser: true,
}

const PROPS_INITIALS_LONG: GenericAvatarProps = {
  fullName: 'Spicy Jalapeno Taco Bacon Ipsum Pretzel Dolor Amet Nacho Elit Chicken',
  disableInitials: false,
  isCurrentUser: true,
}

const PROPS_COMPANY: CompanyAvatarProps = {
  fullName: 'Hooli',
  avatarSrc: 'https://d1e7r7b0lb8p4d.cloudfront.net/third-party-logos/hooli-logo.svg',
  isCompany: true,
}

const ROWS: { title: string; size: AvatarSizes }[] = [
  { title: 'XX-Large', size: 'xxlarge' },
  { title: 'X-Large', size: 'xlarge' },
  { title: 'Large', size: 'large' },
  { title: 'Medium', size: 'medium' },
  { title: 'Small', size: 'small' },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet
        isReversed={isReversed}
        headers={['Photo Personal', 'Initials Personal', 'Initials Generic', 'Default User']}
      >
        {ROWS.map(({ title, size }) => (
          <StickerSheet.Row key={title} header={title}>
            <Avatar {...PROPS_PHOTO_PERSONAL} size={size} />
            <Avatar {...PROPS_INITIALS_PERSONAL} size={size} />
            <Avatar {...PROPS_INITIALS_GENERIC} size={size} />
            <Avatar {...PROPS_INITIALS_GENERIC} disableInitials size={size} />
          </StickerSheet.Row>
        ))}
      </StickerSheet>

      <StickerSheet
        isReversed={isReversed}
        headers={['Initials Unicode', 'Initials Long', 'Company Avatar']}
        className="mt-64"
      >
        {ROWS.map(({ title, size }) => (
          <StickerSheet.Row key={title} header={title}>
            <Avatar {...PROPS_INITIALS_UNICODE} size={size} />
            <Avatar {...PROPS_INITIALS_LONG} size={size} />
            <Avatar {...PROPS_COMPANY} size={size} />
          </StickerSheet.Row>
        ))}
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
  parameters: { textDirection: 'rtl' },
}

export const StickerSheetReversed: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Reversed)',
  parameters: {
    backgrounds: { default: 'Purple 700' },
  },
  args: { isReversed: true },
}
