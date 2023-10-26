import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { AddIcon, StarOnIcon } from "~components/Icon"
import { NavigationTab, TitleBlockZen } from "../index"

const SECONDARY_ACTIONS = [
  {
    label: "Secondary menu",
    menuItems: [
      {
        onClick: (): void => alert("test"),
        label: "Secondary menu action 1",
      },
      {
        onClick: (): void => alert("test"),
        label: "Secondary menu action 2",
        icon: <StarOnIcon role="presentation"/>,
      },
    ],
  },
  {
    onClick: (): void => alert("test"),
    label: "Secondary action",
  },
]

const meta = {
  title: "Components/TitleBlockZen",
  component: TitleBlockZen,
  args: {
    title: "Page title",
    surveyStatus: { text: "Live", status: "live" },
    primaryAction: {
      label: "Primary link",
      icon: <AddIcon role="presentation"/>,
      disabled: true,
      href: "#",
    },
    defaultAction: {
      label: "Default link",
      href: "#",
    },
    secondaryActions: SECONDARY_ACTIONS,
    secondaryOverflowMenuItems: [
      {
        action: (): void => alert("test"),
        label: "Overflow action 1",
        icon: <StarOnIcon role="presentation"/>,
      },
      {
        action: "#",
        label: "Overflow link 1",
        icon: <StarOnIcon role="presentation"/>,
      },
    ],
    handleHamburgerClick: (): void => alert("Hamburger clicked"),
    breadcrumb: {
      path: "#",
      text: "Back to home",
      handleClick: (): void => alert("breadcrumb clicked!"),
    },
    navigationTabs: [
      <NavigationTab key="1" text="Label" href="#" active />,
      <NavigationTab key="2" text="Label" href="#" />,
      <NavigationTab key="3" text="Label" href="#" />,
      <NavigationTab key="4" text="Label" href="#" />,
      <NavigationTab key="5" text="Label" href="#" />,
      <NavigationTab key="6" text="Label" href="#" />,
    ],
  }
} satisfies Meta<typeof TitleBlockZen>

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
}
