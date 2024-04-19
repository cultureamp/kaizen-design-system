import React, { useState } from "react"
import { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"
import { Avatar } from "~components/Avatar"
import {
  CautionIcon,
  ExclamationIcon,
  InformationIcon,
  SuccessIcon,
  LiveIcon,
} from "~components/Icon"

import { Tag, RemovableTag } from "../../"
import LegacyStyles from "./TagLegacy.module.scss"

const meta = {
  title: "Components/Tag/Future/Migration Guide",
  component: Tag,
  args: {
    children: "My tag",
  },
  parameters: {
    docs: {
      source: {
        type: "dynamic",
      },
    },
  },
} satisfies Meta<typeof Tag>

export default meta

/** * This is a stand-in component for the legacy Tag's bake in LiveIcon - we should consider adding this as an actual component or replacing it */
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
        type: "dynamic",
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
    <div className="flex gap-12">
      <Tag classNameOverride="gap-4" color="green">
        <span>Tag</span>
        <LiveIconComponent />
      </Tag>
      <Tag color="blue">Tag</Tag>
      <Tag color="red">Tag</Tag>
      <Tag color="orange">Tag</Tag>
    </div>
  ),
}

export const ValidationMigration: StoryObj = {
  render: () => (
    <div className="flex gap-12">
      <Tag
        color="green"
        icon={<SuccessIcon role="img" aria-label="Success," />}
      >
        Tag
      </Tag>
      <Tag
        color="blue"
        icon={<InformationIcon role="img" aria-label="Note," />}
      >
        Tag
      </Tag>
      <Tag
        color="red"
        icon={<ExclamationIcon role="img" aria-label="Error," />}
      >
        Tag
      </Tag>
      <Tag
        color="yellow"
        icon={<CautionIcon role="img" aria-label="Warning," />}
      >
        Tag
      </Tag>
    </div>
  ),
}

export const SentimentsMigration: StoryObj = {
  render: () => (
    <div className="flex gap-12">
      <Tag color="green">Tag</Tag>
      <Tag color="gray">Tag</Tag>
      <Tag color="red">Tag</Tag>
    </div>
  ),
}

export const SentimentNone: StoryObj = {
  render: () => (
    <Tag
      color="gray"
      classNameOverride="bg-white border-default-color border-solid border"
    >
      Tag
    </Tag>
  ),
}

export const DismissableMigration: StoryObj = {
  render: () => (
    <RemovableTag
      removeButtonProps={{
        ariaLabel: "Remove this tag",
        onClick: fn(),
      }}
    >
      Tag
    </RemovableTag>
  ),
}

export const AvatarMigration: StoryObj = {
  render: () => (
    <div className="flex gap-12">
      <Tag classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar size="small" />
          Tag
        </span>
      </Tag>
      <Tag classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar size="small" fullName="Reed Richards" />
          Reed Richards
        </span>
      </Tag>
      <Tag classNameOverride="ps-4">
        <span className="flex gap-6 items-center">
          <Avatar
            size="small"
            fullName="Sue Storm"
            avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
          />
          Susan Storm
        </span>
      </Tag>
    </div>
  ),
}

export const AvatarRemovableMigration: StoryObj = {
  render: () => (
    <div className="flex gap-12">
      <RemovableTag
        removeButtonProps={{
          ariaLabel: "Remove user from *this context*",
          onClick: fn(),
        }}
        classNameOverride="ps-4"
      >
        <span className="flex gap-6 items-center">
          <Avatar size="small" />
          Tag
        </span>
      </RemovableTag>
      <RemovableTag
        removeButtonProps={{
          ariaLabel: "Remove Reed Richards from *this context*",
          onClick: fn(),
        }}
        classNameOverride="ps-4"
      >
        <span className="flex gap-6 items-center">
          <Avatar size="small" fullName="Reed Richards" />
          Tag
        </span>
      </RemovableTag>
      <RemovableTag
        removeButtonProps={{
          ariaLabel: "Remove Sue Storm from *this context*",
          onClick: fn(),
        }}
        classNameOverride="ps-4"
      >
        <span className="flex gap-6 items-center">
          <Avatar
            size="small"
            fullName="Sue Storm"
            avatarSrc="https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
          />
          Tag
        </span>
      </RemovableTag>
    </div>
  ),
}

export const InlineMigration: StoryObj = {
  render: () => (
    <>
      <div className="mb-6">
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </div>
      <div className="flex gap-12 mb-6">
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </div>
      <div>
        <Tag classNameOverride=" me-12">Tag</Tag>
        <Tag classNameOverride=" me-12">Tag</Tag>
        <Tag>Tag</Tag>
      </div>
    </>
  ),
}

export const TruncateMigration: StoryObj = {
  render: () => (
    <>
      <div className="mb-6">
        <Tag>
          <span className="max-w-[200px] overflow-ellipsis overflow-x-hidden whitespace-nowrap">
            I am a really long tag that needs to be shortened
          </span>
        </Tag>
      </div>
    </>
  ),
}
