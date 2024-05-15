import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import { assetUrl } from "@kaizen/hosted-assets"
import { AddIcon, StarOnIcon } from "~components/Icon"
import { StickerSheet } from "~storybook/components/StickerSheet"
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
    surveyStatus: { text: "Due July 8, 2030", status: "default" },
    avatar: {
      avatarSrc: assetUrl("site/empty-state.png"),
      fullName: "Blanca Wheeler",
    },
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
        label: "Overflow action 1",
        icon: <StarOnIcon role="presentation" />,
      },
      {
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

export const StickerSheetDefault: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
    pseudo: {
      hover: [
        '#tab-hover-example [class^="TitleBlockZen-TitleBlockZen-module__navigationTabsList"] li:nth-child(2) a',
        '#Breadcrumbs-hover-example [class^="TitleBlockZen-TitleBlockZen-module__breadcrumb"]',
      ],
      focus: [
        '#tab-focus-example [class^="TitleBlockZen-TitleBlockZen-module__navigationTabsList"] li:nth-child(2) a',
        '#Breadcrumbs-focus-example [class^="TitleBlockZen-TitleBlockZen-module__breadcrumb"]',
      ],
    },
  },
  render: args => (
    <StickerSheet>
      <StickerSheet.Row rowTitle="Tab hover">
        <div className="px-12 bg-purple-600">
          <TitleBlockZen {...args} id="tab-hover-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Tab focus">
        <div className="px-12 bg-purple-600">
          <TitleBlockZen {...args} id="tab-focus-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Breadcrumbs hover">
        <div className="px-12 bg-purple-600">
          <TitleBlockZen {...args} id="Breadcrumbs-hover-example" />
        </div>
      </StickerSheet.Row>
      <StickerSheet.Row rowTitle="Breadcrumbs focus">
        <div className="px-12 bg-purple-600">
          <TitleBlockZen {...args} id="Breadcrumbs-focus-example" />
        </div>
      </StickerSheet.Row>
    </StickerSheet>
  ),
}
