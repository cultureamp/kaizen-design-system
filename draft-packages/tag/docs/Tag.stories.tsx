import { Tag } from "@kaizen/draft-tag"
import * as React from "react"
import { withDesign } from "storybook-addon-designs"
import { figmaEmbed } from "../../../storybook/helpers"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    {children}
  </div>
)

export default {
  title: "Tag (React)",
  component: Tag,
  parameters: {
    info: {
      text: `
      import { Tag } from "@kaizen/draft-tag"
      `,
    },
    ...figmaEmbed(
      "https://www.figma.com/file/GMxm8rvDCbj0Xw3TQWBZ8b/UI-Kit-Zen?node-id=14473%3A90332"
    ),
  },
  decorators: [withDesign],
}

export const DefaultMediumKaizenSiteDemo = () => (
  <StoryContainer>
    <Tag variant="default">Default</Tag>
    <Tag variant="default" dismissible>
      Default
    </Tag>
  </StoryContainer>
)

DefaultMediumKaizenSiteDemo.storyName = "Default - Medium (Kaizen Site Demo)"

export const DefaultSmall = () => (
  <StoryContainer>
    <Tag variant="default" size="small">
      Default
    </Tag>
    <Tag variant="default" size="small" dismissible>
      Default
    </Tag>
  </StoryContainer>
)

DefaultSmall.storyName = "Default - Small"

export const SentimentPositive = () => (
  <StoryContainer>
    <Tag variant="sentimentPositive">Sentiment</Tag>
    <Tag variant="sentimentPositive" dismissible>
      Sentiment
    </Tag>
  </StoryContainer>
)

SentimentPositive.storyName = "Sentiment - Positive"

export const SentimentNeutral = () => (
  <StoryContainer>
    <Tag variant="sentimentNeutral">Sentiment</Tag>
    <Tag variant="sentimentNeutral" dismissible>
      Sentiment
    </Tag>
  </StoryContainer>
)

SentimentNeutral.storyName = "Sentiment - Neutral"

export const SentimentNegative = () => (
  <StoryContainer>
    <Tag variant="sentimentNegative">Sentiment</Tag>
    <Tag variant="sentimentNegative" dismissible>
      Sentiment
    </Tag>
  </StoryContainer>
)

SentimentNegative.storyName = "Sentiment - Negative"

export const SentimentNone = () => (
  <StoryContainer>
    <Tag variant="sentimentNone">Sentiment</Tag>
    <Tag variant="sentimentNone" dismissible>
      Sentiment
    </Tag>
  </StoryContainer>
)

SentimentNone.storyName = "Sentiment - None"

export const ValidationPositive = () => (
  <StoryContainer>
    <Tag variant="validationPositive">Validation</Tag>
    <Tag variant="validationPositive" dismissible>
      Validation
    </Tag>
  </StoryContainer>
)

ValidationPositive.storyName = "Validation - Positive"

export const ValidationInformative = () => (
  <StoryContainer>
    <Tag variant="validationInformative">Validation</Tag>
    <Tag variant="validationInformative" dismissible>
      Validation
    </Tag>
  </StoryContainer>
)

ValidationInformative.storyName = "Validation - Informative"

export const ValidationNegative = () => (
  <StoryContainer>
    <Tag variant="validationNegative">Validation</Tag>
    <Tag variant="validationNegative" dismissible>
      Validation
    </Tag>
  </StoryContainer>
)

ValidationNegative.storyName = "Validation - Negative"

export const ValidationCautionary = () => (
  <StoryContainer>
    <Tag variant="validationCautionary">Validation</Tag>
    <Tag variant="validationCautionary" dismissible>
      Validation
    </Tag>
  </StoryContainer>
)

ValidationCautionary.storyName = "Validation - Cautionary"

export const StatusLive = () => (
  <StoryContainer>
    <Tag variant="statusLive">Live</Tag>
  </StoryContainer>
)

StatusLive.storyName = "Status - Live"

export const StatusDraft = () => (
  <StoryContainer>
    <Tag variant="statusDraft">Draft</Tag>
  </StoryContainer>
)

StatusDraft.storyName = "Status - Draft"

export const StatusClosed = () => (
  <StoryContainer>
    <Tag variant="statusClosed">Closed</Tag>
  </StoryContainer>
)

StatusClosed.storyName = "Status - Closed"

export const StatusAction = () => (
  <StoryContainer>
    <Tag variant="statusAction">Action</Tag>
  </StoryContainer>
)

StatusAction.storyName = "Status - Action"

export const Truncated = () => (
  <StoryContainer>
    <Tag variant="default" truncateWidth={50}>
      Truncated
    </Tag>
    <Tag variant="sentimentPositive" truncateWidth={50}>
      Truncated
    </Tag>
    <Tag variant="validationPositive" truncateWidth={50}>
      Truncated
    </Tag>
  </StoryContainer>
)

export const TruncatedDismissible = () => (
  <StoryContainer>
    <Tag variant="default" truncateWidth={50} dismissible>
      Truncated
    </Tag>
    <Tag variant="sentimentPositive" truncateWidth={50} dismissible>
      Truncated
    </Tag>
    <Tag variant="validationPositive" truncateWidth={50} dismissible>
      Truncated
    </Tag>
  </StoryContainer>
)

TruncatedDismissible.storyName = "Truncated - Dismissible"

export const Inline = () => (
  <StoryContainer>
    <Tag variant="default" inline>
      Inline
    </Tag>
    <Tag variant="sentimentPositive" inline>
      Inline
    </Tag>
    <Tag variant="validationPositive" inline>
      Inline
    </Tag>
  </StoryContainer>
)

export const InlineDismissible = () => (
  <StoryContainer>
    <Tag variant="default" inline dismissible>
      Inline
    </Tag>
    <Tag variant="sentimentPositive" inline dismissible>
      Inline
    </Tag>
    <Tag variant="validationPositive" inline dismissible>
      Inline
    </Tag>
  </StoryContainer>
)

InlineDismissible.storyName = "Inline - Dismissible"
