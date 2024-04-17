import React from "react"
import { Meta, StoryObj } from "@storybook/react"
import {
  AcademyIcon,
  ActionOffIcon,
  AddIcon,
  TagIcon,
  LiveIcon,
} from "~components/Icon"
import { TagColorKeys } from "../types"
import { Tag } from ".."
import LegacyStyles from "./TagLegacy.module.scss"

const meta = {
  title: "Components/Tag/Future/Migration Guide",
  component: Tag,
  args: {
    children: "My tag",
  },
} satisfies Meta<typeof Tag>

export default meta

type Story = StoryObj<typeof meta>

const LiveIconComponent = () => (
  <span className={LegacyStyles.liveIcon}>
    <LiveIcon
      role="presentation"
      classNameOverride={LegacyStyles.liveIcon_base}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    />
    <LiveIcon
      role="presentation"
      classNameOverride={LegacyStyles.liveIcon_1}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    />
    <LiveIcon
      role="presentation"
      classNameOverride={LegacyStyles.liveIcon_2}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    />
    <LiveIcon
      role="presentation"
      classNameOverride={LegacyStyles.liveIcon_3}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    />
  </span>
)

export const Playground: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

export const Children: StoryObj = {
  args: { children: "This text is the children" },
}

export const StatusMigration: StoryObj = {
  render: () => (
    <div className="flex gap-16">
      <Tag classNameOverride="gap-4" color="green">
        <span>Tag</span>
        <LiveIconComponent />
      </Tag>
      <Tag color="blue">Tag</Tag>
      <Tag color="red">Tag</Tag>
      <Tag color="orange">Tag</Tag>
    </div>
  ),
  parameters: {
    docs: {
      source: { type: "dynamic" },
    },
  },
}
