import { Tag } from "@kaizen/component-library/draft"
import * as React from "react"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    {children}
  </div>
)

export default {
  title: "Tag (React)",
}

export const DefaultMediumKaizenSiteDemo = () => (
  <StoryContainer>
    <Tag variant="default">Default</Tag>
    <Tag variant="default" dismissible>
      Default
    </Tag>
  </StoryContainer>
)

DefaultMediumKaizenSiteDemo.story = {
  name: "Default - Medium (Kaizen Site Demo)",
}

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

DefaultSmall.story = {
  name: "Default - Small",
}

export const SentimentPositive = () => (
  <StoryContainer>
    <Tag variant="sentimentPositive">Sentiment</Tag>
    <Tag variant="sentimentPositive" dismissible>
      Sentiment
    </Tag>
  </StoryContainer>
)

SentimentPositive.story = {
  name: "Sentiment - Positive",
}

export const SentimentNeutral = () => (
  <StoryContainer>
    <Tag variant="sentimentNeutral">Sentiment</Tag>
    <Tag variant="sentimentNeutral" dismissible>
      Sentiment
    </Tag>
  </StoryContainer>
)

SentimentNeutral.story = {
  name: "Sentiment - Neutral",
}

export const SentimentNegative = () => (
  <StoryContainer>
    <Tag variant="sentimentNegative">Sentiment</Tag>
    <Tag variant="sentimentNegative" dismissible>
      Sentiment
    </Tag>
  </StoryContainer>
)

SentimentNegative.story = {
  name: "Sentiment - Negative",
}

export const SentimentNone = () => (
  <StoryContainer>
    <Tag variant="sentimentNone">Sentiment</Tag>
    <Tag variant="sentimentNone" dismissible>
      Sentiment
    </Tag>
  </StoryContainer>
)

SentimentNone.story = {
  name: "Sentiment - None",
}

export const ValidationPositive = () => (
  <StoryContainer>
    <Tag variant="validationPositive">Validation</Tag>
    <Tag variant="validationPositive" dismissible>
      Validation
    </Tag>
  </StoryContainer>
)

ValidationPositive.story = {
  name: "Validation - Positive",
}

export const ValidationInformative = () => (
  <StoryContainer>
    <Tag variant="validationInformative">Validation</Tag>
    <Tag variant="validationInformative" dismissible>
      Validation
    </Tag>
  </StoryContainer>
)

ValidationInformative.story = {
  name: "Validation - Informative",
}

export const ValidationNegative = () => (
  <StoryContainer>
    <Tag variant="validationNegative">Validation</Tag>
    <Tag variant="validationNegative" dismissible>
      Validation
    </Tag>
  </StoryContainer>
)

ValidationNegative.story = {
  name: "Validation - Negative",
}

export const ValidationCautionary = () => (
  <StoryContainer>
    <Tag variant="validationCautionary">Validation</Tag>
    <Tag variant="validationCautionary" dismissible>
      Validation
    </Tag>
  </StoryContainer>
)

ValidationCautionary.story = {
  name: "Validation - Cautionary",
}

export const StatusLive = () => (
  <StoryContainer>
    <Tag variant="statusLive">Live</Tag>
  </StoryContainer>
)

StatusLive.story = {
  name: "Status - Live",
}

export const StatusDraft = () => (
  <StoryContainer>
    <Tag variant="statusDraft">Draft</Tag>
  </StoryContainer>
)

StatusDraft.story = {
  name: "Status - Draft",
}

export const StatusClosed = () => (
  <StoryContainer>
    <Tag variant="statusClosed">Closed</Tag>
  </StoryContainer>
)

StatusClosed.story = {
  name: "Status - Closed",
}

export const StatusAction = () => (
  <StoryContainer>
    <Tag variant="statusAction">Action</Tag>
  </StoryContainer>
)

StatusAction.story = {
  name: "Status - Action",
}

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

TruncatedDismissible.story = {
  name: "Truncated - Dismissible",
}

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

InlineDismissible.story = {
  name: "Inline - Dismissible",
}
