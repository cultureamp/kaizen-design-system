import React from 'react'
import { type Meta } from 'storybook'
import { Link } from '~components/Link'
import { type StickerSheetStory } from '~storybook/components/StickerSheet'
import { ToastNotification } from '../ToastNotification'

export default {
  title: 'Components/Notifications/ToastNotification',
  parameters: {
    chromatic: { disable: false, delay: 600 },
    controls: { disable: true },
  },
} satisfies any

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <>
      <ToastNotification variant="success" title="Success">
        New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
        <Link href="/" size="small">
          Manage users is now available
        </Link>
      </ToastNotification>
      <ToastNotification variant="success" title="Positive (Deprecated)">
        New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
        <Link href="/" size="small">
          Manage users is now available
        </Link>
      </ToastNotification>
      <ToastNotification variant="informative" title="Informative">
        New user data is currently being processed. We&apos;ll let you know when the process is
        completed.{' '}
        <Link href="/" size="small">
          Manage users
        </Link>
      </ToastNotification>
      <ToastNotification variant="cautionary" title="Cautionary">
        New user data, imported by mackenzie@hooli.com has uploaded with some minor issues.{' '}
        <Link href="/" size="small">
          View issues
        </Link>
      </ToastNotification>
      <ToastNotification variant="warning" title="Warning">
        Results hidden to protect confidentiality of individuals and small groups.{' '}
        <Link href="/" size="small">
          Learn more
        </Link>
      </ToastNotification>
      <ToastNotification variant="warning" title="Negative (Deprecated)">
        New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
        <Link href="/" size="small">
          Manage users is now available
        </Link>
      </ToastNotification>
      <ToastNotification
        variant="security"
        title="Very long Title Example Very long title Example VerylongTitleExampleVerylongtitleExample"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper odio vitae sem gravida
        rutrum. Praesent vel sapien eget eros dictum luctus scelerisque eu nibh. Etiam ullamcorper
        lobortis gravida. Suspendisse massa tortor, ultricies et ipsum at, iaculis bibendum est.
      </ToastNotification>
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
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
