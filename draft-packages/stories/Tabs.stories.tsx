import classnames from "classnames"
import * as React from "react"

import { Text } from "@kaizen/component-library"
import { Tabs } from "@kaizen/draft-tabs"

export default {
  title: "Tabs (React)",
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
  name: "Active tab",
}

export const DisabledTab = () => {
  const tabs = [
    { label: "One", disabled: true },
    { label: "Two" },
    { label: "Three" },
    { label: "Four" },
  ]
  return <Tabs tabs={tabs} />
}

DisabledTab.story = {
  name: "Disabled tab",
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
      <Text tag="h1">Custom tab renderer</Text>
      <Text tag="p">
        This would most commonly be used when you need to render, for example, a
        react-router <code>&lt;Link /&gt;</code> instead of the default anchor
        tag (<code>&lt;a /&gt;</code>) or a custom attribute for your elements.
      </Text>
      <Text tag="p">
        This storybook example renders anchor tags, but you can simply replace
        it with the correct element for your use case.
      </Text>
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
  name: "With custom tab renderer",
}
