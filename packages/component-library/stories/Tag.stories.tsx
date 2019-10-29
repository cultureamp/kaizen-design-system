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
    </StoryContainer>
  ))

  .add("Default - Small", () => (
    <StoryContainer>
      <Tag variant="default" size="small">
        Default
      </Tag>
    </StoryContainer>
  ))

  .add("Default - Dismissible", () => (
    <StoryContainer>
      <Tag variant="default" dismissible>
        Default
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Medium, Cautionary, Dismissible", () => (
    <StoryContainer>
      <Tag variant="cautionary" dismissible>
        Validation
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Small, Cautionary, Dismissible", () => (
    <StoryContainer>
      <Tag variant="cautionary" size="small" dismissible>
        Validation
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Medium, Cautionary, Dismissible, Truncated", () => (
    <StoryContainer>
      <Tag variant="cautionary" dismissible truncationWidth={50}>
        Truncated
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Small, Cautionary, Dismissible, Truncated", () => (
    <StoryContainer>
      <Tag variant="cautionary" size="small" dismissible truncationWidth={50}>
        Truncated
      </Tag>
    </StoryContainer>
  ))

  .add("Validation - Medium, Negative, Dismissible, Truncated", () => (
    <StoryContainer>
      <Tag variant="negative" dismissible truncationWidth={50}>
        Truncated
      </Tag>
    </StoryContainer>
  ))

loadElmStories("Tag (Elm)", module, require("./TagStories.elm"), [
  "Default - Medium",
  "Default - Small",
  "Default - Dismissible",
  "Validation - Medium, Cautionary, Dismissible",
  "Validation - Small, Cautionary, Dismissible",
  "Validation - Medium, Cautionary, Dismissible, Truncated",
  "Validation - Small, Cautionary, Dismissible, Truncated",
  "Validation - Medium, Negative, Dismissible, Truncated",
])
