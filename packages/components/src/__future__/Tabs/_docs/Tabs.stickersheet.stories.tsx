import React from 'react'
import { Meta } from '@storybook/react'
import { Text } from '~components/Text'
import { StickerSheet, StickerSheetStory } from '~storybook/components/StickerSheet'
import { Tab, TabList, TabPanel, Tabs } from '../index'

export default {
  title: 'Components/Tabs/Tabs (Future)',
  parameters: {
    chromatic: { disable: false },
    controls: { disable: true },
  },
} satisfies Meta

const ExampleTabs = (): JSX.Element => (
  <Tabs>
    <TabList aria-label="Tabs">
      <Tab id="one">Tab 1</Tab>
      <Tab id="two">Tab 2</Tab>
      <Tab id="three" badge="3">
        Tab 3
      </Tab>
      <Tab id="disabled" isDisabled>
        Disabled Tab
      </Tab>
      <Tab id="four">Tab 4</Tab>
      <Tab id="five">Tab 5</Tab>
    </TabList>
    <TabPanel id="one" className="p-24">
      <Text variant="body">Content 1</Text>
    </TabPanel>
    <TabPanel id="two" className="p-24">
      <Text variant="body">Content 2</Text>
    </TabPanel>
    <TabPanel id="three" className="p-24">
      <Text variant="body">Content 3</Text>
    </TabPanel>
    <TabPanel id="disabled" className="p-24">
      <Text variant="body">Content 4</Text>
    </TabPanel>
    <TabPanel id="four" className="p-24">
      <Text variant="body">Content 4</Text>
    </TabPanel>
    <TabPanel id="five" className="p-24">
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
            <ExampleTabs />
          </StickerSheet.Row>
        </StickerSheet>

        <StickerSheet title="Overflow (container 500px)" layout="stretch">
          <StickerSheet.Row>
            <div style={{ maxWidth: '500px' }}>
              <ExampleTabs />
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
