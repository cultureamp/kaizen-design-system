import { loadElmStories } from "@cultureamp/elm-storybook"
import { Tag } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    {children}
  </div>
)

storiesOf("Tag", module)
  .add("Default - Medium", () => (
    <StoryContainer>
      <Tag variant="default">Default</Tag>
      <Tag variant="default" dismissible>
        Default
      </Tag>
    </StoryContainer>
  ))

  .add("Default - Small", () => (
    <StoryContainer>
      <Tag variant="default" size="small">
        Default
      </Tag>
      <Tag variant="default" size="small" dismissible>
        Default
      </Tag>
    </StoryContainer>
  ))

  .add("Sentiment - Positive", () => (
    <StoryContainer>
      <Tag variant="sentimentPositive">Sentiment</Tag>
      <Tag variant="sentimentPositive" dismissible>
        Sentiment
      </Tag>
    </StoryContainer>
  ))

  .add("Sentiment - Neutral", () => (
    <StoryContainer>
      <Tag variant="sentimentNeutral">Sentiment</Tag>
      <Tag variant="sentimentNeutral" dismissible>
        Sentiment
      </Tag>
    </StoryContainer>
  ))

  .add("Sentiment - Cautionary", () => (
    <StoryContainer>
      <Tag variant="sentimentCautionary">Sentiment</Tag>
      <Tag variant="sentimentCautionary" dismissible>
        Sentiment
      </Tag>
    </StoryContainer>
  ))

  .add("Sentiment - Negative", () => (
    <StoryContainer>
      <Tag variant="sentimentNegative">Sentiment</Tag>
      <Tag variant="sentimentNegative" dismissible>
        Sentiment
      </Tag>
    </StoryContainer>
  ))

  .add("Sentiment - None", () => (
    <StoryContainer>
      <Tag variant="sentimentNone">Sentiment</Tag>
      <Tag variant="sentimentNone" dismissible>
        Sentiment
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Positive", () => (
    <StoryContainer>
      <Tag variant="validationPositive">Validation</Tag>
      <Tag variant="validationPositive" dismissible>
        Validation
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Informative", () => (
    <StoryContainer>
      <Tag variant="validationInformative">Validation</Tag>
      <Tag variant="validationInformative" dismissible>
        Validation
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Negative", () => (
    <StoryContainer>
      <Tag variant="validationNegative">Validation</Tag>
      <Tag variant="validationNegative" dismissible>
        Validation
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Cautionary", () => (
    <StoryContainer>
      <Tag variant="validationCautionary">Validation</Tag>
      <Tag variant="validationCautionary" dismissible>
        Validation
      </Tag>
    </StoryContainer>
  ))

  .add("Status - Live", () => (
    <StoryContainer>
      <Tag variant="statusLive">Live</Tag>
    </StoryContainer>
  ))

  .add("Status - Draft", () => (
    <StoryContainer>
      <Tag variant="statusDraft">Draft</Tag>
    </StoryContainer>
  ))

  .add("Status - Closed", () => (
    <StoryContainer>
      <Tag variant="statusClosed">Closed</Tag>
    </StoryContainer>
  ))

  .add("Status - Action", () => (
    <StoryContainer>
      <Tag variant="statusAction">Action</Tag>
    </StoryContainer>
  ))

  .add("Truncated", () => (
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
  ))

  .add("Truncated - Dismissible", () => (
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
  ))

  .add("Inline", () => (
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
  ))

  .add("Inline - Dismissible", () => (
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
  ))

loadElmStories("Tag (Elm)", module, require("./TagStories.elm"), [
  "Default - Medium",
  "Default - Small",
  "Sentiment - Positive",
  "Sentiment - Neutral",
  "Sentiment - Cautionary",
  "Sentiment - Negative",
  "Sentiment - None",
  "Validation - Positive",
  "Validation - Informative",
  "Validation - Negative",
  "Validation - Cautionary",
  "Truncated",
  "Truncated - Dismissible",
  "Inline",
  "Inline - Dismissible",
  "Status - Live",
  "Status - Draft",
  "Status - Closed",
  "Status - Action",
])
