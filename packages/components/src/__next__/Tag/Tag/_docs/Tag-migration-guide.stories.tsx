import React from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Avatar } from '~components/Avatar'
import { LiveIcon } from '~components/Tag/subcomponents'
import { Icon } from '~components/__next__/Icon'
import { RemovableTag, Tag } from '../..'

const meta = {
  title: 'Components/Tag/Migration guide',
  component: Tag,
  args: {
    children: 'My tag',
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
      },
    },
  },
} satisfies Meta<typeof Tag>

export default meta
type Story = StoryObj<typeof meta>

export const LiveIconComponentStory: Story = {
  render: () => <LiveIcon />,
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        code: `
        // component with styled with CSS modules
const LiveIconComponent = (): JSX.Element => (
  <span className={styles.liveIcon}>
    <LiveIcon
      role="presentation"
      classNameOverride={styles.liveIcon_base}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    />
    <LiveIcon
      role="presentation"
      classNameOverride={styles.liveIcon_1}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    />
    <LiveIcon
      role="presentation"
      classNameOverride={styles.liveIcon_2}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    />
    <LiveIcon
      role="presentation"
      classNameOverride={styles.liveIcon_3}
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
</style>`,
      },
    },
  },
}

export const StatusMigration: Story = {
  render: () => (
    <>
      <Tag classNameOverride="gap-4" color="green">
        <span>Tag</span>
        <LiveIcon />
      </Tag>
      <Tag color="blue">Tag</Tag>
      <Tag color="red">Tag</Tag>
      <Tag color="orange">Tag</Tag>
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-12">
        <Story />
      </div>
    ),
  ],
}

export const ValidationMigration: Story = {
  render: () => (
    <>
      <Tag color="green" icon={<Icon name="check_circle" isFilled alt="Success," />}>
        Tag
      </Tag>
      <Tag color="blue" icon={<Icon name="info" isFilled alt="Note," />}>
        Tag
      </Tag>
      <Tag color="red" icon={<Icon name="error" isFilled alt="Error," />}>
        Tag
      </Tag>
      <Tag color="yellow" icon={<Icon name="warning" isFilled alt="Warning," />}>
        Tag
      </Tag>
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-12">
        <Story />
      </div>
    ),
  ],
}

export const SentimentsMigration: Story = {
  render: () => (
    <>
      <Tag color="green">Tag</Tag>
      <Tag color="gray">Tag</Tag>
      <Tag color="red">Tag</Tag>
      <Tag color="blue">Tag</Tag>
      <Tag color="yellow">Tag</Tag>
      <Tag color="orange">Tag</Tag>
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-12">
        <Story />
      </div>
    ),
  ],
}

export const SentimentNone: Story = {
  render: () => (
    <Tag color="gray" classNameOverride="bg-white border-default-color border-solid border">
      Tag
    </Tag>
  ),
}

export const DismissibleMigration: Story = {
  render: () => (
    <RemovableTag
      removeButtonProps={{
        ariaLabel: 'Remove this tag',
        onClick: fn(),
      }}
    >
      Tag
    </RemovableTag>
  ),
}

export const AvatarMigration: Story = {
  render: () => (
    <>
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
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-12">
        <Story />
      </div>
    ),
  ],
}

export const AvatarRemovableMigration: Story = {
  render: () => (
    <>
      <RemovableTag
        removeButtonProps={{
          ariaLabel: 'Remove user from *this context*',
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
          ariaLabel: 'Remove Reed Richards from *this context*',
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
          ariaLabel: 'Remove Sue Storm from *this context*',
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
    </>
  ),
  decorators: [
    (Story) => (
      <div className="flex gap-12">
        <Story />
      </div>
    ),
  ],
}

export const InlineMigration: Story = {
  render: () => (
    <div className="flex gap-12">
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </div>
  ),
}

export const SizesMigration: Story = {}
