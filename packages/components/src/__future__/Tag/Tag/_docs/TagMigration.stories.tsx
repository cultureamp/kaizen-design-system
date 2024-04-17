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

const LiveIconComponent = (): JSX.Element => (
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

export const LiveIconComponentStory: StoryObj = {
  render: () => <LiveIconComponent />,
  parameters: {
    docs: {
      source: {
        type: "hidden",
        code: `
  // component with styled with CSS modules
  const LiveIconComponent = (): JSX.Element => (
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

  // Minified SCSS from the stylesheet
  <style>
    .liveIcon_2,.liveIcon_3{animation-duration:3s;animation-iteration-count:3;animation-delay:1s}.liveIcon{display:inline-block;position:relative;width:20px;height:20px;color:$color-green-500}.liveIcon_1,.liveIcon_2,.liveIcon_3{display:block;position:absolute;top:0;left:$0;width:100%;height:100%;overflow:hidden}.liveIcon_base{opacity:30%;display:block}.liveIcon_1{clip-path:circle(16%)}.liveIcon_2{clip-path:circle(32%);animation-name:pulse-inner}.liveIcon_3{clip-path:circle(50%);animation-name:pulse-outer}@keyframes pulse-inner{0%,25%{opacity:0%}100%,50%,75%{opacity:100%}}@keyframes pulse-outer{0%,25%,50%{opacity:0%}100%,75%{opacity:100%}}
  </style>
        `,
      },
    },
  },
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
