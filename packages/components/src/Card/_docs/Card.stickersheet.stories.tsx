import React from 'react'
import { type Meta } from 'storybook'
import { Text } from '~components/Text'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Card, type CardProps } from '../index'

export default {
  title: 'Components/Card',
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies any

const colors = [
  'blue',
  'green',
  'gray',
  'orange',
  'purple',
  'red',
  'white',
  'yellow',
] satisfies CardProps['color'][]

const CardWithContent = (props: CardProps): JSX.Element => (
  <Card {...props}>
    <div className="p-6">
      <Text variant="body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas accusantium doloribus
        dicta odio recusandae repudiandae tenetur! Fugiat vero architecto quasi rem culpa vel
        asperiores, sit, quas suscipit, ea deleniti dolorum.
      </Text>
    </div>
  </Card>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: ({ isReversed, ...args }) => (
    <>
      <StickerSheet isReversed={isReversed} title="Colors">
        {colors.map((color) => (
          <StickerSheet.Row key={color} header={color}>
            <CardWithContent {...args} color={color} />
          </StickerSheet.Row>
        ))}
      </StickerSheet>
      <StickerSheet isReversed={isReversed} title="AI Moments">
        <StickerSheet.Row header="AI is loaded">
          <CardWithContent {...args} isAiLoading={false} />
        </StickerSheet.Row>
        <StickerSheet.Row header="AI is loading">
          <CardWithContent {...args} isAiLoading />
        </StickerSheet.Row>
        <StickerSheet.Row header="AI is undefined">
          <CardWithContent {...args} isAiLoading={undefined} />
        </StickerSheet.Row>
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
