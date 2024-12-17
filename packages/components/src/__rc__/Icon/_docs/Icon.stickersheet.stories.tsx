import React from 'react'
import { Meta } from '@storybook/react'
import { CheckboxField } from '~components/Checkbox'
import { Label } from '~components/Label'
import { Text } from '~components/Text'
import { Button as ButtonV2 } from '~components/__actions__/v2'
import { Button as ButtonV3 } from '~components/__actions__/v3'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { handledRtlIcons, iconDefaultSet } from '../constants'
import { Icon, IconProps } from '../index'

export default {
  title: 'Components/Icon/Icon (Future)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed }) => {
    const defaultProps = {
      name: 'star',
      isPresentational: true,
    } satisfies IconProps

    const mirrorInRTL = [
      'arrow_forward',
      'arrow_back',
      ...Object.keys(handledRtlIcons),
    ] satisfies IconProps['name'][]

    return (
      <>
        <StickerSheet
          title="Icon"
          headers={['Outlined', 'Filled', 'Color']}
          isReversed={isReversed}
        >
          {iconDefaultSet.map((name) => (
            <StickerSheet.Row key={name} header={name}>
              <Icon {...defaultProps} name={name} />
              <Icon {...defaultProps} name={name} isFilled />
              <Icon {...defaultProps} name={name} className="text-blue-500" />
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet
          title="shouldMirrorInRTL"
          isReversed={isReversed}
          headers={['true; dir=["ltr"]', 'true; dir=["rtl"]', 'false; dir=["rtl"]']}
        >
          {mirrorInRTL.map((name) => (
            <StickerSheet.Row key={name} header={name}>
              <div dir="ltr" className="text-center">
                <Icon {...defaultProps} name={name} shouldMirrorInRTL />
              </div>
              <div dir="rtl" className="text-center">
                <Icon {...defaultProps} name={name} shouldMirrorInRTL />
              </div>
              <div dir="rtl" className="text-center">
                <Icon {...defaultProps} name={name} />
              </div>
            </StickerSheet.Row>
          ))}
        </StickerSheet>

        <StickerSheet title="Alignment as children within other components" isReversed={isReversed}>
          <StickerSheet.Row header="Text">
            <Text variant="body">
              Showcase alignment of an icon <Icon {...defaultProps} /> within a sentence
            </Text>
          </StickerSheet.Row>
          <StickerSheet.Row header="Label">
            <Label>
              Field label <Icon {...defaultProps} />
            </Label>
          </StickerSheet.Row>
          <StickerSheet.Row header="CheckboxField">
            <CheckboxField
              labelText={
                <>
                  Checkbox label <Icon {...defaultProps} />
                </>
              }
            />
          </StickerSheet.Row>
          <StickerSheet.Row header="Button (v2)">
            <ButtonV2 label="Button label" icon={<Icon {...defaultProps} />} />
          </StickerSheet.Row>
          <StickerSheet.Row header="Button (v3)">
            <ButtonV3>
              <Icon {...defaultProps} /> Button label
            </ButtonV3>
          </StickerSheet.Row>
        </StickerSheet>
      </>
    )
  },
}

export const StickerSheetDefault: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (Default)',
}
