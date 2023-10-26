import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { assetUrl } from "@kaizen/hosted-assets/dist"
import { AddIcon, ArrowForwardIcon, StarOnIcon } from "~components/Icon"
import { Text } from "~components/Text"
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
        icon: <StarOnIcon role="presentation" />,
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
  parameters: {
    chromatic: { disable: false },
  },
  args: {
    title: "Page title",
    primaryAction: {
      label: "Primary link",
      icon: <AddIcon role="presentation" />,
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
        icon: <StarOnIcon role="presentation" />,
      },
      {
        action: "#",
        label: "Overflow link 1",
        icon: <StarOnIcon role="presentation" />,
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
  },
  decorators: [
    Story => (
      <div style={{ margin: "-1rem" }}>
        <Story />
      </div>
    ),
  ],
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

export const WithBadge: Story = {
  render: args => {
    const [badgeCount, setBadgeCount] = React.useState(1)
    return (
      <TitleBlockZen
        {...args}
        primaryAction={{
          label: "Click Me",
          icon: <ArrowForwardIcon role="presentation" />,
          iconPosition: "end",
          href: "#",
          onClick: () => setBadgeCount(b => b + 1),
          badge: {
            text: String(badgeCount),
            animateChange: true,
          },
        }}
        defaultAction={{
          label: "Default link",
          onClick: () => setBadgeCount(b => b + 1),
          href: "#",
        }}
      />
    )
  },
}

export const WithAvatarProps: Story = {
  args: {
    avatar: {
      avatarSrc: assetUrl("site/empty-state.png"),
      fullName: "Blanca Wheeler",
    },
  },
}

export const WithDefaultTag: Story = {
  args: {
    surveyStatus: { text: "Due July 8, 2030", status: "default" },
  },
}

export const WithMenuButton: Story = {
  args: {
    primaryAction: {
      label: "Menu button",
      menuItems: [
        {
          action: "#",
          label: "Item 1",
        },
        {
          action: () => alert("Item 2 clicked"),
          label: "Item 2",
        },
        {
          action: "#",
          label: "Item 3",
        },
      ],
    },
  },
}

export const Subtitle: Story = {
  args: {
    subtitle: (
      <Text variant="body">
        This is a <a href="/">link</a>
      </Text>
    ),
  },
}
