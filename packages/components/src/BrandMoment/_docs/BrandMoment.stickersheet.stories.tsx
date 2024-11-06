import React from 'react'
import { Meta } from '@storybook/react'
import {
  BrandMomentCaptureIntro,
  BrandMomentError,
  BrandMomentPositiveOutro,
} from '~components/Illustration'
import {
  StickerSheet,
  StickerSheetStory,
} from '~storybook/components/StickerSheet'
import { BrandMoment } from '../BrandMoment'
import { Informative, Success, Warning } from './BrandMoment.stories'

export default {
  title: 'Components/BrandMoment',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
    a11y: {
      config: {
        rules: [
          {
            // There's gonna be duplicate landmarks here because it's a stickersheet
            id: 'landmark-no-duplicate-banner',
            enabled: false,
          },
          {
            // There's gonna be duplicate landmarks here because it's a stickersheet
            id: 'landmark-no-duplicate-contentinfo',
            enabled: false,
          },
          {
            // There's gonna be duplicate landmarks here because it's a stickersheet
            id: 'landmark-no-duplicate-main',
            enabled: false,
          },
        ],
      },
    },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => (
    <>
      <StickerSheet isReversed={isReversed} heading="Variant">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Informative">
            <BrandMoment {...Informative.args} />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Success">
            <BrandMoment {...Success.args} />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Warning">
            <BrandMoment {...Warning.args} />
          </StickerSheet.Row>
        </StickerSheet.Body>
      </StickerSheet>

      <StickerSheet isReversed={isReversed} heading="Mood (deprecated)">
        <StickerSheet.Body>
          <StickerSheet.Row rowTitle="Informative">
            <BrandMoment
              {...Informative.args}
              illustration={<BrandMomentCaptureIntro />}
              variant={undefined}
              mood="informative"
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Positive">
            <BrandMoment
              {...Success.args}
              illustration={<BrandMomentPositiveOutro />}
              variant={undefined}
              mood="positive"
            />
          </StickerSheet.Row>
          <StickerSheet.Row rowTitle="Negative">
            <BrandMoment
              {...Warning.args}
              illustration={<BrandMomentError />}
              variant={undefined}
              mood="negative"
            />
          </StickerSheet.Row>
        </StickerSheet.Body>
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
