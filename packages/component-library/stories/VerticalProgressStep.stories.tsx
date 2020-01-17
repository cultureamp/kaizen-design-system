import { VerticalProgressStep } from "@cultureamp/kaizen-component-library/draft"
import { storiesOf } from "@storybook/react"
import * as React from "react"

const StoryContainer = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "#fff",
      margin: "30px",
      minWidth: "600px",
      position: "relative",
    }}
  >
    {children}
  </div>
)

storiesOf("VerticalProgressStep (React)", module)
  .add("current step actionable", () => (
    <StoryContainer>
      <VerticalProgressStep.CurrentStep
        name="Stop!"
        status="actionable"
        position="start"
        onClick={console.log.bind(console)}
      >
        <p>Click here to commence the Stop!</p>
      </VerticalProgressStep.CurrentStep>
    </StoryContainer>
  ))
  .add("current step started", () => (
    <StoryContainer>
      <VerticalProgressStep.CurrentStep
        name="Stop!"
        status="started"
        position="start"
        onClick={console.log.bind(console)}
      >
        <p>Stopping...</p>
      </VerticalProgressStep.CurrentStep>
    </StoryContainer>
  ))
  .add("upcoming step", () => (
    <StoryContainer>
      <VerticalProgressStep.UpcomingStep name="Collaborate!" position="middle">
        <p>Only once you have stopped may you collaborate</p>
      </VerticalProgressStep.UpcomingStep>
    </StoryContainer>
  ))
  .add("completed step", () => (
    <StoryContainer>
      <VerticalProgressStep.CompletedStep name="Listen!" position="end">
        <p>You have finished listening. Vanilla Ice is proud of you.</p>
      </VerticalProgressStep.CompletedStep>
    </StoryContainer>
  ))
