import React from "react"
import { Box, Paragraph } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import { CATEGORIES } from "../../../storybook/constants"
import { TabGroup, TabList, TabPanels, TabPanel, Tab } from "../index"

export default {
  title: `${CATEGORIES.components}/Tabs`,
  component: Tab,
  subcomponents: { TabGroup, TabList, TabPanels, TabPanel },
  parameters: {
    docs: {
      description: {
        component:
          'import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@kaizen/tabs"',
      },
    },
  },
}

export const Default = () => (
  <Box mb={1}>
    <TabGroup
      // eslint-disable-next-line no-console
      onChange={index => console.log("Tab changed to ", index)}
    >
      <TabList aria-label="Tabs">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
        <Tab disabled>Disabled Tab</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 1</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 2</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 3</Paragraph>
          </Box>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </Box>
)

export const ManualKeyboardActivation = () => (
  <Box mb={1}>
    <TabGroup
      keyboardActivation="manual"
      defaultIndex={2}
      // eslint-disable-next-line no-console
      onChange={index => console.log("Tab changed to ", index)}
    >
      <TabList aria-label="Tabs">
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 1</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 2</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 3</Paragraph>
          </Box>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </Box>
)

export const UsageInCard = () => (
  <Card>
    <TabGroup
      // eslint-disable-next-line no-console
      onChange={index => console.log("Tab changed to ", index)}
    >
      <Box pt={0.25}>
        <TabList aria-label="Tabs">
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
          <Tab disabled>Disabled Tab</Tab>
        </TabList>
      </Box>

      <TabPanels>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 1</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 2</Paragraph>
          </Box>
        </TabPanel>
        <TabPanel>
          <Box p={1}>
            <Paragraph variant="intro-lede">Content 3</Paragraph>
          </Box>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </Card>
)

UsageInCard.parameters = {
  backgrounds: { default: "Gray 100" },
}
