import classnames from "classnames"
import * as React from "react"

import { Box, Heading, Paragraph } from "@kaizen/component-library"
import { Tabs } from "@kaizen/draft-tabs"

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

export const Default = () => {
  const tabs = [
    { label: "One" },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs tabs={tabs} />
}

export const LongAndShortText = () => {
  const tabs = [
    { label: "Long Text in a Tab" },
    { label: "A" },
    { label: "B" },
    { label: "Some more long text that's really long" },
    { label: "C" },
  ]
  return <Tabs tabs={tabs} />
}

LongAndShortText.story = {
  name: "Long and short text (row)",
}

export const ColumnLongAndShortText = () => {
  const tabs = [
    { label: "Long Text in a Tab" },
    { label: "A" },
    { label: "B" },
    { label: "Some more long text that's really long" },
    { label: "C" },
  ]
  return <Tabs direction="column" tabs={tabs} />
}

ColumnLongAndShortText.story = {
  name: "Long and short text (column)",
}

export const ActiveTab = () => {
  const tabs = [
    { label: "One", active: true },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs tabs={tabs} />
}

ActiveTab.story = {
  name: "Active tab (row)",
}

export const ActiveColumnTabs = () => {
  const tabs = [
    { label: "One (href here)", active: true },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs direction="column" tabs={tabs} />
}

ActiveColumnTabs.story = {
  name: "Active tab (column)",
}

export const DisabledTabRow = () => {
  const tabs = [
    { label: "One", disabled: true },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs tabs={tabs} />
}

DisabledTabRow.story = {
  name: "Disabled tab (row)",
}

export const DisabledTabColumn = () => {
  const tabs = [
    { label: "One", disabled: true },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs direction="column" tabs={tabs} />
}

DisabledTabColumn.story = {
  name: "Disabled tab (column)",
}

export const WithOnClick = () => {
  const tabs = [
    { label: "One (click this)", onClick: () => alert("clicked!") },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs tabs={tabs} />
}

WithOnClick.story = {
  name: "With onClick",
}

export const WithHref = () => {
  const tabs = [
    { label: "One (href here)", href: "//www.example.com" },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs tabs={tabs} />
}

WithHref.story = {
  name: "With href",
}

export const WithCustomTabRenderer = () => {
  const tabs = [
    { label: "One", active: true },
    { label: "Two", disabled: true },
    { label: "Three" },
    { label: "Four" },
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
          }) => {
            return (
              <a
                key={tab.label}
                className={classnames(tabClassName, {
                  [activeTabClassName]: tab.active,
                  [disabledTabClassName]: tab.disabled,
                })}
              >
                {tab.label}
              </a>
            )
          }}
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
    { label: "One", active: true },
    { label: "Two", disabled: true },
    { label: "Three" },
    { label: "Four" },
  ]
  return (
    <Tabs
      tabs={tabs}
      direction="column"
      renderTab={({
        tab,
        tabClassName,
        activeTabClassName,
        disabledTabClassName,
      }) => {
        return (
          <a
            key={tab.label}
            className={classnames(tabClassName, {
              [activeTabClassName]: tab.active,
              [disabledTabClassName]: tab.disabled,
            })}
          >
            {tab.label}
          </a>
        )
      }}
    />
  )
}

WithCustomTabRendererColumn.story = {
  name: "With custom tab renderer (column)",
}

export const ColumnTabs = () => {
  const tabs = [
    { label: "One (href here)", href: "//www.example.com" },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs direction="column" tabs={tabs} />
}

ColumnTabs.story = {
  name: "Column",
}
