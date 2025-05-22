import React from 'react'
import { type Meta } from '@storybook/react'
import { Heading } from '~components/Heading'
import { EmptyStatesPositive, Informative } from '~components/Illustration'
import { LinkButton } from '~components/LinkButton'
import { Tag } from '~components/Tag'
import { Text } from '~components/Text'
import { Icon } from '~components/__next__'
import { Button } from '~components/__next__/Button'
import {
  Tooltip as TooltipNext,
  TooltipTrigger as TooltipTriggerNext,
} from '~components/__next__/Tooltip'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { GuidanceBlock, type GuidanceBlockProps } from '../index'
import { variantsMap } from '../types'

export default {
  title: 'Components/GuidanceBlock',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const GENERIC_PROPS = {
  illustration: <Informative alt="" />,
  actionsSlot: (
    <>
      <Button
        variant="secondary"
        onPress={() => alert('tada: 🎉')}
        size="large"
        iconPosition="end"
        icon={<Icon name={'arrow_forward'} shouldMirrorInRTL isPresentational />}
      >
        Action
      </Button>
      <LinkButton variant="tertiary" href="#lorem" onPress={() => alert('tracking')} size="large">
        Pass
      </LinkButton>
    </>
  ),
} satisfies Partial<GuidanceBlockProps>

const TEXT_PROPS: GuidanceBlockProps = {
  ...GENERIC_PROPS,
  text: {
    title: 'This is the Guidance block title',
    description:
      'Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss, é um leite divinis, ' +
      'qui tem lupuliz, matis, aguis e fermentis. Mé faiz elementum girarzis, nisi eros vermeio.',
  },
}

const CONTENT_PROPS: GuidanceBlockProps = {
  ...GENERIC_PROPS,
  content: (
    <>
      <Tag>Early Access</Tag>
      <Heading variant="heading-3">{TEXT_PROPS.text.title}</Heading>
      <Text variant="body">{TEXT_PROPS.text.description}</Text>
    </>
  ),
}

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <StickerSheet isReversed={isReversed} className="min-w-max">
      <>
        {variantsMap.map((variant) => (
          <StickerSheet.Row key={variant} header={variant}>
            <GuidanceBlock variant={variant} {...TEXT_PROPS} />
          </StickerSheet.Row>
        ))}
      </>
      <StickerSheet.Row header="No arrow">
        <GuidanceBlock
          {...TEXT_PROPS}
          actionsSlot={
            <>
              <Button variant="secondary" onPress={() => alert('tada: 🎉')} size="large">
                Action
              </Button>
              <LinkButton
                variant="tertiary"
                href="#lorem"
                onPress={() => alert('tracking')}
                size="large"
              >
                Pass
              </LinkButton>
            </>
          }
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Custom Content">
        <GuidanceBlock {...CONTENT_PROPS} />
      </StickerSheet.Row>
      <StickerSheet.Row header="Tooltip">
        <GuidanceBlock
          {...TEXT_PROPS}
          actionsSlot={
            <>
              <TooltipTriggerNext defaultOpen>
                <LinkButton
                  variant="secondary"
                  href="#lorem"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="large"
                  iconPosition="end"
                  icon={<Icon name="arrow_forward" shouldMirrorInRTL isPresentational />}
                >
                  Learn more
                </LinkButton>
                <TooltipNext>Opens in a new tab</TooltipNext>
              </TooltipTriggerNext>
            </>
          }
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="Scene Illustration">
        <GuidanceBlock
          {...TEXT_PROPS}
          illustration={<EmptyStatesPositive alt="" />}
          illustrationType="scene"
        />
      </StickerSheet.Row>
      <StickerSheet.Row header="No Max Width">
        <GuidanceBlock {...TEXT_PROPS} noMaxWidth />
      </StickerSheet.Row>
    </StickerSheet>
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
