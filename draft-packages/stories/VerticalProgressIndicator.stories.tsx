import * as React from "react"
import { VerticalProgressIndicator } from "../vertical-progress-step/KaizenDraft/VerticalProgressStep/VerticalProgressIndicator/VerticalProgressIndicator"

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

export default {
  title: "VerticalProgressIndicator (React)",
  component: VerticalProgressIndicator,
  parameters: {
    info: {
      text: `
      import { VerticalProgressIndicator } from "@kaizen/draft-vertical-progress-step"
      `,
    },
  },
}

export const StartUpcoming = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="start" completion="upcoming" />
  </StoryContainer>
)

StartUpcoming.storyName = "Start-Upcoming"

export const StartCurrentInactionable = () => (
  <StoryContainer>
    <VerticalProgressIndicator
      position="start"
      completion="current-inactionable"
    />
  </StoryContainer>
)

StartCurrentInactionable.storyName = "Start-CurrentInactionable"

export const StartCurrentActionable = () => (
  <StoryContainer>
    <VerticalProgressIndicator
      position="start"
      completion="current-actionable"
    />
  </StoryContainer>
)

StartCurrentActionable.storyName = "Start-CurrentActionable"

export const StartCurrentStarted = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="start" completion="current-started" />
  </StoryContainer>
)

StartCurrentStarted.storyName = "Start-CurrentStarted"

export const StartCompleted = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="start" completion="completed" />
  </StoryContainer>
)

StartCompleted.storyName = "Start-Completed"

export const MiddleUpcoming = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="middle" completion="upcoming" />
  </StoryContainer>
)

MiddleUpcoming.storyName = "Middle-Upcoming"

export const MiddleCurrentInactionable = () => (
  <StoryContainer>
    <VerticalProgressIndicator
      position="middle"
      completion="current-inactionable"
    />
  </StoryContainer>
)

MiddleCurrentInactionable.storyName = "Middle-CurrentInactionable"

export const MiddleCurrentActionable = () => (
  <StoryContainer>
    <VerticalProgressIndicator
      position="middle"
      completion="current-actionable"
    />
  </StoryContainer>
)

MiddleCurrentActionable.storyName = "Middle-CurrentActionable"

export const MiddleCurrentStarted = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="middle" completion="current-started" />
  </StoryContainer>
)

MiddleCurrentStarted.storyName = "Middle-CurrentStarted"

export const MiddleCompleted = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="middle" completion="completed" />
  </StoryContainer>
)

MiddleCompleted.storyName = "Middle-Completed"

export const EndUpcoming = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="end" completion="upcoming" />
  </StoryContainer>
)

EndUpcoming.storyName = "End-Upcoming"

export const EndCurrentInactionable = () => (
  <StoryContainer>
    <VerticalProgressIndicator
      position="end"
      completion="current-inactionable"
    />
  </StoryContainer>
)

EndCurrentInactionable.storyName = "End-CurrentInactionable"

export const EndCurrentActionable = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="end" completion="current-actionable" />
  </StoryContainer>
)

EndCurrentActionable.storyName = "End-CurrentActionable"

export const EndCurrentStarted = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="end" completion="current-started" />
  </StoryContainer>
)

EndCurrentStarted.storyName = "End-CurrentStarted"

export const EndCompleted = () => (
  <StoryContainer>
    <VerticalProgressIndicator position="end" completion="completed" />
  </StoryContainer>
)

EndCompleted.storyName = "End-Completed"
