import React from 'react'
import { type Meta } from '@storybook/react'
import { Text } from '~components/Text'
import { StickerSheet, type StickerSheetStory } from '~storybook/components/StickerSheet'
import { Tab, TabList, TabPanel, Tabs } from '../index'

export default {
  title: 'Components/Tabs/Tabs (Future)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ExampleTabs = ({ id }: { id: string }): JSX.Element => (
  <Tabs>
    <TabList aria-label="Tabs">
      <Tab id={`${id}-1`}>Tab 1</Tab>
      <Tab id={`${id}-2`}>Tab 2</Tab>
      <Tab id={`${id}-3`} badge="3">
        Tab 3
      </Tab>
      <Tab id={`${id}-disabled`} isDisabled>
        Disabled Tab
      </Tab>
      <Tab id={`${id}-4`}>Tab 4</Tab>
      <Tab id={`${id}-5`}>Tab 5</Tab>
    </TabList>
    <TabPanel id={`${id}-1`} className="p-24">
      <Text variant="body">Content 1</Text>
    </TabPanel>
    <TabPanel id={`${id}-2`} className="p-24">
      <Text variant="body">Content 2</Text>
    </TabPanel>
    <TabPanel id={`${id}-3`} className="p-24">
      <Text variant="body">Content 3</Text>
    </TabPanel>
    <TabPanel id={`${id}-disabled`} className="p-24">
      <Text variant="body">Disabled content</Text>
    </TabPanel>
    <TabPanel id={`${id}-4`} className="p-24">
      <Text variant="body">Content 4</Text>
    </TabPanel>
    <TabPanel id={`${id}-5`} className="p-24">
      <Text variant="body">Content 5</Text>
    </TabPanel>
  </Tabs>
)

const StickerSheetTemplate: StickerSheetStory = {
  render: () => {
    return (
      <>
        <StickerSheet title="Tabs" layout="stretch">
          <StickerSheet.Row>
            <ExampleTabs id="fullwidth" />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet title="Overflow (container 500px)" layout="stretch">
          <StickerSheet.Row>
            <div style={{ maxWidth: '500px' }}>
              <ExampleTabs id="overflow" />
            </div>
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

export const StickerSheetRTL: StickerSheetStory = {
  ...StickerSheetTemplate,
  name: 'Sticker Sheet (RTL)',
  parameters: {
    ...StickerSheetTemplate.parameters,
    textDirection: 'rtl',
  },
}
