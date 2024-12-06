import React from 'react'
import { Meta } from '@storybook/react'
import isChromatic from 'chromatic'
import { Button } from '~components/__actions__/v2'
import { Icon } from '~components/__future__/Icon'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { EmptyState, EmptyStateProps } from '../index'

export default {
  title: 'Components/EmptyState',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const IS_CHROMATIC = isChromatic()

const EmptyStateWrapper = ({ isAnimated, ...args }: EmptyStateProps): JSX.Element => (
  <div>
    <EmptyState isAnimated={IS_CHROMATIC ? false : isAnimated} {...args} />
  </div>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      headingProps: {
        variant: 'heading-3',
        children: 'Empty state',
      },
      bodyText:
        'If providing further actions, include a link to an action or use a Default or Primary action.',
    } satisfies EmptyStateProps

    const variants = [
      'success',
      'warning',
      'informative',
      'expert-advice',
    ] satisfies EmptyStateProps['variant'][]

    const illustrationTypes = [
      'positive',
      'neutral',
      'negative',
      'informative',
      'action',
    ] satisfies EmptyStateProps['illustrationType'][]

    return (
      <>
        <StickerSheet isReversed={isReversed} title="EmptyState" layout="stretch">
          {variants.map((variant) => (
            <StickerSheet.Row key={variant} header={variant}>
              <EmptyStateWrapper {...defaultProps} variant={variant} />
            </StickerSheet.Row>
          ))}
          <StickerSheet.Row header="straightCorners">
            <EmptyStateWrapper {...defaultProps} straightCorners />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet isReversed={isReversed} title="Responsive breakpoints">
          <StickerSheet.Row header="Above 1024px">
            <StickerSheet.Cell style={{ width: 1025 }}>
              <EmptyStateWrapper {...defaultProps} />
            </StickerSheet.Cell>
          </StickerSheet.Row>
          <StickerSheet.Row header="Above 560px and below or equal to 1024px (max)">
            <StickerSheet.Cell style={{ width: 1024 }}>
              <EmptyStateWrapper {...defaultProps} />
            </StickerSheet.Cell>
          </StickerSheet.Row>
          <StickerSheet.Row header="Above 560px and below or equal to 1024px (min)">
            <StickerSheet.Cell style={{ width: 561 }}>
              <EmptyStateWrapper {...defaultProps} />
            </StickerSheet.Cell>
          </StickerSheet.Row>
          <StickerSheet.Row header="Below or equal to 560px">
            <StickerSheet.Cell style={{ width: 560 }}>
              <EmptyStateWrapper {...defaultProps} />
            </StickerSheet.Cell>
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet
          isReversed={isReversed}
          title="Illustration type (deprecated)"
          layout="stretch"
        >
          {illustrationTypes.map((illustrationType) => (
            <StickerSheet.Row key={illustrationType} header={illustrationType}>
              <EmptyStateWrapper {...defaultProps} illustrationType={illustrationType}>
                <Button
                  label="Label"
                  icon={<Icon name="chevron_right" isPresentational shouldMirrorInRTL />}
                  iconPosition="end"
                />
              </EmptyStateWrapper>
            </StickerSheet.Row>
          ))}
        </StickerSheet>
      </>
    )
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
