import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Avatar } from '~components/Avatar'
import { LiveIcon } from '~components/Tag/subcomponents'
import { Icon } from '~components/__future__/Icon'
import { Tag, RemovableTag } from '../..'

const meta = {
  title: 'Components/Tag/Future Tag Migration Guide',
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
          import { LiveIcon } from '@kaizen/components/Tag/subcomponents'

// ... Application Code
return <LiveIcon />
        `,
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
