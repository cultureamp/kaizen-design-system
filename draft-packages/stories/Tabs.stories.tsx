import { Box, Heading, Paragraph } from "@kaizen/component-library"
import * as colorTokens from "@kaizen/design-tokens/tokens/color.json"
import { Tabs } from "@kaizen/draft-tabs"
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

export const DefaultRow = () => {
  const tabs = [
    { label: "One", href: "https://www.cultureamp.design/storybook" },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs tabs={tabs} />
}

export const DefaultColumn = () => {
  const tabs = [
    { label: "One", href: "https://www.cultureamp.design/storybook" },
    { label: "Two", href: "https://www.cultureamp.design/storybook" },
    { label: "Three", href: "https://www.cultureamp.design/storybook" },
    { label: "Four", href: "https://www.cultureamp.design/storybook" },
  ]
  return <Tabs orientation="column" tabs={tabs} />
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
  name: "Long and short text (row)",
}

export const ColumnLongAndShortText = () => {
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
  return <Tabs orientation="column" tabs={tabs} />
}

ColumnLongAndShortText.story = {
  name: "Long and short text (column)",
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
  name: "Active tab (row)",
}

export const ActiveColumnTabs = () => {
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
  return <Tabs orientation="column" tabs={tabs} />
}

ActiveColumnTabs.story = {
  name: "Active tab (column)",
}

export const DisabledTabRow = () => {
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

DisabledTabRow.story = {
  name: "Disabled tab (row)",
}

export const DisabledTabColumn = () => {
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
  return <Tabs orientation="column" tabs={tabs} />
}

DisabledTabColumn.story = {
  name: "Disabled tab (column)",
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
  name: "With custom tab renderer (row)",
}

export const WithCustomTabRendererColumn = () => {
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
      orientation="column"
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

WithCustomTabRendererColumn.story = {
  name: "With custom tab renderer (column)",
}

export const WithLayoutColumnLTR = () => {
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
        <Tabs orientation="column" tabs={tabs} />
      </ExampleLayout.Sidebar>
      <ExampleLayout.Content>
        <Box p={2}>Example layout</Box>
      </ExampleLayout.Content>
    </ExampleLayout>
  )
}

WithLayoutColumnLTR.story = {
  name: "Layout LTR (column)",
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

export const WithLayoutColumnRTL = () => {
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
        <Tabs orientation="column" tabs={tabs} textDirection="rtl" />
      </ExampleLayout.Sidebar>
      <ExampleLayout.Content>
        <Box p={2}>Example layout</Box>
      </ExampleLayout.Content>
    </ExampleLayout>
  )
}

WithLayoutColumnRTL.story = {
  name: "Layout RTL (column)",
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
