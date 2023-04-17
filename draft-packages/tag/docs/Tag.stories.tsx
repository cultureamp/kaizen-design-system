import React from "react"
import { Meta, StoryFn, StoryObj } from "@storybook/react"
import { ComponentDocsTemplate } from "../../../storybook/components/DocsContainer"
import { Avatar } from "../../avatar"
import { Tag } from "../index"

const meta = {
  tags: ["autodocs"],
  title: "Components/Tag",
  component: Tag,
  args: {
    children: "Tag you're it",
    onDismiss: undefined,
    onMouseDown: undefined,
    onMouseLeave: undefined,
  },
  parameters: {
    docs: {
      container: ComponentDocsTemplate,
    },
    actions: {
      argTypesRegex: "^on.*",
    },
    installation: [
      "npm install @kaizen/draft-tag",
      "import { Tag } from '@kaizen/draft-tag'",
    ],
    resourceLinks: {
      sourceCode:
        "https://github.com/cultureamp/kaizen-design-system/tree/main/draft-packages/tag",
      figma:
        "https://www.figma.com/file/ZRfnoNUXbGZv4eVWLbF4Az/%F0%9F%96%BC%EF%B8%8F-Component-Gallery?node-id=9-37843&t=VzvVzAS79BRrWSU7-0",
      designGuidelines:
        "https://cultureamp.atlassian.net/wiki/spaces/DesignSystem/pages/3081928978/Tags",
    },
    alternatives: ["components-badge--docs"],
  },
} satisfies Meta<typeof Tag>

export default meta

/**
 * Tags help users quickly recognize important information about items that organize and categorize them. They visually label items with small amounts of information or the item’s status, usually with keywords that help organize and categorize the items.
 */
export const Playground: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
}

/**
 * Using the `sentiment*` varients, you can convey a view or opinion that is held or expressed.
 */
export const Sentiments: StoryFn = () => (
  <>
    <Tag variant="sentimentNone">None</Tag>
    <Tag variant="sentimentPositive">Positive</Tag>
    <Tag variant="sentimentNeutral">Neutral</Tag>
    <Tag variant="sentimentNegative">Negative</Tag>
  </>
)

/**
 * The `validation*` varients indicate the validation state such as the Cautionary style for cautioning users that the item has a validation warning that could be addressed.
 */
export const Validation: StoryFn = () => (
  <>
    <Tag variant="validationPositive">Positive</Tag>
    <Tag variant="validationInformative">Informative</Tag>
    <Tag variant="validationCautionary">Cautionary</Tag>
    <Tag variant="validationNegative">Negative</Tag>
  </>
)

/**
 * The `status*` variants show the status of surveys, reports, action plans, and performance feedback.
 */
export const Status: StoryFn = () => (
  <>
    <Tag variant="statusLive">Live</Tag>
    <Tag variant="statusDraft">Draft</Tag>
    <Tag variant="statusClosed">Closed</Tag>
    <Tag variant="statusAction">Action</Tag>
  </>
)

const avatarURL =
  "https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png"
/**
 * Use the `profile` variant to show a user's profile image within a tag
 */
export const Profile: StoryFn = () => (
  <Tag
    variant="profile"
    avatar={<Avatar size="small" avatarSrc={avatarURL} fullName="Jane Doe" />}
  >
    Jane Doe
  </Tag>
)

/**
 * We got them in all the standard sizes
 */
export const Sizes: StoryFn = () => (
  <>
    <Tag size="small">Small</Tag>
    <Tag>Medium (default)</Tag>
  </>
)

/**
 * Limit the width of the tag to force the text to truncate
 */
export const TruncateWidth: StoryFn = () => (
  <>
    <Tag>
      Default length: This is a really long tag that needs to be truncate
    </Tag>
    <Tag truncateWidth={250}>
      250px width: This is a really long tag that needs to be truncate
    </Tag>
  </>
)

/**
 * Removes the default margin
 */
export const Inline: StoryFn = () => (
  <div className="flex flex-col gap-8">
    <div>
      <Tag>Default</Tag>
      <Tag>Default</Tag>
      <Tag>Default</Tag>
    </div>
    <div>
      <Tag inline>Inline</Tag>
      <Tag inline>Inline</Tag>
      <Tag inline>Inline</Tag>
    </div>
  </div>
)

/**
 * Renders a button that consumers can hook into to handle removal
 */
export const Dismissable: StoryFn = () => (
  <Tag dismissible onDismiss={(): void => alert("onDismiss triggered")}>
    Dismiss my tag
  </Tag>
)
