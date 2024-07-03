import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { Text } from "~components/Text"
import * as TabsV1Stories from "../../v1/_docs/Tabs.stories"
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "../index"

const meta = {
  title: "Actions/Tabs/v2",
  component: Tabs,
  args: {
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
            <Text variant="body">Content 2</Text>
          </TabPanel>
          <TabPanel classNameOverride="p-24">
            <Text variant="body">Content 3</Text>
          </TabPanel>
        </TabPanels>
      </>
    ),
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = TabsV1Stories.Playground
export const Controlled: Story = TabsV1Stories.Controlled
export const UsageInCard: Story = TabsV1Stories.UsageInCard
