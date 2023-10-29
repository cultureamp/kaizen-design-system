import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Button } from "~components/Button"
import { Card } from "~components/Card"
import { Text } from "~components/Text"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "../index"

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  args: {},
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  args: {
    defaultIndex: 1,
    // eslint-disable-next-line no-console
    onChange: (index): void => console.log("Tab changed to ", index),
    children: (
      <>
        <TabList aria-label="Tabs">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab badge="3">Tab 3</Tab>
          <Tab disabled>Disabled Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 1</Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">
              Uncontrolled is where you (optionally) specify a default selected
              tab, but the state is otherwise uncontrolled from the consuming
              end and controlled under the hood instead.
            </Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 3</Text>
          </TabPanel>
        </TabPanels>
      </>
    ),
  },
}

export const Controlled: Story = {
  args: {
    children: (
      <>
        <TabList aria-label="Tabs">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">
              Controlled is where the selected tab state is held at the
              consuming level and passed into the component. This allows you to
              change the tab by some other means, such as this button.
            </Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 2</Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 3</Text>
          </TabPanel>
        </TabPanels>
      </>
    ),
  },
  render: args => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    return (
      <>
        <Tabs
          {...args}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        ></Tabs>

        <Button
          label="Switch to tab 2"
          onClick={(): void => setSelectedIndex(1)}
        />
      </>
    )
  },
}

export const UsageInCard: Story = {
  args: {
    children: (
      <>
        <TabList aria-label="Tabs">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab disabled>Disabled Tab</Tab>
        </TabList>
        <TabPanels>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 1</Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 2</Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 3</Text>
          </TabPanel>
        </TabPanels>
      </>
    ),
  },
  parameters: {
    backgrounds: { default: "Gray 100" },
  },
  render: args => (
    <Card>
      <Tabs {...args} />
    </Card>
  ),
}
