import { VerticalProgressIndicator } from "@cultureamp/kaizen-component-library/draft/Kaizen/VerticalProgressStep/VerticalProgressIndicator"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "#fff",
      margin: "30px",
      minWidth: "100px",
      position: "relative",
      minHeight: "150px",
    }}
  >
    {children}
  </div>
)

storiesOf("VerticalProgressIndicator (React)", module)
  .add("Start-Upcoming", () => (
    <StoryContainer>
      <VerticalProgressIndicator position="start" completion="upcoming" />
    </StoryContainer>
  ))
  .add("Start-CurrentInactionable", () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="start"
        completion="current-inactionable"
      />
    </StoryContainer>
  ))
  .add("Start-CurrentActionable", () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="start"
        completion="current-actionable"
      />
    </StoryContainer>
  ))
  .add("Start-CurrentStarted", () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="start"
        completion="current-started"
      />
    </StoryContainer>
  ))
  .add("Start-Completed", () => (
    <StoryContainer>
      <VerticalProgressIndicator position="start" completion="completed" />
    </StoryContainer>
  ))
  .add("Middle-Upcoming", () => (
    <StoryContainer>
      <VerticalProgressIndicator position="middle" completion="upcoming" />
    </StoryContainer>
  ))
  .add("Middle-CurrentInactionable", () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="middle"
        completion="current-inactionable"
      />
    </StoryContainer>
  ))
  .add("Middle-CurrentActionable", () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="middle"
        completion="current-actionable"
      />
    </StoryContainer>
  ))
  .add("Middle-CurrentStarted", () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="middle"
        completion="current-started"
      />
    </StoryContainer>
  ))
  .add("Middle-Completed", () => (
    <StoryContainer>
      <VerticalProgressIndicator position="middle" completion="completed" />
    </StoryContainer>
  ))
  .add("End-Upcoming", () => (
    <StoryContainer>
      <VerticalProgressIndicator position="end" completion="upcoming" />
    </StoryContainer>
  ))
  .add("End-CurrentInactionable", () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="end"
        completion="current-inactionable"
      />
    </StoryContainer>
  ))
  .add("End-CurrentActionable", () => (
    <StoryContainer>
      <VerticalProgressIndicator
        position="end"
        completion="current-actionable"
      />
    </StoryContainer>
  ))
  .add("End-CurrentStarted", () => (
    <StoryContainer>
      <VerticalProgressIndicator position="end" completion="current-started" />
    </StoryContainer>
  ))
  .add("End-Completed", () => (
    <StoryContainer>
      <VerticalProgressIndicator position="end" completion="completed" />
    </StoryContainer>
  ))
