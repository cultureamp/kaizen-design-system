import React from 'react'
import { type Meta } from '@storybook/react'
import { within } from '@storybook/test'
import { Heading } from '~components/Heading'
import { Text } from '~components/Text'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Collapsible, type CollapsibleProps } from '../index'

export default {
  title: 'Components/Collapsibles/Collapsible',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const CollapsibleWrapped = (args: Omit<CollapsibleProps, 'children'>): JSX.Element => (
  <Collapsible open {...args}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac scelerisque sem, vel
    ultricies justo. Donec eu porttitor ante, nec gravida orci. Nulla facilisi. Cras varius erat id
    fermentum mattis. Mauris bibendum vestibulum erat, quis blandit metus viverra sit amet. Vivamus
    pretium vitae turpis ut condimentum. Sed vulputate magna nisl, in cursus urna hendrerit et.
    Aenean semper, est non feugiat sodales, nisl ligula aliquet lorem, sit amet scelerisque arcu
    quam a sapien. Donec in viverra urna.
  </Collapsible>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Row header="Open">
        <CollapsibleWrapped title="Collapsible" />
      </StickerSheet.Row>
      <StickerSheet.Row header="Closed">
        <CollapsibleWrapped title="Closed" open={false} />
      </StickerSheet.Row>
      <StickerSheet.Row header="noSectionPadding">
        <CollapsibleWrapped title="No Padding" noSectionPadding />
      </StickerSheet.Row>
      <StickerSheet.Row header="lazyLoad">
        <CollapsibleWrapped title="Lazy load" lazyLoad />
      </StickerSheet.Row>
      <StickerSheet.Row header="clear">
        <CollapsibleWrapped title="Clear" variant="clear" />
      </StickerSheet.Row>
      <StickerSheet.Row header="custom heading">
        <CollapsibleWrapped
          title="Custom header"
          renderHeader={(title) => (
            <Heading variant="heading-4" tag="span">
              {title}
            </Heading>
          )}
        />
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
  parameters: { textDirection: 'rtl' },
}

export const Sticky: StickerSheetStory = {
  render: () => (
    <StickerSheet>
      <StickerSheet.Row header="Sticky header">
        <div style={{ height: '300px', overflow: 'auto' }}>
          <Collapsible open title="Sticky" sticky={{ top: '-1px' }} style={{ maxWidth: '300px' }}>
            <Text variant="body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac scelerisque sem,
              vel ultricies justo. Donec eu porttitor ante, nec gravida orci. Nulla facilisi. Cras
              varius erat id fermentum mattis. Mauris bibendum vestibulum erat, quis blandit metus
              viverra sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate magna
              nisl, in cursus urna hendrerit et. Aenean semper, est non feugiat sodales, nisl ligula
              aliquet lorem, sit amet scelerisque arcu quam a sapien. Donec in viverra urna.
            </Text>
            <Text variant="body" data-testid="bottom-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac scelerisque sem,
              vel ultricies justo. Donec eu porttitor ante, nec gravida orci. Nulla facilisi. Cras
              varius erat id fermentum mattis. Mauris bibendum vestibulum erat, quis blandit metus
              viverra sit amet. Vivamus pretium vitae turpis ut condimentum. Sed vulputate magna
              nisl, in cursus urna hendrerit et. Aenean semper, est non feugiat sodales, nisl ligula
              aliquet lorem, sit amet scelerisque arcu quam a sapien. Donec in viverra urna.
            </Text>
          </Collapsible>
        </div>
      </StickerSheet.Row>
    </StickerSheet>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const element = canvas.getByTestId('bottom-content')
    element.scrollIntoView({ behavior: 'instant', block: 'end' })
  },
}
