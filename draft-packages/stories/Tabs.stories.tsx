import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { Card } from "@kaizen/draft-card"
import { Tabs } from "@kaizen/draft-tabs"
import { Divider } from "@kaizen/draft-divider"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import classnames from "classnames"
import * as React from "react"
import { ExampleLayout } from "./ExampleLayout"

export default {
  title: "Tabs (React)",
  component: Tabs,
  parameters: {
    info: {
      text: `
      import { Tabs } from "@kaizen/draft-tabs"
      `,
    },
  },
}

export const DefaultHorizontal = () => {
  const tabs = [
    { label: "One", href: "https://www.cultureamp.design/storybook" },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs tabs={tabs} />
}

export const DefaultVertical = () => {
  const tabs = [
    { label: "One", href: "https://www.cultureamp.design/storybook" },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs orientation="vertical" tabs={tabs} />
}

// @TODO - (Kaizen site demo)

export const LongAndShortText = () => {
  const tabs = [
    {
      label: "Long Text in a Tab",
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "A", href: "https://www.cultureamp.design/storybook" },
    { label: "B", href: "https://www.cultureamp.design/storybook" },
    {
      label: "Some more long text that's really long",
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "C", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs tabs={tabs} />
}

LongAndShortText.story = {
  name: "Long and short text (Horizontal)",
}

export const VerticalLongAndShortText = () => {
  const tabs = [
    {
      label: "Long Text in a Tab",
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "A", href: "https://www.cultureamp.design/storybook" },
    { label: "B", href: "https://www.cultureamp.design/storybook" },
    {
      label: "Some more long text that's really long",
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "C", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs orientation="vertical" tabs={tabs} />
}

VerticalLongAndShortText.story = {
  name: "Long and short text (Vertical)",
}

export const ActiveTab = () => {
  const tabs = [
    {
      label: "One",
      active: true,
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs tabs={tabs} />
}

ActiveTab.story = {
  name: "Active tab (Horizontal)",
}

export const ActiveVerticalTabs = () => {
  const tabs = [
    {
      label: "One (href here)",
      active: true,
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs orientation="vertical" tabs={tabs} />
}

ActiveVerticalTabs.story = {
  name: "Active tab (Vertical)",
}

export const DisabledTabHorizontal = () => {
  const tabs = [
    {
      label: "One",
      disabled: true,
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs tabs={tabs} />
}

DisabledTabHorizontal.story = {
  name: "Disabled tab (Horizontal)",
}

export const DisabledTabVertical = () => {
  const tabs = [
    {
      label: "One",
      disabled: true,
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs orientation="vertical" tabs={tabs} />
}

DisabledTabVertical.story = {
  name: "Disabled tab (Vertical)",
}

export const WithOnClick = () => {
  const tabs = [
    {
      label: "One (click this)",
      onClick: () => alert("clicked!"),
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs tabs={tabs} />
}

WithOnClick.story = {
  name: "With onClick",
}

export const WithHref = () => {
  const tabs = [
    {
      label: "One (href here)",
      href: "//www.example.com",
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs tabs={tabs} />
}

WithHref.story = {
  name: "With href",
}

export const WithCustomTabRenderer = () => {
  const tabs = [
    {
      label: "One",
      active: true,
      href: "https://www.cultureamp.design/storybook",
    },
    {
      label: "Two",
      disabled: true,
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return (
    <div>
      <Box mb={1}>
        <Heading variant="heading-1" tag="h1">
          Custom tab renderer
        </Heading>
      </Box>
      <Box mb={1}>
        <Paragraph tag="p" variant="body">
          This would most commonly be used when you need to render, for example,
          a react-router <code>&lt;Link /&gt;</code> instead of the default
          anchor tag (<code>&lt;a /&gt;</code>) or a custom attribute for your
          elements.
        </Paragraph>
        <Paragraph tag="p" variant="body">
          This storybook example renders anchor tags, but you can simply replace
          it with the correct element for your use case.
        </Paragraph>
      </Box>
      <div>
        <Tabs
          tabs={tabs}
          renderTab={({
            tab,
            tabClassName,
            activeTabClassName,
            disabledTabClassName,
          }) => (
            <a
              key={tab.label}
              href="#"
              className={classnames(tabClassName, {
                [activeTabClassName]: tab.active,
                [disabledTabClassName]: tab.disabled,
              })}
            >
              {tab.label}
            </a>
          )}
        />
      </div>
    </div>
  )
}

WithCustomTabRenderer.story = {
  name: "With custom tab renderer (Horizontal)",
}

export const WithCustomTabRendererVertical = () => {
  const tabs = [
    {
      label: "One",
      active: true,
      href: "https://www.cultureamp.design/storybook",
    },
    {
      label: "Two",
      disabled: true,
      href: "https://www.cultureamp.design/storybook",
    },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return (
    <Tabs
      tabs={tabs}
      orientation="vertical"
      renderTab={({
        tab,
        tabClassName,
        activeTabClassName,
        disabledTabClassName,
      }) => (
        <a
          key={tab.label}
          href="#"
          className={classnames(tabClassName, {
            [activeTabClassName]: tab.active,
            [disabledTabClassName]: tab.disabled,
          })}
        >
          {tab.label}
        </a>
      )}
    />
  )
}

WithCustomTabRendererVertical.story = {
  name: "With custom tab renderer (Vertical)",
}

export const WithLayoutVerticalLTR = () => {
  const tabs = [
    {
      label: "One (href here)",
      href: "//www.example.com",
      active: true,
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return (
    <ExampleLayout>
      <ExampleLayout.Sidebar>
        <Box pr={1}>
          <Tabs orientation="vertical" tabs={tabs} />
        </Box>
      </ExampleLayout.Sidebar>
      <ExampleLayout.Content>
        <Box p={2}>Example layout</Box>
      </ExampleLayout.Content>
    </ExampleLayout>
  )
}

WithLayoutVerticalLTR.story = {
  name: "(Example) Layout LTR (Vertical)",
  parameters: {
    backgrounds: [
      {
        name: "Wisteria 700",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

export const WithLayoutVerticalRTL = () => {
  const tabs = [
    {
      label: "One (href here)",
      href: "//www.example.com",
      active: true,
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return (
    <ExampleLayout rtl>
      <ExampleLayout.Sidebar>
        <Box pl={1}>
          <Tabs orientation="vertical" tabs={tabs} textDirection="rtl" />
        </Box>
      </ExampleLayout.Sidebar>
      <ExampleLayout.Content>
        <Box p={2}>Example layout</Box>
      </ExampleLayout.Content>
    </ExampleLayout>
  )
}

WithLayoutVerticalRTL.story = {
  name: "(Example) Layout RTL (Vertical)",
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

export const WithHeading = () => {
  const firstTabs = [
    {
      label: "One (href here)",
      href: "//www.example.com",
      active: true,
    },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  const secondTabs = [
    {
      label: "Five",
      href: "//www.example.com",
    },
    { label: "Six", href: "https://www.cultureamp.design/storybook" },
  ]
  return (
    <ExampleLayout>
      <ExampleLayout.Sidebar>
        <Box pr={1}>
          <Heading variant="heading-6">Some heading</Heading>
          <Tabs orientation="vertical" tabs={firstTabs} textDirection="ltr" />
          <Box py={1}>
            <Divider variant="canvas" />
          </Box>
          <Heading variant="heading-6">Another heading</Heading>
          <Tabs orientation="vertical" tabs={secondTabs} textDirection="ltr" />
        </Box>
      </ExampleLayout.Sidebar>
      <ExampleLayout.Content>
        <Box p={2}>Example layout</Box>
      </ExampleLayout.Content>
    </ExampleLayout>
  )
}

WithHeading.story = {
  name: "(Example) Layout With heading",
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}

export const ExampleContentTab = () => {
  const tabs = [
    {
      label: "One (href here)",
      href: "//www.example.com",
    },
    {
      label: "Two",
      href: "https://www.cultureamp.design/storybook",
      active: true,
    },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return (
    <ExampleLayout>
      <ExampleLayout.Content>
        <Card>
          <Box pb={2}>
            <Tabs orientation="horizontal" tabs={tabs} textDirection="ltr" />
            <Divider variant="content" />
          </Box>
        </Card>
      </ExampleLayout.Content>
    </ExampleLayout>
  )
}

ExampleContentTab.story = {
  name: "(Example) Content Tab in Content Area",
  parameters: {
    backgrounds: [
      {
        name: "Stone",
        value: colorTokens.kz.color.stone,
        default: true,
      },
    ],
  },
}
