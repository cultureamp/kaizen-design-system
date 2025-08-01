import React from 'react'
import { type Meta } from '@storybook/react'
import { Link } from '~components/index'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { InlineNotification, type InlineNotificationProps } from '../InlineNotification'

export default {
  title: 'Components/Notifications/InlineNotification',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      // Fade-in animation has colour contrast issues.
      timeout: 1000,
    },
  },
} satisfies Meta

const DEFAULT_PROPS = {
  children: (
    <span>
      New user data, imported by mackenzie@hooli.com has successfully uploaded.{' '}
      <Link href="/" size="small">
        Manage users is now available
      </Link>
    </span>
  ),
} satisfies Partial<InlineNotificationProps>

const VARIANTS_PROPS: {
  title: string
  props: InlineNotificationProps
}[] = [
  {
    title: 'Informative',
    props: {
      variant: 'informative',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Informative title',
      },
    },
  },
  {
    title: 'Success',
    props: {
      variant: 'success',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Success title',
      },
    },
  },
  {
    title: 'Cautionary',
    props: {
      variant: 'cautionary',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Cautionary title',
      },
    },
  },
  {
    title: 'Warning',
    props: {
      variant: 'warning',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Warning title',
      },
    },
  },
  {
    title: 'Persistent',
    props: {
      variant: 'informative',
      persistent: true,
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Persistent title',
      },
    },
  },
  {
    title: 'Subtle',
    props: {
      variant: 'informative',
      isSubtle: true,
      persistent: true,
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Subtle title',
      },
      children: 'All notification types can have a subtle variant',
    },
  },
  {
    title: 'Multiline',
    props: {
      children:
        'Content longer that the width of the container will break onto a new line. Lorem ipsum dolor, sit amet consectetur adipisicing elit. In aperiam voluptatem molestias saepe quia vitae quod ex illum, unde nihil impedit possimus officia labore atque quidem necessitatibus sint, maiores velit.',
      variant: 'success',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Content enforced multiline',
      },
    },
  },
  {
    title: 'Forced multiline',
    props: {
      children: 'forceMultiline will break children onto a new line regardless of width',
      variant: 'cautionary',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Prop enforced multiline',
      },
      forceMultiline: true,
    },
  },
  {
    title: 'Focus',
    props: {
      // @ts-expect-error Data attributes are valid props
      'data-sb-pseudo-styles': 'focus',
      'variant': 'informative',
      'headingProps': {
        variant: 'heading-6',
        tag: 'span',
        children: 'Focused title',
      },
    },
  },
]

const TYPE_PROPS: {
  title: string
  props: InlineNotificationProps
}[] = [
  {
    title: 'Informative',
    props: {
      type: 'informative',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Informative title',
      },
    },
  },
  {
    title: 'Positive',
    props: {
      type: 'positive',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Positive title',
      },
    },
  },
  {
    title: 'Cautionary',
    props: {
      type: 'cautionary',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Cautionary title',
      },
    },
  },
  {
    title: 'Negative',
    props: {
      type: 'negative',
      headingProps: {
        variant: 'heading-6',
        tag: 'span',
        children: 'Negative title',
      },
    },
  },
]

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet title="InlineNotification" isReversed={isReversed}>
        {VARIANTS_PROPS.map(({ title, props }) => (
          <StickerSheet.Row key={title} header={title}>
            <InlineNotification {...DEFAULT_PROPS} {...props} />
          </StickerSheet.Row>
        ))}
      </StickerSheet>

      <StickerSheet title="Type (deprecated)" isReversed={isReversed}>
        {TYPE_PROPS.map(({ title, props }) => (
          <StickerSheet.Row key={title} header={title}>
            <InlineNotification {...DEFAULT_PROPS} {...props} />
          </StickerSheet.Row>
        ))}
      </StickerSheet>
    </>
  ),
  parameters: {
    pseudo: {
      focus: '[data-sb-pseudo-styles="focus"]',
    },
  },
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
